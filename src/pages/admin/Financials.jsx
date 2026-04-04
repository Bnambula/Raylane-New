import { useState } from 'react'

const INCOME = [
  { category: 'Booking Commissions', ytd: 48200000, month: 4100000 },
  { category: 'Priority Listing Fees', ytd: 8400000, month: 700000 },
  { category: 'SMS Broadcast Charges', ytd: 2100000, month: 180000 },
  { category: 'Charter Markup', ytd: 12600000, month: 1050000 },
  { category: 'Parcel Commissions', ytd: 6300000, month: 525000 },
  { category: 'Module Subscriptions', ytd: 9800000, month: 820000 },
]

const EXPENSES = [
  { category: 'Payment Gateway Fees', ytd: 3200000, month: 265000 },
  { category: 'SMS/Notifications', ytd: 1400000, month: 116000 },
  { category: 'Cloud Infrastructure', ytd: 2800000, month: 233000 },
  { category: 'Staff Salaries', ytd: 18000000, month: 1500000 },
  { category: 'Marketing', ytd: 4200000, month: 350000 },
  { category: 'Office & Admin', ytd: 1800000, month: 150000 },
]

const PAYOUTS = [
  { operator: 'Gateway Bus', amount: 'UGX 3,240,000', period: 'March 2026', status: 'paid', date: '01 Apr 2026' },
  { operator: 'Link Express', amount: 'UGX 1,890,000', period: 'March 2026', status: 'paid', date: '01 Apr 2026' },
  { operator: 'Post Bus UG', amount: 'UGX 2,100,000', period: 'March 2026', status: 'pending', date: '—' },
  { operator: 'Safe Rider', amount: 'UGX 980,000', period: 'March 2026', status: 'pending', date: '—' },
]

function fmt(n) { return 'UGX ' + (n/1000).toFixed(0) + 'K' }

export default function AdminFinancials() {
  const [period, setPeriod] = useState('month')
  const key = period === 'month' ? 'month' : 'ytd'

  const totalIncome = INCOME.reduce((s, r) => s + r[key], 0)
  const totalExpenses = EXPENSES.reduce((s, r) => s + r[key], 0)
  const netProfit = totalIncome - totalExpenses
  const margin = Math.round((netProfit / totalIncome) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-navy-800">Financial Center</h1>
          <p className="text-sm text-navy-400 mt-0.5">QuickBooks-style financial reporting</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex bg-navy-50 rounded-xl p-1">
            <button onClick={() => setPeriod('month')} className={`px-4 py-1.5 rounded-lg text-sm font-display font-bold transition-all ${period === 'month' ? 'bg-white shadow-navy-sm text-navy-800' : 'text-navy-400'}`}>This Month</button>
            <button onClick={() => setPeriod('ytd')} className={`px-4 py-1.5 rounded-lg text-sm font-display font-bold transition-all ${period === 'ytd' ? 'bg-white shadow-navy-sm text-navy-800' : 'text-navy-400'}`}>YTD</button>
          </div>
          <button className="btn-primary text-sm py-2">Export P&amp;L</button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Income', value: fmt(totalIncome), color: 'text-green-700', bg: 'bg-green-50 border-green-100' },
          { label: 'Total Expenses', value: fmt(totalExpenses), color: 'text-red-700', bg: 'bg-red-50 border-red-100' },
          { label: 'Net Profit', value: fmt(netProfit), color: 'text-navy-800', bg: 'bg-white border-navy-100' },
          { label: 'Profit Margin', value: `${margin}%`, color: 'text-gold-600', bg: 'bg-gold-50 border-gold-100' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl border p-5 ${s.bg}`}>
            <p className="text-xs font-bold text-navy-400 uppercase tracking-wide mb-1">{s.label}</p>
            <p className={`font-display font-extrabold text-xl ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Income */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="font-display font-bold text-navy-800 mb-4 text-sm uppercase tracking-wide">Income</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                <th className="text-left pb-2 text-xs text-navy-400 font-bold uppercase">Category</th>
                <th className="text-right pb-2 text-xs text-navy-400 font-bold uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {INCOME.map(r => (
                <tr key={r.category} className="border-b border-navy-50 last:border-0">
                  <td className="py-2.5 text-navy-700">{r.category}</td>
                  <td className="py-2.5 text-right font-display font-bold text-green-700">{fmt(r[key])}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-navy-200">
                <td className="pt-3 font-display font-bold text-navy-800">Total Income</td>
                <td className="pt-3 text-right font-display font-bold text-green-700 text-base">{fmt(totalIncome)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-2xl p-6">
          <h2 className="font-display font-bold text-navy-800 mb-4 text-sm uppercase tracking-wide">Expenses</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                <th className="text-left pb-2 text-xs text-navy-400 font-bold uppercase">Category</th>
                <th className="text-right pb-2 text-xs text-navy-400 font-bold uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {EXPENSES.map(r => (
                <tr key={r.category} className="border-b border-navy-50 last:border-0">
                  <td className="py-2.5 text-navy-700">{r.category}</td>
                  <td className="py-2.5 text-right font-display font-bold text-red-700">{fmt(r[key])}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-navy-200">
                <td className="pt-3 font-display font-bold text-navy-800">Total Expenses</td>
                <td className="pt-3 text-right font-display font-bold text-red-700 text-base">{fmt(totalExpenses)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Operator payouts */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-navy-800">Operator Payouts</h2>
          <button className="btn-primary text-sm py-2">Process Payouts</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-navy-50">
                {['Operator', 'Period', 'Amount', 'Status', 'Date Paid', 'Action'].map(h => (
                  <th key={h} className="text-left pb-3 text-xs font-bold text-navy-400 uppercase tracking-wide pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PAYOUTS.map((p, i) => (
                <tr key={i} className="border-b border-navy-50 last:border-0">
                  <td className="py-3 pr-4 font-display font-bold text-navy-800">{p.operator}</td>
                  <td className="py-3 pr-4 text-navy-500">{p.period}</td>
                  <td className="py-3 pr-4 font-display font-bold text-navy-800">{p.amount}</td>
                  <td className="py-3 pr-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{p.status}</span>
                  </td>
                  <td className="py-3 pr-4 text-navy-400 text-xs">{p.date}</td>
                  <td className="py-3">
                    {p.status === 'pending' && (
                      <button className="text-xs bg-navy-800 text-gold-500 px-3 py-1.5 rounded-lg font-bold hover:bg-navy-700 transition-colors">Pay Now</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
