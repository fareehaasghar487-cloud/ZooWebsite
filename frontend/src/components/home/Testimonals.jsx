import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wildlife Photographer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    rating: 5,
    content: "The zoo provided the most incredible photography opportunities. The natural habitats are beautifully designed, and the animals look genuinely happy and healthy.",
    date: "2 weeks ago",
    video: "https://player.vimeo.com/video/123456789"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Family Visitor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 5,
    content: "Our kids had the best day of their lives! The interactive exhibits and feeding sessions were absolutely magical. We'll definitely be getting an annual membership.",
    date: "1 month ago",
    video: null
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Veterinarian",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    rating: 5,
    content: "As a veterinarian, I'm impressed by the exceptional care and welfare standards. The conservation programs are making a real difference for endangered species.",
    date: "3 days ago",
    video: null
  },
  {
    id: 4,
    name: "David & Lisa Williams",
    role: "Annual Members",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=400",
    rating: 4,
    content: "We've been members for 3 years and each visit brings new discoveries. The staff is incredibly knowledgeable and passionate about wildlife education.",
    date: "2 months ago",
    video: "https://player.vimeo.com/video/987654321"
  },
  {
    id: 5,
    name: "James Wilson",
    role: "School Teacher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    rating: 5,
    content: "The educational programs for schools are outstanding. My students were engaged and inspired. A perfect blend of fun and learning!",
    date: "1 week ago",
    video: null
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Tourist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    rating: 5,
    content: "Visiting from India, this was a highlight of our trip. The diversity of species and beautiful landscaping made for an unforgettable experience.",
    date: "3 weeks ago",
    video: null
  },
  {
    id: 7,
    name: "Robert Kim",
    role: "Nature Blogger",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5,
    content: "The attention to detail in recreating natural habitats is remarkable. Every corner feels authentic and respectful to the animals.",
    date: "5 days ago",
    video: null
  },
  {
    id: 8,
    name: "Maria Garcia",
    role: "Conservationist",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400",
    rating: 5,
    content: "Their conservation efforts are truly inspiring. They're doing important work to protect endangered species and educate the public.",
    date: "1 week ago",
    video: null
  }
];

const TestimonialsSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-green-100 rounded-full">
            <Quote className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Visitor Reviews
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Visitors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the experiences of our recent visitors through their heartfelt reviews
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors -translate-x-6 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors translate-x-6 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} w-2 h-2 bg-green-300 hover:bg-green-500"></span>`;
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                  {/* Top Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                        />
                        {testimonial.video && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <Play className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex gap-1 mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-xs text-gray-400">{testimonial.date}</span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-green-100 mb-4" />

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Video Play Button */}
                  {testimonial.video && (
                    <button className="w-full py-3 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Video Review
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div ref={paginationRef} className="flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
            { value: "10K+", label: "Happy Visitors" },
            { value: "500+", label: "5-Star Reviews" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            <Quote className="w-5 h-5" />
            Share Your Experience
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            Your review helps others discover the magic of wildlife
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;