/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#f4f4f5',
          dim: '#a1a1aa',
          mute: '#71717a',
        },
        bg: {
          DEFAULT: '#0a0a0b',
          surface: '#111113',
          card: '#16161a',
          line: '#26262c',
        },
        accent: {
          DEFAULT: '#fbbf24',     // amber-400
          soft: '#fde68a',
          deep: '#b45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
