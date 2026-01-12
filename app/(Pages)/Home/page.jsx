"use client";
import { useTranslations } from "next-intl";
import HomeSlider from "../../components/home/HomeSlider";

const Page = () => {
  const t = useTranslations("Home");
  return (
    <>
      <HomeSlider />
    </>
  );
};

export default Page;
