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
    <footer className={"relative z-10 py-7 bg-gray-50"}>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="md:col-span-2 lg:pe-4">
          <Link href="/" className="flex mb-6">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={160}
              height={48}
              className="h-12 w-auto  object-contain"
            />
          </Link>

          <p className="text-gray-500 text-title-16 leading-7">
            {t("description")}
          </p>
        </div>

        <div>
          <h1
            className={`relative text-gray-700 text-xl font-bold mb-3 capitalize`}
          >
            {t("services.title")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("services.web")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("services.mobile")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("services.commerce")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("services.design")}
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("services.marketing")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1
            className={`relative text-gray-700 text-xl font-bold mb-3 capitalize`}
          >
            {t("links.title")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("links.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("links.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("links.services")}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("links.portfolio")}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-semibold text-gray-600 capitalize transition-colors hover:text-primary"
              >
                {t("links.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1
            className={`relative text-gray-700 text-xl font-bold mb-3 capitalize`}
          >
            {t("social-links")}
          </h1>

          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1.5 text-gray-600 capitalize transition-colors hover:text-primary"
              >
                <MapPin size={20} />
                Mansoura, Egypt
              </a>
            </li>

            <li>
              <a
                href="tel:+201025077437"
                target="_blank"
                className="flex items-center gap-1.5 text-gray-600 capitalize transition-colors hover:text-primary"
              >
                <PhoneCall size={20} />
                +201025077437
              </a>
            </li>

            <li>
              <a
                href="mailto:mumat@mail.dev"
                target="_blank"
                className="flex items-center gap-1.5 text-gray-600 capitalize transition-colors hover:text-primary"
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
                className="flex items-center justify-center text-gray-600 border border-white w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-gray-600 hover:border-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.twitter.com/mumat"
                target="_blank"
                title="Twitter"
                className="flex items-center justify-center text-gray-600 border border-white w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-gray-600 hover:border-primary"
              >
                <X size={20} />
              </a>
              <a
                href="https://www.instagram.com/mumat"
                target="_blank"
                title="Instagram"
                className="flex items-center justify-center text-gray-600 border border-white w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-gray-600 hover:border-primary"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/mumat"
                target="_blank"
                title="Linkedin"
                className="flex items-center justify-center text-gray-600 border border-white w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-gray-600 hover:border-primary"
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
