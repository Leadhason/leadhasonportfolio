import React, { useRef, useLayoutEffect } from "react";
import useWindowStore from "#store/window.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, setBounds, windows } = useWindowStore();
    const { isOpen, zIndex, bounds, isMaximized } = windows[windowKey];
    const ref = useRef(null);
    const draggableRef = useRef(null);

    // Open/close entrance animation
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    // Draggable setup — runs once per mount
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        type: "left,top", // write position directly to left/top — matches our bounds-driven layout, no transform conflict
        onPress: () => focusWindow(windowKey),
        onDragEnd: function () {
          // Pull fresh bounds from the store (avoids stale closure since this callback is created once)
          const current = useWindowStore.getState().windows[windowKey].bounds;
          setBounds(windowKey, { ...current, x: this.x, y: this.y });
        },
      });

      draggableRef.current = instance;
      return () => instance.kill();
    }, []);

    // Show/hide
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    // Disable dragging while maximized, re-enable on restore
    useLayoutEffect(() => {
      const instance = draggableRef.current;
      if (!instance) return;
      if (isMaximized) instance.disable();
      else instance.enable();
    }, [isMaximized]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex,
          left: bounds.x,
          top: bounds.y,
          width: bounds.width,
          height: bounds.height,
          maxWidth: isMaximized ? "none" : undefined,
          maxHeight: isMaximized ? "none" : undefined,
        }}
        className="absolute"
      >
        {isOpen && <Component {...props} />}
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || `Component`
  })`;
  return Wrapped;
};

export default WindowWrapper;