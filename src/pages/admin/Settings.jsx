export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-extrabold text-2xl text-navy-800">Settings</h1>
        <button className="btn-primary text-sm py-2">+ New</button>
      </div>
      <div className="bg-white rounded-2xl p-8 text-center">
        <p className="text-4xl mb-3">🔧</p>
        <h2 className="font-display font-bold text-navy-800 mb-2">Settings Module</h2>
        <p className="text-navy-400 text-sm">Full Settings management with all CRUD operations, filters, approvals and reporting.</p>
      </div>
    </div>
  )
}
