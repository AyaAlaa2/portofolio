"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";

import Footer from "./components/Footer";
import ContactFixed from "./components/ContactFixed";
import "./globals.css";

// استيراد كل الترجمات مرة واحدة
import enMessages from "../message/en.json";
import arMessages from "../message/ar.json";
import Header from "./components/header/Header";
import HeaderBanner from "./components/header/HeaderBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocale] = useState<"en" | "ar">("en");
  const messages = locale === "en" ? enMessages : arMessages;

  const switchLang = () => setLocale(locale === "en" ? "ar" : "en");

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <HeaderBanner />
          <Header switchLang={switchLang} />
          <main>{children}</main>
          <ContactFixed />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
