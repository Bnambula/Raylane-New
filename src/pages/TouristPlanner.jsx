import { useState, useEffect } from 'react'
import { CITIES, TRAVEL_TIPS, SIGHTS } from '../data/constants'

const DESTINATIONS = [
  { id: 'bwindi', name: 'Bwindi Impenetrable Forest', category: 'Wildlife', duration: '2–3 days', base: 'Kabale', tips: ['Book gorilla permits 3+ months in advance', 'Rainy season (Mar–May, Oct–Nov) = muddy trails', 'Warm clothing needed — altitude is ~2000m', 'Departure from Kampala at 6am recommended'] },
  { id: 'jinja', name: 'Source of the Nile, Jinja', category: 'Adventure', duration: '1–2 days', base: 'Jinja', tips: ['Rafting grade 5 rapids — book with Nile River Explorers', 'Best months: June–September', 'Kampala–Jinja taxis run every 30 min', 'Market day is Tuesday and Friday'] },
  { id: 'murchison', name: 'Murchison Falls NP', category: 'Nature', duration: '2–3 days', base: 'Pakwach / Masindi', tips: ['Game drives best at 6–8am and 4–6pm', 'Nile boat cruise to the falls — 2 hrs each way', 'Bring binoculars — shoebill stork is rare', 'Fuel up in Kampala — limited options en route'] },
  { id: 'bunyonyi', name: 'Lake Bunyonyi', category: 'Scenic', duration: '2–3 days', base: 'Kabale', tips: ['No hippos or crocs — safe to swim!', 'Canoe hire UGX 30,000/hr from most lodges', 'Visit Punishment Island — historical significance', 'Combine with Bwindi for a full SW Uganda trip'] },
  { id: 'sipi', name: 'Sipi Falls, Mt Elgon', category: 'Adventure', duration: '1–2 days', base: 'Mbale', tips: ['Abseil the 100m main falls with Sipi River Lodge', 'Coffee tours in the morning — best experience', 'Sunrise hike starts at 5am — worth it', 'Mbale has good hotels — no need to camp'] },
  { id: 'kibale', name: 'Kibale Forest — Chimpanzees', category: 'Wildlife', duration: '1–2 days', base: 'Fort Portal', tips: ['Book chimp tracking 2+ weeks ahead', 'Best trekking months: June–September', 'Combine with Queen Elizabeth NP and Crater Lakes', 'Fort Portal has great coffee and restaurants'] },
]

export default function TouristPlanner() {
  const [tipIdx, setTipIdx] = useState(0)
  const [dest, setDest] = useState('')
  const [dates, setDates] = useState({ from: '', to: '' })
  const [budget, setBudget] = useState('')
  const [travellers, setTravellers] = useState('1')
  const [origin, setOrigin] = useState('Kampala')
  const [itinerary, setItinerary] = useState(null)

  useEffect(() => {
    const t = setInterval(() => setTipIdx(i => (i + 1) % TRAVEL_TIPS.length), 6000)
    return () => clearInterval(t)
  }, [])

  const selected = DESTINATIONS.find(d => d.id === dest)

  const generate = () => {
    if (!dest || !dates.from) return
    setItinerary({
      destination: selected.name,
      base: selected.base,
      duration: selected.duration,
      transport: `${origin} → ${selected.base} by ${selected.base === 'Kabale' ? 'Coach (7h)' : selected.base === 'Jinja' ? 'Taxi/Minibus (2h)' : 'Coach (4–6h)'}`,
      budget: budget ? `UGX ${Number(budget).toLocaleString()}` : 'Not specified',
      travellers,
      tips: selected.tips,
    })
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      {/* Header */}
      <div className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="section-label">Explore Uganda</span>
          <h1 className="font-display font-extrabold text-white mb-4" style={{fontSize:'clamp(1.75rem,4vw,3rem)'}}>
            Plan Your Perfect Journey
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Tell us where you're headed and we'll create a personalised travel itinerary with local tips and transport advice.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Form */}
          <div className="lg:col-span-2">
            {/* Tip of the day */}
            <div className="bg-navy-800 rounded-2xl p-4 mb-6">
              <p className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">💡 Travel Tip of the Day</p>
              <p className="text-white/80 text-sm leading-relaxed transition-all duration-500">{TRAVEL_TIPS[tipIdx]}</p>
            </div>

            <div className="bg-white rounded-2xl border border-navy-100 p-6 space-y-4 shadow-navy-sm">
              <h2 className="font-display font-bold text-navy-800 text-lg">Where are you headed?</h2>

              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Destination</label>
                <select className="form-input" value={dest} onChange={e => setDest(e.target.value)}>
                  <option value="">Choose a destination...</option>
                  {DESTINATIONS.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Arrival Date</label>
                  <input type="date" className="form-input" value={dates.from} onChange={e => setDates({...dates, from: e.target.value})}/>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Departure Date</label>
                  <input type="date" className="form-input" value={dates.to} onChange={e => setDates({...dates, to: e.target.value})}/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Budget (UGX)</label>
                  <input type="number" className="form-input" placeholder="500,000" value={budget} onChange={e => setBudget(e.target.value)}/>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Travellers</label>
                  <select className="form-input" value={travellers} onChange={e => setTravellers(e.target.value)}>
                    {['1','2','3–5','6–10','10+'].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Starting From</label>
                <select className="form-input" value={origin} onChange={e => setOrigin(e.target.value)}>
                  {CITIES.filter(c => c.country === 'Uganda').map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
              <button onClick={generate} className="btn-primary w-full justify-center py-4 text-base" disabled={!dest || !dates.from}>
                Get My Itinerary →
              </button>
            </div>
          </div>

          {/* Results / Destinations */}
          <div className="lg:col-span-3">
            {itinerary ? (
              <div className="animate-fade-up space-y-4">
                <div className="bg-navy-800 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-gold-400 font-bold uppercase tracking-wide mb-1">Your Itinerary</p>
                      <h2 className="font-display font-bold text-2xl">{itinerary.destination}</h2>
                    </div>
                    <button onClick={() => setItinerary(null)} className="text-white/40 hover:text-white text-xl">✕</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[['📅 Duration', itinerary.duration], ['👥 Travellers', itinerary.travellers], ['🚌 Transport', itinerary.transport], ['💰 Budget', itinerary.budget]].map(([l, v]) => (
                      <div key={l} className="bg-white/8 rounded-xl p-3">
                        <p className="text-xs text-white/50">{l}</p>
                        <p className="text-sm font-display font-bold text-white mt-0.5">{v}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold-400 uppercase tracking-wide mb-2">Local Tips</p>
                    <ul className="space-y-1.5">
                      {itinerary.tips.map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white/70">
                          <span className="text-gold-400 flex-shrink-0">✓</span>{tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <a href="/search" className="flex-1 btn-primary justify-center py-3 text-sm">Book Transport →</a>
                    <a href="/charter" className="flex-1 btn-secondary justify-center py-3 text-sm border border-white/40">Charter Vehicle</a>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-navy-800 mb-4">Popular with Tourists</h3>
                <div className="grid grid-cols-2 gap-4">
                  {DESTINATIONS.map(d => (
                    <button key={d.id} onClick={() => setDest(d.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all hover:shadow-navy-md ${dest === d.id ? 'border-gold-500 bg-gold-50' : 'border-navy-100 bg-white hover:border-gold-300'}`}>
                      <span className="text-xs font-bold bg-navy-100 text-navy-600 px-2 py-0.5 rounded-full">{d.category}</span>
                      <p className="font-display font-bold text-navy-800 text-sm mt-2 leading-tight">{d.name}</p>
                      <p className="text-xs text-navy-400 mt-1">⏱ {d.duration} · Base: {d.base}</p>
                    </button>
                  ))}
                </div>

                {/* Sights preview */}
                <h3 className="font-display font-bold text-navy-800 mt-8 mb-4">Sights Along Our Routes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {SIGHTS.slice(0, 4).map(s => (
                    <div key={s.id} className={`relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br ${s.color} cursor-pointer group`}>
                      <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"/>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="font-display font-bold text-white text-sm leading-tight">{s.name}</p>
                        <p className="text-xs text-gold-300 mt-0.5">{s.route}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
