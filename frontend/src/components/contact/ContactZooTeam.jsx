// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaQuestionCircle } from "react-icons/fa";

// const ContactZooTeam = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     emailjs
//       .sendForm(
//         "service_079rl58",    
//         "template_daun4ht",   
//         form.current,
//        "4bjAz__pdZ2-TTwxk"  
//       )
//       .then(
//         (result) => {
//           console.log("SUCCESS!", result.text);
//           setMessage("✅ Message sent successfully!");
//           setLoading(false);
//           form.current.reset();
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           setMessage("❌ Failed to send message. Please try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <div className="min-h-screen bg-green-50 py-10 px-6">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-2">
//         Contact Our Zoo Team
//       </h1>
//       <p className="text-center text-gray-600 mb-10">
//         Have questions about tickets, animals, or events? Reach out and we'll be happy to help!
//       </p>

//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {/* LEFT SIDE - CONTACT FORM */}
//         <div className="bg-green-100 shadow-md rounded-xl border border-green-200">
//           <div className="bg-green-800 text-white px-5 py-3 rounded-t-xl flex items-center space-x-2">
//             <FaPaperPlane />
//             <div>
//               <h2 className="font-semibold text-sm">Send us a Message</h2>
//               <p className="text-xs text-gray-200">
//                 Our zookeepers reply as soon as possible
//               </p>
//             </div>
//           </div>

//           <form ref={form} onSubmit={sendEmail} className="p-5 space-y-4">
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Your Full Name"
//               className="w-full border border-green-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Your Email Address"
//               className="w-full border border-green-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//             <input
//               type="text"
//               name="topic"
//               placeholder="Choose a Topic"
//               className="w-full border border-green-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="w-full border border-green-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="4"
//               className="w-full border border-green-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-700 flex justify-center items-center space-x-2"
//               disabled={loading}
//             >
//               <FaPaperPlane />
//               <span>{loading ? "Sending..." : "Send Message"}</span>
//             </button>

//             {message && (
//               <p
//                 className={`text-sm mt-2 text-center ${
//                   message.startsWith("✅")
//                     ? "text-green-700"
//                     : "text-red-600"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </form>
//         </div>

//         {/* RIGHT SIDE - CONTACT INFO */}
//         <div className="space-y-6">
//           <div className="bg-green-100 border border-green-200 rounded-xl shadow-md p-5">
//             <h3 className="font-semibold text-lg text-green-800 flex items-center space-x-2 mb-3">
//               <FaEnvelope /> <span>Contact Information</span>
//             </h3>
//             <div className="space-y-3 text-sm text-gray-700">
//               <p>
//                 <strong>Email:</strong> info@wildlifezoo.org <br />
//                 <span className="text-green-600 text-xs">
//                   Replies within 24 hours
//                 </span>
//               </p>
//               <p>
//                 <strong>Phone:</strong> +123 456 7890 <br />
//                 <span className="text-green-600 text-xs">
//                   Call hours: 9AM - 5PM
//                 </span>
//               </p>
//               <p>
//                 <strong>Visit Us:</strong> Wildlife Zoo Park, Main City, Country{" "}
//                 <br />
//                 <span className="text-green-600 text-xs">
//                   Open daily 9AM - 7PM
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="bg-green-100 border border-green-200 rounded-xl shadow-md p-5">
//             <h3 className="font-semibold text-lg text-green-800 flex items-center space-x-2 mb-3">
//               <FaQuestionCircle /> <span>Quick Support</span>
//             </h3>
//             <ul className="space-y-3 text-sm text-gray-700">
//               <li className="flex items-center space-x-2">
//                 <FaDownload className="text-green-700" />
//                 <span>
//                   <strong>Download Tickets:</strong> Access your zoo tickets
//                 </span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <FaQuestionCircle className="text-green-700" />
//                 <span>
//                   <strong>Visit FAQs:</strong> Find answers about zoo timings &
//                   events
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactZooTeam;
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaQuestionCircle,
  FaClock,
  FaTicketAlt,
  FaPaw,
  FaLeaf
} from "react-icons/fa";

const ContactZooTeam = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_079rl58",
        "template_daun4ht",
        form.current,
        "4bjAz__pdZ2-TTwxk"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100 py-12 px-4 md:px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <FaPaw className="text-4xl text-emerald-600" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-green-600 bg-clip-text text-transparent">
            Contact Wildlife Zoo
          </h1>
          <FaLeaf className="text-4xl text-emerald-600" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with our team of animal experts in the heart of Lahore. We're here to make your zoo experience unforgettable!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* LEFT SIDE - CONTACT INFO CARDS */}
        <div className="space-y-6">
          {/* Lahore Location Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl border border-emerald-100 p-6 transform hover:-translate-y-1 transition duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-2xl text-emerald-700" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-emerald-900">Our Location</h3>
                <p className="text-sm text-emerald-600">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700">
                <strong className="text-emerald-800">Wildlife Zoo Lahore</strong>
                <br />
                Zoo Road, Near Lawrence Gardens
                <br />
                Lahore, Punjab 54000
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  🗺️ <strong>Landmark:</strong> Next to Bagh-e-Jinnah
                </p>
                <p className="text-sm text-gray-600">
                  🚗 <strong>Parking:</strong> Available at Main Gate
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-xl border border-amber-100 p-6 transform hover:-translate-y-1 transition duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-amber-100 p-3 rounded-full">
                <FaEnvelope className="text-2xl text-amber-700" />
              </div>
              <h3 className="font-bold text-xl text-amber-900">Get In Touch</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-amber-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@wildlifezoolahore.org</p>
                  <p className="text-amber-600 text-xs mt-1">📧 Replies within 12 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-amber-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+92 42 111 222 333</p>
                  <p className="text-amber-600 text-xs mt-1">📞 9:00 AM - 6:00 PM daily</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-amber-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Visiting Hours</p>
                  <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                  <p className="text-amber-600 text-xs mt-1">Last entry at 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER - CONTACT FORM */}
        <div className="lg:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-900 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <FaPaperPlane className="text-xl text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Send Your Message</h2>
                  <p className="text-emerald-100 text-sm">
                    Our team responds within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Smith"
                    className="w-full border-2 border-emerald-100 rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="w-full border-2 border-emerald-100 rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Topic</label>
                  <select
                    name="topic"
                    className="w-full border-2 border-emerald-100 rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="tickets">Tickets & Booking</option>
                    <option value="animals">Animal Information</option>
                    <option value="events">Events & Shows</option>
                    <option value="membership">Membership</option>
                    <option value="school">School Trips</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full border-2 border-emerald-100 rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  className="w-full border-2 border-emerald-100 rounded-xl p-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex justify-center items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    <span className="text-lg">Send Message to Zoo Team</span>
                  </>
                )}
              </button>

              {message && (
                <div className={`mt-4 p-3 rounded-lg text-center font-medium ${message.startsWith("✅")
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* QUICK SUPPORT SECTION */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-200 p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FaTicketAlt className="text-xl text-amber-700" />
                </div>
                <h3 className="font-bold text-lg text-amber-900">Quick Tickets</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Skip the lines with our online ticketing system
              </p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <FaDownload />
                <span>Book Tickets Online</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg border border-blue-200 p-5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FaQuestionCircle className="text-xl text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-blue-900">FAQs & Guides</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Find answers to common questions about our zoo
              </p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
                <FaQuestionCircle />
                <span>Visit Help Center</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAP PREVIEW SECTION */}
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-gradient-to-r from-green-800 to-emerald-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <FaMapMarkerAlt className="text-2xl" />
              <h3 className="text-2xl font-bold">Find Us in Lahore</h3>
            </div>
            <p className="text-green-100 mb-6">
              Located in the heart of Lahore, our zoo is easily accessible from all major areas of the city.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-1">📍 From City Center</p>
                <p className="text-green-100">15-20 minutes drive via Mall Road</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-1">🚇 Public Transport</p>
                <p className="text-green-100">Metro Station: Zoo Stop (Line 2)</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold mb-1">🅿️ Parking</p>
                <p className="text-green-100">Ample parking available at all gates</p>
              </div>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-5xl text-red-500 mb-3" />
              <p className="text-gray-700 font-semibold">Interactive Map Coming Soon</p>
              <p className="text-gray-600 text-sm">Wildlife Zoo Lahore Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactZooTeam;