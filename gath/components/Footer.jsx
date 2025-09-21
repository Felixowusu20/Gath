import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={54} height={54} className="rounded-full bg-white p-1" />
            <div>
              <div className="font-extrabold text-lg tracking-wide">Ghana Association of Tourism</div>
              <div className="text-sm text-white/70">Uniting hospitality and tourism professionals</div>
            </div>
          </div>
          <p className="text-xs text-white/60 max-w-xs mt-2">
            Dedicated to promoting sustainable tourism, cultural heritage, and world-class hospitality across Ghana.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#about" className="hover:underline hover:text-white transition">About</a></li>
            <li><a href="#hotels" className="hover:underline hover:text-white transition">Hotels</a></li>
            <li><a href="#events" className="hover:underline hover:text-white transition">Events</a></li>
            <li><a href="/jobs" className="hover:underline hover:text-white transition">Apply Job</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-base">Contact</h4>
          <p className="text-sm flex items-center gap-2"><span className="material-icons text-base">location_on</span>Accra, Ghana</p>
          <a href="mailto:info@ghana-tourism.org" className="text-sm hover:underline hover:text-white transition">info@ghana-tourism.org</a>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><Image src="/facebook.svg" width={24} height={24} alt="facebook"/></a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><Image src="/instagram.svg" width={24} height={24} alt="instagram"/></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><Image src="/twitter.svg" width={24} height={24} alt="twitter"/></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><Image src="/linkedin.svg" width={24} height={24} alt="linkedin"/></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-white/20 bg-black">
        © {new Date().getFullYear()} Ghana Association of Tourism & Hospitality — All rights reserved
      </div>
    </footer>
  );
}
