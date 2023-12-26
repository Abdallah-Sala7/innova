"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = () => {
    const lang = locale === "en" ? "ar" : "en";

    router.push(pathname, { locale: lang });
  };

  return (
    <button
      onClick={handleChange}
      className="w-10 h-10 flex items-center justify-center"
    >
      <Image
        src={`/images/flags/${locale}.png`}
        alt="logo"
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    </button>
  );
}
