import Image from "next/image"

const executives = [
  {
    name: "Mr. Kwame Mensah",
    role: "President",
    img: "/img2.jpeg",
    desc: "Leading the association with a vision to promote Ghana’s tourism and hospitality excellence.",
  },
  {
    name: "Mrs. Ama Ofori",
    role: "Vice President",
    img: "/img1.webp",
    desc: "Supporting growth and development across Ghana’s hospitality sector.",
  },
  {
    name: "Mr. John K. Addo",
    role: "Secretary",
    img: "/img4.webp",
    desc: "Ensuring smooth operations and effective communication within the association.",
  },
  {
    name: "Mrs. Efua Baidoo",
    role: "Treasurer",
    img: "/logo.png",
    desc: "Overseeing financial management with transparency and accountability.",
  },
];

export default function Executives() {
  return (
    <section id="membership" className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">Meet Our Executives</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          The leadership team driving Ghana’s tourism and hospitality excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {executives.map((exec, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-8 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={exec.img}
                  alt={exec.name}
                  fill
                  className="rounded-full object-cover border-4 border-green-100 shadow"
                  sizes="128px"
                />
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-1">{exec.name}</h3>
              <p className="text-green-700 font-medium mb-2">{exec.role}</p>
              <p className="text-sm text-gray-600">{exec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
