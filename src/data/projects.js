// Project list. Each project drives a Projects card.
// Add an `image` URL once you have real screenshots; the CSS mock falls back otherwise.

export const projects = [
  {
    slug: 'bonzaire-booking',
    title: 'Air Conditioning Service Booking System',
    subtitle: 'BonzAire Enterprises · Internship · 2026',
    role: 'System Developer Intern',
    summary:
      'Real-world business system developed during my System Developer internship. A comprehensive booking platform for air conditioning services with customer-facing booking interface and full administrative management.',
    problem:
      'Bookings were tracked on paper and spreadsheets. The business needed a centralized system to manage reservations, track service history, maintain customer records, and generate reports without manual Excel work.',
    challenge:
      'Building a complete business system with booking management, service catalog, customer records, appointment scheduling, and administrative reporting. The admin panel grew to include multiple modules while maintaining clean navigation and data integrity.',
    solution:
      'Developed a web-based booking system using PHP and MySQL with role-based access control. Implemented booking workflows, service management, customer information tracking, and administrative reporting interfaces.',
    features: [
      'Booking and appointment scheduling',
      'Service management and catalog',
      'Customer information and history',
      'Booking records and service history',
      'Administrative dashboard',
      'Authentication and role-based access',
      'Input validation and data integrity',
      'Database integration with MySQL',
    ],
    myRole:
      'Worked on development, database integration, debugging, testing, and system improvements. Used AI coding tools to accelerate implementation while reviewing, testing, and adapting all code before deployment.',
    aiAssisted:
      'AI coding tools were used to accelerate implementation, investigate errors, explore solutions, and improve development speed. I reviewed, tested, debugged, and adapted the implementations before using them.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
    metrics: [
      { value: '6',    label: 'admin modules' },
      { value: '38+',  label: 'bookings/week' },
      { value: '3 mo', label: 'internship shipped' },
    ],
    mock: 'calendar',
    href: 'https://bonzaire-enterprises.com',
    featured: true,
  },
  {
    slug: 'student-monitoring',
    title: 'Student Monitoring System',
    subtitle: 'STI College Sta. Mesa · Capstone · 2024',
    role: 'Lead System Developer',
    summary:
      'Academic team project focused on student information management. A web-based system for tracking student records, academic performance, and attendance with real-time updates and administrative controls.',
    problem:
      'The school needed a digital system to replace manual student record keeping, improve data accessibility, and provide better tracking of student academic progress and attendance patterns.',
    challenge:
      'Implementing CRUD operations, real-time data updates, and ensuring data consistency across multiple users. Balancing feature requirements with system performance and user experience.',
    solution:
      'Built a web-based monitoring system using PHP and MySQL with AJAX for real-time updates. Implemented student record management, attendance tracking, and reporting features.',
    features: [
      'Student record management',
      'Attendance tracking',
      'Academic performance monitoring',
      'Real-time updates with AJAX',
      'Administrative controls',
      'Data validation and integrity',
      'Reporting and analytics',
    ],
    myRole:
      'Lead System Developer responsible for overall system architecture, database design, backend implementation, and team coordination. Focused on testing, debugging, and performance optimization.',
    stack: ['PHP', 'MySQL', 'jQuery', 'AJAX', 'HTML/CSS', 'JavaScript'],
    metrics: [
      { value: '4',    label: 'team members' },
      { value: 'CRUD', label: 'operations implemented' },
      { value: 'Real-time', label: 'data updates' },
    ],
    mock: 'student',
    href: '#',
    featured: true,
  },
  {
    slug: 'rfid-system',
    title: 'RFID Attendance System',
    subtitle: 'Capstone · 2024',
    role: 'Lead Developer · Full-stack',
    summary:
      'An RFID reader paired with a full web admin: live time-in/out logs, student & card management, exportable reports. (Source code lost, but system was fully deployed and used.)',
    problem:
      'Manual logbook attendance was slow, easy to fake, and impossible to audit. The school needed an RFID reader tied to a website that admins could actually use day-to-day.',
    challenge:
      'Reading the RFID serial input reliably from the browser, validating bursts of 200+ logs at dismissal, and keeping the admin UI from feeling like a 2008 phpMyAdmin clone.',
    learned:
      'Always log raw input before you parse it. Hardware lies sometimes — your logs are the only thing that does not. Also: back up your work.',
    stack: ['PHP', 'MySQL', 'jQuery', 'AJAX', 'HTML/CSS'],
    metrics: [
      { value: '500+', label: 'students tracked' },
      { value: '<1s',  label: 'tap-to-log latency' },
      { value: '0',    label: 'paper logbooks left' },
    ],
    mock: 'rfid',
    href: '#',
    featured: false,
  },
];
