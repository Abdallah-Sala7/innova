import ServicesSelect from "@/app/components/ServicesSelect";
import CustomHeader from "@/app/components/common/CustomHeader";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: t("contact"),
  };
}

const ContactPage = () => {
  const t = useTranslations("contact");
  return (
    <>
      <CustomHeader title={t("title")} desc={t("desc")} />

      <section className="section-style">
        <div className="container">
          <div className="flex gap-8 flex-wrap-reverse">
            <div className="w-full md:flex-1">
              <form action="">
                <div className="mb-4" data-aos="fade-right">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    className="w-full p-3 text-lg text-dark border border-gray-200 rounded-md !ring-0 !outline-none transition duration-300 focus:border-clr2"
                  />
                </div>
                <div className="mb-4" data-aos="fade-right">
                  <input
                    type="email"
                    placeholder={t("email")}
                    name="email"
                    required
                    className="w-full p-3 text-lg text-dark border border-gray-200 rounded-md !ring-0 !outline-none transition duration-300 focus:border-clr2"
                  />
                </div>
                <div className="mb-4" data-aos="fade-right">
                  <input
                    type="text"
                    placeholder={t("phone")}
                    name="phone"
                    required
                    className="w-full p-3 text-lg text-dark border border-gray-200 rounded-md !ring-0 !outline-none transition duration-300 focus:border-clr2"
                  />
                </div>
                <div className="mb-4" data-aos="fade-right">
                  <textarea
                    name="massage"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={t("message")}
                    required
                    className="w-full p-3 text-lg text-dark border border-gray-200 rounded-md !ring-0 !outline-none transition duration-300 focus:border-clr2 h-52 resize-none"
                  ></textarea>
                </div>
                <div data-aos="fade-right">
                  <a href="#" className="custom-btn !w-full">
                    {t("action")}
                  </a>
                </div>
              </form>
            </div>

            <div className="w-full md:flex-1">
              <ServicesSelect />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
