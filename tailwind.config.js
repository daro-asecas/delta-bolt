/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'delta-black': '#1A1A1A',
        'delta-dark': '#333333',
        'delta-gray': '#7A7A7A',
        'delta-light': '#E9E9E9',
        'delta-white': '#FAFAFA',
        'delta-accent': '#C69C6D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Freight Text Pro', 'Georgia', 'serif'],
        display: ['Monument Extended', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-in-slow': 'fadeIn 0.8s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}