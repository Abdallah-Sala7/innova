import CustomHeader from "@/app/components/common/CustomHeader";
import PlansContent from "@/app/components/services/PlansContent";
import ServicesCard from "@/app/components/services/ServicesCard";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("services"),
  };
}

const ServicesPage = () => {
  const t = useTranslations("home");

  const servicesItems = [
    {
      title: t("services.cards.web.title"),
      desc: t("services.cards.web.desc"),
      img: "/images/web-dev.png",
    },
    {
      title: t("services.cards.mobile.title"),
      desc: t("services.cards.mobile.desc"),
      img: "/images/mobile-app.png",
    },
    {
      title: t("services.cards.commerce.title"),
      desc: t("services.cards.commerce.desc"),
      img: "/images/online-shop.png",
    },
    {
      title: t("services.cards.web.title"),
      desc: t("services.cards.web.desc"),
      img: "/images/web-dev.png",
    },
    {
      title: t("services.cards.mobile.title"),
      desc: t("services.cards.mobile.desc"),
      img: "/images/mobile-app.png",
    },
    {
      title: t("services.cards.commerce.title"),
      desc: t("services.cards.commerce.desc"),
      img: "/images/online-shop.png",
    },
  ];

  return (
    <>
      <CustomHeader title={t("services.title")} desc={t("services.desc")} />

      <section className="section-style">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesItems.map((item, index) => (
              <ServicesCard
                key={index}
                title={item.title}
                desc={item.desc}
                servicesImg={item.img}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-style">
        <div className="container">
          <div className="main-title" data-aos="fade-right">
            <h1 className="title">{t("plans.title")}</h1>

            <p className="desc">{t("plans.desc")}</p>
          </div>

          <PlansContent />
        </div>
      </section> */}
    </>
  );
};

export default ServicesPage;
