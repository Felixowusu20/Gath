import Image from "next/image";

const testimonials = [
  {
    name: "Akosua Boateng",
    img: "/img1.webp",
    text: "Gath made my trip to Ghana unforgettable! The hotels and guides were top-notch, and I felt truly welcomed everywhere I went.",
  },
  {
    name: "Kwame Mensah",
    img: "/img2.jpeg",
    text: "As a hotelier, joining the association has opened doors to new partnerships and professional growth. Highly recommended!",
  },
  {
    name: "Ama Ofori",
    img: "/img4.webp",
    text: "The community support and cultural experiences I found through Gath are unmatched. I always recommend it to fellow travelers.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-10">What People Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover border-4 border-green-100 shadow"
                  sizes="80px"
                />
              </div>
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <div className="font-semibold text-green-800">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
