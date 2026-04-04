/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 50:'#EEF1FB',100:'#C8D0E4',200:'#9AABC8',400:'#4A6199',600:'#1E3A8A',700:'#132359',800:'#0B1D45',900:'#060E25' },
        gold: { 50:'#FEF9EC',100:'#FDE68A',200:'#FCD34D',400:'#FBBF24',500:'#F5A623',600:'#D97706',700:'#B45309' },
      },
      fontFamily: { display:['Sora','sans-serif'], body:['DM Sans','sans-serif'] },
      boxShadow: {
        gold:'0 4px 20px rgba(245,166,35,0.3)',
        'gold-lg':'0 8px 40px rgba(245,166,35,0.45)',
        'navy-sm':'0 2px 8px rgba(11,29,69,0.08)',
        'navy-md':'0 4px 20px rgba(11,29,69,0.12)',
        'navy-lg':'0 8px 40px rgba(11,29,69,0.18)',
      },
      animation: {
        'ken-burns':'kenBurns 20s ease-in-out infinite alternate',
        'scroll-x':'scrollX 25s linear infinite',
        'pulse-dot':'pulseDot 2s ease infinite',
        'fade-up':'fadeUp 0.6s ease both',
      },
      keyframes: {
        kenBurns:{ from:{transform:'scale(1.08) translate(-1%,0%)'}, to:{transform:'scale(1.15) translate(1%,-1%)'} },
        scrollX:{ from:{transform:'translateX(0)'}, to:{transform:'translateX(-50%)'} },
        pulseDot:{ '0%,100%':{transform:'scale(1)',opacity:1}, '50%':{transform:'scale(1.4)',opacity:0.7} },
        fadeUp:{ from:{opacity:0,transform:'translateY(24px)'}, to:{opacity:1,transform:'translateY(0)'} },
      },
    },
  },
  plugins: [],
}
