import Hero from "../components/Hero";
import HotelsList from "../components/HotelsList";
import Membership from "../components/Membership";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-16">
        {/* Example Section: About or Features */}
        <section className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Choose Gath?</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Gath connects travelers and hospitality professionals, making it easy to discover the best of Ghana. Enjoy curated hotel listings, local experiences, and a vibrant community dedicated to sustainable tourism.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <div className="bg-yellow-100 text-yellow-800 rounded-lg px-6 py-4 font-medium shadow-sm">Verified Hotels</div>
            <div className="bg-pink-100 text-pink-800 rounded-lg px-6 py-4 font-medium shadow-sm">Local Experiences</div>
            <div className="bg-green-100 text-green-800 rounded-lg px-6 py-4 font-medium shadow-sm">Community Support</div>
          </div>
        </section>

        {/* Placeholder for more sections */}
        <section>
          <HotelsList />
          </section>  
          <section>
            <Membership />
          </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t bg-white">
        &copy; {new Date().getFullYear()} Gath. All rights reserved.
      </footer>
    </div>
  );
}
