import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../../store/useAppStore'
import { CITIES, VEHICLE_TYPES } from '../../data/constants'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80',
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80',
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1600&q=80',
]

const TABS = ['One Way', 'Round Trip', 'Parcel', 'Plan Trip']

export default function HeroSection() {
  const navigate = useNavigate()
  const { setSearchQuery } = useAppStore()
  const [tab, setTab] = useState(0)
  const [imgIdx, setImgIdx] = useState(0)
  const [form, setForm] = useState({ from: '', to: '', date: '', returnDate: '', vehicleType: 'any', passengers: 1 })

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % HERO_IMAGES.length), 7000)
    return () => clearInterval(t)
  }, [])

  const handleSearch = () => {
    setSearchQuery(form)
    if (tab === 3) { navigate('/plan'); return }
    if (tab === 2) { navigate('/parcels'); return }
    navigate('/search')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-800">
      {/* Background images with Ken Burns */}
      {HERO_IMAGES.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-2000 ${i === imgIdx ? 'opacity-100' : 'opacity-0'}`}>
          <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} className="w-full h-full object-cover animate-ken-burns"/>
        </div>
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800/96 via-navy-800/85 to-navy-800/70"/>
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({length:12}).map((_,i) => (
          <div key={i} className="absolute rounded-full bg-gold-500/20 animate-bounce"
            style={{ width:`${4+Math.random()*6}px`, height:`${4+Math.random()*6}px`, left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, animationDuration:`${3+Math.random()*4}s`, animationDelay:`${Math.random()*4}s` }}/>
        ))}
      </div>

      <div className="relative z-10 w-full pt-24 pb-16 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline */}
          <div className="animate-fade-up">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse-dot"/>
              Live seat availability · Updated in real time
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.08] mb-5" style={{fontSize:'clamp(2rem,5vw,3.5rem)'}}>
              Smart Travel Across<br/>
              <span className="text-gold-500">Uganda &amp; East Africa</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
              Book buses, taxis and parcels in seconds. Real-time seats. Mobile money. Zero stress.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                ['✓', 'No Signup Required'],
                ['📱', 'Mobile Money'],
                ['🎫', 'Instant Ticket'],
                ['📅', 'Book 4 Weeks Ahead'],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 bg-white/8 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <span>{icon}</span>{label}
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <button onClick={handleSearch} className="btn-primary">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
                Book a Trip
              </button>
              <button onClick={() => navigate('/plan')} className="btn-secondary">
                Plan My Journey
              </button>
            </div>

            {/* Image dots */}
            <div className="flex gap-2 mt-8">
              {HERO_IMAGES.map((_, i) => (
                <button key={i} onClick={() => setImgIdx(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? 'w-8 bg-gold-500' : 'w-2 bg-white/30'}`}/>
              ))}
            </div>
          </div>

          {/* Right — search box */}
          <div className="animate-fade-up" style={{animationDelay:'0.2s'}}>
            <div className="glass rounded-3xl p-6">
              {/* Tabs */}
              <div className="flex bg-black/25 rounded-xl p-1 mb-5 gap-1">
                {TABS.map((t, i) => (
                  <button key={t} onClick={() => setTab(i)}
                    className={`flex-1 py-2 px-2 rounded-lg text-xs font-display font-bold transition-all duration-200 ${tab === i ? 'bg-gold-500 text-navy-800 shadow-gold' : 'text-white/60 hover:text-white'}`}>
                    {t}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {tab !== 2 && tab !== 3 && (
                  <>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">From</label>
                      <select value={form.from} onChange={e => setForm({...form, from: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-gold-500 focus:bg-white/15 transition-all">
                        <option value="">Select origin</option>
                        {CITIES.map(c => <option key={c.id} value={c.name} className="bg-navy-800">{c.name}, {c.country}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">To</label>
                      <select value={form.to} onChange={e => setForm({...form, to: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-gold-500 focus:bg-white/15 transition-all">
                        <option value="">Select destination</option>
                        {CITIES.filter(c => c.name !== form.from).map(c => <option key={c.id} value={c.name} className="bg-navy-800">{c.name}, {c.country}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">Date</label>
                        <input type="date" min={today} value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-all [color-scheme:dark]"/>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1.5">Vehicle</label>
                        <select value={form.vehicleType} onChange={e => setForm({...form, vehicleType: e.target.value})}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-gold-500 transition-all">
                          {VEHICLE_TYPES.map(v => <option key={v.id} value={v.id} className="bg-navy-800">{v.label}</option>)}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {tab === 2 && (
                  <div className="py-4 text-center text-white/70 text-sm">
                    <p className="text-2xl mb-2">📦</p>
                    <p>Send parcels via our bus network</p>
                  </div>
                )}

                {tab === 3 && (
                  <div className="py-4 text-center text-white/70 text-sm">
                    <p className="text-2xl mb-2">🗺️</p>
                    <p>Get a personalised travel itinerary</p>
                  </div>
                )}

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => navigate('/search?leaving=soon')}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-display font-bold bg-gold-500/15 border border-gold-500/30 text-gold-400 hover:bg-gold-500/25 transition-all">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4.5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    Leaving Soon
                  </button>
                  <button onClick={() => navigate('/charter')}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-display font-bold bg-white/8 border border-white/20 text-white/80 hover:bg-white/15 transition-all">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5"><circle cx="5" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="11" cy="4.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 12c0-2.5 1.8-4 4-4s4 1.5 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Group (10+)
                  </button>
                </div>

                <button onClick={handleSearch} className="w-full btn-primary justify-center py-4 text-base">
                  Search Trips
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                </button>

                <p className="text-center text-xs text-white/45">
                  Secure your seat with <span className="text-gold-400 font-semibold">just 20% today</span> — pay balance at departure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <span className="text-xs font-medium">Scroll</span>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </section>
  )
}
