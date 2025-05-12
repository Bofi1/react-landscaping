import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Green Bliss Designs transformed my small backyard into a beautiful oasis! Their personalized service and attention to detail exceeded my expectations. I highly recommend them!",
    author: "Sarah Miller",
    role: "Homeowner",
  },
  {
    text: "Their team was professional and incredibly creative. They truly brought our vision to life.",
    author: "David Johnson",
    role: "Landscape Enthusiast",
  },
  {
    text: "Thanks to Green Bliss, we enjoy our garden every evening. It feels like a dream!",
    author: "Emily Chen",
    role: "Client",
  },
];

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <div className="relative bg-green-700 bg-opacity-70 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-60 z-10"></div>
        <div className="relative z-20 p-8 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-lg font-semibold mb-4">
                "{testimonials[index].text}"
              </p>
              <p className="text-[100px] font-bold">
                {testimonials[index].author}
              </p>
              <p className="text-[100px]">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
