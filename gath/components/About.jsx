import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<section className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 min-h-[60vh] flex items-center justify-center">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<div className="flex flex-col md:flex-row items-center gap-8 mb-10">
					<div className="flex-1 flex justify-center">
						<Image src="/BoardChairman.jpg" alt="GATHS Logo" width={150} height={150} className="rounded-full shadow-lg border-4 border-green-200 bg-white" />
					</div>
					<div className="flex-1">
						<h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-green-900 mb-4">About GATHS</h1>
						<p className="text-base sm:text-lg md:text-xl text-gray-700">
							<span className="font-bold text-green-800">GATHS</span> - Ghana Association of Tourism and Hospitality Students
						</p>
					</div>
				</div>
					{/* Summary for mobile, full text for larger screens */}
					<div className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-5 sm:p-8 md:p-10 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
						<span className="block sm:hidden">
							GATHS is the official student association for tourism and hospitality in Ghana, working with national and private partners to promote the industry and support students.
						</span>
						<span className="hidden sm:block">
							We operate officially through the auspices of the Ministry of Tourism, Arts and Culture, the Ghana Tourism Authority, the Ghana Tourism Federation and other Non-governmental organizations as well as private individuals who have interest in tourism, hospitality, arts and culture related programs/fields.
						</span>
					</div>
				<div className="mt-10 flex flex-col md:flex-row gap-8 justify-center items-center">
					<div className="flex flex-col items-center w-full">
						<span className="text-green-700 font-semibold text-lg mb-4">Supported by:</span>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
							<li className="flex items-center gap-3 bg-green-100 rounded-lg px-4 py-3 shadow">
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600/90 text-white">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
								</span>
								<span className="font-medium text-green-900">Ministry of Tourism, Arts and Culture</span>
							</li>
							<li className="flex items-center gap-3 bg-yellow-100 rounded-lg px-4 py-3 shadow">
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l-4.5 9-4.5-9" /></svg>
								</span>
								<span className="font-medium text-yellow-900">Ghana Tourism Authority</span>
							</li>
							<li className="flex items-center gap-3 bg-pink-100 rounded-lg px-4 py-3 shadow">
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-400 text-white">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3" /></svg>
								</span>
								<span className="font-medium text-pink-900">Ghana Tourism Federation</span>
							</li>
							<li className="flex items-center gap-3 bg-blue-100 rounded-lg px-4 py-3 shadow">
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8h-8" /></svg>
								</span>
								<span className="font-medium text-blue-900">NGOs &amp; Private Individuals</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
