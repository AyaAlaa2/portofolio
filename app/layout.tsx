"use client";

import { useState } from "react";
import { NextIntlClientProvider } from "next-intl";

import Footer from "./Components/Footer";
import ContactFixed from "./Components/ContactFixed";
import "./globals.css";

// استيراد كل الترجمات مرة واحدة
import enMessages from "../message/en.json";
import arMessages from "../message/ar.json";

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
          <button onClick={switchLang}>{locale === "en" ? "AR" : "EN"}</button>
          <main>{children}</main>
          <ContactFixed />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
