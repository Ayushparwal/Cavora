/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skin: '#F9FAFB',           // light soft white (bg)
        primary: '#3B82F6',        // vibrant blue
        secondary: '#0EA5E9',      // cyan blue
        muted: '#6B7280',          // neutral gray
        highlight: '#FACC15',      // attention yellow
        surface: '#FFFFFF',        // card color
        glass: 'rgba(255, 255, 255, 0.3)', // glassmorphism
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        fadeIn: 'fadeIn 1.2s ease-in-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)' },
          to: { boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(to bottom right, #F9FAFB, #E0F2FE)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
