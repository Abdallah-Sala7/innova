import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../globals.css";

import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Next13NProgress } from "nextjs13-progress";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { AOSInit } from "../components/common/AOSInit";
import Whatsapp from "../components/Whatsapp";
import { getTranslations } from "next-intl/server";

const cairo = Cairo({
  display: "swap",
  subsets: ["arabic", "latin"],
  weight: "400"
});

export async function generateMetadata() {
  const t = await getTranslations("meta");

  return {
    title: {
      template: `${t("title")}  | %s`,
      default: t("title"),
    },
    description: t("description"),
    author: "Innova Tech",
    themeColor: "#37bff1",
    applicationName: "Innova Tech",
    metadataBase: new URL("https://www.innovatech.com"),
    keywords: [
      t("keywords.0"),
      t("keywords.1"),
      t("keywords.2"),
      t("keywords.3"),
      t("keywords.4"),
    ],
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "ar-AR": "/ar",
      },
    },
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/meta/apple-touch-icon.png",
        sizes: "180*180",
      },
      {
        rel: "icon",
        url: "/meta/favicon-32x32.png",
        sizes: "32*32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/meta/favicon-16x16.png",
        sizes: "16*16",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/meta/safari-pinned-tab.svg",
        color: "#37bff1",
      },
    ],
    manifest: "/site.webmanifest",
    other: {
      "msapplication-TileColor": "#37bff1",
    },
    openGraph: {
      type: "website",
      url: "https://innovatech.com/",
      title: t("title"),
      site_name: "Innova Tech",
      description: t("description"),
      images: ["/meta/banner.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/meta/banner.png"],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const locale = params.locale;

  let translations;

  try {
    translations = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={cairo.className}
    >
      <body>
        <AOSInit />
        <Whatsapp />

        <NextIntlClientProvider locale={locale} messages={translations}>
          <Navbar />

          <main className="overflow-hidden pt-nav">{children}</main>

          <Footer />

          <Next13NProgress color="#37bff1" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
