import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("common.footer");

  return (
    <footer
      className={`
      relative z-10 py-7 bg-gradient-to-b from-dark to-primary
      after:absolute after:inset-0 after:bg-dark after:-z-10 after:bg-opacity-90
    `}
    >
      <div className="container flex justify-between flex-wrap gap-y-5">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Link href="/" className="h-14 w-16 flex mb-6">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </Link>

          <p className="text-primary text-title-16 font-bold leading-7">
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
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("services.web")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("services.mobile")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("services.commerce")}
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("services.design")}
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
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
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("links.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("links.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("links.services")}
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
                {t("links.portfolio")}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-bold text-white capitalize transition-colors hover:text-primary"
              >
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
                <span className="w-5 h-5 text-lg text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    stroke="currentColor"
                    fill="currentColor"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </span>
                Mansoura, Egypt
              </a>
            </li>

            <li>
              <a
                href="tel:+201025077437"
                target="_blank"
                className="flex items-center gap-1.5 text-white capitalize transition-colors hover:text-primary"
              >
                <span className="w-5 h-5 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    stroke="currentColor"
                    fill="currentColor"
                  >
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                </span>
                +201025077437
              </a>
            </li>

            <li>
              <a
                href="mailto:mumat@mail.dev"
                target="_blank"
                className="flex items-center gap-1.5 text-white capitalize transition-colors hover:text-primary"
              >
                <span className="w-5 h-5 text-lg text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    stroke="currentColor"
                    fill="currentColor"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </span>
                mumat@mail.dev
              </a>
            </li>

            <li className="flex items-center gap-2 mt-5">
              <a
                href="https://www.facebook.com/mumat"
                target="_blank"
                title="Facebook"
                className="flex items-center justify-center gap-1.5 text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/mumat"
                target="_blank"
                title="Twitter"
                className="flex items-center justify-center gap-1.5 text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mumat"
                target="_blank"
                title="Instagram"
                className="flex items-center justify-center gap-1.5 text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/mumat"
                target="_blank"
                title="Linkedin"
                className="flex items-center justify-center gap-1.5 text-primary border border-primary w-8 h-8 rounded-full duration-300 transition-all hover:bg-primary hover:text-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
