import { Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-500 text-sm">
          <Code2 className="w-4 h-4" />
          <span>Built with React, Vite, TailwindCSS & Framer Motion</span>
        </div>
        
        <p className="text-zinc-600 text-sm">
          © {year} Jared Miguel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
