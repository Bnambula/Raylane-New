const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `HTTP ${res.status}`)
  }
  return res.json()
}

// Trips
export const getTrips = (params) => request(`/trips?${new URLSearchParams(params)}`)
export const getTripById = (id) => request(`/trips/${id}`)
export const createTrip = (data) => request('/trips', { method: 'POST', body: JSON.stringify(data) })
export const approveTrip = (id) => request(`/trips/${id}/approve`, { method: 'PATCH' })
export const cancelTrip = (id) => request(`/trips/${id}/cancel`, { method: 'PATCH' })

// Seats
export const getSeats = (tripId) => request(`/trips/${tripId}/seats`)
export const lockSeat = (tripId, seat) => request(`/trips/${tripId}/seats/lock`, { method: 'POST', body: JSON.stringify({ seat }) })
export const releaseSeat = (tripId, seat) => request(`/trips/${tripId}/seats/release`, { method: 'POST', body: JSON.stringify({ seat }) })

// Bookings
export const createBooking = (data) => request('/bookings', { method: 'POST', body: JSON.stringify(data) })
export const getBookingById = (id) => request(`/bookings/${id}`)
export const getBookings = (params) => request(`/bookings?${new URLSearchParams(params)}`)

// Payments
export const initiatePayment = (data) => request('/payments/initiate', { method: 'POST', body: JSON.stringify(data) })
export const verifyPayment = (ref) => request(`/payments/verify/${ref}`)

// Operators
export const getOperators = () => request('/operators')
export const applyOperator = (data) => request('/operators/apply', { method: 'POST', body: JSON.stringify(data) })
export const approveOperator = (id) => request(`/operators/${id}/approve`, { method: 'PATCH' })

// Parcels
export const createParcel = (data) => request('/parcels', { method: 'POST', body: JSON.stringify(data) })
export const trackParcel = (ref) => request(`/parcels/${ref}`)
export const getParcels = (params) => request(`/parcels?${new URLSearchParams(params)}`)

// Charter
export const submitCharterQuote = (data) => request('/charter/quote', { method: 'POST', body: JSON.stringify(data) })

// Analytics
export const getAnalytics = (params) => request(`/analytics?${new URLSearchParams(params)}`)

// Financials
export const getFinancials = (params) => request(`/financials?${new URLSearchParams(params)}`)
export const getRevenueSummary = () => request('/financials/summary')
