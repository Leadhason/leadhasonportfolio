const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "UI/UX",
    items: ["Figma"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Springboot",],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Leadhason",
  },

  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/leadhason",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/leadhason/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal.png",
  },
  {
    id: 2,
    img: "/images/gal.png",
  },
  {
    id: 3,
    img: "/images/gal.png",
  },
  {
    id: 4,
    img: "/images/gal.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "StoneBase | An e-commerce administration and Inventory management application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "StoneBase.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "StoneBase is a modern admin and inventory management platform built for managing an eCommerce business from end to end.",
            "Instead of juggling spreadsheets and disconnected tools, it brings inventory, orders, and product management into one clean, unified dashboard.",
            "Think of it like a mission control center—giving the business a clear, real-time view of everything moving through the store.",
            "It's built with a Linear/Stripe-inspired design system, ensuring a fast, professional interface that feels as solid as the products it manages.",
          ],
        },
        {
          id: 2,
          name: "stonebase.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://e-co-mu.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "stonebase.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/stonebase.png",
        },
        {
          id: 5,
          name: "repo.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Leadhason/e-co",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Kado| AI-powered study assistant",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI-powered study assistant.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
             "Kado is a unified study workspace that brings your documents, notes, focus timer, and AI assistant into one seamless environment.",
              "Instead of switching between five different apps to read, take notes, and stay focused, everything lives in a single, distraction-free space.",
              "Think of it like a study room built just for you—reader, notes, music, and an AI assistant, all within reach at once.",
              "It's built with Next.js and Prisma, so it's fast, reliable, and designed to keep you in flow instead of hunting for tools.",
          ],
        },
        {
          id: 2,
          name: "kado.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kado-ten-ashen.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "akado.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/kado.png",
        },
        {
          id: 5,
          name: "repo.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Leadhason/Kado",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Eden Hair Salon",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Eden Hair Salon Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
              "The Eden Hair Salon website gives clients a beautiful, easy way to explore services and book their next appointment online.",
              "Instead of calling in or waiting for a reply, clients can browse the full service menu, see pricing, and book a slot in just a few clicks.",
              "Think of it like walking past the salon window and being able to step right in—no phone tag, no guesswork, just a smooth booking experience.",
              "It's built with Next.js and Tailwind, so it loads fast, looks polished on any device, and gives the salon a professional online presence that matches the quality of their work.",
          ],
        },
        {
          id: 2,
          name: "eden-hair-salon.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://eden-health-beta.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "eden-hair-salon.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/eden-health.png",
        },
        {
          id: 5,
          name: "repo.github",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Leadhason/Eden-Health",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Leadhason.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal.png ",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/gal.png",
      description: [
        "Hey! I'm Leaderson 👋, a Computer Science student at KNUST and a web developer who builds products that solve real problems—not just ones that look good in a demo.",
        "I work across the full stack with Next.js, PostgreSQL, Prisma, and Clerk, and I've shipped and deployed client projects end-to-end, from database design to production on Vercel. I care as much about how a system is architected as how it feels to use.",
        "I'm big on clean code, solid data modeling, and understanding the reasoning behind a solution rather than just shipping what works.",
        "Outside of client work, you'll find me deep in a Linux terminal, building out side projects, or reading up on how the tools I use actually work under the hood 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder:   { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 120, y: 80,  width: 900, height: 600 } },
  contact:  { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 200, y: 120, width: 500, height: 400 } },
  resume:   { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 250, y: 100, width: 700, height: 850 } },
  safari:   { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 150, y: 60,  width: 1000, height: 650 } },
  photos:   { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 180, y: 90,  width: 850, height: 600 } },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 220, y: 140, width: 700, height: 450 } },
  txtfile:  { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 300, y: 150, width: 550, height: 450 } },
  imgfile:  { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false, prevBounds: null, bounds: { x: 280, y: 130, width: 700, height: 500 } },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };