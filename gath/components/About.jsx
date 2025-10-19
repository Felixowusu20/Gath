import React from "react";
import Image from "next/image";
import { UsersIcon, BuildingOffice2Icon, AcademicCapIcon, CheckCircleIcon, BuildingLibraryIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function About() {
	return (
		<section className="relative py-24 bg-gradient-to-b from-white via-green-50 to-white">
			<div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
				<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[42rem] rounded-full bg-green-200/40 blur-3xl" />
			</div>
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
					<div className="md:col-span-7 flex flex-col items-start text-left">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-green-900">
							About <span className="text-green-700">GATHS</span>
						</h1>
						<p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
							<span className="font-semibold text-green-800">GATHS</span> — Ghana Association of Tourism and Hospitality Students
						</p>

						{/* Summary for mobile, full text for larger screens */}
						<div className="mt-6 w-full rounded-2xl border border-gray-200 bg-white/90 p-5 sm:p-7 shadow-sm">
							<span className="block sm:hidden text-gray-700 text-sm">
								GATHS is the official student association for tourism and hospitality in Ghana, working with national and private partners to promote the industry and support students.
							</span>
							<span className="hidden sm:block text-gray-700 text-base leading-relaxed">
								We operate officially through the auspices of the Ministry of Tourism, Arts and Culture, the Ghana Tourism Authority, the Ghana Tourism Federation and other Non-governmental organizations as well as private individuals who have interest in tourism, hospitality, arts and culture related programs/fields.
							</span>
						</div>

						<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
							<div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-900 text-sm font-medium flex items-center gap-2">
								<UsersIcon className="h-5 w-5" />
								<span>Community</span>
							</div>
							<div className="rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-yellow-900 text-sm font-medium flex items-center gap-2">
								<BuildingOffice2Icon className="h-5 w-5" />
								<span>Industry Links</span>
							</div>
							<div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-blue-900 text-sm font-medium flex items-center gap-2">
								<AcademicCapIcon className="h-5 w-5" />
								<span>Career Support</span>
							</div>
						</div>
					</div>

					<div className="md:col-span-5">
						<div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
							<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-200/60 blur-2xl" />
							<Image
								src="/BoardChairman.jpg"
								alt="GATHS Leadership"
								width={720}
								height={720}
								className="h-72 w-full object-cover object-center md:h-[22rem]"
							/>
							<div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
								<div className="rounded-xl bg-white/95 px-4 py-3 shadow backdrop-blur">
									<p className="text-xs text-gray-500">Chapters</p>
									<p className="text-lg font-bold text-green-800">Nationwide</p>
								</div>
								<div className="rounded-xl bg-white/95 px-4 py-3 shadow backdrop-blur">
									<p className="text-xs text-gray-500">Focus</p>
									<p className="text-lg font-bold text-green-800">Tourism & Hospitality</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-14">
					<p className="text-sm uppercase tracking-wider text-green-700 font-semibold mb-5 text-center">Supported by</p>
					<ul className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4">
						<li className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600/90 text-white">
								<BuildingLibraryIcon className="h-6 w-6" />
							</span>
							<span className="font-medium text-green-900">Ministry of Tourism, Arts and Culture</span>
						</li>
						<li className="flex items-center gap-3 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3">
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-white">
								<CheckCircleIcon className="h-6 w-6" />
							</span>
							<span className="font-medium text-yellow-900">Ghana Tourism Authority</span>
						</li>
						<li className="flex items-center gap-3 rounded-xl border border-pink-200 bg-pink-50 px-4 py-3">
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-400 text-white">
								<UsersIcon className="h-6 w-6" />
							</span>
							<span className="font-medium text-pink-900">Ghana Tourism Federation</span>
						</li>
						<li className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
							<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
								<HandThumbUpIcon className="h-6 w-6" />
							</span>
							<span className="font-medium text-blue-900">NGOs & Private Individuals</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
