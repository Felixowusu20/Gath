import React from "react";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="bg-white/90 border border-green-200 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-2">Find GATHS</h2>
            <p className="text-lg text-gray-700 mb-2">Accra, Ghana</p>
            <p className="text-base text-gray-600 mb-4">Visit our office or reach out for more information about our association and activities.</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <span className="flex items-center gap-2"><span className="material-icons text-green-700">location_on</span>79 Kojo Thompson Rd, Accra</span>
              <span className="flex items-center gap-2"><span className="material-icons text-green-700">email</span>gathstudents420@gmail.com</span>
            </div>
          </div>
          <div className="flex-1 w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-green-100">
            <iframe
              title="GATHS Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.964073964839!2d-0.1963066846759642!3d5.560935195964998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b1b1b1b1b1b%3A0x1234567890abcdef!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1695654321000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
