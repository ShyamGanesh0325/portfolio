/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#04070D',
          900: '#080D18', // Primary background
          800: '#101827', // Secondary surface
          700: '#141F32', // Elevated cards
          600: '#1E2D47',
          500: '#2A3E61',
        },
        cyan: {
          glow: '#42E8F5',
          dark: '#0891B2',
          light: '#E0F7FA',
        },
        gold: {
          champagne: '#D9B574',
          subtle: '#E8CA94',
          dark: '#9E7D3B',
        },
        text: {
          primary: '#F4F7FC',
          secondary: '#A5B2C5',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(66, 232, 245, 0.25)',
        'glow-cyan-sm': '0 0 15px -3px rgba(66, 232, 245, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(217, 181, 116, 0.2)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
