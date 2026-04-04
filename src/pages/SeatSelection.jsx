import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import { MOCK_TRIPS } from '../data/constants'
import { Steps, Alert } from '../components/ui/index.jsx'

const STEPS = ['Search', 'Select Seats', 'Payment', 'Ticket']

function generateSeats(total) {
  return Array.from({ length: total }, (_, i) => {
    const num = i + 1
    if (num === 1) return { num, status: 'driver' }
    const rand = Math.random()
    return { num, status: rand < 0.35 ? 'booked' : 'available' }
  })
}

export default function SeatSelection() {
  const { tripId } = useParams()
  const navigate = useNavigate()
  const { selectedTrip, selectedSeats, toggleSeat } = useAppStore()
  const [seats, setSeats] = useState([])
  const [lockTimer, setLockTimer] = useState(null)
  const [timeLeft, setTimeLeft] = useState(300) // 5 min lock

  const trip = selectedTrip || MOCK_TRIPS.find(t => t.id === tripId)

  useEffect(() => {
    if (trip) setSeats(generateSeats(trip.seatsTotal))
  }, [trip])

  // Countdown once seats selected
  useEffect(() => {
    if (selectedSeats.length > 0 && !lockTimer) {
      const interval = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(interval); return 0 }
          return t - 1
        })
      }, 1000)
      setLockTimer(interval)
      return () => clearInterval(interval)
    }
  }, [selectedSeats.length])

  if (!trip) return <div className="pt-24 text-center p-10">Trip not found. <button onClick={() => navigate('/search')} className="text-gold-600 underline">Go back</button></div>

  const total = selectedSeats.reduce(() => trip.price, 0) * selectedSeats.length
  const commitFee = Math.round(total * 0.2)

  const rows = []
  for (let i = 0; i < seats.length; i += 4) rows.push(seats.slice(i, i + 4))

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  return (
    <div className="min-h-screen bg-navy-50 pt-24 pb-24 lg:pb-0">
      <div className="max-w-4xl mx-auto px-5 py-8">
        {/* Steps */}
        <div className="mb-8">
          <Steps steps={STEPS} current={1}/>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Seat map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-bold text-navy-800">Select Your Seat</h2>
                {selectedSeats.length > 0 && (
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                    ⏱ Lock expires: {mins}:{secs.toString().padStart(2, '0')}
                  </span>
                )}
              </div>

              {/* Legend */}
              <div className="flex gap-4 mb-5 flex-wrap">
                {[['bg-white border-2 border-navy-100', 'Available'], ['bg-gold-500 border-2 border-gold-600', 'Selected'], ['bg-navy-100 border-2 border-navy-200', 'Taken'], ['bg-navy-800 border-2 border-navy-900', 'Driver']].map(([cls, label]) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-lg ${cls}`}/>
                    <span className="text-xs text-navy-400">{label}</span>
                  </div>
                ))}
              </div>

              {/* Bus front */}
              <div className="flex justify-center mb-3">
                <div className="bg-navy-800 text-white text-xs font-bold px-6 py-2 rounded-full">🚌 Front / Driver</div>
              </div>

              {/* Seat grid — right-hand drive layout (Uganda) */}
              <div className="space-y-2 max-w-xs mx-auto">
                {rows.map((row, ri) => (
                  <div key={ri} className="flex gap-2 justify-center">
                    {row.slice(0, 2).map(seat => <SeatBtn key={seat.num} seat={seat} selected={selectedSeats.includes(seat.num)} onToggle={() => seat.status === 'available' && toggleSeat(seat.num)}/>)}
                    <div className="w-6"/>
                    {row.slice(2, 4).map(seat => seat && <SeatBtn key={seat.num} seat={seat} selected={selectedSeats.includes(seat.num)} onToggle={() => seat.status === 'available' && toggleSeat(seat.num)}/>)}
                  </div>
                ))}
              </div>

              {selectedSeats.length > 0 && (
                <Alert type="info" className="mt-5">
                  <span>Seats <strong>{selectedSeats.sort((a,b) => a-b).join(', ')}</strong> selected. Proceed to payment within 5 minutes.</span>
                </Alert>
              )}
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl p-5 sticky top-28">
              <h3 className="font-display font-bold text-navy-800 mb-4">Booking Summary</h3>
              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-navy-400">Route</span>
                  <span className="font-semibold text-navy-800">{trip.from} → {trip.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Departure</span>
                  <span className="font-semibold text-navy-800">{trip.departure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Operator</span>
                  <span className="font-semibold text-navy-800">{trip.operator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-400">Seats Selected</span>
                  <span className="font-semibold text-navy-800">{selectedSeats.length || '—'}</span>
                </div>
                <div className="border-t border-navy-50 pt-3">
                  <div className="flex justify-between">
                    <span className="text-navy-400">Total</span>
                    <span className="font-display font-bold text-navy-800">{trip.currency} {total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-navy-400 text-xs">Commitment (20%)</span>
                    <span className="font-bold text-gold-600 text-sm">{trip.currency} {commitFee.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button disabled={selectedSeats.length === 0}
                onClick={() => navigate(`/book/${trip.id}/pay`)}
                className="btn-primary w-full justify-center py-3 disabled:opacity-40 disabled:cursor-not-allowed">
                Continue to Payment
              </button>
              <p className="text-center text-xs text-navy-400 mt-3">Pay only 20% now · Seat locked for 5 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SeatBtn({ seat, selected, onToggle }) {
  const statusCls = seat.status === 'driver' ? 'seat-driver cursor-not-allowed' :
    seat.status === 'booked' ? 'seat-booked' :
    selected ? 'seat-selected' : 'seat-available'
  return (
    <button onClick={onToggle} className={`w-10 h-10 rounded-xl font-display font-bold text-xs transition-all duration-150 ${statusCls}`}>
      {seat.status === 'driver' ? '🚗' : seat.num}
    </button>
  )
}
