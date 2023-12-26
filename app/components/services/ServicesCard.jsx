import Image from 'next/image';
import React from 'react'

const ServicesCard = ({servicesImg, desc, title}) => {
  return (
    <a
      href="#"
      className="relative border border-blue-50 rounded-lg bg-primary bg-opacity-10 py-5 px-4 transition-colors hover:bg-opacity-20 group"
      data-aos="fade-up"
    >
      <div className="mb-4">
        <Image
          src={servicesImg}
          alt={title}
          width={500}
          height={500}
          className="w-16 h-16 object-contain"
        />
      </div>

      <h2 className="text-title-6 font-bold text-dark capitalize mb-2">{title}</h2>

      <p className="text-title-16 line-clamp-3">{desc}</p>

      <div className="absolute top-4 end-4 opacity-20 scale-0 transition-transform duration-300 group-hover:scale-100">
        <Image
          src={servicesImg}
          alt={title}
          width={500}
          height={500}
          className="w-24 h-24 object-contain"
        />
      </div>
    </a>
  );
}

export default ServicesCard