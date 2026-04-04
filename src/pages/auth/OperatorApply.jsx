import { useState } from 'react'
import { Logo } from '../../components/ui/index.jsx'
export default function OperatorApply() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) return (
    <div className="min-h-screen bg-navy-50 flex items-center justify-center px-5">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 bg-green-100 border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5"><svg viewBox="0 0 32 32" fill="none" className="w-10 h-10"><path d="M6 16l7 7 13-13" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"/></svg></div>
        <h1 className="font-display font-extrabold text-2xl text-navy-800 mb-2">Application Submitted!</h1>
        <p className="text-navy-400 mb-6">Our team reviews applications within 48 hours. You'll receive login credentials by SMS and email once approved.</p>
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>
  )
  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0 px-5">
      <div className="max-w-lg mx-auto py-10">
        <div className="flex justify-center mb-8"><Logo dark/></div>
        <div className="bg-white rounded-3xl shadow-navy-md p-7 space-y-4">
          <h1 className="font-display font-extrabold text-2xl text-navy-800">Become a Raylane Operator</h1>
          <p className="text-sm text-navy-400">List your vehicles, manage bookings, and grow your transport business on Raylane.</p>
          {[['Business / Operator Name','text','e.g. Gateway Bus Services'],['Business Registration Number','text','UG-123456'],['Primary Email','email','ops@yourbusiness.com'],['Phone Number','tel','+256 7xx xxx xxx']].map(([l,t,p]) => (
            <div key={l}><label className="text-sm font-medium text-navy-700 block mb-1.5">{l}</label><input type={t} className="form-input" placeholder={p}/></div>
          ))}
          <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Fleet Size</label><select className="form-input"><option>1–3 Vehicles</option><option>4–10 Vehicles</option><option>11–30 Vehicles</option><option>30+ Vehicles</option></select></div>
          <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Primary Routes</label><input type="text" className="form-input" placeholder="e.g. Kampala–Mbale, Kampala–Gulu"/></div>
          <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Message to Raylane</label><textarea rows={3} className="form-input resize-none" placeholder="Tell us about your operation..."/></div>
          <button onClick={() => setSubmitted(true)} className="btn-primary w-full justify-center py-4 text-base">Submit Application →</button>
          <p className="text-center text-xs text-navy-400">Already have an account? <a href="/login" className="text-gold-600 font-semibold">Sign in →</a></p>
        </div>
      </div>
    </div>
  )
}
