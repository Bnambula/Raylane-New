import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MOCK_TRIPS, CITIES, VEHICLE_TYPES } from '../data/constants'
import { useAppStore } from '../store/useAppStore'
import { Badge, Stars, Skeleton } from '../components/ui/index.jsx'

export default function SearchResults() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { setSelectedTrip, searchQuery } = useAppStore()
  const [loading, setLoading] = useState(true)
  const [trips, setTrips] = useState([])
  const [filter, setFilter] = useState({ vehicleType: 'any', sort: 'departure', maxPrice: 500000 })

  useEffect(() => {
    const t = setTimeout(() => {
      setTrips(MOCK_TRIPS)
      setLoading(false)
    }, 900)
    return () => clearTimeout(t)
  }, [])

  const filtered = trips
    .filter(t => filter.vehicleType === 'any' || t.vehicle.toLowerCase().includes(filter.vehicleType))
    .filter(t => t.price <= filter.maxPrice)
    .sort((a, b) => {
      if (filter.sort === 'price') return a.price - b.price
      if (filter.sort === 'rating') return b.rating - a.rating
      return a.departure.localeCompare(b.departure)
    })

  const handleSelect = (trip) => {
    setSelectedTrip(trip)
    navigate(`/book/${trip.id}/seats`)
  }

  return (
    <div className="min-h-screen bg-navy-50 pt-20">
      {/* Search bar refine */}
      <div className="bg-white border-b border-navy-100 py-4 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-navy-600">
            <span className="font-display font-bold">{searchQuery.from || 'Kampala'}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold-500"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            <span className="font-display font-bold">{searchQuery.to || 'Nairobi'}</span>
          </div>
          <div className="flex gap-2 ml-auto flex-wrap">
            <select className="form-input py-2 text-sm" value={filter.vehicleType} onChange={e => setFilter({...filter, vehicleType: e.target.value})}>
              {VEHICLE_TYPES.map(v => <option key={v.id} value={v.id}>{v.label}</option>)}
            </select>
            <select className="form-input py-2 text-sm" value={filter.sort} onChange={e => setFilter({...filter, sort: e.target.value})}>
              <option value="departure">Earliest First</option>
              <option value="price">Cheapest First</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8">
        <p className="text-sm text-navy-400 mb-5 font-medium">
          {loading ? 'Searching...' : `${filtered.length} trips found`}
        </p>

        <div className="space-y-4">
          {loading ? (
            Array.from({length:4}).map((_,i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
                <div className="flex gap-4">
                  <Skeleton className="w-32 h-5"/>
                  <Skeleton className="w-20 h-5 ml-auto"/>
                </div>
                <div className="flex gap-4 mt-4">
                  <Skeleton className="w-48 h-4"/>
                  <Skeleton className="w-24 h-4"/>
                </div>
              </div>
            ))
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-3">🚌</p>
              <h3 className="font-display font-bold text-navy-800 mb-2">No trips found</h3>
              <p className="text-navy-400 text-sm">Try adjusting your filters or search for a different route.</p>
            </div>
          ) : (
            filtered.map(trip => (
              <TripCard key={trip.id} trip={trip} onSelect={() => handleSelect(trip)} />
            ))
          )}
        </div>

        {/* Advance booking info */}
        <div className="mt-8 bg-navy-800 rounded-2xl p-5 flex items-center gap-4">
          <span className="text-3xl">📅</span>
          <div>
            <p className="font-display font-bold text-white text-sm">Book up to 4 weeks ahead</p>
            <p className="text-white/60 text-xs mt-1">Pay just 20% commitment fee today. Balance due at departure. Seat guaranteed.</p>
          </div>
          <button onClick={() => navigate('/search?advance=true')} className="btn-primary ml-auto text-sm py-2 px-5 flex-shrink-0">
            Plan Ahead
          </button>
        </div>
      </div>
    </div>
  )
}

function TripCard({ trip, onSelect }) {
  const pct = Math.round((trip.seatsLeft / trip.seatsTotal) * 100)
  const isUrgent = trip.seatsLeft <= 5
  return (
    <div className="bg-white rounded-2xl p-5 hover:shadow-navy-md transition-all duration-300 border border-transparent hover:border-gold-200">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Operator */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-navy-800 rounded-xl flex items-center justify-center">
              <span className="text-gold-500 text-xs font-bold">{trip.operator[0]}</span>
            </div>
            <div>
              <p className="font-display font-bold text-navy-800 text-sm">{trip.operator}</p>
              <div className="flex items-center gap-1.5">
                <Stars rating={trip.rating}/>
                <span className="text-xs text-navy-400">{trip.rating}</span>
                <Badge variant="gray">{trip.vehicle}</Badge>
              </div>
            </div>
          </div>

          {/* Route & time */}
          <div className="flex items-center gap-3 mb-3">
            <div>
              <p className="font-display font-bold text-navy-800 text-xl">{trip.departure}</p>
              <p className="text-xs text-navy-400">{trip.from}</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-xs text-navy-400 font-medium">{trip.duration}</span>
              <div className="w-full flex items-center gap-1 mt-1">
                <div className="flex-1 h-px bg-navy-100"/>
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-gold-500 flex-shrink-0"><path d="M10.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 9H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"/></svg>
                <div className="flex-1 h-px bg-navy-100"/>
              </div>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-navy-800 text-xl">{trip.arrival}</p>
              <p className="text-xs text-navy-400">{trip.to}</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex gap-2 flex-wrap">
            {trip.amenities.map(a => (
              <span key={a} className="text-xs text-navy-500 bg-navy-50 px-2 py-0.5 rounded-full">{a}</span>
            ))}
          </div>
        </div>

        {/* Price & book */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:min-w-[140px]">
          <div className="text-right">
            <p className="font-display font-bold text-navy-800 text-2xl">{trip.currency} {trip.price.toLocaleString()}</p>
            <p className="text-xs text-navy-400">per person</p>
            {isUrgent && <p className="text-xs text-red-500 font-bold mt-1">🔥 Only {trip.seatsLeft} left!</p>}
            {!isUrgent && <p className="text-xs text-green-600 mt-1">✓ {trip.seatsLeft} seats available</p>}
          </div>
          <button onClick={onSelect} className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
            Select
          </button>
          <div className="w-full hidden sm:block">
            <div className="h-1 bg-navy-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all ${pct < 20 ? 'bg-red-500' : pct < 50 ? 'bg-amber-500' : 'bg-green-500'}`} style={{width:`${pct}%`}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
