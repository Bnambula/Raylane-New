export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-0">
      <div className="bg-navy-800 py-16"><div className="max-w-3xl mx-auto px-5 text-center"><span className="section-label">Get in Touch</span><h1 className="font-display font-extrabold text-white text-4xl mb-3">Contact Us</h1><p className="text-white/60 text-lg">We're here to help with bookings, support, and partnerships.</p></div></div>
      <div className="max-w-2xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[['📞 Call Us','+256 700 123 466','Available 6am – 10pm EAT'],['✉️ Email','info@raylane.com','Response within 2 hours'],['📍 Office','Kampala, Uganda','Plot 12, Kampala Road'],['💬 WhatsApp','+256 700 123 466','Fastest response channel']].map(([l,v,s]) => (
            <div key={l} className="bg-navy-50 rounded-2xl p-5">
              <p className="font-display font-bold text-navy-800 mb-0.5">{l}</p>
              <p className="text-gold-600 font-semibold">{v}</p>
              <p className="text-xs text-navy-400 mt-1">{s}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-navy-100 rounded-2xl p-6 shadow-navy-sm space-y-4">
          <h2 className="font-display font-bold text-navy-800">Send a Message</h2>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Name</label><input type="text" className="form-input" placeholder="Your name"/></div>
            <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Email</label><input type="email" className="form-input" placeholder="you@example.com"/></div>
          </div>
          <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Subject</label><input type="text" className="form-input" placeholder="How can we help?"/></div>
          <div><label className="text-sm font-medium text-navy-700 block mb-1.5">Message</label><textarea rows={4} className="form-input resize-none" placeholder="Tell us more..."/></div>
          <button className="btn-primary w-full justify-center py-4">Send Message</button>
        </div>
      </div>
    </div>
  )
}
