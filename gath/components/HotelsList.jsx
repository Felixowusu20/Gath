

import Image from 'next/image';
import {
  AcademicCapIcon,
  UsersIcon,
  BriefcaseIcon,
  SparklesIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  HandRaisedIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: <BriefcaseIcon className="w-6 h-6 text-green-700" />,
    text: 'Internship slots opportunities',
    color: 'text-green-900',
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-yellow-600" />,
    text: 'Strategic connections and networking with high industry players.',
    color: 'text-yellow-900',
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6 text-pink-600" />,
    text: 'Career guidance and training with like minded people.',
    color: 'text-pink-900',
  },
  {
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-blue-600" />,
    text: 'Job opportunities within and outside the course and our field of study.',
    color: 'text-blue-900',
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-green-700" />,
    text: 'GATHS T shirts and cloth.',
    color: 'text-green-900',
  },
  {
    icon: <Cog6ToothIcon className="w-6 h-6 text-yellow-600" />,
    text: 'Entrepreneurship training and Networking opportunities with industry professionals.',
    color: 'text-yellow-900',
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-pink-600" />,
    text: 'Access to industry-specific resources and best practices.',
    color: 'text-pink-900',
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6 text-blue-600" />,
    text: 'Participation in conferences and events for knowledge exchange.',
    color: 'text-blue-900',
  },
  {
    icon: <SparklesIcon className="w-6 h-6 text-green-700" />,
    text: 'Stay updated on the latest trends and developments in tourism and hospitality.',
    color: 'text-green-900',
  },
  {
    icon: <HandRaisedIcon className="w-6 h-6 text-yellow-600" />,
    text: 'Advocacy and representation in policy matters affecting the industry.',
    color: 'text-yellow-900',
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6 text-pink-600" />,
    text: 'Training and educational programs for skill enhancement.',
    color: 'text-pink-900',
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-blue-600" />,
    text: 'Collaboration opportunities with other businesses in the sector.',
    color: 'text-blue-900',
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-700" />,
    text: 'Recognition and credibility for being a member of a reputable national association.',
    color: 'text-green-900',
  },
];

export default function GathsMission() {
  return (
    <section id="hotels" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-0 md:p-0 flex flex-col md:flex-row items-center overflow-hidden mb-12">
          {/* Content Left */}
          <div className="flex-1 p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2">Our Mission</h2>
            {/* Desktop/full version */}
            <p className="hidden md:block text-base md:text-lg text-gray-700 mb-3">
              At <span className="font-bold text-green-800">GATHS</span>, we are on a <span className="italic text-green-700">mission</span> to unite students of Tourism, Hospitality, and related programs at the tertiary level to drive the growth of Ghana's tourism and hospitality sector. We bridge the academia-industry gap, advocate for member welfare, and elevate the industry's status through impactful educational programs.
            </p>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="flex items-center gap-2 text-sm text-gray-700"><UsersIcon className="h-5 w-5 text-green-700" /> Unite students across Ghana</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><GlobeAltIcon className="h-5 w-5 text-green-700" /> Bridge academia and industry</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><AcademicCapIcon className="h-5 w-5 text-green-700" /> Empower with education</div>
              <div className="flex items-center gap-2 text-sm text-gray-700"><ArrowTrendingUpIcon className="h-5 w-5 text-green-700" /> Elevate industry standards</div>
            </div>
            <p className="hidden md:block text-sm text-gray-600 mt-4">GATHS offers a dynamic platform to expand your horizons and connect with like-minded individuals.</p>
            {/* Mobile/summary version */}
            <p className="block md:hidden text-base text-gray-700 mb-3">
              <span className="font-bold text-green-800">GATHS</span> unites students in Tourism & Hospitality to drive Ghana's sector growth, bridge academia and industry, and empower members.
            </p>
            <p className="block md:hidden text-sm text-gray-600 mb-2">Join us to connect, learn, and grow together.</p>
          </div>
          {/* Image Right */}
          <div className="flex-1 flex justify-center items-center bg-gray-50 p-8 md:p-12">
            <Image src="/logo.png" alt="GATHS Logo" width={220} height={220} className="rounded-2xl shadow border border-gray-200 bg-white object-contain object-center" />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12">
          <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">Benefits of Being a GATHS Member</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-xl p-5 border border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200`}
              >
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  {b.icon}
                </div>
                <div className="flex-1 flex flex-col items-center sm:items-start">
                  <div className={`text-base font-medium leading-snug mb-1 text-center sm:text-left ${b.color}`}>{b.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://job-search-psi-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-green-700 text-white rounded-full font-bold shadow hover:bg-green-800 transition text-lg sm:text-base text-center w-full sm:w-auto"
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


