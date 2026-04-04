import { useNavigate, useParams } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'

export default function TicketPage() {
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const { selectedTrip, selectedSeats } = useAppStore()

  const trip = selectedTrip || { from: 'Kampala', to: 'Nairobi', departure: '08:00', operator: 'Gateway Bus', vehicle: 'Coach', currency: 'UGX', price: 120000 }

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0">
      <div className="max-w-lg mx-auto px-5 py-8">
        {/* Success header */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="w-20 h-20 bg-green-100 border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10">
              <path d="M6 16l7 7 13-13" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="font-display font-extrabold text-navy-800 text-2xl mb-1">Booking Confirmed!</h1>
          <p className="text-navy-400 text-sm">Your e-ticket has been sent to your phone via SMS.</p>
        </div>

        {/* Ticket card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-navy-lg animate-fade-up" style={{animationDelay:'0.1s'}}>
          {/* Ticket header */}
          <div className="bg-navy-800 px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50 font-medium mb-0.5">Booking Reference</p>
                <p className="font-display font-bold text-gold-500 text-xl tracking-wider">{bookingId || 'RL-A7B3C2'}</p>
              </div>
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                  <path d="M4 14C4 14 8 8 14 8C20 8 24 14 24 14" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M4 18L24 18" stroke="#0B1D45" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="9" cy="21" r="2" fill="#0B1D45"/>
                  <circle cx="19" cy="21" r="2" fill="#0B1D45"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="px-6 py-5 border-b border-dashed border-navy-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display font-extrabold text-navy-800 text-3xl">{trip.departure}</p>
                <p className="text-sm font-bold text-navy-600 mt-0.5">{trip.from}</p>
              </div>
              <div className="text-center flex-1 mx-4">
                <svg viewBox="0 0 40 16" fill="none" className="w-10 text-gold-400">
                  <path d="M0 8h36M28 2l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs text-navy-400 mt-1">{trip.vehicle}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-extrabold text-navy-800 text-3xl">{trip.arrival || '18:00'}</p>
                <p className="text-sm font-bold text-navy-600 mt-0.5">{trip.to}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="px-6 py-4 grid grid-cols-2 gap-4 border-b border-dashed border-navy-100">
            {[
              ['Operator', trip.operator],
              ['Seat(s)', selectedSeats.length ? selectedSeats.join(', ') : '14A'],
              ['Vehicle', trip.vehicle],
              ['Status', '✅ Confirmed'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-navy-400 font-medium">{label}</p>
                <p className="font-display font-bold text-navy-800 text-sm mt-0.5">{value}</p>
              </div>
            ))}
          </div>

          {/* QR code placeholder */}
          <div className="px-6 py-5 flex flex-col items-center gap-3">
            <div className="w-32 h-32 border-2 border-navy-100 rounded-xl flex items-center justify-center bg-navy-50">
              {/* QR pattern */}
              <div className="grid grid-cols-7 gap-0.5">
                {Array.from({length:49}).map((_,i) => (
                  <div key={i} className={`w-3.5 h-3.5 rounded-sm ${Math.random() > 0.5 ? 'bg-navy-800' : 'bg-white'}`}/>
                ))}
              </div>
            </div>
            <p className="text-xs text-navy-400 text-center">Show QR at boarding for instant scan</p>
          </div>

          {/* Balance notice */}
          <div className="mx-4 mb-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
            <p className="text-xs text-amber-800 font-semibold">
              Balance due at departure: <strong>{trip.currency} {(trip.price * 0.8).toLocaleString()}</strong>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <button onClick={() => window.print()} className="flex-1 btn-outline-navy py-3 justify-center text-sm">
            🖨️ Print Ticket
          </button>
          <button onClick={() => navigate('/')} className="flex-1 btn-primary py-3 justify-center text-sm">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
