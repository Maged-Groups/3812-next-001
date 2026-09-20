"use client";

import { useRef } from "react";

export default function ContactsPage() {
  // Refs
  const fullNameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // Methods
  const handle_form_submit = async () => {
    console.log("handle_form_submit fired");

    // console.log(document.getElementById("name").value);
    const fullName = fullNameRef.current.value;
    const mobile = mobileRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log(fullName, mobile, email, message);

    // Simulate the API send

    // Prepare the data to be sent
    const data = {
      fullName,
      mobile,
      email,
      message,
    };

    // Turn data inot JSON string
    const jsonData = JSON.stringify(data);

    // Send data to API
    const receivedData = await fetch(
      "https://www.mywebsite.com/api/v1/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      },
    )
      .then((res) => res.json())
      .then((data) => data);
    console.log(data);
    console.log(jsonData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-500 text-sm">
            We'd love to hear from you. Fill out the div below.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              ref={fullNameRef}
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Mobile Number
            </label>
            <input
              ref={mobileRef}
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="01xxxxxxxxx"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              ref={messageRef}
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handle_form_submit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
          >
            Send Message
          </button>

          <button id="addItem">Add</button>
        </div>
      </div>
    </div>
  );
}
