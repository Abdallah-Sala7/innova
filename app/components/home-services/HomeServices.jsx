"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    let ctx = gsap.context(() => {
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );

      const bg = gsap.utils.toArray(".desktopBg:not(:first-child)");

      const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

      gsap.set(photos, { yPercent: 101 });

      gsap.set(bg, { opacity: 0 });

      const allPhotos = gsap.utils.toArray(".desktopPhoto");

      const allBg = gsap.utils.toArray(".desktopBg");

      let mm = gsap.matchMedia();

      mm.add("(min-width: 650px)", () => {
        ScrollTrigger.create({
          trigger: gallery,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
        });

        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(photos[index], { yPercent: 0 })
            .set(allPhotos[index], { autoAlpha: 0 });
          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });

        details.forEach((detail, index) => {
          let headline = detail.querySelector("h1");
          let animation = gsap
            .timeline()
            .to(bg[index], { opacity: 1 })
            .set(allBg[index], {
              autoAlpha: 1,
            });
          ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            end: "top 50%",
            animation: animation,
            scrub: true,
            markers: false,
          });
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const t = useTranslations("home");

  return (
    <section className="gallery-section my-6" suppressHydrationWarning={true}>
      <div className="container">
        <div className="gallery" ref={galleryRef}>
          <div className="right">
            {/* <!-- mobile content --> */}

            <div className="mobileContent">
              <div className="bg-one py-14 flex flex-col items-center">
                <div className="w-full aspect-square max-w-96 mb-4">
                  <Image
                    src="/images/mobile-service.jpeg"
                    alt="mobile"
                    width={500}
                    height={500}
                    unoptimized
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>

                <div className="max-w-96 mx-auto">
                  <h1 className="text-center mb-2 text-title-3 text-white font-bold">
                    {t("services.cards.mobile.title")}
                  </h1>

                  <p className="text-title-7 text-white text-center">
                    {t("services.cards.mobile.desc")}
                  </p>
                </div>
              </div>

              <div className="bg-tow py-14 flex flex-col items-center">
                <div className="w-full aspect-square max-w-96 mb-4">
                  <Image
                    src="/images/marketing-service.jpeg"
                    alt="marketing"
                    width={500}
                    height={500}
                    unoptimized
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>

                <div className="max-w-96 mx-auto">
                  <h1 className="text-center mb-2 text-title-3 text-white font-bold">
                    {t("services.cards.marketing.title")}
                  </h1>

                  <p className="text-title-7 text-white text-center">
                    {t("services.cards.marketing.desc")}
                  </p>
                </div>
              </div>

              <div className="bg-three py-14 flex flex-col items-center">
                <div className="w-full aspect-square max-w-96 mb-4">
                  <Image
                    src="/images/web-service.jpeg"
                    alt="web"
                    width={500}
                    height={500}
                    unoptimized
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>

                <div className="max-w-96 mx-auto">
                  <h1 className="text-center mb-2 text-title-3 text-white font-bold">
                    {t("services.cards.web.title")}
                  </h1>

                  <p className="text-title-7 text-white text-center">
                    {t("services.cards.web.desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- desktop content --> */}

            <div className="desktopPhotos">
              <div className="desktopPhoto">
                <Image
                  src="/images/mobile-service.jpeg"
                  alt="mobile"
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>

              <div className="desktopPhoto">
                <Image
                  src="/images/marketing-service.jpeg"
                  alt="marketing"
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>

              <div className="desktopPhoto">
                <Image
                  src="/images/web-service.jpeg"
                  alt="web"
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="left">
            <div className="desktopContent">
              <div className="desktopContentSection">
                <h1 className="text-title-3 mb-4 text-white font-bold">
                  {t("services.cards.mobile.title")}
                </h1>

                <p className="text-title-7 text-white">
                  {t("services.cards.mobile.desc")}
                </p>
              </div>

              <div className="desktopContentSection">
                <h1 className="text-title-3 mb-4 text-white font-bold">
                  {t("services.cards.marketing.title")}
                </h1>

                <p className="text-title-7 text-white">
                  {t("services.cards.marketing.desc")}
                </p>
              </div>

              <div className="desktopContentSection">
                <h1 className="text-title-3 mb-4 text-white font-bold">
                  {t("services.cards.web.title")}
                </h1>

                <p className="text-title-7 text-white">
                  {t("services.cards.web.desc")}
                </p>
              </div>
            </div>

            <div className="desktopBgContainer">
              <div className="desktopBg bg-one"></div>
              <div className="desktopBg bg-tow"></div>
              <div className="desktopBg bg-three"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div class="gallery">
    //   <div class="left">
    //     <div class="desktopContent">
    //       <div class="desktopContentSection">
    //         <h1>Red</h1>
    //         <p>
    //           Red is a color often associated with strong emotions such as
    //           passion, love, and anger. It's a bold and attention-grabbing color
    //           that can evoke feelings of excitement, warmth, and energy.
    //         </p>
    //       </div>
    //       <div class="desktopContentSection">
    //         <h1>Green</h1>
    //         <p>
    //           Green is a color that is often associated with nature, growth, and
    //           harmony. It is a calming and relaxing color that can evoke
    //           feelings of balance, stability, and freshness. In color
    //           psychology, green is said to represent balance and stability,
    //           making it a popular choice for branding and marketing in the
    //           health and wellness industry.{" "}
    //         </p>
    //       </div>
    //       <div class="desktopContentSection">
    //         <h1>Pink</h1>
    //         <p>
    //           Pink is a color that is often associated with femininity, romance,
    //           and sweetness. It is a softer and more delicate shade of red that
    //           can evoke feelings of warmth, love, and nurturing.
    //         </p>
    //         <p>
    //           In the world of branding and marketing, pink is often used to
    //           target a female audience or to promote products that are
    //           associated with beauty, love, or romance.
    //         </p>
    //         <p>
    //           Pink is also used in the food industry, as it is associated with
    //           sweetness and desserts. Pink is often used in breast cancer
    //           awareness campaigns, as it has become the signature color of the
    //           movement.{" "}
    //         </p>
    //         <p>
    //           Pink is also commonly used in baby showers and weddings, as it
    //           symbolizes love, innocence, and new beginnings.
    //         </p>
    //       </div>
    //       <div class="desktopContentSection">
    //         <h1>Blue</h1>
    //         <p>
    //           Blue is a color that is often associated with calmness, trust, and
    //           reliability. It is a peaceful and serene color that can evoke
    //           feelings of stability, security, and professionalism. In color
    //           psychology, blue is said to represent loyalty and trust, making it
    //           a popular choice for branding and marketing in the finance and
    //           technology industries.
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="right">
    //     {/* <!-- mobile content --> */}
    //     <div class="mobileContent">
    //       <div class="mobilePhoto red"></div>
    //       <h1>Red</h1>
    //       <p>
    //         Red is a color often associated with strong emotions such as
    //         passion, love, and anger. It's a bold and attention-grabbing color
    //         that can evoke feelings of excitement, warmth, and energy.
    //       </p>

    //       <div class="mobilePhoto green"></div>
    //       <h1>Green</h1>
    //       <p>
    //         Green is a color that is often associated with nature, growth, and
    //         harmony. It is a calming and relaxing color that can evoke feelings
    //         of balance, stability, and freshness. In color psychology, green is
    //         said to represent balance and stability, making it a popular choice
    //         for branding and marketing in the health and wellness industry.{" "}
    //       </p>

    //       <div class="mobilePhoto pink"></div>
    //       <h1>Pink</h1>
    //       <p>
    //         Pink is a color that is often associated with femininity, romance,
    //         and sweetness. It is a softer and more delicate shade of red that
    //         can evoke feelings of warmth, love, and nurturing. In the world of
    //         branding and marketing, pink is often used to target a female
    //         audience or to promote products that are associated with beauty,
    //         love, or romance.
    //       </p>

    //       <div class="mobilePhoto blue"></div>
    //       <h1>Blue</h1>
    //       <p>
    //         Blue is a color that is often associated with calmness, trust, and
    //         reliability. It is a peaceful and serene color that can evoke
    //         feelings of stability, security, and professionalism. In color
    //         psychology, blue is said to represent loyalty and trust, making it a
    //         popular choice for branding and marketing in the finance and
    //         technology industries.
    //       </p>
    //     </div>

    //     {/* <!-- desktop content --> */}

    //     <div class="desktopPhotos">
    //       <div class="desktopPhoto red"></div>
    //       <div class="desktopPhoto green"></div>
    //       <div class="desktopPhoto pink"></div>
    //       <div class="desktopPhoto blue"></div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomeServices;
