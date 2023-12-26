"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import NavBtn from "./NavBtn";
import { Link } from "nextjs13-progress";
import LocaleSwitcher from "./LocaleSwitcher";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const t = useTranslations("common");

  return (
    <nav className="fixed top-0 left-0 z-40 w-full py-2 h-nav shadow-sm bg-dark">
      <div className="container flex items-center justify-between">
        <Link href="/" className="h-14 w-14 flex">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <ul
            className={`
          fixed top-0 left-0 z-50 bg-dark max-w-full w-72 h-full p-5
          flex flex-col items-center gap-4 transition-transform
          md:flex-row md:static md:w-auto md:p-0 md:gap-2
          ${showMenu ? "translate-x-0" : " -translate-x-full md:-translate-x-0"}
        `}
          >
            <li className="w-full flex items-center justify-between mb-3 md:hidden">
              <Link href="/" className="h-14 w-16 flex">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </Link>

              <button
                className="w-10 h-10 text-2xl flex items-center justify-center gap-2 font-bold bg-primary rounded-sm text-dark hover:bg-opacity-80"
                onClick={() => setShowMenu(!showMenu)}
              >
                X
              </button>
            </li>

            <li>
              <NavBtn href="/">{t("home")}</NavBtn>
            </li>

            <li>
              <NavBtn href="about">{t("about")}</NavBtn>
            </li>

            <li>
              <NavBtn href="services">{t("services")}</NavBtn>
            </li>

            <li>
              <NavBtn href="portfolio">{t("portfolio")}</NavBtn>
            </li>

            <li>
              <NavBtn href="contact">{t("contact")}</NavBtn>
            </li>
          </ul>

          <LocaleSwitcher />

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-8 gap-1.5 justify-between flex flex-wrap md:hidden"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          </button>
        </div>

        {showMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 md:hidden"
            onClick={() => setShowMenu(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
