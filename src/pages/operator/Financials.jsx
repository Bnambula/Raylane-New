import { useState } from 'react'

const EXPENSES = [
  { id: 'E001', category: 'Fuel', desc: 'Kampala → Nairobi run', amount: 320000, date: '2026-04-03', vendor: 'Total Energies' },
  { id: 'E002', category: 'Maintenance', desc: 'Engine service UBF 1234', amount: 450000, date: '2026-04-02', vendor: 'City Garage' },
  { id: 'E003', category: 'Driver Salary', desc: 'John Okello – April', amount: 800000, date: '2026-04-01', vendor: 'Internal' },
  { id: 'E004', category: 'Insurance', desc: 'Fleet insurance Q2', amount: 1200000, date: '2026-03-31', vendor: 'UAP Insurance' },
]

const INCOME_ROWS = [
  { ref: 'RL-A7B3', route: 'Kampala → Nairobi', seats: 38, gross: 4560000, commission: 456000, net: 4104000, date: '2026-04-03' },
  { ref: 'RL-C4D1', route: 'Kampala → Gulu', seats: 45, gross: 2025000, commission: 202500, net: 1822500, date: '2026-04-02' },
  { ref: 'RL-E9F2', route: 'Kampala → Mbale', seats: 12, gross: 360000, commission: 36000, net: 324000, date: '2026-04-01' },
]

const VENDORS = [
  { name: 'Total Energies', category: 'Fuel', balance: 0, lastPay: '2026-04-03' },
  { name: 'City Garage', category: 'Maintenance', balance: 450000, lastPay: '2026-04-02' },
  { name: 'UAP Insurance', category: 'Insurance', balance: 0, lastPay: '2026-03-31' },
]

function fmt(n) { return 'UGX ' + n.toLocaleString() }

export default function OperatorFinancials() {
  const [tab, setTab] = useState('overview')
  const [showAddExpense, setShowAddExpense] = useState(false)

  const totalIncome = INCOME_ROWS.reduce((s, r) => s + r.net, 0)
  const totalExpenses = EXPENSES.reduce((s, r) => s + r.amount, 0)
  const netProfit = totalIncome - totalExpenses

  const tabs = ['overview', 'income', 'expenses', 'vendors', 'reports']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-navy-800">Financials</h1>
          <p className="text-sm text-navy-400 mt-0.5">Gateway Bus Ltd · April 2026</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowAddExpense(true)} className="text-sm border border-navy-200 text-navy-700 px-4 py-2 rounded-xl hover:bg-navy-50 font-medium">+ Add Expense</button>
          <button className="btn-primary text-sm py-2">Export Report</button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Net Income</p>
          <p className="font-display font-extrabold text-green-800 text-2xl">{fmt(totalIncome)}</p>
          <p className="text-xs text-green-600 mt-1">After Raylane commission</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Total Expenses</p>
          <p className="font-display font-extrabold text-red-800 text-2xl">{fmt(totalExpenses)}</p>
          <p className="text-xs text-red-600 mt-1">Fuel, maintenance, staff</p>
        </div>
        <div className="bg-navy-800 rounded-2xl p-5">
          <p className="text-xs font-bold text-white/60 uppercase tracking-wide mb-1">Net Profit</p>
          <p className="font-display font-extrabold text-gold-500 text-2xl">{fmt(netProfit)}</p>
          <p className="text-xs text-white/50 mt-1">This month</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-navy-50 rounded-xl p-1 w-fit">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-display font-bold capitalize transition-all ${tab === t ? 'bg-white shadow-navy-sm text-navy-800' : 'text-navy-400 hover:text-navy-600'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === 'overview' && (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-display font-bold text-navy-800 mb-4">Profit & Loss Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-navy-50">
                <span className="text-navy-600 font-medium">Gross Revenue</span>
                <span className="font-display font-bold text-navy-800">{fmt(INCOME_ROWS.reduce((s, r) => s + r.gross, 0))}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-navy-50">
                <span className="text-navy-400">Raylane Commission (10%)</span>
                <span className="font-bold text-red-600">- {fmt(INCOME_ROWS.reduce((s, r) => s + r.commission, 0))}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-navy-50 font-medium">
                <span className="text-navy-700">Net Income</span>
                <span className="font-display font-bold text-green-700">{fmt(totalIncome)}</span>
              </div>
              {['Fuel', 'Maintenance', 'Driver Salary', 'Insurance'].map(cat => {
                const total = EXPENSES.filter(e => e.category === cat).reduce((s, e) => s + e.amount, 0)
                return total > 0 ? (
                  <div key={cat} className="flex justify-between py-2 border-b border-navy-50">
                    <span className="text-navy-400">{cat}</span>
                    <span className="font-bold text-red-600">- {fmt(total)}</span>
                  </div>
                ) : null
              })}
              <div className="flex justify-between py-3 mt-1 bg-navy-50 rounded-xl px-3">
                <span className="font-display font-bold text-navy-800">Net Profit</span>
                <span className="font-display font-bold text-gold-600 text-lg">{fmt(netProfit)}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <h3 className="font-display font-bold text-navy-800 mb-4">Expense Breakdown</h3>
            {['Fuel', 'Maintenance', 'Driver Salary', 'Insurance'].map((cat, i) => {
              const amt = EXPENSES.filter(e => e.category === cat).reduce((s, e) => s + e.amount, 0)
              const pct = Math.round((amt / totalExpenses) * 100) || 0
              const colors = ['bg-blue-500', 'bg-amber-500', 'bg-purple-500', 'bg-green-500']
              return (
                <div key={cat} className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-navy-600 font-medium">{cat}</span>
                    <span className="font-display font-bold text-navy-800">{pct}%</span>
                  </div>
                  <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${colors[i]}`} style={{ width: `${pct}%` }}/>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Income */}
      {tab === 'income' && (
        <div className="bg-white rounded-2xl p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                {['Ref', 'Route', 'Seats', 'Gross', 'Commission', 'Net Income', 'Date'].map(h => (
                  <th key={h} className="text-left pb-3 text-xs font-bold text-navy-400 uppercase tracking-wide pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INCOME_ROWS.map((r, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0 hover:bg-navy-50/50">
                  <td className="py-3 pr-4 font-display font-bold text-navy-800 text-xs">{r.ref}</td>
                  <td className="py-3 pr-4 text-navy-700">{r.route}</td>
                  <td className="py-3 pr-4 text-navy-600">{r.seats}</td>
                  <td className="py-3 pr-4 text-navy-700">{fmt(r.gross)}</td>
                  <td className="py-3 pr-4 text-red-600 font-medium">- {fmt(r.commission)}</td>
                  <td className="py-3 pr-4 font-display font-bold text-green-700">{fmt(r.net)}</td>
                  <td className="py-3 text-navy-400 text-xs">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Expenses */}
      {tab === 'expenses' && (
        <div className="bg-white rounded-2xl p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                {['ID', 'Category', 'Description', 'Vendor', 'Amount', 'Date'].map(h => (
                  <th key={h} className="text-left pb-3 text-xs font-bold text-navy-400 uppercase tracking-wide pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EXPENSES.map((e, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0 hover:bg-navy-50/50">
                  <td className="py-3 pr-4 font-display font-bold text-navy-400 text-xs">{e.id}</td>
                  <td className="py-3 pr-4">
                    <span className="text-xs font-bold bg-navy-100 text-navy-700 px-2 py-0.5 rounded-full">{e.category}</span>
                  </td>
                  <td className="py-3 pr-4 text-navy-700">{e.desc}</td>
                  <td className="py-3 pr-4 text-navy-500">{e.vendor}</td>
                  <td className="py-3 pr-4 font-display font-bold text-red-700">{fmt(e.amount)}</td>
                  <td className="py-3 text-navy-400 text-xs">{e.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Vendors */}
      {tab === 'vendors' && (
        <div className="bg-white rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-navy-800">Vendor Accounts</h3>
            <button className="btn-primary text-sm py-2">+ Add Vendor</button>
          </div>
          <div className="space-y-3">
            {VENDORS.map((v, i) => (
              <div key={i} className="border border-navy-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-navy-800">{v.name}</p>
                  <p className="text-xs text-navy-400 mt-0.5">{v.category} · Last paid: {v.lastPay}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-navy-400">Outstanding Balance</p>
                    <p className={`font-display font-bold text-sm ${v.balance > 0 ? 'text-red-700' : 'text-green-700'}`}>
                      {v.balance > 0 ? fmt(v.balance) : 'Paid up'}
                    </p>
                  </div>
                  {v.balance > 0 && (
                    <button className="text-sm bg-navy-800 text-gold-500 px-4 py-2 rounded-xl font-bold">Pay</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reports */}
      {tab === 'reports' && (
        <div className="grid md:grid-cols-3 gap-4">
          {['Monthly P&L Statement', 'Annual Revenue Report', 'Expense Summary', 'Commission Report', 'Payout History', 'Tax Summary'].map(r => (
            <div key={r} className="bg-white rounded-2xl p-5 flex items-center justify-between border border-navy-100 hover:border-gold-300 transition-colors cursor-pointer group">
              <div>
                <p className="font-display font-bold text-navy-800 text-sm">{r}</p>
                <p className="text-xs text-navy-400 mt-0.5">Download PDF / CSV</p>
              </div>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-navy-300 group-hover:text-gold-500 transition-colors">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Add Expense Modal */}
      {showAddExpense && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-navy-lg animate-fade-up">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-xl text-navy-800">Add Expense</h2>
              <button onClick={() => setShowAddExpense(false)} className="w-8 h-8 bg-navy-50 rounded-full flex items-center justify-center">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Category</label>
                <select className="form-input">
                  <option>Fuel</option><option>Maintenance</option><option>Driver Salary</option><option>Insurance</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Description</label>
                <input type="text" className="form-input" placeholder="e.g. Fuel Kampala → Gulu run"/>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Amount (UGX)</label>
                  <input type="number" className="form-input" placeholder="350,000"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-700 block mb-1.5">Date</label>
                  <input type="date" className="form-input"/>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Vendor</label>
                <input type="text" className="form-input" placeholder="e.g. Total Energies"/>
              </div>
              <div className="flex gap-3 mt-2">
                <button onClick={() => setShowAddExpense(false)} className="flex-1 py-3 border-2 border-navy-200 text-navy-700 rounded-2xl font-display font-bold text-sm hover:bg-navy-50">Cancel</button>
                <button onClick={() => setShowAddExpense(false)} className="flex-1 btn-primary justify-center py-3 text-sm">Save Expense</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
