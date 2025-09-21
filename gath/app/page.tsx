
import Hero from "../components/Hero";
import HotelsList from "../components/HotelsList";
import Membership from "../components/Membership";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* About the Association Section */}
        <section className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 flex items-center gap-3 justify-center">
            <svg className="w-10 h-10 text-green-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            Ghana Tourism & Hospitality Association
          </h2>
          <p className="text-gray-700 max-w-2xl mb-8 text-lg">
            Uniting Ghana’s tourism and hospitality professionals to foster sustainable growth, celebrate cultural heritage, and deliver world-class experiences for all.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mt-4">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-8 shadow flex flex-col items-center">
              <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-4.5 9-4.5-9" /></svg>
              <span className="text-xl font-bold text-green-800 mb-1">Verified Members</span>
              <span className="text-gray-600 text-sm">A trusted network of hotels, guides, and tourism professionals across Ghana.</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-8 shadow flex flex-col items-center">
              <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>
              <span className="text-xl font-bold text-green-800 mb-1">Cultural Experiences</span>
              <span className="text-gray-600 text-sm">Showcasing Ghana’s rich heritage, local traditions, and authentic adventures.</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-8 shadow flex flex-col items-center">
              <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
              <span className="text-xl font-bold text-green-800 mb-1">Sustainable Tourism</span>
              <span className="text-gray-600 text-sm">Committed to responsible travel, community support, and environmental stewardship.</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-8 shadow flex flex-col items-center">
              <svg className="w-10 h-10 text-green-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
              <span className="text-xl font-bold text-green-800 mb-1">Professional Development</span>
              <span className="text-gray-600 text-sm">Workshops, networking, and resources for members to grow and excel.</span>
            </div>
          </div>
          <div className="mt-10 max-w-3xl text-gray-600 text-base">
            <p>
              Whether you are a traveler seeking authentic Ghanaian experiences, a hotelier, a tour guide, or a hospitality professional, our association is your gateway to opportunity, collaboration, and excellence. <span className="text-green-700 font-semibold">Join us as we build a brighter future for Ghana’s tourism industry—together.</span>
            </p>
          </div>
  </section>

  {/* Testimonials Section */}
  <Testimonials />

        {/* Placeholder for more sections */}
        <section>
          <HotelsList />
          </section>  
          <section>
            <Membership />
          </section>
          <section>
            <Contact/>
          </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t bg-white">
        &copy; {new Date().getFullYear()} Gath. All rights reserved.
      </footer>
    </div>
  );
}
