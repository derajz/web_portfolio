// Single source of truth for personal info — edit here, it propagates everywhere.

export const profile = {
  name: 'Jared Christian Miguel',
  shortName: 'Jared',
  initials: 'JCM',
  role: 'Junior Web Developer',
  tagline: 'I build production web systems with PHP, MySQL, and a lot of careful database work.',
  location: 'Pasig City, Philippines',
  timezone: 'UTC+8',
  email: 'jaredmiguel024@gmail.com',
  phone: '0918-299-6474 / 0924-115-9199',
  available: true,
  socials: [
    { label: 'Email',    href: 'mailto:jaredmiguel024@gmail.com' },
    { label: 'GitHub',   href: 'https://github.com/' },     // update with your handle
    { label: 'LinkedIn', href: 'https://linkedin.com/in/' }, // update with your handle
  ],
  stats: [
    { value: '2',   label: 'systems in production' },
    { value: '4+',  label: 'years practicing fundamentals' },
    { value: '100%',label: 'OJT requirements completed' },
  ],
  about: [
    "I'm a BS Information Technology graduate from STI College Sta. Mesa (2024) with hands-on experience shipping real systems — not just class projects.",
    "Most of what I know about web development came from breaking things, fixing them, and pushing them through to production. I'm comfortable owning a small system end-to-end: schema, backend, frontend, and the unglamorous reports the boss actually opens every morning.",
    "I write boring, readable PHP. I plan the database before the UI. I ask questions early and leave code better than I found it. Currently open to junior web developer roles.",
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
      'Shipped features for a production booking website with customer-facing site and full admin panel.',
      'Built calendar view of bookings, product/service management, analytics, and daily/service reports.',
      'Worked inside an existing PHP/MySQL/jQuery codebase without breaking live features.',
    ],
    stack: ['PHP', 'MySQL', 'jQuery', 'AJAX', 'JavaScript', 'Git'],
  },
  {
    company: 'STI College Sta. Mesa',
    role: 'Capstone Lead Developer',
    period: '2023 — 2024',
    location: 'Manila, PH',
    type: 'Capstone Project',
    bullets: [
      'Designed and built an RFID attendance system with a full web monitoring portal.',
      'Owned the backend, AJAX integration with the RFID reader, and the database schema.',
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
    category: 'Backend',
    items: ['PHP', 'MySQL', 'AJAX', 'REST basics', 'Apache'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'React (learning)'],
  },
  {
    category: 'Database',
    items: ['Schema design', 'Joins & indexing', 'MySQL Workbench', 'phpMyAdmin'],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Windsurf (AI pair)', 'Git + GitHub', 'XAMPP', 'Postman', 'Figma'],
  },
];
