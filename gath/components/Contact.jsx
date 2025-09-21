export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-green-900 mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Reach out for inquiries, partnerships, or support.</p>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">
          <div className="flex-1 text-center md:text-left">
            <div className="font-semibold text-gray-800 mb-1">Email</div>
            <a href="mailto:owusuf6996@gmail.com" className="text-green-700 hover:underline">info@ghanahotelsassociation.com</a>
            <div className="font-semibold text-gray-800 mt-4 mb-1">Phone</div>
            <a href="tel:+233241234567" className="text-green-700 hover:underline">+233 24 123 4567</a>
            <div className="font-semibold text-gray-800 mt-4 mb-1">Address</div>
            <div className="text-gray-700">79 Kojo Thompson Rd, Accra, Ghana</div>
          </div>
          <form
            className="flex-1 bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            action="https://formspree.io/f/xnqewqzq"
            method="POST"
          >
            <input
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-900 text-white font-semibold py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
