import React from 'react';

const Contact = () => {
  return (
    <section className=" text-gray-800 px-4 py-10 md:px-20 ">
      {/* Heading & Intro */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Reach out to us to get quality shots for your events, products, or personal moments. We’re here to capture your best memories with professionalism and creativity.
        </p>
      </div>

      {/* Contact Form */}
      <div className="p-6 md:p-10 rounded-2xl shadow-md max-w-4xl mx-auto w-full">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="phone" className="mb-1 text-sm font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-1 text-sm font-medium">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
