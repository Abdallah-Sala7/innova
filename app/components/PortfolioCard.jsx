import Image from "next/image";
import { ViewIcon } from "lucide-react";

const PortfolioCard = () => {
  return (
    <div
      className="relative h-56 rounded-md overflow-hidden group"
      data-aos="fade-up"
    >
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-evenly p-5 group opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition duration-300"
      >
        <h1 className="font-semibold text-white text-xl capitalize transition -translate-y-12 opacity-0 duration-700 group-hover:opacity-100 group-hover:translate-y-0">
          project name
        </h1>

        <span className="transition translate-y-12 duration-700 group-hover:opacity-100 group-hover:translate-y-0">
          <ViewIcon size={45} className="text-white" />
        </span>
      </a>

      <Image
        src={"/images/alimen.jpg"}
        alt="alimen"
        width={500}
        height={800}
        unoptimized
        className="w-full h-full object-cover object-top transition-all duration-[3s] group-hover:object-bottom"
      />
    </div>
  );
};

export default PortfolioCard;
