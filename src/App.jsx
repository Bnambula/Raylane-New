import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import AdminLayout from './components/layout/AdminLayout'
import OperatorLayout from './components/layout/OperatorLayout'
import LoadingScreen from './components/ui/LoadingScreen'

const Home = lazy(() => import('./pages/Home'))
const SearchResults = lazy(() => import('./pages/SearchResults'))
const BookingPage = lazy(() => import('./pages/BookingPage'))
const SeatSelection = lazy(() => import('./pages/SeatSelection'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
const TicketPage = lazy(() => import('./pages/TicketPage'))
const ParcelsPage = lazy(() => import('./pages/ParcelsPage'))
const TrackParcel = lazy(() => import('./pages/TrackParcel'))
const TouristPlanner = lazy(() => import('./pages/TouristPlanner'))
const CharterPage = lazy(() => import('./pages/CharterPage'))
const RoutesPage = lazy(() => import('./pages/RoutesPage'))
const SightseeingPage = lazy(() => import('./pages/SightseeingPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./pages/auth/Login'))
const OperatorApply = lazy(() => import('./pages/auth/OperatorApply'))
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'))
const AdminOperators = lazy(() => import('./pages/admin/Operators'))
const AdminTrips = lazy(() => import('./pages/admin/Trips'))
const AdminBookings = lazy(() => import('./pages/admin/Bookings'))
const AdminPayments = lazy(() => import('./pages/admin/Payments'))
const AdminFleet = lazy(() => import('./pages/admin/Fleet'))
const AdminParcels = lazy(() => import('./pages/admin/Parcels'))
const AdminFinancials = lazy(() => import('./pages/admin/Financials'))
const AdminAnalytics = lazy(() => import('./pages/admin/Analytics'))
const AdminSettings = lazy(() => import('./pages/admin/Settings'))
const OperatorDashboard = lazy(() => import('./pages/operator/Dashboard'))
const OperatorTrips = lazy(() => import('./pages/operator/Trips'))
const OperatorSeats = lazy(() => import('./pages/operator/Seats'))
const OperatorBookings = lazy(() => import('./pages/operator/Bookings'))
const OperatorParcels = lazy(() => import('./pages/operator/Parcels'))
const OperatorFinancials = lazy(() => import('./pages/operator/Financials'))
const OperatorFleet = lazy(() => import('./pages/operator/Fleet'))
const OperatorAnalytics = lazy(() => import('./pages/operator/Analytics'))
const OperatorSettings = lazy(() => import('./pages/operator/Settings'))

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="book/:tripId" element={<BookingPage />} />
          <Route path="book/:tripId/seats" element={<SeatSelection />} />
          <Route path="book/:tripId/pay" element={<PaymentPage />} />
          <Route path="ticket/:bookingId" element={<TicketPage />} />
          <Route path="parcels" element={<ParcelsPage />} />
          <Route path="parcels/track" element={<TrackParcel />} />
          <Route path="plan" element={<TouristPlanner />} />
          <Route path="charter" element={<CharterPage />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="sightseeing" element={<SightseeingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="operator/apply" element={<OperatorApply />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="operators" element={<AdminOperators />} />
          <Route path="trips" element={<AdminTrips />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="fleet" element={<AdminFleet />} />
          <Route path="parcels" element={<AdminParcels />} />
          <Route path="financials" element={<AdminFinancials />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/operator" element={<OperatorLayout />}>
          <Route index element={<OperatorDashboard />} />
          <Route path="trips" element={<OperatorTrips />} />
          <Route path="seats" element={<OperatorSeats />} />
          <Route path="bookings" element={<OperatorBookings />} />
          <Route path="parcels" element={<OperatorParcels />} />
          <Route path="financials" element={<OperatorFinancials />} />
          <Route path="fleet" element={<OperatorFleet />} />
          <Route path="analytics" element={<OperatorAnalytics />} />
          <Route path="settings" element={<OperatorSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
