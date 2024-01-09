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
    <Select
      className="outline-none !ring-0"
      onValueChange={handleChange}
      defaultValue={locale}
    >
      <SelectTrigger className="w-16 lg:w-20">
        <SelectValue placeholder={locale} />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ar">AR</SelectItem>
      </SelectContent>
    </Select>
  );
}
