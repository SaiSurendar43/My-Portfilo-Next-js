import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, Acme Inc.",
        text: "This service was outstanding! It exceeded my expectations in every way possible.",
        image: "/client-1.jpg",
    },
    {
        name: "Jane Smith",
        position: "Marketing Lead, TechCorp",
        text: "Absolutely loved working with this team. They delivered beyond what we imagined!",
        image: "/client-2.jpg",
    },
    {
        name: "Alice Johnson",
        position: "Founder, Startup XYZ",
        text: "Professional, efficient, and friendly! Highly recommended to anyone looking for quality work.",
        image: "/client-3.jpg",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="testimonal"
            className="bg-custom-gradient -scroll-mt-20 flex flex-col items-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>

            {/* Center the heading */}
            <h2
                data-aos="fade-up"
                className="text-center text-4xl lg:text-5xl font-bold font-poppins text-[#fff] mt-0 mb-8 md:mb-2"
            >
                Testimonials
            </h2>

            {/* Centered Testimonial Card */}
            <div className="flex justify-center w-full">
            <div className="relative lg:w-full w-80 max-w-2xl p-6 bg-[#FFFFFFCC] shadow-lg rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <FaQuoteLeft className="text-purple-400 text-3xl" />
          <p className="text-lg text-gray-700 italic max-w-xl text-center">
            {testimonials[index].text}
          </p>
          <FaQuoteRight className="text-purple-400 text-3xl" />
            <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-purple-500" />
                ))}
            </div>

          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-purple-500">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl text-gray-500 font-semibold">{testimonials[index].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[index].position}</p>
        </motion.div>
      </AnimatePresence>
    </div>


            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-purple-800" : "bg-gray-400"
                            }`}
                        onClick={() => setIndex(i)}
                    ></button>
                ))}
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}
