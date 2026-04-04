import { useNavigate } from 'react-router-dom'
import { CITIES } from '../data/constants'

const ROUTES = [
  { from: 'Kampala', to: 'Nairobi', distance: '690 km', duration: '10h', freq: '6/day', price: 'From UGX 110,000' },
  { from: 'Kampala', to: 'Gulu', distance: '340 km', duration: '5h', freq: '8/day', price: 'From UGX 40,000' },
  { from: 'Kampala', to: 'Mbale', distance: '240 km', duration: '4h', freq: '12/day', price: 'From UGX 28,000' },
  { from: 'Kampala', to: 'Jinja', distance: '87 km', duration: '2h', freq: '20/day', price: 'From UGX 12,000' },
  { from: 'Kampala', to: 'Mbarara', distance: '270 km', duration: '4h', freq: '10/day', price: 'From UGX 30,000' },
  { from: 'Kampala', to: 'Fort Portal', distance: '300 km', duration: '5h', freq: '6/day', price: 'From UGX 35,000' },
  { from: 'Kampala', to: 'Kigali', distance: '520 km', duration: '9h', freq: '4/day', price: 'From UGX 115,000' },
  { from: 'Kampala', to: 'Kabale', distance: '415 km', duration: '7h', freq: '5/day', price: 'From UGX 55,000' },
]

export default function RoutesPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      <div className="bg-navy-800 py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="section-label">Our Network</span>
          <h1 className="font-display font-extrabold text-white mb-3" style={{fontSize:'clamp(1.75rem,4vw,3rem)'}}>Routes We Operate</h1>
          <p className="text-white/60 text-lg">Uganda and across East Africa — with more routes added monthly.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 gap-4">
          {ROUTES.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-navy-100 p-5 hover:shadow-navy-md hover:border-gold-300 transition-all cursor-pointer group" onClick={() => navigate('/search')}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-navy-800">{r.from}</span>
                  <svg viewBox="0 0 20 16" fill="none" className="w-5 text-gold-500"><path d="M0 8h16M10 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-display font-bold text-navy-800">{r.to}</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">{r.freq}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-navy-400">
                  <span>📍 {r.distance}</span>
                  <span>⏱ {r.duration}</span>
                </div>
                <span className="font-display font-bold text-gold-600 text-sm group-hover:text-gold-500">{r.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button onClick={() => navigate('/search')} className="btn-primary text-base px-8 py-4">Search All Available Trips →</button>
        </div>
      </div>
    </div>
  )
}
