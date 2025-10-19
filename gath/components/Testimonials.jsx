"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon, ChatBubbleBottomCenterTextIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/outline"

const testimonials = [
  {
    name: "Mr. Felix Owusu",
    img: "/img1.webp",
    text: "Gath made my trip to Ghana unforgettable! The hotels and guides were top-notch, and I felt truly welcomed everywhere I went.",
  },
  {
    name: "Mr . Kenneth Ankomah",
    img: "/Sec.jpg",
    text: "As a hotelier, joining the association has opened doors to new partnerships and professional growth. Highly recommended!",
  },
  {
    name: "Alexandria",
    img: "/WOCOM.jpg",
    text: "The community support and cultural experiences I found through Gath are unmatched. I always recommend it to fellow travelers.",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const total = testimonials.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(() => next(), 5000)
    return () => clearInterval(id)
  }, [autoplay, total])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">What People Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">Real voices from our community.</p>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
              </div>
              <div className="relative h-20 w-20 mb-4">
                <Image src={t.img} alt={t.name} fill className="rounded-full object-cover border-4 border-white shadow ring-2 ring-green-200/60" sizes="80px" />
              </div>
              <p className="text-base md:text-lg text-gray-700 italic text-center max-w-xl">“{t.text}”</p>
              <div className="mt-3 font-semibold text-green-800">{t.name}</div>
            </div>
          </div>

          <button aria-label="Previous" onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button aria-label="Next" onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${i === index ? "w-6 bg-green-700" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
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
      </div>
    </section>
  )
}
