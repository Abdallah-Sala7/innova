"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { Layers, LucidePieChart, Smile, User } from "lucide-react";
import { useTranslations } from "next-intl";

const Analysis = () => {
  const [counter, setCounter] = useState(false);
  const ref = useRef(null);
  const t = useTranslations("about");

  useEffect(() => {
    const trigger = ref.current;

    ScrollTrigger.create({
      trigger,
      start: "top 90%",
      end: "top 10%",
      onEnter: () => {
        setCounter(true);
      },
      onLeaveBack: () => {
        setCounter(false);
      },
    });
  }, []);

  return (
    <section className="section-style" ref={ref}>
      <div className="container">
        {counter && (
          <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-4 bg-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center justify-start flex-col md:flex-row gap-y-2 gap-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-clr2 bg-opacity-10">
                <User size={40} className="text-clr2" />
              </div>

              <div className="flex items-center justify-center flex-col">
                <p className="text-clr2 text-title-2 font-bold">
                  <CountUp numerals={2} start={0} duration={5} end={9} />+
                </p>
                <p className="text-clr2 text-title-5 font-bold">
                  {t("employees")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start flex-col md:flex-row gap-y-2 gap-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-clr2 bg-opacity-10">
                <LucidePieChart size={40} className="text-clr2" />
              </div>

              <div className="flex items-center justify-center flex-col">
                <p className="text-clr2 text-title-2 font-bold">
                  <CountUp numerals={2} start={0} duration={5} end={20} />+
                </p>
                <p className="text-clr2 text-title-5 font-bold">
                  {t("projects")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start flex-col md:flex-row gap-y-2 gap-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-clr2 bg-opacity-10">
                <Smile size={40} className="text-clr2" />
              </div>

              <div className="flex items-center justify-center flex-col">
                <p className="text-clr2 text-title-2 font-bold">
                  <CountUp numerals={2} start={0} duration={5} end={12} />+
                </p>
                <p className="text-clr2 text-title-5 font-bold">
                  {t("clients")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start flex-col md:flex-row gap-y-2 gap-x-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-clr2 bg-opacity-10">
                <Layers size={40} className="text-clr2" />
              </div>

              <div className="flex items-center justify-center flex-col">
                <p className="text-clr2 text-title-2 font-bold">
                  <CountUp numerals={2} start={0} duration={5} end={15} />+
                </p>
                <p className="text-clr2 text-title-5 font-bold">
                  {t("products")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Analysis;
