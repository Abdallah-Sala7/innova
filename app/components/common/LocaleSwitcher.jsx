"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = () => {
    const lang = locale === "en" ? "ar" : "en";

    router.push(pathname, { locale: lang });
  };

  return (
    // <button
    //   onClick={handleChange}
    //   className="w-8 h-w-8 flex items-center justify-center sm:w-9 sm:h-9"
    // >
    //   <Image
    //     src={`/images/flags/${locale}.png`}
    //     alt="logo"
    //     width={40}
    //     height={40}
    //     className="w-full h-full object-contain"
    //   />
    // </button>

    <Select className="outline-none !ring-0">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent className={"bg-white ring-0"}>
        <SelectItem className={"ring-0"} value="light">
          Light
        </SelectItem>
        <SelectItem className={"ring-0"} value="dark">
          Dark
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
