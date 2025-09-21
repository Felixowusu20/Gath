
import Image from 'next/image';

// Sample associations; in production, fetch from API
const sampleAssociations = [
  {
    id: 1,
    name: 'Ghana Hoteliers Association',
    location: 'Accra',
    img: '/ghana.png',
    description: 'Promoting excellence in hospitality and tourism across Ghana.',
    website: '#',
  },
  {
    id: 2,
    name: 'Tour Guides Association',
    location: 'Kumasi',
    img: '/ghana.png',
    description: 'Certified guides offering authentic Ghanaian experiences.',
    website: '#',
  },
  {
    id: 3,
    name: 'EcoTourism Network',
    location: 'Cape Coast',
    img: '/ghana.png',
    description: 'Connecting travelers to sustainable tourism initiatives.',
    website: '#',
  },
];


export default function TourismAssociationsList({ associations = sampleAssociations }) {
  return (
    <section id="hotels" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-green-900 mb-4 text-center">Tourism Associations in Ghana</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Explore leading tourism and hospitality associations dedicated to promoting Ghana’s vibrant culture, sustainable travel, and world-class hospitality.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {associations.map(a => (
            <article
              key={a.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image src={a.img} alt={a.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-green-800 mb-1">{a.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{a.location}</p>
                  <p className="text-gray-700 text-sm mb-4">{a.description}</p>
                </div>
                <a
                  className="inline-block mt-auto px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
                  href={a.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
