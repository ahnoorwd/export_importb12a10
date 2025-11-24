import { Mail, User, MessageSquare, Phone } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 drop-shadow">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re here to support your import and export needs.  
          Fill out the form or reach us directly.
        </p>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE INFO */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Office Location</h3>
              <p className="text-gray-600 mt-1">
                123 Business Avenue, Trade District,<br />
                International City 55455
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600 mt-1">support@importexport.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600 mt-1">+1 (555) 234-5678</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Working Hours</h3>
              <p className="text-gray-600 mt-1">Mon – Fri : 9:00 AM – 6:00 PM</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();

              Swal.fire({
                title: "Good job!",
                text: "Message sent successfully!",
                icon: "success"
              });
            }}
          >

            {/* NAME */}
            <div>
              <label className="text-gray-800 font-medium">Your Name</label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="text"
                  className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-gray-800 font-medium">Email Address</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="email"
                  className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-gray-800 font-medium">Phone Number</label>
              <div className="relative mt-2">
                <Phone className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                  type="text"
                  className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-gray-800 font-medium">Message</label>
              <div className="relative mt-2">
                <MessageSquare className="absolute left-3 top-3 text-gray-500" size={20} />
                <textarea
                  rows="5"
                  className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
              >
                Send Message
              </button>

              <a
                href="/"
                className="w-full text-center border border-gray-500 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100"
              >
                Back to Home
              </a>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
}
