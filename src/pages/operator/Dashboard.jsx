import { StatCard } from '../../components/ui/index.jsx'

const TODAYS_TRIPS = [
  { id: 'T-001', route: 'Kampala → Nairobi', dep: '08:00', seats: 50, booked: 38, status: 'live' },
  { id: 'T-002', route: 'Kampala → Gulu', dep: '06:00', seats: 45, booked: 45, status: 'full' },
  { id: 'T-003', route: 'Kampala → Mbale', dep: '14:00', seats: 18, booked: 12, status: 'pending' },
]

export default function OperatorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-navy-800">Dashboard</h1>
          <p className="text-sm text-navy-400 mt-0.5">Gateway Bus Ltd · Saturday, April 4 2026</p>
        </div>
        <button className="btn-primary text-sm py-2">+ Create Trip</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Trips Today" value="3" sub="1 pending approval" color="navy"/>
        <StatCard label="Seats Sold" value="95 / 113" sub="84% occupancy" color="gold"/>
        <StatCard label="Revenue Today" value="UGX 2.85M" sub="+8% vs yesterday" color="green"/>
        <StatCard label="New Bookings" value="47" sub="Last 24 hours"/>
      </div>

      {/* Today's trips */}
      <div className="bg-white rounded-2xl p-6">
        <h2 className="font-display font-bold text-navy-800 mb-4">Today's Trips</h2>
        <div className="space-y-3">
          {TODAYS_TRIPS.map(t => (
            <div key={t.id} className="border border-navy-100 rounded-xl p-4 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-display font-bold text-navy-800">{t.route}</p>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    t.status === 'live' ? 'bg-green-100 text-green-700' :
                    t.status === 'full' ? 'bg-red-100 text-red-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>{t.status === 'full' ? '🔴 FULL' : t.status === 'live' ? '🟢 LIVE' : '⏳ Pending'}</span>
                </div>
                <p className="text-sm text-navy-400">Departs {t.dep} · {t.booked}/{t.seats} seats booked</p>
                <div className="w-full h-1.5 bg-navy-100 rounded-full mt-2 overflow-hidden">
                  <div className={`h-full rounded-full ${t.booked === t.seats ? 'bg-red-500' : 'bg-green-500'}`} style={{width:`${(t.booked/t.seats)*100}%`}}/>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-navy-50 text-navy-700 border border-navy-100 px-3 py-1.5 rounded-lg font-bold">View</button>
                <button className="text-xs bg-navy-800 text-gold-500 px-3 py-1.5 rounded-lg font-bold">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium modules unlock */}
      <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="tag text-xs mb-2 inline-block">⭐ Premium Modules</span>
            <h3 className="font-display font-bold text-white text-lg mb-1">Unlock Advanced Features</h3>
            <p className="text-white/60 text-sm">Financials, Fuel logs, HR, Loan tracking, Analytics and more.</p>
          </div>
          <button className="btn-primary flex-shrink-0 text-sm">Upgrade Plan</button>
        </div>
      </div>
    </div>
  )
}
