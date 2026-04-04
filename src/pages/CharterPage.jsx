import { useState } from 'react'
import { CITIES } from '../data/constants'

const VEHICLES = [
  { id: 'coach', label: 'Coach (50 seats)', icon: '🚌', desc: 'Long-distance intercity, AC, comfortable seating', price: 'From UGX 1,200,000/trip' },
  { id: 'minibus', label: 'Minibus (14–22)', icon: '🚐', desc: 'Tours, events, corporate transfers', price: 'From UGX 450,000/trip' },
  { id: 'suv', label: 'SUV / 4x4', icon: '🚙', desc: 'Safari, upcountry, executive transfers', price: 'From UGX 250,000/day' },
  { id: 'matatu', label: 'Matatu (14 seats)', icon: '🚕', desc: 'City links, school runs, short routes', price: 'From UGX 180,000/trip' },
]

export default function CharterPage() {
  const [selected, setSelected] = useState('coach')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-5">
        <div className="w-20 h-20 bg-green-100 border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10"><path d="M6 16l7 7 13-13" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </div>
        <h1 className="font-display font-extrabold text-2xl text-navy-800 mb-2">Quote Request Sent!</h1>
        <p className="text-navy-400 mb-2">Our charter team will call you within 2 hours with a fixed quote.</p>
        <p className="text-navy-600 font-semibold mb-6">WhatsApp us: <a href="https://wa.me/256700123466" className="text-gold-600">+256 700 123 466</a></p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">Submit Another Request</button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      <div className="bg-navy-800 py-16 mb-0">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span className="section-label">Private Travel</span>
          <h1 className="font-display font-extrabold text-white mb-3" style={{fontSize:'clamp(1.75rem,4vw,3rem)'}}>Charter a Vehicle</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Travelling with 10+ people? Get a private vehicle with a dedicated driver. Fixed quote in 2 hours.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-navy-800 mb-4">Select Vehicle Type</h3>
            {VEHICLES.map(v => (
              <button key={v.id} onClick={() => setSelected(v.id)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${selected === v.id ? 'border-gold-500 bg-gold-50' : 'border-navy-100 bg-white hover:border-navy-200'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{v.icon}</span>
                  <span className="font-display font-bold text-navy-800 text-sm">{v.label}</span>
                </div>
                <p className="text-xs text-navy-400 ml-9">{v.desc}</p>
                <p className="text-xs font-bold text-gold-600 ml-9 mt-1">{v.price}</p>
              </button>
            ))}
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-navy-100 shadow-navy-sm p-6 space-y-4">
              <h2 className="font-display font-bold text-navy-800 text-lg">Request a Quote</h2>
              <p className="text-sm text-navy-400">We'll match you with the best operator and respond within 2 hours.</p>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">From</label><select className="form-input">{CITIES.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">To</label><select className="form-input">{CITIES.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Travel Date</label><input type="date" className="form-input"/></div>
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Return Date</label><input type="date" className="form-input"/></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">No. of People</label><input type="number" min="1" placeholder="12" className="form-input"/></div>
                <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Budget (UGX)</label><input type="number" placeholder="1,000,000" className="form-input"/></div>
              </div>
              <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Your Name</label><input type="text" placeholder="Full name" className="form-input"/></div>
              <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Phone Number</label><input type="tel" placeholder="+256 7xx xxx xxx" className="form-input"/></div>
              <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Special Requirements</label><textarea rows={2} placeholder="e.g. AC required, early morning pickup, wheelchair access..." className="form-input resize-none"/></div>
              <button onClick={() => setSubmitted(true)} className="btn-primary w-full justify-center py-4 text-base">Request Quote →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
