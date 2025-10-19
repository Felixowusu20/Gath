"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { UserCircleIcon, BriefcaseIcon, ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/outline";

const executives = [
  {
    name: "Dr.Nicholas Imbeah",
    img: "/BoardChairman.jpg",
    desc: "Board Chairman",
    color: "from-green-100 to-green-50 border-green-300 text-green-900"
  },
  {
    name: "Anna Sankara Mbabun",
    img: "/vice president.jpg",
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
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const total = executives.length
  const exec = executives[index]

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => next(), 4000)
    return () => clearInterval(id)
  }, [autoplay, total])

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">Meet Our Executives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">The leadership team driving Ghana’s tourism and hospitality excellence.</p>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="group mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <div className="flex flex-col items-center">
              <div className="flex justify-center w-full mb-4">
                <div className="relative w-40 h-40">
                  <Image
                    key={exec.img}
                    src={exec.img}
                    alt={exec.name}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-sm ring-2 ring-green-200/60"
                    sizes="160px"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 text-center break-words text-gray-900 flex items-center gap-2 justify-center">
                <UserCircleIcon className="h-5 w-5 text-green-700" />
                {exec.name}
              </h3>
              <p className="text-sm text-gray-600 text-center flex items-center gap-2 justify-center">
                <BriefcaseIcon className="h-4 w-4 text-gray-500" />
                {exec.desc}
              </p>
            </div>
          </div>

          {/* Controls */}
          <button aria-label="Previous" onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button aria-label="Next" onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Dots & autoplay */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              {executives.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    i === index ? "w-6 bg-green-700" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setAutoplay((v) => !v)}
              className="ml-4 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
              aria-label={autoplay ? "Pause autoplay" : "Play autoplay"}
            >
              {autoplay ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
              {autoplay ? "Pause" : "Play"}
            </button>
          </div>
        </div>

        {/* Optional: show a peek of next/prev names for engagement */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <span className="opacity-80">{executives[(index - 1 + total) % total].name}</span>
          <span className="mx-2">•</span>
          <span className="font-semibold text-green-800">{executives[index].name}</span>
          <span className="mx-2">•</span>
          <span className="opacity-80">{executives[(index + 1) % total].name}</span>
        </div>
      </div>
    </section>
  )
}
