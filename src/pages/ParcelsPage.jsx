import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CITIES } from '../data/constants'

export default function ParcelsPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('send')

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0">
      <div className="max-w-2xl mx-auto px-5 py-10">
        <div className="text-center mb-8">
          <span className="section-label">Logistics</span>
          <h1 className="section-title">Send a Parcel</h1>
          <p className="section-sub">Fast, tracked parcel delivery on our bus network across East Africa.</p>
        </div>

        <div className="flex gap-1 bg-navy-100 rounded-xl p-1 mb-6">
          {['send', 'track'].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2.5 rounded-lg font-display font-bold text-sm capitalize transition-all ${tab === t ? 'bg-white shadow-navy-sm text-navy-800' : 'text-navy-400'}`}>
              {t === 'send' ? '📦 Send Parcel' : '🔍 Track Parcel'}
            </button>
          ))}
        </div>

        {tab === 'send' ? (
          <div className="bg-white rounded-3xl p-6 shadow-navy-sm space-y-4">
            <h2 className="font-display font-bold text-navy-800 mb-2">Parcel Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">From</label>
                <select className="form-input">
                  {CITIES.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">To</label>
                <select className="form-input">
                  {CITIES.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-700 block mb-1.5">Parcel Weight</label>
              <select className="form-input">
                <option>Under 2 kg – UGX 8,000</option>
                <option>2–5 kg – UGX 15,000</option>
                <option>5–15 kg – UGX 30,000</option>
                <option>15–30 kg – UGX 55,000</option>
                <option>30+ kg – Custom quote</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy-700 block mb-1.5">Description of Contents</label>
              <input type="text" className="form-input" placeholder="e.g. Documents, clothes, electronics"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Sender Name</label>
                <input type="text" className="form-input" placeholder="Your name"/>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Sender Phone</label>
                <input type="tel" className="form-input" placeholder="+256 7xx xxx xxx"/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Recipient Name</label>
                <input type="text" className="form-input" placeholder="Recipient name"/>
              </div>
              <div>
                <label className="text-sm font-medium text-navy-700 block mb-1.5">Recipient Phone</label>
                <input type="tel" className="form-input" placeholder="+256 7xx xxx xxx"/>
              </div>
            </div>
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-3 text-sm text-navy-600">
              💡 Parcel will be collected at the departure stage by the bus crew. Recipient must show ID and sign.
            </div>
            <button className="btn-primary w-full justify-center py-4 text-base">Book Parcel →</button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 shadow-navy-sm space-y-4">
            <h2 className="font-display font-bold text-navy-800 mb-2">Track Your Parcel</h2>
            <div>
              <label className="text-sm font-medium text-navy-700 block mb-1.5">Tracking Reference</label>
              <input type="text" className="form-input text-lg font-display font-bold tracking-wider" placeholder="RL-PAR-XXXXXX"/>
            </div>
            <button className="btn-primary w-full justify-center py-4 text-base" onClick={() => navigate('/parcels/track?ref=demo')}>
              Track Now →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
