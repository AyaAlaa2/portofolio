"use client";
import { useTranslations } from "next-intl";
import HomeSlider from "../../components/home/HomeSlider";
import ServicesHome from "../../components/home/ServicesHome";
const Page = () => {
  const t = useTranslations("Home");
  return (
    <>
      <HomeSlider />
      <ServicesHome/>
    </>
  );
};

export default Page;
