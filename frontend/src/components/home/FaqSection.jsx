import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Shield, Map, TrendingUp, Truck, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    question: "What services does the zoo offer?",
    answer: "Our zoo offers guided tours, animal feeding experiences, educational programs, photography sessions, special events, wildlife conservation programs, and exclusive behind-the-scenes access for visitors of all ages.",
    icon: <Truck className="w-5 h-5" />,
    category: "Services"
  },
  {
    question: "How does the membership program work?",
    answer: "Members enjoy unlimited visits, priority access, exclusive event invitations, 20% discounts on merchandise and food, free parking, and special members-only hours. Choose from individual, family, or premium membership tiers.",
    icon: <TrendingUp className="w-5 h-5" />,
    category: "Membership"
  },
  {
    question: "What is the interactive map feature?",
    answer: "Our interactive 3D map provides real-time navigation, animal location tracking, feeding schedule alerts, accessibility routes, and AR experiences to enhance your zoo visit with digital engagement.",
    icon: <Map className="w-5 h-5" />,
    category: "Features"
  },
  {
    question: "How does the loyalty points system work?",
    answer: "Earn points for each visit, social media check-ins, participation in conservation programs, and merchandise purchases. Redeem points for free tickets, exclusive experiences, or donations to animal conservation.",
    icon: <Award className="w-5 h-5" />,
    category: "Loyalty"
  },
  {
    question: "How safe and accessible is the zoo?",
    answer: "We maintain the highest safety standards with 24/7 security, trained animal handlers, emergency medical facilities, and complete wheelchair accessibility throughout the park with free equipment rentals available.",
    icon: <Shield className="w-5 h-5" />,
    category: "Safety"
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-green-100 rounded-full">
            <HelpCircle className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about visiting our zoo and wildlife sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-white shadow-xl border-green-200' 
                    : 'bg-white shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100} // stagger animation
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      openIndex === index 
                        ? 'bg-green-500 text-white' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {faq.icon}
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <div className="h-px bg-gray-100 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      {openIndex === index && (
                        <button className="mt-4 text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                          Learn more →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image and Stats Section */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group" data-aos="fade-left">
              <img
                src="/PIC-3.jpg"
                alt="Zoo Experience"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-3">
                    Premium Experience
                  </span>
                  <h3 className="text-2xl font-bold mb-2">Explore Wildlife Like Never Before</h3>
                  <p className="text-white/90">Immersive encounters with nature's wonders</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-6" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Still have questions?</h4>
                  <p className="text-sm text-gray-600">We're here to help you</p>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Contact Support Team
              </button>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Animal Safety Guidelines
            </a>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Booking & Tickets
            </a>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Conservation Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
