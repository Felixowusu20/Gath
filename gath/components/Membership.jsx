import Image from "next/image"

const executives = [
  {
    name: "Dr.Nicholas Imbeah",
    img: "/BoardChairman.jpg",
    desc: "Board Chairman",
    color: "from-green-100 to-green-50 border-green-300 text-green-900"
  },
  {
    name: "Anna Sankara Mbabun",
    img: "/vicepresident.jpg",
    desc: "Vice President",
    color: "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-900"
  },
  {
    name: "Kenneth Ankomah",
    img: "/Sec.jpg",
    desc: "Secretary",
    color: "from-blue-100 to-blue-50 border-blue-300 text-blue-900"
  },
  {
    name: "Lady Alexandria Etornam Akuamoah",
    img: "/WOCOM.jpg",
    desc: "WOCOM",
    color: "from-pink-100 to-pink-50 border-pink-300 text-pink-900"
  },
  {
    name: "Acheampong Emmanuel",
    img: "/Tr.jpg",
    desc: "Treasurer",
    color: "from-purple-100 to-purple-50 border-purple-300 text-purple-900"
  }
];

export default function Executives() {
  return (
    <section id="membership" className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">Meet Our Executives</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          The leadership team driving Ghana’s tourism and hospitality excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-stretch justify-center">
          {executives.map((exec, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${exec.color} border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col items-center justify-between h-full min-h-[280px] cursor-pointer`}
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center w-full mb-3">
                  <div className="relative w-36 h-36">
                    <Image
                      src={exec.img}
                      alt={exec.name}
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-green-200"
                      sizes="144px"
                    />
                  </div>
                </div>
                  <h3 className={`text-base md:text-lg font-bold mb-1 text-center break-words ${exec.textColor || ''}`}>{exec.name}</h3>
                  <p className={`font-semibold mb-1 text-center ${exec.textColor || ''}`}>{exec.role}</p>
                  <p
                    className="text-xs md:text-sm text-gray-700 text-center font-medium mt-2
                      opacity-100 max-h-32 transition-all duration-300 overflow-hidden
                      md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-32"
                  >
                    {exec.desc}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
