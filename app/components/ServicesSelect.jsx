"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServicesSelect = () => {
  const [selected, setSelected] = useState("web");
  const t = useTranslations("contact");

  return (
    <div className="flex gap-3 flex-wrap" data-aos="fade-up">
      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 py-10 px-4 rounded-md border
        ${selected === "web" ? "border-clr2" : "border-gray-200"}`}
        onClick={() => setSelected("web")}
      >
        <Image
          src={"/images/web-dev.png"}
          className="w-14 h-14 object-contain"
          alt="web dev"
          loading="lazy"
          width={60}
          height={60}
        />

        <span className="text-dark capitalize font-bold text-title-7">
          {t("web")}
        </span>
      </button>

      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 py-10 px-4 rounded-md border
        ${selected === "mobile" ? "border-clr2" : "border-gray-200"}`}
        onClick={() => setSelected("mobile")}
      >
        <Image
          src={"/images/mobile-app.png"}
          className="w-14 h-14 object-contain"
          alt="mobile app"
          loading="lazy"
          width={60}
          height={60}
        />

        <span className="text-dark capitalize font-bold text-title-7">
          {t("mobile")}
        </span>
      </button>

      <button
        className={`w-40 flex-auto flex flex-col items-center gap-4 py-10 px-4 rounded-md border
        ${selected === "commerce" ? "border-clr2" : "border-gray-200"}`}
        onClick={() => setSelected("commerce")}
      >
        <Image
          src={"/images/online-shop.png"}
          className="w-14 h-14 object-contain"
          alt="online shop"
          loading="lazy"
          width={60}
          height={60}
        />

        <span className="text-dark capitalize font-bold text-title-7">
          {t("commerce")}
        </span>
      </button>
    </div>
  );
};

export default ServicesSelect;
