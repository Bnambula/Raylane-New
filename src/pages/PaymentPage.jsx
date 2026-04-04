import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { MOCK_TRIPS } from '../data/constants'
import { Steps, Alert } from '../components/ui/index.jsx'

const STEPS = ['Search', 'Select Seats', 'Payment', 'Ticket']

const PAYMENT_METHODS = [
  { id: 'mtn', label: 'MTN Mobile Money', icon: '📱', color: 'border-yellow-400 bg-yellow-50' },
  { id: 'airtel', label: 'Airtel Money', icon: '📲', color: 'border-red-400 bg-red-50' },
  { id: 'bank', label: 'Bank Transfer', icon: '🏦', color: 'border-blue-400 bg-blue-50' },
  { id: 'card', label: 'Visa / Mastercard', icon: '💳', color: 'border-navy-400 bg-navy-50' },
]

export default function PaymentPage() {
  const { tripId } = useParams()
  const navigate = useNavigate()
  const { selectedTrip, selectedSeats, setBookingRef } = useAppStore()
  const [payMethod, setPayMethod] = useState('mtn')
  const [phone, setPhone] = useState('')
  const [paying, setPaying] = useState(false)
  const [advanceBook, setAdvanceBook] = useState(false)

  const trip = selectedTrip || MOCK_TRIPS.find(t => t.id === tripId)
  if (!trip) return null

  const total = trip.price * Math.max(selectedSeats.length, 1)
  const commitFee = Math.round(total * 0.2)
  const payNow = advanceBook ? commitFee : total

  const handlePay = async () => {
    if (!phone) return
    setPaying(true)
    await new Promise(r => setTimeout(r, 2000))
    const ref = `RL-${Math.random().toString(36).substr(2,6).toUpperCase()}`
    setBookingRef(ref)
    navigate(`/ticket/${ref}`)
  }

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0">
      <div className="max-w-3xl mx-auto px-5 py-8">
        <div className="mb-8">
          <Steps steps={STEPS} current={2}/>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Payment form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl p-6">
              <h2 className="font-display font-bold text-navy-800 mb-5">Choose Payment Method</h2>

              {/* Advance booking toggle */}
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-4 mb-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={advanceBook} onChange={e => setAdvanceBook(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-gold-500"/>
                  <div>
                    <p className="font-display font-bold text-navy-800 text-sm">📅 Advance Booking (pay 20% now)</p>
                    <p className="text-xs text-navy-400 mt-0.5">Lock your seat today. Pay remaining balance at departure.</p>
                    {advanceBook && (
                      <p className="text-xs text-green-700 font-semibold mt-1">
                        Pay now: {trip.currency} {commitFee.toLocaleString()} · Balance at departure: {trip.currency} {(total - commitFee).toLocaleString()}
                      </p>
                    )}
                  </div>
                </label>
              </div>

              {/* Methods */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {PAYMENT_METHODS.map(m => (
                  <button key={m.id} onClick={() => setPayMethod(m.id)}
                    className={`border-2 rounded-xl p-3 text-left transition-all ${payMethod === m.id ? m.color + ' border-opacity-100' : 'border-navy-100 bg-white hover:border-navy-200'}`}>
                    <span className="text-xl">{m.icon}</span>
                    <p className="text-xs font-bold text-navy-800 mt-1">{m.label}</p>
                  </button>
                ))}
              </div>

              {/* Phone input */}
              {['mtn', 'airtel'].includes(payMethod) && (
                <div className="space-y-1.5 mb-5">
                  <label className="text-sm font-medium text-navy-700">Mobile Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder="+256 7xx xxx xxx" className="form-input"/>
                  <p className="text-xs text-navy-400">You will receive a payment prompt on this number.</p>
                </div>
              )}

              {payMethod === 'card' && (
                <div className="space-y-3 mb-5">
                  <input placeholder="Card number" className="form-input"/>
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="MM/YY" className="form-input"/>
                    <input placeholder="CVV" className="form-input"/>
                  </div>
                  <input placeholder="Name on card" className="form-input"/>
                </div>
              )}

              <Alert type="info">
                <span className="text-xs">Payments are verified via API. Your booking is confirmed instantly once payment is received.</span>
              </Alert>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-5">
              <h3 className="font-display font-bold text-navy-800 mb-4 text-sm">Payment Summary</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-navy-400">Route</span>
                  <span className="font-semibold text-navy-800 text-right">{trip.from} → {trip.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Seats</span>
                  <span className="font-semibold">{selectedSeats.join(', ') || '14A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Price/seat</span>
                  <span className="font-semibold">{trip.currency} {trip.price.toLocaleString()}</span>
                </div>
                <div className="border-t border-navy-50 pt-2.5">
                  <div className="flex justify-between">
                    <span className="font-bold text-navy-800">Pay Now</span>
                    <span className="font-display font-bold text-navy-800 text-lg">{trip.currency} {payNow.toLocaleString()}</span>
                  </div>
                  {advanceBook && (
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-navy-400">Balance at departure</span>
                      <span className="text-xs font-semibold text-green-700">{trip.currency} {(total - commitFee).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <button onClick={handlePay} disabled={paying || !phone}
                className="btn-primary w-full justify-center mt-5 py-3.5 disabled:opacity-50">
                {paying ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/></svg>
                    Processing...
                  </span>
                ) : `Pay ${trip.currency} ${payNow.toLocaleString()}`}
              </button>
              <p className="text-center text-xs text-navy-400 mt-3">🔒 Secured & encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
