import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-green-900 mb-2">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">We'd love to hear from you! Reach out for inquiries, partnerships, or support.</p>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">
          <div className="flex-1 text-center md:text-left rounded-xl p-8 border border-gray-200 bg-white shadow-sm mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-gray-900 mb-1">
              <EnvelopeIcon className="h-5 w-5 text-green-700" />
              Email
            </div>
            <a href="mailto:gathstudents420@gmail.com" className="text-green-700 hover:underline break-all">gathstudents420@gmail.com</a>
            <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-gray-900 mt-5 mb-1">
              <PhoneIcon className="h-5 w-5 text-green-700" />
              Phone
            </div>
            <a href="tel:+233241234567" className="text-green-700 hover:underline">+233 24 123 4567</a>
            <div className="flex items-center justify-center md:justify-start gap-2 font-semibold text-gray-900 mt-5 mb-1">
              <MapPinIcon className="h-5 w-5 text-green-700" />
              Address
            </div>
            <div className="text-gray-700">79 Kojo Thompson Rd, Accra, Ghana</div>
          </div>
          <form
            className="flex-1 bg-white rounded-xl shadow-sm p-8 flex flex-col gap-4 border border-gray-200"
            action="https://formspree.io/f/xnqewqzq"
            method="POST"
          >
            <input
              className="p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 placeholder-gray-400"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded shadow-sm transition text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
