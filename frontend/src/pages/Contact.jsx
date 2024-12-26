import React from "react";

const Contact = () => {
  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primaryColor focus:border-primaryColor"
              required
            />
          </div>

           {/* subject Field */}
           <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <textarea
              id="subject"
              rows="1"
              placeholder="Let us know how can i help you"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primaryColor focus:border-primaryColor"
              required
            ></textarea>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primaryColor focus:border-primaryColor"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-3 text-white bg-primaryColor rounded-lg shadow-md hover:bg-primaryColor-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
