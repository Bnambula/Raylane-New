import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../../components/ui/index.jsx'
export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('passenger')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState(1)
  return (
    <div className="min-h-screen bg-navy-50 flex items-center justify-center pt-20 pb-24 lg:pb-0 px-5">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8"><Logo dark/></div>
        <div className="bg-white rounded-3xl shadow-navy-md p-7 space-y-5">
          <h1 className="font-display font-extrabold text-navy-800 text-2xl text-center">Sign In</h1>
          <div className="flex gap-1 bg-navy-50 rounded-xl p-1">
            {['passenger','operator','admin'].map(r => (
              <button key={r} onClick={() => setRole(r)} className={`flex-1 py-2 rounded-lg text-xs font-display font-bold capitalize transition-all ${role === r ? 'bg-white shadow-navy-sm text-navy-800' : 'text-navy-400'}`}>{r}</button>
            ))}
          </div>
          {step === 1 ? (
            <>
              <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Phone Number</label><input type="tel" className="form-input" placeholder="+256 7xx xxx xxx" value={phone} onChange={e => setPhone(e.target.value)}/></div>
              <button onClick={() => setStep(2)} className="btn-primary w-full justify-center py-3.5">Send Code</button>
            </>
          ) : (
            <>
              <div><label className="text-sm font-medium text-navy-700 block mb-1.5">6-Digit Code</label><input type="text" className="form-input text-center text-xl font-display font-bold tracking-widest" placeholder="000000" maxLength={6} value={code} onChange={e => setCode(e.target.value)}/><p className="text-xs text-navy-400 mt-1.5 text-center">Sent to {phone}</p></div>
              <button onClick={() => navigate(role === 'admin' ? '/admin' : role === 'operator' ? '/operator' : '/')} className="btn-primary w-full justify-center py-3.5">Verify & Sign In</button>
              <button onClick={() => setStep(1)} className="w-full text-sm text-navy-400 text-center">← Change number</button>
            </>
          )}
          <div className="text-center text-xs text-navy-400 pt-2 border-t border-navy-50">
            New operator? <a href="/operator/apply" className="text-gold-600 font-semibold">Apply here →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
