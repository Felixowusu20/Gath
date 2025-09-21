import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[70vh] md:h-[80vh] w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/ghana.png"
          alt="Ghana tourism"
          fill
          priority
          className="object-cover w-full h-full brightness-75"
          sizes="100vw"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/0" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg mb-4">
          Discover Ghana — Culture, Comfort, Hospitality
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow">
          Connecting travelers and hospitality professionals to build sustainable tourism across Ghana.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#hotels"
            className="px-8 py-3 bg-yellow-400 text-black rounded-md font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Find Attractions
          </a>
          <a
            href="#membership"
            className="px-8 py-3 border border-white/40 text-white rounded-md font-semibold hover:bg-white/10 transition"
          >
            Our Executives
          </a>
        </div>
      </div>
    </section>
  );
}
