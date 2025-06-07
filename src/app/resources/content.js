const person = {
  firstName: "Jerson",
  lastName: "Caibog",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/avatar.jpg",
  email: "jersoncaibog0423@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jersoncaibog",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jerson-caibog-182278261/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Scalable Digital Solutions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">ESSU-SSC Admin</strong></>,
    href: "/work/essu-ssc",
  },
  subline: (
    <>
      I'm Jerson, a Full-Stack Developer based in the Philippines, specializing in building scalable and efficient web applications.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/jerson-caibog",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jerson is a Philippines-based full-stack developer with a passion for transforming complex challenges
        into simple, elegant digital solutions. His work spans digital interfaces, server-side systems, and the convergence of frontend and backend technologies.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Eastern Samar State University - Guiuan Campus",
        description: <>Studied Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web design & development",
        description: <>Development of modern, fast and responsive websites using the latest technologies. The focus is on performance and user-friendliness.</>,
        technologies: ["React", "Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Supabase", "Vercel", "CI/CD", "Git", "GitHub"],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "UI/UX Design",
        description: <>Creation of intuitive and appealing user interfaces that inspire your target group. From the initial concept to the final implementation.</>,
        technologies: ["Figma", "Wireframing & Prototyping", "Interaction design", "Usability tests", "User research"],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "SEO & Performance",
        description: <>Proficient in user interface and experience design, including wireframing, prototyping, and user research. Experienced with Figma.</>,
        technologies: ["Google Analytics", "Search Console", "Lighthouse"],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about career and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Featured Projects`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Featured Photography`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // {
    //   src: "/images/gallery/04.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    {
      src: "/images/gallery/05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/07.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    {
      src: "/images/gallery/08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    // {
    //   src: "/images/gallery/09.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/10.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };

