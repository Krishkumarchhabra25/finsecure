// tailwind.config.ts
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 80px rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        helvetica: ['var(--font-helvetica-neue)', 'sans-serif'],
      },
       backgroundImage: {
      'card-gradient': 'linear-gradient(198.25deg, #121317 13.96%, #0B0C0E 100%)',
    },
    keyframes: {
       gradientShift: {
      '0%': { backgroundPosition: '0% 50%' },
      '100%': { backgroundPosition: '100% 50%' },
    },
  },
  animation: {
    gradientShift: 'gradientShift 4s linear infinite',
  },
    },
  },
  plugins: [],
}
