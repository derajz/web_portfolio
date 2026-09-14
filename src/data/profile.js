// Single source of truth for personal info — edit here, it propagates everywhere.

export const profile = {
  name: 'Jared Christian Miguel',
  shortName: 'Jared',
  initials: 'JCM',
  role: 'Junior Software Developer',
  tagline: 'Building practical systems with AI-assisted development.',
  location: 'Pasig City, Philippines',
  timezone: 'UTC+8',
  email: 'jaredmiguel024@gmail.com',
  phone: '0918-299-6474',
  available: true,
  socials: [
    { label: 'Email',    href: 'mailto:jaredmiguel024@gmail.com' },
    { label: 'GitHub',   href: 'https://github.com/derajz' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jared-christian-miguel-10182038b' },
  ],
  stats: [
    { value: '2',   label: 'systems in production' },
    { value: '4+',  label: 'years practicing fundamentals' },
    { value: '100%',label: 'OJT requirements completed' },
  ],
  about: [
    "I'm a recent BSIT graduate interested in building practical software systems that solve real problems.",
    "My experience includes developing web applications using PHP, MySQL, JavaScript, and modern web technologies. During my internship, I worked on a real-world business booking system, while my academic projects gave me experience with database systems, CRUD operations, AJAX, testing, and debugging.",
    "I'm particularly interested in AI-assisted development and using modern AI tools to build software faster while continuing to understand the underlying code, architecture, and business logic.",
  ],
};

export const experience = [
  {
    company: 'Bonzaire Enterprises',
    role: 'System Developer Intern',
    period: 'Feb 2026 — May 2026',
    location: 'Pasig City, PH · On-site',
    type: 'Internship · Completed',
    bullets: [
      'Developed and maintained web-based frontend and backend features for an air conditioning service booking system.',
      'Integrated PHP and MySQL database for dynamic content, booking management, and administrative workflows.',
      'Implemented input validation, debugging, and SEO optimization while working with team members.',
      'Used AI coding tools to accelerate implementation, investigate errors, and explore solutions while reviewing, testing, and adapting all code before deployment.',
    ],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
  },
  {
    company: 'STI College Sta. Mesa',
    role: 'Lead System Developer',
    period: '2023 — 2024',
    location: 'Manila, PH',
    type: 'Capstone Project',
    bullets: [
      'Designed and built an RFID attendance system with a full web monitoring portal.',
      'Owned the backend, AJAX integration with the RFID reader, and the database schema.',
      'Implemented CRUD operations, real-time updates, testing, debugging, and performance optimization.',
      'First system of mine deployed and used by other people — that changes how you write code.',
    ],
    stack: ['PHP', 'MySQL', 'jQuery', 'AJAX', 'RFID', 'DB Design'],
  },
];

export const education = [
  {
    school: 'STI College Sta. Mesa',
    degree: 'Bachelor of Science in Information Technology',
    period: '2020 — 2024',
  },
  {
    school: 'Rizal High School',
    degree: 'Senior High School',
    period: '2016 — 2020',
  },
];

export const certifications = [
  { name: 'Java Fundamentals',     issuer: 'Oracle Academy', year: '2023' },
  { name: 'Systems Administration', issuer: 'STI College',    year: '2023' },
];

export const skills = [
  {
    category: 'Languages',
    items: ['PHP', 'JavaScript', 'Python', 'Java', 'PowerShell'],
  },
  {
    category: 'Web Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'AJAX', 'jQuery', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend / Database',
    items: ['PHP', 'MySQL', 'CRUD operations', 'Database integration', 'Authentication', 'Role-based access control'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'XAMPP', 'Postman', 'Figma'],
  },
  {
    category: 'Development',
    items: ['Debugging', 'Testing', 'Troubleshooting', 'Problem solving', 'Performance optimization'],
  },
];

export const currentlyLearning = [
  'AI-assisted software development',
  'AI/API integration',
  'Next.js',
  'Modern full-stack development',
  'Business systems',
  'ERP-related technologies',
  'Software automation',
];
