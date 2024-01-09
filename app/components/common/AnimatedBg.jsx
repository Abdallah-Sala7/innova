import { Circle, DotIcon, Heart, Square, Star } from "lucide-react";

const AnimatedBg = () => {
  return (
    <>
      <Star className="absolute -z-10 start-1/4 text-clr2 animate-spin-slow top-10" />
      <Square className="absolute -z-10 start-5 text-purple-700 animate-bounce-slow top-1/3" />
      <Circle className="absolute -z-10 start-1/3 text-indigo-500 animate-bounce top-1/2" />
      <DotIcon
        size={80}
        className="absolute -z-10 start-1/4 text-primary animate-bounce-slow top-3/4"
      />

      <Heart className="absolute -z-10 start-1/2 text-primary animate-spin-slow top-1/4" />
      <Star className="absolute -z-10 end-5 text-purple-700 animate-spin-slow top-10" />
      <Square className="absolute -z-10 end-10 text-green-500 animate-bounce-slow top-1/2 " />
      <Circle className="absolute -z-10 end-1/3 text-indigo-500 animate-bounce top-10 hidden md:block" />
      <DotIcon
        size={80}
        className="absolute -z-10 end-1/2 text-clr2 animate-bounce-slow top-1/2"
      />
      <Heart className="absolute -z-10 end-1/2 text-primary animate-spin-slow bottom-0" />
    </>
  );
};

export default AnimatedBg;
