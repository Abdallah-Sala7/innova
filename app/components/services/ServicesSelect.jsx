import { useState } from "react";
import { mobileAppImg, webDevImg } from "../assets";
import Image from "next/image";
const ServicesSelect = () => {
  const [selected, setSelected] = useState("web");

  return (
    <div className="flex gap-5 flex-wrap" data-aos="fade-up">
      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 p-10 rounded-md border border-dark 
        ${selected === "web" ? "border-opacity-60" : "border-opacity-20"}`}
        onClick={() => setSelected("web")}
      >
        <Image
          src={webDevImg}
          className="w-14 h-14 object-contain"
          alt="webDevImg"
          loading="lazy"
        />

        <span className="text-dark capitalize">web application</span>
      </button>

      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 p-10 rounded-md border border-dark 
        ${selected === "mobile" ? "border-opacity-60" : "border-opacity-20"}`}
        onClick={() => setSelected("mobile")}
      >
        <Image
          src={mobileAppImg}
          className="w-14 h-14 object-contain"
          alt="mobileAppImg"
          loading="lazy"
        />

        <span className="text-dark capitalize">mobile application</span>
      </button>

      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 p-10 rounded-md border border-dark 
        ${selected === "commerce" ? "border-opacity-60" : "border-opacity-20"}`}
        onClick={() => setSelected("commerce")}
      >
        <Image
          src={mobileAppImg}
          className="w-14 h-14 object-contain"
          alt="mobileAppImg"
          loading="lazy"
        />

        <span className="text-dark capitalize">E-Commerce</span>
      </button>
    </div>
  );
};

export default ServicesSelect;
