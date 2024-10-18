import React from "react";

const ServicesCard = ({ icon, desc, title , iconStyle}) => {
  return (
    <div className="relative group mt-8" data-aos="fade-up">
      <div
        className={`absolute top-0 -translate-y-1/2 start-4 z-10 w-16 h-16 flex justify-center items-center ${iconStyle}`}
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 70%, 75%  100%, 0% 100%)",
        }}
      >
        {icon}
      </div>

      <div
        className="p-0.5 bg-gray-100"
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 80%, 85%  100%, 0% 100%)",
        }}
      >
        <div
          className="py-12 px-8 bg-white"
          style={{
            clipPath: "polygon(0% 0%, 100% 0, 100% 80.2%, 85.2% 100%, 0% 100%)",
          }}
        >
          <h2 className="text-2xl font-bold text-dark capitalize mb-2">
            {title}
          </h2>

          <p className="line-clamp-3 text-gray-500 text-lg">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
