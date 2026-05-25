// Project list. Each project drives a Projects card.
// Add an `image` URL once you have real screenshots; the CSS mock falls back otherwise.

export const projects = [
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
  },
  {
    slug: 'bonzaire-booking',
    title: 'Bonzaire Booking Platform',
    subtitle: 'Internship · 2026',
    role: 'System Developer Intern',
    summary:
      'A booking website for Bonzaire Enterprises with a full admin panel: calendar, products & services, analytics, and daily/service reports.',
    problem:
      'Bookings were tracked on paper and spreadsheets. The team wanted one place to take reservations, manage products and services, and pull reports without anyone touching Excel.',
    challenge:
      'The admin panel kept growing — calendar, products, services, analytics, daily reports, user roles. Keeping the navigation clean was harder than the database part.',
    learned:
      'A "small feature" never stays small. Plan the navigation and the schema before you write a single form.',
    stack: ['PHP', 'MySQL', 'jQuery', 'AJAX', 'JavaScript'],
    metrics: [
      { value: '6',    label: 'admin modules' },
      { value: '38+',  label: 'bookings/week' },
      { value: '3 mo', label: 'OJT shipped' },
    ],
    mock: 'calendar',
    href: 'https://bonzaire-enterprises.com',
  },
];
