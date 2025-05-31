import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const busServices = [
  {
    name: "TGSRTC",
    rating: "3.71",
    description: "1450 services including Garuda Plus, Rajdhani and more",
    partner: "TGSRTC",
    langText: "తెలంగాణ రాష్ట్ర రోడ్డు రవాణ...",
  },
  {
    name: "APSRTC",
    rating: "3.85",
    description: "1539 services including Garuda, Garuda Plus and more",
    partner: "APSRTC",
    langText: "ఆంధ్రప్రదేశ్ రాష్ట్ర రోడ్డు రవాణ...",
  },
  {
    name: "KERALA RTC",
    rating: "3.85",
    description: "940 services including Swift, AC MultiAxle and more",
    partner: "KSRTC",
    langText: "കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻ...",
  },
  
];

const BusCard = ({ service }) => (
  <motion.div
    whileHover={{ scale: 1.055 }}
    className="keen-slider__slide p-4 "
  >
    <div className="rounded-5 border border-gray-200 p-5 shadow-sm border-3 hover-shadow hover-bg-red transition-all ">
      <div className="space-y-2">
        <div className="d-flex items-center justify-between">
          <h3 className="font-semibold text-xl text-gray-800">{service.name}</h3>
          <span className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
            <Star className="w-4 h-4 mr-1 text-yellow-500" /> {service.rating}
          </span>
        </div>
        <p className="text-sm text-gray-500 truncate">{service.langText}</p>
        <p className="text-sm text-gray-700 mt-1">{service.description}</p>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <BadgeCheck className="w-4 h-4 text-pink-500" />
          <span>Official booking partner of {service.partner}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

function GovernmentBuses() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 16,
  
      breakpoints: {
        "(min-width: 640px)": {
          perView: 2,
        },
        "(min-width: 1024px)": {
          perView: 3,
        },
        "(min-width: 1280px)": {
          perView: 4,
        },
      },
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6  ">
      <motion.h2
        className="text-3xl font-bold mb-5 text-center text-danger fs-1 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.6 }}
      
      >
        Government Buses
      </motion.h2>

      <div ref={sliderRef} className="keen-slider ">
        {busServices.map((service, index) => (
          <BusCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default GovernmentBuses;
