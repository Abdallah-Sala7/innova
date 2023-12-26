import Image from "next/image";
import React from "react";

const FeaturesCard = ({ img, color, title, desc }) => {
  return (
    <div data-aos="fade-up">
      <div
        className={`min-h-40 h-full border border-neutral-50 rounded-lg py-5 px-4 transition-transform duration-500 hover:-translate-y-2 hover:-translate-x-2 ${color}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={img}
            alt="security"
            width={35}
            height={35}
            className="w-8 h-8 object-contain"
          />

          <h2 className="text-title-7 font-bold text-dark capitalize">
            {title}
          </h2>
        </div>

        <p className="text-dark text-title-16">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
