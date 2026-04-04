# Raylane Express – Full Platform

Smart Travel Across Uganda & East Africa — full-stack React frontend ready for Render deployment.

## 🚀 Deploy to Render

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repo
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`
6. Add environment variables from `.env.example`
7. Click **Deploy**

Render auto-detects `render.yaml` — all routes rewrite to `index.html` for SPA routing.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx          # Public site wrapper
│   │   ├── Navbar.jsx          # Responsive nav + mobile bottom nav
│   │   ├── Footer.jsx          # Full footer with ecosystem links
│   │   ├── AdminLayout.jsx     # Admin portal sidebar layout
│   │   └── OperatorLayout.jsx  # Operator portal sidebar layout
│   ├── ui/
│   │   ├── index.jsx           # Reusable UI components
│   │   └── LoadingScreen.jsx   # Loading spinner
│   └── home/
│       ├── HeroSection.jsx     # Hero with Ken Burns + search box
│       └── Sections.jsx        # All other home sections
├── pages/
│   ├── Home.jsx                # Public homepage (lean + decongested)
│   ├── SearchResults.jsx       # Trip search with filters + skeleton
│   ├── SeatSelection.jsx       # Visual seat map (RHD Uganda layout)
│   ├── PaymentPage.jsx         # MoMo / card payment + advance booking
│   ├── TicketPage.jsx          # QR ticket confirmation
│   ├── ParcelsPage.jsx         # Send & track parcels
│   ├── TouristPlanner.jsx      # AI-style itinerary planner
│   ├── CharterPage.jsx         # Group/charter vehicle quote
│   ├── RoutesPage.jsx          # All routes with pricing
│   ├── SightseeingPage.jsx     # Scenic route destinations
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── NotFound.jsx
│   ├── auth/
│   │   ├── Login.jsx           # Phone + OTP (passenger/operator/admin)
│   │   └── OperatorApply.jsx   # Operator onboarding form
│   ├── admin/
│   │   ├── Dashboard.jsx       # KPIs, revenue chart, pending approvals
│   │   ├── Financials.jsx      # QuickBooks-style P&L, payouts
│   │   ├── Operators.jsx
│   │   ├── Trips.jsx
│   │   ├── Bookings.jsx
│   │   ├── Payments.jsx
│   │   ├── Fleet.jsx
│   │   ├── Parcels.jsx
│   │   ├── Analytics.jsx
│   │   └── Settings.jsx
│   └── operator/
│       ├── Dashboard.jsx       # Operator KPIs, today's trips
│       ├── Financials.jsx      # Income, expenses, vendors, reports
│       ├── Trips.jsx
│       ├── Seats.jsx
│       ├── Bookings.jsx
│       ├── Parcels.jsx
│       ├── Fleet.jsx
│       ├── Analytics.jsx
│       └── Settings.jsx
├── store/
│   └── useAppStore.js          # Zustand global state
├── services/
│   └── api.js                  # Full API service layer
└── data/
    └── constants.js            # Mock data, cities, routes, sights
```

---

## 🌐 URL Structure

| Path | Description |
|------|-------------|
| `/` | Public homepage |
| `/search` | Trip search results |
| `/book/:id/seats` | Seat selection |
| `/book/:id/pay` | Payment |
| `/ticket/:ref` | QR e-ticket |
| `/parcels` | Send & track parcels |
| `/plan` | Tourist itinerary planner |
| `/charter` | Charter vehicle quote |
| `/routes` | Route listings |
| `/sightseeing` | Scenic destinations |
| `/login` | Passenger / operator / admin login |
| `/operator/apply` | Operator onboarding |
| `/admin` | Admin dashboard |
| `/admin/financials` | QuickBooks-style financials |
| `/operator` | Operator dashboard |
| `/operator/financials` | Operator P&L |

---

## 🎨 Design System

- **Colors**: Navy `#0B1D45` + Gold `#F5A623`
- **Fonts**: Sora (display/headings) + DM Sans (body)
- **Framework**: Tailwind CSS v3
- **State**: Zustand
- **Routing**: React Router v6
- **Motion**: CSS animations (Ken Burns, fade-up, scroll-x)

---

## 🔌 Connecting a Backend

Replace mock data in `src/data/constants.js` with real API calls from `src/services/api.js`.

Set `VITE_API_URL` in your Render environment variables to your backend URL.

Recommended backend stack: **Node.js + Express + PostgreSQL + Redis** (for seat locking).

---

## 💰 Revenue Streams Built Into Platform

1. Booking commissions (admin-configurable %)
2. Priority listing fees for operators
3. SMS broadcast charges
4. Charter booking markup
5. Premium module subscriptions
6. Parcel delivery commissions
