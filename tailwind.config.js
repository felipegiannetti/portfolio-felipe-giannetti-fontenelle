/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: token('--base'),
        surface: token('--surface'),
        surface2: token('--surface-2'),
        ink: token('--ink'),
        muted: token('--muted'),
        line: token('--line'),
        accent: token('--accent'),
        accent2: token('--accent-2'),
        accent3: token('--accent-3'),
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(-8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
        'pop-in': 'pop-in 0.18s ease-out both',
        caret: 'caret 0.9s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
