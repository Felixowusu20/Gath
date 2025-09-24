

import Image from 'next/image';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-4.5 9-4.5-9" /></svg>
    ),
    text: 'Internship slots opportunities',
    color: 'bg-green-100 text-green-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3" /></svg>
    ),
    text: 'Strategic connections and networking with high industry players.',
    color: 'bg-yellow-100 text-yellow-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
    ),
    text: 'Career guidance and training with like minded people.',
    color: 'bg-pink-100 text-pink-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
    ),
    text: 'Job opportunities within and outside the course and our field of study.',
    color: 'bg-blue-100 text-blue-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
    ),
    text: 'GATHS T shirts and cloth.',
    color: 'bg-green-100 text-green-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    text: 'Entrepreneurship training and Networking opportunities with industry professionals.',
    color: 'bg-yellow-100 text-yellow-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-4.5 9-4.5-9" /></svg>
    ),
    text: 'Access to industry-specific resources and best practices.',
    color: 'bg-pink-100 text-pink-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3" /></svg>
    ),
    text: 'Participation in conferences and events for knowledge exchange.',
    color: 'bg-blue-100 text-blue-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
    ),
    text: 'Stay updated on the latest trends and developments in tourism and hospitality.',
    color: 'bg-green-100 text-green-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>
    ),
    text: 'Advocacy and representation in policy matters affecting the industry.',
    color: 'bg-yellow-100 text-yellow-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
    ),
    text: 'Training and educational programs for skill enhancement.',
    color: 'bg-pink-100 text-pink-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-4.5 9-4.5-9" /></svg>
    ),
    text: 'Collaboration opportunities with other businesses in the sector.',
    color: 'bg-blue-100 text-blue-900',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3" /></svg>
    ),
    text: 'Recognition and credibility for being a member of a reputable national association.',
    color: 'bg-green-100 text-green-900',
  },
];

export default function GathsMission() {
  return (
    <section id="hotels" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-xl p-0 md:p-0 flex flex-col md:flex-row items-center overflow-hidden mb-12">
          {/* Content Left */}
          <div className="flex-1 p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-4">Our Mission</h2>
            {/* Desktop/full version */}
            <p className="hidden md:block text-lg md:text-xl text-gray-700 mb-4">
              At <span className="font-bold text-green-800">GATHS</span>, we are on a <span className="italic text-green-700">mission</span> to unite students of Tourism, Hospitality, and related programs at the tertiary level to drive the growth of Ghana's tourism and hospitality sector. We bridge the academia-industry gap, advocate for member welfare, and elevate the industry's status through impactful educational programs.
            </p>
            <p className="hidden md:block text-base text-gray-600 mb-2">GATHS offers a dynamic platform to expand your horizons and connect with like-minded individuals.</p>
            {/* Mobile/summary version */}
            <p className="block md:hidden text-base text-gray-700 mb-3">
              <span className="font-bold text-green-800">GATHS</span> unites students in Tourism & Hospitality to drive Ghana's sector growth, bridge academia and industry, and empower members.
            </p>
            <p className="block md:hidden text-sm text-gray-600 mb-2">Join us to connect, learn, and grow together.</p>
          </div>
          {/* Image Right */}
          <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-green-100 via-yellow-50 to-white p-8 md:p-12">
            <Image src="/logo.png" alt="GATHS Logo" width={220} height={220} className="rounded-2xl shadow-2xl border-4 border-green-200 bg-white object-cover object-center transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Benefits of Being a GATHS Member</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-xl p-5 shadow-sm ${b.color} bg-opacity-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
                style={{ minHeight: '110px' }}
              >
                <div className="flex-shrink-0 animate-bounce-slow mb-2 sm:mb-0">
                  {b.icon}
                </div>
                <div className="flex-1 flex flex-col items-center sm:items-start">
                  <div className="text-base font-medium leading-snug mb-2 text-center sm:text-left">{b.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://job-search-psi-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-700 text-white rounded-full font-bold shadow-lg hover:bg-green-800 transition text-lg sm:text-base text-center w-full sm:w-auto"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
      {/* Animation moved to Tailwind utility below */}
    </section>
  );
}


