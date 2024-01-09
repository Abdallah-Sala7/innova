import { Quote } from "lucide-react";
import Image from "next/image";

const ClaintsCard = () => {
  return (
    <div className="relative flex flex-col justify-center py-8 px-5 rounded-lg bg-white border transition-transform duration-1000 hover:-translate-y-2">
      <div className="flex gap-1.5 items-center mb-6">
        {Array(3)
          .fill()
          .map((_, i) => (
            <Image
              key={i}
              src={"/icons/star.png"}
              alt="star"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          ))}
      </div>

      <p className="text-gray-500 text-title-16 mb-6">
        The MUMAT is a software development company that provides high-quality
        software services to enterprises with skilled
      </p>

      <div className="flex items-center gap-3 w-full pt-6 border-t">
        <Image
          src={"/images/businessman.png"}
          alt="ceo"
          width={500}
          height={500}
          className="w-14 h-14 object-contain rounded-full"
        />

        <div>
          <h1 className="font-bold text-dark text-title-7 capitalize">
            John Doe
          </h1>

          <h2 className="text-title-16 text-slate-600">software engineer</h2>
        </div>
      </div>

      <span className="absolute top-4 end-4">
        <Quote className=" w-10 h-10 opacity-20 text-gray-500" />
      </span>
    </div>
  );
};

export default ClaintsCard;
