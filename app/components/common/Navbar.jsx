"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBtn from "./NavBtn";
import { Link } from "nextjs13-progress";
import LocaleSwitcher from "./LocaleSwitcher";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const t = useTranslations("common");

  const handleOpenMenu = () => {
    setShowMenu(!showMenu);

    if (!showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    setShowMenu(false);
    document.body.classList.remove("overflow-hidden");
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 z-40 w-full py-2 h-nav shadow-sm bg-dark">
      <div className="container h-full">
        <div className=" h-full flex items-center justify-between">
          <Link href="/" className="h-12 w-1h-12 flex">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={48}
              height={48}
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
              <li className="w-full flex items-center justify-between md:hidden">
                <Link href="/" className="h-10 w-10 flex">
                  <Image
                    src={"/images/logo.png"}
                    alt="logo"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </Link>

                <button
                  className="w-8 h-8 text-2xl flex items-center justify-center bg-primary rounded-sm text-dark hover:bg-opacity-80"
                  onClick={handleOpenMenu}
                >
                  <X />
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
              onClick={handleOpenMenu}
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
        </div>
      </div>

      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
          onClick={handleOpenMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
