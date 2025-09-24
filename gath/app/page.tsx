
import Hero from "../components/Hero";
import HotelsList from "../components/HotelsList";
import Membership from "../components/Membership";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Location from "../components/Location";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12 flex flex-col gap-16">
        <section className="bg-white p-8 rounded-lg shadow-md">
          <About />
        </section>
        <section>
            <Membership />
          </section>
        <section>
          <HotelsList />
          </section>  
          
          <section>
            <Testimonials />
          </section>
          <section>
            <Contact/>
          </section>
          <section>
            <Location/>
          </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t bg-white">
        &copy; {new Date().getFullYear()} Gath. All rights reserved.
      </footer>
    </div>
  );
}
