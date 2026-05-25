# Personal Portfolio — Jared Christian Miguel

Modern portfolio website built with React, Vite, TailwindCSS, and Framer Motion.
Features a dark theme with amber accents, subtle animations, and a clean, professional UI.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth, restrained animations
- **Lucide React** - Icon library

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL shown (typically `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Folder Structure

```
Web_portfolio/
├── src/
│   ├── components/        # React components (Hero, About, Experience, etc.)
│   ├── data/             # Profile, projects, and skills data
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and Tailwind directives
├── public/               # Static assets (images, favicon)
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind customization
└── postcss.config.js     # PostCSS configuration
```

## Adding a Project

Edit `src/data/projects.js` and add a new object to the `projects` array with the following structure:

```javascript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Brief description',
  problem: 'Problem statement',
  solution: 'How you solved it',
  challenges: 'Challenges faced',
  metrics: 'Results/impact',
  stack: ['Tech1', 'Tech2'],
  mockType: 'rfid' // or 'calendar' for different mock styles
}
```

## Updating Profile Info

Edit `src/data/profile.js` to update:
- Personal information (name, role, location)
- Experience entries
- Education history
- Certifications
- Skills categories

## Profile Photo

Place your profile photo in `public/profile.jpg` (or update the path in `src/components/Hero.jsx`).

## Design Notes

- Dark theme with zinc/amber color palette
- Subtle reveal animations on scroll using Framer Motion
- Responsive navigation with mobile menu
- CSS-only project mockups for visual interest
- Accessible semantic HTML structure
