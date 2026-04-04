export default function TrackParcel() {
  const stages = [
    { label: 'Booked', done: true, time: '2026-04-03 10:15', desc: 'Parcel accepted at Kampala stage' },
    { label: 'Loaded', done: true, time: '2026-04-03 14:00', desc: 'Loaded on Gateway Bus to Nairobi' },
    { label: 'In Transit', done: true, time: '2026-04-03 14:30', desc: 'Bus departed Kampala' },
    { label: 'At Destination', done: false, time: 'Est. 2026-04-04 06:00', desc: 'Nairobi stage' },
    { label: 'Delivered', done: false, time: '—', desc: 'Pending recipient pickup' },
  ]
  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0">
      <div className="max-w-lg mx-auto px-5 py-10">
        <div className="text-center mb-8">
          <h1 className="section-title">Parcel Tracking</h1>
          <p className="text-navy-400 text-sm mt-2">Reference: <span className="font-display font-bold text-navy-800">RL-PAR-A7B3C2</span></p>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-navy-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-navy-50">
            <div>
              <p className="text-xs text-navy-400 font-medium">Route</p>
              <p className="font-display font-bold text-navy-800">Kampala → Nairobi</p>
            </div>
            <span className="text-xs font-bold bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full">🚌 In Transit</span>
          </div>
          <div className="space-y-0">
            {stages.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${s.done ? 'bg-green-500 border-green-500' : 'bg-white border-navy-200'}`}>
                    {s.done ? (
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8l4 4 6-7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-navy-200"/>
                    )}
                  </div>
                  {i < stages.length - 1 && <div className={`w-0.5 h-12 mt-1 ${s.done ? 'bg-green-300' : 'bg-navy-100'}`}/>}
                </div>
                <div className="pb-8">
                  <p className={`font-display font-bold text-sm ${s.done ? 'text-navy-800' : 'text-navy-300'}`}>{s.label}</p>
                  <p className={`text-xs mt-0.5 ${s.done ? 'text-navy-500' : 'text-navy-300'}`}>{s.desc}</p>
                  <p className={`text-xs mt-0.5 font-medium ${s.done ? 'text-green-600' : 'text-navy-300'}`}>{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
