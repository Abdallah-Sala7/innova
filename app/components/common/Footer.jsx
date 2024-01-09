import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("common.footer");
  const locale = useLocale();

  return (
    <footer
      className={`
      relative z-10 py-7 bg-gradient-to-r from-primary to-clr2
      after:absolute after:inset-0 after:bg-clr2 after:-z-10 after:bg-opacity-70
    `}
    >
      <div className="container flex justify-between flex-wrap gap-y-5">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Link href="/" className="flex mb-6">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={160}
              height={48}
              className="h-12 w-auto  object-contain"
            />
          </Link>

          <p className="text-white text-title-16 leading-7">
            {t("description")}
          </p>
        </div>

        <div className="w-full md:w-1/2 md:pl-5 lg:w-auto">
          <h1
            className={`
            relative text-white text-lg font-bold mb-4 pb-2 w-fit capitalize
            after:absolute after:bottom-0 after:h-0.5 after:start-0 after:w-2/3 after:bg-primary
          `}
          >
            {t("services.title")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("services.web")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("services.mobile")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("services.commerce")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("services.design")}
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("services.marketing")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-auto">
          <h1
            className={`
            relative text-white text-lg font-bold mb-4 pb-2 w-fit capitalize
            after:absolute after:bottom-0 after:h-0.5 after:start-0 after:w-2/3 after:bg-primary
          `}
          >
            {t("links.title")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("links.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("links.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("links.services")}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("links.portfolio")}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-bold text-white capitalize transition-colors hover:text-primary flex items-center gap-2"
              >
                <ChevronLeft className={locale === "en" ? "rotate-180" : ""} />
                {t("links.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 md:pl-5 lg:w-auto">
          <h1
            className={`
            relative text-white text-lg font-bold mb-4 pb-2 w-fit capitalize
            after:absolute after:bottom-0 after:h-0.5 after:start-0 after:w-2/3 after:bg-primary
          `}
          >
            {t("social-links")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1.5 text-white capitalize transition-colors hover:text-primary"
              >
                <MapPin size={20} />
                Mansoura, Egypt
              </a>
            </li>

            <li>
              <a
                href="tel:+201025077437"
                target="_blank"
                className="flex items-center gap-1.5 text-white capitalize transition-colors hover:text-primary"
              >
                <PhoneCall size={20} />
                +201025077437
              </a>
            </li>

            <li>
              <a
                href="mailto:mumat@mail.dev"
                target="_blank"
                className="flex items-center gap-1.5 text-white capitalize transition-colors hover:text-primary"
              >
                <Mail size={20} />
                mumat@mail.dev
              </a>
            </li>

            <li className="flex items-center gap-2 mt-5">
              <a
                href="https://www.facebook.com/mumat"
                target="_blank"
                title="Facebook"
                className="flex items-center justify-center text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-clr2"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.twitter.com/mumat"
                target="_blank"
                title="Twitter"
                className="flex items-center justify-center text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-clr2"
              >
                <X size={20} />
              </a>
              <a
                href="https://www.instagram.com/mumat"
                target="_blank"
                title="Instagram"
                className="flex items-center justify-center text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-clr2"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/mumat"
                target="_blank"
                title="Linkedin"
                className="flex items-center justify-center text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-clr2"
              >
                <Linkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
