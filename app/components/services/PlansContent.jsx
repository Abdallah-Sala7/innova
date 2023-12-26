import { CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const PlansContent = () => {
  const t = useTranslations("home.plans");

  return (
    <div className="flex justify-center flex-wrap gap-4 pt-6 lg:pt-0 lg:items-center lg:flex-nowrap">
      <div
        className="max-w-full flex-1 min-w-80 sm:max-w-96 border border-dark rounded-2xl py-8 px-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <h2 className="text-title-3 font-bold text-dark">
            {t("basic.title")}
          </h2>

          <p className="text-title-7 text-center opacity-70">
            {t("basic.desc")}
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <p className="bg-dark py-1 px-3 rounded-full font-bold text-white">
              {t("basic.save")} {t("basic.saving")}%
            </p>

            <p className="text-gray-500 line-through">
              {t("basic.oldPrice")} {t("basic.currency")}
            </p>
          </div>

          <h3 className="font-bold text-center text-title-4 text-dark1">
            {t("basic.price")} {t("basic.currency")}
          </h3>
        </div>

        <button className="custom-btn !bg-dark !text-white !w-full mb-6">
          {t("basic.action")}
        </button>

        <ul className="flex flex-col gap-3">
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("basic.features.feature1")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("basic.features.feature2")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("basic.features.feature3")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("basic.features.feature4")}
          </li>
        </ul>
      </div>

      <div
        className="max-w-full flex-1 min-w-80 sm:max-w-96 border border-clr2 rounded-2xl py-8 px-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <h2 className="text-title-3 font-bold text-clr2">
            {t("standard.title")}
          </h2>

          <p className="text-title-7 text-center opacity-70">
            {t("standard.desc")}
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <p className="bg-clr2 py-1 px-3 rounded-full font-bold text-white">
              {t("standard.save")} {t("standard.saving")}%
            </p>

            <p className="text-gray-500 line-through">
              {t("standard.oldPrice")} {t("standard.currency")}
            </p>
          </div>

          <h3 className="font-bold text-center text-title-4 text-dark1">
            {t("standard.price")} {t("standard.currency")}
          </h3>
        </div>

        <button className="custom-btn !bg-clr2 !text-white !w-full mb-6">
          {t("standard.action")}
        </button>

        <ul className="flex flex-col gap-3">
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature1")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature2")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature3")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature4")}
          </li>

          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature5")}
          </li>

          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("standard.features.feature6")}
          </li>
        </ul>
      </div>

      <div
        className="max-w-full flex-1 min-w-80 sm:max-w-96 border border-primary rounded-2xl py-8 px-6 relative order-first lg:order-last"
        data-aos="fade-up"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-80 bg-primary text-white text-center text-title-7 font-bold p-2 rounded-full">
          {t("best")}
        </div>

        <div className="flex flex-col justify-center items-center gap-2 mb-6">
          <h2 className="text-title-3 font-bold text-primary">
            {t("premium.title")}
          </h2>

          <p className="text-title-7 text-center opacity-70">
            {t("premium.desc")}
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <p className="bg-primary py-1 px-3 rounded-full font-bold text-white">
              {t("premium.save")} {t("premium.saving")}%
            </p>

            <p className="text-gray-500 line-through">
              {t("premium.oldPrice")} {t("premium.currency")}
            </p>
          </div>

          <h3 className="font-bold text-center text-title-4 text-dark1">
            {t("premium.price")} {t("premium.currency")}
          </h3>
        </div>

        <button className="custom-btn !bg-primary !text-white !w-full mb-6">
          {t("premium.action")}
        </button>

        <ul className="flex flex-col gap-3">
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature1")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature2")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature3")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature4")}
          </li>

          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature5")}
          </li>
          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature6")}
          </li>

          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature7")}
          </li>

          <li className="text-title-7 text-gray-500 flex gap-3 items-center">
            <CheckCheck className="w-5 h-5 text-green-700" />
            {t("premium.features.feature8")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlansContent;
