import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, Users, Utensils } from "lucide-react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/Xx1KBpWp/s1.jpg",
      title: "Share Your Surplus, Feed a Soul",
      description:
        "PlateShare connects generous donors with local communities to ensure no good food goes to waste.",
      icon: <Heart className="text-orange-400" size={28} />,
    },
    {
      id: 2,
      image: "https://i.ibb.co/nsW6DTXh/s2.jpg",
      title: "Building Stronger Neighborhoods",
      description:
        "A simple meal shared is a step toward a stronger, more connected community for everyone.",
      icon: <Users className="text-blue-400" size={28} />,
    },
    {
      id: 3,
      image: "https://i.ibb.co/jkFWqsDw/s3.jpg",
      title: "Fresh Food for Everyone",
      description:
        "Access healthy, home-cooked, or surplus meals in your area with just a few clicks.",
      icon: <Utensils className="text-green-400" size={28} />,
    },
  ];

  return (
    <section className="relative bg-base-200 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] relative z-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[70%] flex flex-col justify-center order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Glass Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full shadow-lg text-base-content">
                <span className="p-1.5 bg-white/10 rounded-full flex items-center justify-center">
                  {slides[activeIndex].icon}
                </span>
                <span className="uppercase tracking-widest text-[10px] font-black text-base-content/70">
                  PlateShare Impact
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-base-content leading-[1.1]">
                {slides[activeIndex].title}
              </h1>

              {/* Description */}
              <p className="text-lg text-base-content/70 leading-relaxed max-w-3xl">
                {slides[activeIndex].description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/available-foods"
                  className="px-8 py-3 btn bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-transform transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  Find Food <ArrowRight size={18} />
                </Link>
                <Link
                  to="/dashboard/add-food"
                  className="px-8 py-3 btn border-2 border-orange-500 text-orange-500 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[30%] flex justify-center order-1 lg:order-2 relative">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full h-[350px] lg:h-[450px] rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800"
          >
            <Swiper
              effect={"fade"}
              speed={1000}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Autoplay, EffectFade, Pagination]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-900/20 to-blue-900/20 blur-2xl opacity-40 pointer-events-none"></div>

            {/* Floating mini glow icon */}
            <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
              <Heart className="text-orange-400" size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating accent glow behind hero */}
      <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-transparent blur-[120px] opacity-30 pointer-events-none transition-all duration-1000`}></div>
    </section>

  );
};

export default HeroSection;
