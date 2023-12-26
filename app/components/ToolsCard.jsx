import Image from 'next/image';
import React from 'react'

const ToolsCard = ({img, name}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1"
      data-aos="flip-right"
    >
      <Image
        src={img}
        alt={name}
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />

      <h3 className="text-dark font-bold capitalize text-title-16-14">{name}</h3>
    </div>
  );
}

export default ToolsCard