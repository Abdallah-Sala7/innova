import Image from "next/image";
import AboutSlider from "../../components/about/AboutSlider";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("about"),
  };
}

const About = () => {
  const t = useTranslations("about");

  return (
    <section className="section-style">
      <div className="container">
        <div className="main-title" data-aos="fade-right">
          <h1 className="title">
            {t("title")} {t("name")}
          </h1>

          <p className="desc">{t("desc")}</p>
        </div>

        <div className="flex gap-5 flex-wrap items-center mb-8">
          <div className="w-full md:flex-1" data-aos="fade-up">
            <h2 className="text-title-3 font-bold mb-4">{t("title2")}</h2>

            <p className="text-title-7 opacity-70">{t("desc2")}</p>
          </div>

          <div className="w-full md:flex-1" data-aos="fade-up">
            <Image
              src={"/gif/about3.gif"}
              alt="about"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex gap-5 flex-wrap-reverse items-center mb-8">
          <div className="w-full md:flex-1" data-aos="fade-up">
            <Image
              src={"/gif/about1.gif"}
              alt="about"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:flex-1" data-aos="fade-up">
            <h2 className="text-title-3 font-bold mb-4">{t("title3")}</h2>

            <p className="text-title-7 opacity-70">{t("desc3")}</p>
          </div>
        </div>

        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-title-3 font-bold">{t("clients-title")}</h2>

          <AboutSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
