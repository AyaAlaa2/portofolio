"use client";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Home");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("desc")}</p>
    </>
  );
};

export default Page;
