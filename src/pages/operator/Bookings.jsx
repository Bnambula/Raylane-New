export default function OperatorBookings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-extrabold text-2xl text-navy-800">Bookings</h1>
        <button className="btn-primary text-sm py-2">+ New</button>
      </div>
      <div className="bg-white rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">📋</p>
        <h2 className="font-display font-bold text-navy-800 mb-2">Bookings</h2>
        <p className="text-navy-400 text-sm">Manage all Bookings for your fleet and operations.</p>
      </div>
    </div>
  )
}
