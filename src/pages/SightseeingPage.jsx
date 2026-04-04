import { SIGHTS } from '../data/constants'
import { useNavigate } from 'react-router-dom'

export default function SightseeingPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      <div className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="section-label">Along Our Routes</span>
          <h1 className="font-display font-extrabold text-white mb-3" style={{fontSize:'clamp(1.75rem,4vw,3rem)'}}>Sights Worth Stopping For</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Incredible scenery and destinations along Raylane routes — your journey is part of the experience.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIGHTS.map(s => (
            <div key={s.id} className="rounded-3xl overflow-hidden shadow-navy-md group cursor-pointer" onClick={() => navigate('/plan')}>
              <div className={`relative h-56 bg-gradient-to-br ${s.color}`}>
                <img src={s.image} alt={s.name} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
                <span className="absolute top-4 right-4 text-xs font-bold bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/30">{s.category}</span>
              </div>
              <div className="bg-white p-5">
                <h3 className="font-display font-bold text-navy-800 text-lg mb-2 leading-tight">{s.name}</h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-3">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-navy-400">
                    <span className="font-bold">🚌 {s.route}</span>
                    <span className="mx-1.5">·</span>
                    <span>⏱ {s.duration}</span>
                  </div>
                  <button className="text-xs font-bold text-gold-600 hover:text-gold-500">Plan Trip →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
