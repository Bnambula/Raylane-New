import { StatCard } from '../../components/ui/index.jsx'

const RECENT_BOOKINGS = [
  { ref: 'RL-A7B3', passenger: 'Sarah M.', route: 'Kampala → Nairobi', amount: 'UGX 120,000', status: 'confirmed', time: '2 min ago' },
  { ref: 'RL-C4D1', passenger: 'James K.', route: 'Kampala → Mbale', amount: 'UGX 30,000', status: 'pending', time: '8 min ago' },
  { ref: 'RL-E9F2', passenger: 'Alice B.', route: 'Gulu → Kampala', amount: 'UGX 45,000', status: 'confirmed', time: '15 min ago' },
  { ref: 'RL-G5H6', passenger: 'David O.', route: 'Kampala → Jinja', amount: 'UGX 15,000', status: 'confirmed', time: '22 min ago' },
  { ref: 'RL-I2J7', passenger: 'Mary N.', route: 'Mbarara → Kampala', amount: 'UGX 25,000', status: 'cancelled', time: '35 min ago' },
]

const PENDING_TRIPS = [
  { id: 'T-001', operator: 'Gateway Bus', route: 'Kampala → Nairobi', date: 'Today 08:00', seats: 50 },
  { id: 'T-002', operator: 'Link Express', route: 'Kampala → Gulu', date: 'Today 06:00', seats: 18 },
  { id: 'T-003', operator: 'Safe Rider', route: 'Jinja → Kampala', date: 'Today 14:00', seats: 14 },
]

const REVENUE_DATA = [140,180,130,220,190,260,310,280,350,400,370,420]
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

export default function AdminDashboard() {
  const maxRev = Math.max(...REVENUE_DATA)

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-navy-800">Dashboard</h1>
          <p className="text-sm text-navy-400 mt-0.5">Saturday, April 4 2026 · All systems operational</p>
        </div>
        <div className="flex gap-2">
          <button className="text-sm bg-white border border-navy-100 text-navy-700 px-4 py-2 rounded-xl hover:border-navy-200 transition-colors font-medium">Export Report</button>
          <button className="btn-primary text-sm py-2">+ New Trip</button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Revenue Today" value="UGX 4.2M" sub="+12% from yesterday" icon={<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>} color="navy"/>
        <StatCard label="Bookings Today" value="342" sub="↑ 28 in last hour" icon={<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>} color="gold"/>
        <StatCard label="Active Trips" value="47" sub="12 pending approval" icon={<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-.82 1.573L5 9.63V15a1 1 0 001 1h1a1 1 0 001-1v-5a1 1 0 01.82-.984l4.96-1.24A1 1 0 0115 8.77V15a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-.66-.942L12 4H3z"/></svg>} color="green"/>
        <StatCard label="Operators" value="120" sub="3 pending approval" icon={<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a4 4 0 00-3-3.87M4 18v-1a4 4 0 013-3.87"/></svg>}/>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-navy-800">Revenue Overview</h2>
            <select className="form-input py-1.5 text-sm w-auto">
              <option>This Year</option><option>Last 6 Months</option><option>Last 30 Days</option>
            </select>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-40">
            {REVENUE_DATA.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-navy-800 hover:bg-gold-500 transition-colors rounded-t-lg cursor-pointer group relative"
                  style={{height:`${(val/maxRev)*100}%`}}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
                    UGX {val * 10000}
                  </div>
                </div>
                <span className="text-[10px] text-navy-400 font-medium">{MONTHS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending trips */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="font-display font-bold text-navy-800 mb-4">Trips Awaiting Approval</h2>
          <div className="space-y-3">
            {PENDING_TRIPS.map(t => (
              <div key={t.id} className="border border-navy-100 rounded-xl p-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-display font-bold text-navy-800 text-sm">{t.operator}</p>
                    <p className="text-xs text-navy-400 mt-0.5">{t.route}</p>
                    <p className="text-xs text-navy-400">{t.date} · {t.seats} seats</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <button className="text-xs bg-green-100 text-green-700 border border-green-200 px-2.5 py-1.5 rounded-lg font-bold hover:bg-green-200 transition-colors">✓</button>
                    <button className="text-xs bg-red-50 text-red-600 border border-red-200 px-2.5 py-1.5 rounded-lg font-bold hover:bg-red-100 transition-colors">✗</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent bookings */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-bold text-navy-800">Recent Bookings</h2>
          <button className="text-sm text-gold-600 font-semibold hover:text-gold-500">View All →</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                {['Ref', 'Passenger', 'Route', 'Amount', 'Status', 'Time'].map(h => (
                  <th key={h} className="text-left pb-3 text-xs font-bold text-navy-400 uppercase tracking-wide pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_BOOKINGS.map((b, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0 hover:bg-navy-50/50 transition-colors">
                  <td className="py-3 pr-4 font-display font-bold text-navy-800 text-xs">{b.ref}</td>
                  <td className="py-3 pr-4 font-medium text-navy-700">{b.passenger}</td>
                  <td className="py-3 pr-4 text-navy-500">{b.route}</td>
                  <td className="py-3 pr-4 font-display font-bold text-navy-800">{b.amount}</td>
                  <td className="py-3 pr-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      b.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      b.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>{b.status}</span>
                  </td>
                  <td className="py-3 text-navy-400 text-xs">{b.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
