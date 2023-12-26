import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectCard = ({ right, img }) => {
  const t = useTranslations("project_card");

  return (
    <div
      className={`flex items-center flex-wrap gap-4 justify-center mb-8 last-of-type:mb-0 lg:gap-0 ${
        right && "flex-row-reverse"
      }`}
      data-aos={right ? "fade-left" : "fade-right"}
    >
      <div
        className={`w-48 h-full z-10 md:w-auto md:max-w-xs lg:w-1/3 lg:max-w-max`}
      >
        <Image
          src={img}
          alt="projectImg"
          className="w-full h-full object-contain"
          width={300}
          height={400}
        />
      </div>

      <div
        className={`from-dark to-blue-900 bg-gradient-to-br text-white rounded-xl p-6 md:py-7 md:px-8 xl:flex-1`}
      >
        <h1 className="text-title-3 font-bold text-primary capitalize mb-2">
          project one
        </h1>

        <p className="text-gray-100 text-title-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex vitae
          amet, ipsam blanditiis tempora laudantium qui dolores error, illo
          temporibus molestiae atque sunt assumenda, et at vel dolorum dolore
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        </p>

        <div className="my-5 flex flex-wrap gap-y-3 md:my-7">
          <div className="w-1/2 flex-auto font-bold">
            <p className="text-title-7 font-bold">{t("downloads")}</p>
            <p className="text-title-16-14 text-white font-bold"> 161k </p>
          </div>

          <div className="w-1/2 flex-auto font-bold">
            <p className="text-title-7 font-bold">{t("region")}</p>
            <p className="text-title-16-14 text-white font-bold"> Cairo </p>
          </div>

          <div className="w-1/2 flex-auto font-bold">
            <p className="text-title-7 font-bold">{t("platforms")}</p>
            <p className="text-title-16-14 text-white font-bold">
              {" "}
              Android, IOS, Web
            </p>
          </div>

          <div className="w-1/2 flex-auto">
            <p className="text-title-7 font-bold">{t("technologies")}</p>

            <p className="text-title-16-14 text-white font-bold">
              React Native, Laravel, Next Js, Node Js, MySQL
            </p>
          </div>
        </div>

        <a
          href="#"
          className="custom-btn-secondary"
        >
          <span>{t("view-project")}</span>

          <ArrowLeft className="ltr:rotate-180" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
