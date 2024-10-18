import React from "react";

const FeaturesCard = ({ icon, title, desc, iconStyle }) => {
  return (
    <div data-aos="fade-up">
      <div
        className={`min-h-40 h-full border border-gray-100 rounded-lg py-5 px-4 transition-transform duration-500 hover:-translate-y-1 hover:-translate-x-1`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${iconStyle}`}
          >
            {icon}
          </div>

          <h2 className="text-xl font-bold capitalize">{title}</h2>
        </div>

        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
