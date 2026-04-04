export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-navy-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
            <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
              <path d="M4 14C4 14 8 8 14 8C20 8 24 14 24 14" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M4 18L24 18" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="9" cy="21" r="2" fill="#0B1D45"/>
              <circle cx="19" cy="21" r="2" fill="#0B1D45"/>
            </svg>
          </div>
          <span className="font-display font-bold text-2xl text-white">Raylane <span className="text-gold-500">Express</span></span>
        </div>
        <div className="flex gap-1.5 justify-center">
          {[0,1,2].map(i => (
            <div key={i} className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{animationDelay:`${i*0.15}s`}}/>
          ))}
        </div>
      </div>
    </div>
  )
}
