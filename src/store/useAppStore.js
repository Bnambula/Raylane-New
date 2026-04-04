import { create } from 'zustand'

export const useAppStore = create((set, get) => ({
  // Auth
  user: null,
  role: null, // 'passenger' | 'operator' | 'admin'
  setUser: (user, role) => set({ user, role }),
  logout: () => set({ user: null, role: null }),

  // Search
  searchQuery: { from: '', to: '', date: '', vehicleType: 'any', passengers: 1 },
  setSearchQuery: (q) => set({ searchQuery: { ...get().searchQuery, ...q } }),

  // Booking flow
  selectedTrip: null,
  selectedSeats: [],
  bookingRef: null,
  setSelectedTrip: (trip) => set({ selectedTrip: trip, selectedSeats: [] }),
  toggleSeat: (seat) => {
    const seats = get().selectedSeats
    const exists = seats.includes(seat)
    set({ selectedSeats: exists ? seats.filter(s => s !== seat) : [...seats, seat] })
  },
  clearSeats: () => set({ selectedSeats: [] }),
  setBookingRef: (ref) => set({ bookingRef: ref }),

  // Notifications
  notifications: [],
  addNotification: (n) => set(s => ({ notifications: [{ id: Date.now(), ...n }, ...s.notifications] })),
  clearNotifications: () => set({ notifications: [] }),

  // UI
  mobileMenuOpen: false,
  toggleMobileMenu: () => set(s => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  modal: null,
  openModal: (type, data) => set({ modal: { type, data } }),
  closeModal: () => set({ modal: null }),
}))
