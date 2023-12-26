import PortfolioCard from "@/app/components/PortfolioCard";
import CustomTab from "@/app/components/common/CustomTab";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("portfolio"),
  };
}


const PortfolioPage = ({ searchParams }) => {
  const t = useTranslations("portfolio");

  const activeTab = searchParams.tab || "0";

  const tabItems = [
    {
      name: t("tab.all"),
      key: "0",
      isActive: true,
    },
    {
      name: t("tab.web"),
      key: "1",
    },
    {
      name: t("tab.mobile"),
      key: "2",
    },
    {
      name: t("tab.design"),
      key: "3",
    },
  ];

  return (
    <section className="section-style">
      <div className="container">
        <div className="main-title" data-aos="fade-right">
          <h1 className="title">{t("title")}</h1>

          <p className="desc">{t("desc")}</p>
        </div>

        <CustomTab items={tabItems} tab={"tab"} />

        <div className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeTab === "0" ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : activeTab === "1" ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : activeTab === "2" ? (
              <>
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
              </>
            ) : (
              <PortfolioCard />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
