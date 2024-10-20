import FeaturesCard from "@/app/components/FeaturesCard";
import ProjectCard from "@/app/components/ProjectCard";
import ToolsCard from "@/app/components/ToolsCard";
import ServicesCard from "@/app/components/services/ServicesCard";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedBg from "../components/common/AnimatedBg";
import AboutSlider from "../components/about/AboutSlider";
import {
  MonitorSmartphoneIcon,
  ShoppingBasketIcon,
  SmartphoneChargingIcon,
  ShieldCheckIcon,
  GaugeCircleIcon,
  LightbulbIcon,
  HeadphonesIcon,
} from "lucide-react";

export default function Home() {
  const t = useTranslations("home");

  const featuresItems = [
    {
      icon: <ShieldCheckIcon size={28} />,
      title: t("features.cards.security.title"),
      desc: t("features.cards.security.desc"),
      iconStyle: "bg-cyan-50 text-cyan-500",
    },
    {
      icon: <GaugeCircleIcon size={28} />,
      title: t("features.cards.speed.title"),
      desc: t("features.cards.speed.desc"),
      iconStyle: "bg-pink-50 text-pink-500",
    },
    {
      icon: <LightbulbIcon size={28} />,
      title: t("features.cards.innovative.title"),
      desc: t("features.cards.innovative.desc"),
      iconStyle: "bg-amber-50 text-amber-500",
    },
  ];

  const servicesItems = [
    {
      title: t("services.cards.web.title"),
      desc: t("services.cards.web.desc"),
      icon: <MonitorSmartphoneIcon size={32} />,
      iconStyle: "bg-cyan-50 text-cyan-500",
    },
    {
      title: t("services.cards.mobile.title"),
      desc: t("services.cards.mobile.desc"),
      icon: <SmartphoneChargingIcon size={32} />,
      iconStyle: "bg-purple-50 text-purple-500",
    },
    {
      title: t("services.cards.commerce.title"),
      desc: t("services.cards.commerce.desc"),
      icon: <ShoppingBasketIcon size={32} />,
      iconStyle: "bg-indigo-50 text-indigo-500",
    },
  ];

  return (
    <>
      <header className="section-style">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex-1 md:pl-0 md:pr-10">
              <div className="main-title text-center md:text-start">
                <h1 className="title" data-aos="fade-right">
                  {t("hero.title")}
                  <span className="text-clr2 inline-block">
                    {t("hero.title-highlight")}
                  </span>
                </h1>

                <p className="desc" data-aos="fade-right" data-aos-delay="300">
                  {t("hero.desc")}
                </p>
              </div>

              <a
                href="#"
                data-aos="fade-right"
                data-aos-delay="600"
                className={"custom-btn !bg-clr2 !text-white !rounded-full"}
              >
                {t("hero.action")}
              </a>
            </div>

            <div className="w-full md:flex-1" data-aos="fade-up">
              <Image
                src={"/images/saudi-bg.png"}
                alt="Hero Image"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <AnimatedBg />
          </div>
        </div>
      </header>

      <section className="section-style">
        <div className="container">
          <div className="main-title center mx-auto" data-aos="zoom-in">
            <h1 className="title">{t("features.title")}</h1>

            <p className="desc">{t("features.desc")}</p>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuresItems.map((item, index) => (
              <FeaturesCard
                key={index}
                icon={item.icon}
                color={item.color}
                title={item.title}
                desc={item.desc}
                iconStyle={item.iconStyle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <HomeServices /> */}

      <section className="section-style">
        <div className="container">
          <div className="main-title center mx-auto" data-aos="zoom-in">
            <h1 className="title">{t("services.title")}</h1>

            <p className="desc">{t("services.desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesItems.map((item, index) => (
              <ServicesCard
                key={index}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                iconStyle={item.iconStyle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <div className="main-title center mx-auto" data-aos="zoom-in">
            <h1 className="title">{t("projects.title")}</h1>

            <p className="desc">{t("projects.desc")}</p>
          </div>

          <ProjectCard img={"/images/project_img.webp"} />
          <ProjectCard img={"/images/project2_img.webp"} right />
          <ProjectCard img={"/images/project_img.webp"} />
        </div>
      </section>

      <section className="section-style my-6 bg-dark bg-opacity-5">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap">
            <div className="w-full md:w-2/5">
              <h1
                className="text-title-1 font-bold capitalize mb-5 md:mb-8"
                data-aos="fade-right"
              >
                {t("about.title")}
              </h1>

              <p
                className="text-dark mb-5 md:mb-8 md:text-lg md:leading-8"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                {t("about.desc1")}
              </p>

              <p
                className="text-dark mb-5 md:mb-8 md:text-lg md:leading-8"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {t("about.desc2")}
              </p>

              <a
                href="#"
                data-aos="fade-right"
                data-aos-delay="450"
                className={"custom-btn"}
              >
                {t("about.action")}
              </a>
            </div>

            <div className="w-full md:w-3/5" data-aos="fade-left">
              <Image
                src={"/gif/web-design-layout.gif"}
                alt="about"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Analysis /> */}

      <section className="section-style">
        <div className="container">
          <div className="main-title center mx-auto" data-aos="zoom-in">
            <h1 className="title">{t("clients.title")}</h1>

            <p className="desc">{t("clients.desc")}</p>
          </div>

          <AboutSlider />
        </div>
      </section>

      <section className="section-style">
        <div className="container">
          <div className="main-title center mx-auto" data-aos="zoom-in">
            <h1 className="title">{t("tools.title")}</h1>

            <p className="desc">{t("tools.desc")}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-title-7 font-bold text-dark capitalize mb-6">
                {t("tools.design")}
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard img={"/images/tool-icon/xd.png"} name={"Adobe XD"} />

                <ToolsCard img={"/images/tool-icon/figma.png"} name={"Figma"} />
                <ToolsCard
                  img={"/images/tool-icon/illustrator.png"}
                  name={"Illustrator"}
                />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-title-7 font-bold text-dark capitalize mb-6">
                {t("tools.web")}
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard img={"/images/tool-icon/react.png"} name={"react"} />
                <ToolsCard img={"/images/tool-icon/vue.png"} name={"vue"} />

                <ToolsCard
                  img={"/images/tool-icon/javascript.png"}
                  name={"javascript"}
                />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-title-7 font-bold text-dark capitalize mb-6">
                {t("tools.mobile")}
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard
                  img={"/images/tool-icon/flutter.png"}
                  name={"flutter"}
                />
                <ToolsCard
                  img={"/images/tool-icon/react.png"}
                  name={"react native"}
                />
                <ToolsCard
                  img={"/images/tool-icon/android_studio.png"}
                  name={"android studio"}
                />
              </div>
            </div>

            <div className="flex-auto w-full px-5 py-4 border border-stone-100 rounded-lg md:w-2/5">
              <h2 className="text-title-7 font-bold text-dark capitalize mb-6">
                {t("tools.backend")}
              </h2>

              <div className="flex flex-wrap gap-5 md:gap-8">
                <ToolsCard
                  img={"/images/tool-icon/dotnet.png"}
                  name={"dot net"}
                />
                <ToolsCard
                  img={"/images/tool-icon/python.png"}
                  name={"python"}
                />

                <ToolsCard img={"/images/tool-icon/php.png"} name={"Php"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
