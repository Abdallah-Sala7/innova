import { Circle, DotIcon, Heart, Square, Star } from "lucide-react";

const CustomHeader = ({ title, desc }) => {
  return (
    <header className="py-12 bg-clr2 mb-10 relative" data-aos="fade-in">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <h1 className="text-white font-extrabold mb-6 text-center text-title-1 leading-snug">
            {title}
          </h1>
          <p className="text-white text-center font-medium text-title-7 leading-7">
            {desc}{" "}
          </p>
        </div>

        <Square className="absolute start-5 text-primary animate-bounce-slow top-1/3" />
        <Star className="absolute start-1/4 text-indigo-300 animate-spin-slow top-10" />
        <DotIcon
          size={80}
          className="absolute start-1/4 text-primary animate-bounce-slow top-3/4"
        />

        <Circle className="absolute end-5 text-indigo-500 animate-bounce top-1/2" />
        <Heart className="absolute end-1/4 text-primary animate-spin-slow top-1/4" />
        <DotIcon
          size={80}
          className="absolute end-1/3 text-primary animate-bounce-slow top-3/4"
        />
      </div>
    </header>
  );
};

export default CustomHeader;
