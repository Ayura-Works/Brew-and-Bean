/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f6f5f3',
          100: '#e9e4df',
          200: '#d4c9be',
          300: '#b8a494',
          400: '#9c7f6a',
          500: '#84634d',
          600: '#6b4e3a',
          700: '#52392b',
          800: '#3a2820',
          900: '#241712',
          950: '#170f0c',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f4ebdc',
          300: '#ecdcc4',
          400: '#e0c9a8',
          500: '#d2b489',
        },
        caramel: {
          400: '#c89968',
          500: '#b8814f',
          600: '#a06a3a',
        },
        terracotta: {
          400: '#c47a5a',
          500: '#b06241',
          600: '#9a5034',
        },
        sage: {
          400: '#8a9a7b',
          500: '#748465',
          600: '#5e6e50',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
