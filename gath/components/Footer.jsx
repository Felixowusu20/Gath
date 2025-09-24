import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="GATHS logo" width={60} height={60} className="rounded-full bg-white p-1 shadow-lg" />
            <div>
              <div className="font-extrabold text-xl tracking-wide text-green-400">GATHS</div>
              <div className="text-sm text-white/70">Ghana Association of Tourism & Hospitality Students</div>
            </div>
          </div>
          <p className="text-xs text-white/60 max-w-xs mt-2">
            Promoting sustainable tourism, cultural heritage, and world-class hospitality across Ghana.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#about" className="hover:underline hover:text-green-300 transition">About</a></li>
            <li><a href="#hotels" className="hover:underline hover:text-green-300 transition">Mission</a></li>
            <li><a href="#membership" className="hover:underline hover:text-green-300 transition">Executives</a></li>
            <li><a href="#testimonials" className="hover:underline hover:text-green-300 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline hover:text-green-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-base">Contact</h4>
          <p className="text-sm flex items-center gap-2"><span className="material-icons text-base">location_on</span>Accra, Ghana</p>
          <a href="mailto:gathstudents420@gmail.com" className="text-sm hover:underline hover:text-green-300 transition break-all">gathstudents420@gmail.com</a>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><Image src="/facebook.svg" width={24} height={24} alt="facebook"/></a>
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><Image src="/instagram.svg" width={24} height={24} alt="instagram"/></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><Image src="/twitter.svg" width={24} height={24} alt="twitter"/></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><Image src="/linkedin.svg" width={24} height={24} alt="linkedin"/></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-white/20 bg-black">
        © {new Date().getFullYear()} GATHS — Ghana Association of Tourism & Hospitality Students. All rights reserved.
      </div>
    </footer>
  );
}
