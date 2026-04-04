export const CITIES = [
  { id: 'kampala', name: 'Kampala', country: 'Uganda', hub: true },
  { id: 'gulu', name: 'Gulu', country: 'Uganda' },
  { id: 'mbale', name: 'Mbale', country: 'Uganda' },
  { id: 'jinja', name: 'Jinja', country: 'Uganda' },
  { id: 'mbarara', name: 'Mbarara', country: 'Uganda' },
  { id: 'fortportal', name: 'Fort Portal', country: 'Uganda' },
  { id: 'masaka', name: 'Masaka', country: 'Uganda' },
  { id: 'kabale', name: 'Kabale', country: 'Uganda' },
  { id: 'lira', name: 'Lira', country: 'Uganda' },
  { id: 'nairobi', name: 'Nairobi', country: 'Kenya' },
  { id: 'mombasa', name: 'Mombasa', country: 'Kenya' },
  { id: 'kigali', name: 'Kigali', country: 'Rwanda' },
  { id: 'juba', name: 'Juba', country: 'South Sudan' },
  { id: 'arusha', name: 'Arusha', country: 'Tanzania' },
]

export const VEHICLE_TYPES = [
  { id: 'any', label: 'Any Type' },
  { id: 'taxi', label: 'Taxi / Matatu' },
  { id: 'minibus', label: 'Minibus (14–22)' },
  { id: 'coach', label: 'Coach / Bus' },
]

export const MOCK_TRIPS = [
  { id: 't1', from: 'Kampala', to: 'Mbale', departure: '07:00', arrival: '11:00', duration: '4h', price: 30000, currency: 'UGX', seatsTotal: 45, seatsLeft: 12, operator: 'Gateway Bus', vehicle: 'Coach', rating: 4.7, amenities: ['WiFi', 'AC', 'USB'] },
  { id: 't2', from: 'Kampala', to: 'Mbale', departure: '09:30', arrival: '13:30', duration: '4h', price: 28000, currency: 'UGX', seatsTotal: 18, seatsLeft: 4, operator: 'Link Express', vehicle: 'Minibus', rating: 4.5, amenities: ['AC'] },
  { id: 't3', from: 'Kampala', to: 'Nairobi', departure: '08:00', arrival: '18:00', duration: '10h', price: 120000, currency: 'UGX', seatsTotal: 50, seatsLeft: 18, operator: 'Kampala Coach', vehicle: 'Coach', rating: 4.8, amenities: ['WiFi', 'AC', 'Meals', 'USB'] },
  { id: 't4', from: 'Kampala', to: 'Gulu', departure: '06:00', arrival: '11:00', duration: '5h', price: 45000, currency: 'UGX', seatsTotal: 45, seatsLeft: 22, operator: 'Post Bus UG', vehicle: 'Coach', rating: 4.3, amenities: ['AC'] },
  { id: 't5', from: 'Kampala', to: 'Jinja', departure: '14:00', arrival: '16:00', duration: '2h', price: 15000, currency: 'UGX', seatsTotal: 14, seatsLeft: 6, operator: 'Safe Rider', vehicle: 'Taxi', rating: 4.6, amenities: [] },
  { id: 't6', from: 'Kampala', to: 'Kigali', departure: '05:00', arrival: '14:00', duration: '9h', price: 120000, currency: 'UGX', seatsTotal: 45, seatsLeft: 8, operator: 'Gateway Bus', vehicle: 'Coach', rating: 4.6, amenities: ['WiFi', 'AC', 'Meals'] },
]

export const SIGHTS = [
  { id: 's1', name: 'Bwindi Impenetrable Forest', route: 'Kampala → Kabale', duration: '7h drive', desc: "Home to half the world's mountain gorillas. UNESCO World Heritage Site.", category: 'Wildlife', color: 'from-green-900 to-green-700', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80' },
  { id: 's2', name: 'Source of the Nile, Jinja', route: 'Kampala → Jinja', duration: '2h drive', desc: "Birthplace of the world's longest river. Rafting, kayaking & boat tours.", category: 'Adventure', color: 'from-blue-900 to-blue-700', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80' },
  { id: 's3', name: 'Murchison Falls', route: 'Kampala → Gulu road', duration: '4h drive', desc: "World's most powerful waterfall by flow. Nile wildlife cruise nearby.", category: 'Nature', color: 'from-amber-900 to-amber-700', image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80' },
  { id: 's4', name: 'Lake Bunyonyi', route: 'Kampala → Kabale', duration: '7h drive', desc: "Africa's deepest lake — 29 islands, canoeing and highland scenery.", category: 'Scenic', color: 'from-teal-900 to-teal-700', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80' },
  { id: 's5', name: 'Sipi Falls, Elgon', route: 'Kampala → Mbale', duration: '4h drive', desc: 'Three cascading waterfalls on Mount Elgon slopes. Hiking & coffee tours.', category: 'Adventure', color: 'from-purple-900 to-purple-700', image: 'https://images.unsplash.com/photo-1518623001395-125242310d0c?w=800&q=80' },
  { id: 's6', name: 'Kibale Forest — Chimps', route: 'Kampala → Fort Portal', duration: '5h drive', desc: 'Best place in Africa to track chimpanzees in their natural habitat.', category: 'Wildlife', color: 'from-emerald-900 to-emerald-700', image: 'https://images.unsplash.com/photo-1503424886307-b090341d25d1?w=800&q=80' },
]

export const PARTNERS = [
  'Gateway Bus', 'Gaagaa Express', 'Post Bus UG', 'Link Bus',
  'Ucar Tours', 'Kampala Coach', 'Safe Rider', 'Eagle Express',
  'Northern Coach', 'Western Star', 'Pearl Lines', 'Victoria Express',
]

export const TESTIMONIALS = [
  { name: 'Sarah M.', route: 'Kampala → Nairobi', rating: 5, text: 'Booked in minutes, seat reserved, bus was on time. Paid balance with MTN MoMo at the stage. Absolute game changer for East Africa travel.', avatar: 'SM' },
  { name: 'James K.', route: 'Solo Trip · Bwindi', rating: 5, text: "The tourist planner organised my entire Bwindi trip — transport, tips, everything. Travelling solo and this gave me total confidence.", avatar: 'JK' },
  { name: 'Alice B.', route: 'Group Charter · Gulu', rating: 5, text: 'Chartered a coach for 24 colleagues. Got a quote in 2 hours. Driver was punctual, vehicle spotless. Raylane is changing transport in Uganda.', avatar: 'AB' },
  { name: 'David O.', route: 'Mbale → Kampala', rating: 4, text: 'Advanced booking feature is brilliant. Paid 20% a week before — seat was waiting. No stress at the park.', avatar: 'DO' },
]

export const TRAVEL_TIPS = [
  'Best time to visit Bwindi for gorilla trekking is June–August. Book transport and permits well in advance!',
  'For Source of the Nile in Jinja, depart Kampala early to catch boat tours before midday crowds.',
  'Murchison Falls is ~4 hours from Kampala. Pack snacks — fewer stops on the northern highway.',
  'Fort Portal is ideal base for Kibale Forest, Queen Elizabeth NP, and Crater Lakes. All within 1 hour.',
  'Sipi Falls: go at sunrise for the mist and a peaceful, crowd-free waterfall experience.',
  'Roads to Kabale and Kisoro are scenic mountain routes — sit on the right for the best views!',
]

export const DEPARTURES_LIVE = [
  { id: 'd1', route: 'Kampala → Mbale', time: '2:30 PM', seatsLeft: 4, price: 'UGX 30,000', urgent: true },
  { id: 'd2', route: 'Kampala → Jinja', time: '3:00 PM', seatsLeft: 6, price: 'UGX 15,000', urgent: false },
  { id: 'd3', route: 'Nairobi → Kisumu', time: '3:15 PM', seatsLeft: 5, price: 'KES 1,200', urgent: true },
  { id: 'd4', route: 'Kampala → Gulu', time: '4:00 PM', seatsLeft: 12, price: 'UGX 45,000', urgent: false },
  { id: 'd5', route: 'Kampala → Kigali', time: '5:00 PM', seatsLeft: 3, price: 'UGX 120,000', urgent: true },
  { id: 'd6', route: 'Mbarara → Kampala', time: '5:30 PM', seatsLeft: 8, price: 'UGX 25,000', urgent: false },
]

export const NAV_LINKS = [
  { label: 'Routes', href: '/routes' },
  { label: 'Parcels', href: '/parcels' },
  { label: 'Plan Trip', href: '/plan' },
  { label: 'Charter', href: '/charter' },
  { label: 'Sightseeing', href: '/sightseeing' },
  { label: 'About', href: '/about' },
]
