/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * You can customize and edit all your portfolio details here.
 * Update projects, add new skills, edit education, or change your bio!
 */

export const personalInfo = {
  name: "Meghana",
  initials: "N",
  badge: "Second-Year Engineering Student",
  status: "Open to student internships & collaborations",
  title: "Aspiring Software Engineer & Web Developer",
  shortBio:
    "Second-year engineering student building modern, intuitive web experiences and mastering data structures & algorithms. Passionate about solving real-world challenges through clean code.",
  aboutParagraphs: [
    "I am a driven Second-year engineering student with a strong fascination for how software impacts daily life. My journey began with an innate curiosity about problem solving, which led me from foundational C and C++ programming into the dynamic world of modern web development with React.",
    "Currently, I am balancing academic coursework in engineering mathematics and foundational computing with hands-on development. I love turning creative ideas into functional, aesthetically polished applications that users enjoy.",
    "When I'm not writing code or debugging, you'll find me exploring emerging developer tools, participating in student hackathons, and practicing algorithmic problem solving on coding platforms."
  ],
  location: "India",
  email: "meghana123000@gmail.com", // You can edit this anytime
  phone: "+91 9945318205",
  socials: {
    github: {
      username: "meghana123000-ui",
      url: "https://github.com/meghana123000-ui",
      label: "GitHub"
    },
    linkedin: {
      username: "meghana-n-b9142942a",
      url: "https://www.linkedin.com/in/meghana-n-b9142942a",
      label: "LinkedIn"
    },
    instagram: {
      username: "meghana_7910",
      url: "https://www.instagram.com/meghana_7910",
      label: "Instagram"
    }
  },
  stats: [
    { label: "Academic Year", value: "1st Year", detail: "B.E. / B.Tech" },
    { label: "Hands-on Projects", value: "4+", detail: "Built & Deployed" },
    { label: "Problems Solved", value: "150+", detail: "DSA & Logic" },
    { label: "Tech Stack", value: "React & C++", detail: "Active Focus" }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming and scripting languages I use for coursework and development.",
    skills: [
      { name: "C / C++", level: "Intermediate", highlight: "Academic Core & DSA" },
      { name: "JavaScript (ES6+)", level: "Proficient", highlight: "DOM & Async Logic" },
      { name: "Java", level: "Familiar", highlight: "OOP Concepts" },
      { name: "HTML5 & CSS3", level: "Advanced", highlight: "Responsive Layouts" },
      { name: "Python", level: "Basics", highlight: "Scripting & Fundamentals" }
    ]
  },
  {
    category: "Web & Frameworks",
    description: "Modern frameworks and libraries for building high-performance user interfaces.",
    skills: [
      { name: "React.js", level: "Proficient", highlight: "Hooks & Components" },
      { name: "Vite", level: "Proficient", highlight: "Lightning-fast Bundling" },
      { name: "Tailwind CSS", level: "Proficient", highlight: "Utility-first Styling" },
      { name: "Node.js (Basics)", level: "Learning", highlight: "Backend APIs" },
      { name: "REST APIs", level: "Intermediate", highlight: "Data Fetching & JSON" }
    ]
  },
  {
    category: "Developer Tools",
    description: "Tools and workflows I rely on for version control and productive coding.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: "Version Control & Teams" },
      { name: "VS Code", level: "Advanced", highlight: "Daily Driver Editor" },
      { name: "Postman", level: "Intermediate", highlight: "API Testing" },
      { name: "Figma", level: "Intermediate", highlight: "UI Prototyping" },
      { name: "Linux / Terminal", level: "Intermediate", highlight: "CLI Navigation" }
    ]
  },
  {
    category: "CS Fundamentals",
    description: "Foundational computer science theory and problem-solving principles.",
    skills: [
      { name: "Data Structures", level: "Active Learning", highlight: "Arrays, Linked Lists, Trees" },
      { name: "Algorithms", level: "Active Learning", highlight: "Searching, Sorting & Complexity" },
      { name: "Object-Oriented Programming", level: "Intermediate", highlight: "Encapsulation & Inheritance" },
      { name: "Database Basics (SQL)", level: "Basics", highlight: "Queries & Relational Tables" },
      { name: "Web Accessibility (a11y)", level: "Practicing", highlight: "Semantic HTML & Contrast" }
    ]
  }
];

export const projectsData = [
  {
    id: "campus-connect",
    title: "CampusConnect",
    subtitle: "Student Hub & Collaboration Portal",
    category: "Web Apps",
    status: "Completed",
    description:
      "A centralized resource portal built for college students to organize course schedules, track assignment deadlines, and find peer study groups.",
    highlights: [
      "Interactive weekly schedule organizer with local storage persistence",
      "Notice board for departmental events and club announcements",
      "Fully responsive mobile-friendly UI crafted with modern CSS"
    ],
    techStack: ["React", "JavaScript", "CSS Grid", "LocalStorage", "Vite"],
    github: "https://github.com/meghana123000-ui",
    demo: "#",
    featured: true,
    accentColor: "from-blue-500 to-indigo-600"
  },
  {
    id: "algo-visualizer",
    title: "AlgoVisualizer",
    subtitle: "Interactive Sorting & Pathfinding Simulator",
    category: "Algorithms",
    status: "Active",
    description:
      "A dynamic visualizer designed to help fellow first-year engineering students understand abstract algorithmic mechanics through real-time step-by-step animations.",
    highlights: [
      "Visualizes Bubble, Merge, and Quick Sort with variable speed controls",
      "Grid-based Dijkstra & Breadth-First-Search pathfinding maze generator",
      "Step counters and time-complexity explanations for educational clarity"
    ],
    techStack: ["React", "JavaScript (ES6)", "Canvas API", "Algorithms"],
    github: "https://github.com/meghana123000-ui",
    demo: "#",
    featured: true,
    accentColor: "from-purple-500 to-pink-600"
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    subtitle: "Personal Sustainability & Habit Logger",
    category: "Web Apps",
    status: "Completed",
    description:
      "An intuitive web application allowing users to log eco-friendly campus habits, calculate estimated carbon savings, and view visual milestone badges.",
    highlights: [
      "Daily habit logging with dynamic streak counters",
      "Interactive SVG data visualizer showing weekly footprint trends",
      "Minimalist, accessible UI with smooth micro-animations"
    ],
    techStack: ["React", "CSS Variables", "SVG Icons", "Vite"],
    github: "https://github.com/meghana123000-ui",
    demo: "#",
    featured: false,
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "developer-portfolio",
    title: "Personal Portfolio V1",
    subtitle: "Modern Responsive Developer Showcase",
    category: "Web Apps",
    status: "Completed",
    description:
      "This very portfolio website! Crafted with modern design intelligence (UI/UX Pro Max), smooth navigation, Bento-style grids, and accessible components.",
    highlights: [
      "Responsive across smartphone, tablet, and desktop screens",
      "Aurora gradient aesthetics with WCAG-compliant high-contrast dark theme",
      "Modular, easily editable data architecture for college projects"
    ],
    techStack: ["React 19", "Vite", "Modern CSS", "Lucide Icons"],
    github: "https://github.com/meghana123000-ui",
    demo: "#",
    featured: false,
    accentColor: "from-cyan-500 to-blue-600"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E. / B.Tech)",
    institution: "Engineering College / University", // Meghana can replace with her college name
    location: "Karnataka, India",
    period: "2025 — 2029 (Expected)",
    status: "First Year (Current)",
    description:
      "Currently pursuing foundational engineering coursework with a key focus on programming fundamentals, algorithmic thinking, and computer systems.",
    highlights: [
      "Key Coursework: Programming in C & C++, Discrete Mathematics, Digital Logic, Engineering Physics",
      "Active participant in collegiate hackathons and coding club workshops",
      "Maintaining strong academic standing while building personal software projects"
    ]
  },
  {
    degree: "Pre-University / Higher Secondary (Grade 11 & 12)",
    institution: "Pre-University College", // Meghana can customize
    location: "Karnataka, India",
    period: "2023 — 2025",
    status: "Completed with Distinction",
    description:
      "Completed rigorous science curriculum (Physics, Chemistry, Mathematics, Computer Science) with a solid foundation in analytical problem solving.",
    highlights: [
      "Graduated with First Class with Distinction",
      "Excelled in Computer Science fundamentals and C++ basics",
      "Participated in science exhibitions and inter-school technical quizzes"
    ]
  }
];
