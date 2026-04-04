export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      <div className="bg-navy-800 py-16"><div className="max-w-3xl mx-auto px-5 text-center"><span className="section-label">Our Story</span><h1 className="font-display font-extrabold text-white text-4xl mb-3">About Raylane Express</h1><p className="text-white/60 text-lg">Building smarter transport for Uganda and East Africa.</p></div></div>
      <div className="max-w-3xl mx-auto px-5 py-12 space-y-8">
        {[['Our Mission','Raylane Express was founded to solve a real problem — booking transport in Uganda and East Africa was unpredictable, cash-only, and stressful. We built a platform that gives passengers real-time seat availability, mobile money payments, and instant confirmation, while giving operators the tools to manage their fleets professionally.'],['The Platform','We are more than a booking site. Raylane is a full ecosystem: a booking platform for passengers, a SaaS tool for operators, a financial controller for fleet owners, and a logistics engine for parcel delivery — all connected in real time.'],['Our Values','Reliability, transparency, and innovation. Every trip booked through Raylane comes with a guarantee: your seat is confirmed, your payment is secure, and our support team is always reachable.']].map(([title, text]) => (
          <div key={title} className="bg-navy-50 rounded-2xl p-6">
            <h2 className="font-display font-bold text-navy-800 text-xl mb-3">{title}</h2>
            <p className="text-navy-600 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
