import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "nextjs13-progress";
import React from "react";

const NavBtn = ({ href, children }) => {
  const pathname = usePathname();
  const locale = useLocale();
  const currentRoute =
    locale === "ar" ? pathname.split("/")[2] : pathname.split("/")[1];

  return (
    <Link
      href={`/${locale}${href.startsWith("/") ? href : `/${href}`}`}
      className={`
                relative font-bold text-title-16 capitalize p-2 transition-colors
                after:absolute after:bottom-1 after:start-2 after:h-0.5 after:opacity-80 after:bg-primary after:transition-all
                hover:after:w-1/2 hover:text-primary
                ${
                  currentRoute === href ||
                  pathname === href ||
                  pathname === href + locale
                    ? "after:w-1/2 text-primary"
                    : "text-white after:w-0"
                }
              `}
    >
      {children}
    </Link>
  );
};

export default NavBtn;
