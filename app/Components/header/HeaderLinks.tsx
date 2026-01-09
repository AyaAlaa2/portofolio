"use client";

import React from "react";
import Link from "next/link";
import { links } from "./links";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const HeaderLinks = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex items-center gap-8">
      <Link
        className="text-[17px] font-semibold text-white hover:text-primary duration-200 uppercase"
        href={links.home}
      >
        {t("home")}
      </Link>
      <Link
        className="text-[17px] font-semibold text-white hover:text-primary duration-200 uppercase"
        href={links.hireUs}
      >
        {t("hire us")}
      </Link>
      <Link
        className="text-[17px] font-semibold text-white hover:text-primary duration-200 uppercase"
        href={links.howWeDeliver}
      >
        {t("how we deliver")}
      </Link>
      <Link
        className="text-[17px] font-semibold text-white hover:text-primary duration-200 uppercase"
        href={links.about}
      >
        {t("about")}
      </Link>
      <Link
        className="text-[17px] font-semibold text-white hover:text-primary duration-200 uppercase"
        href={links.contactUs}
      >
        {t("contact us")}
      </Link>
      <button className="uppercase p-3 bg-[#df8227] rounded-md text-white flex gap-2 font-semibold">
        <Phone size={20} className="fill-white" />
        {t("call us now")}
      </button>
    </div>
  );
};

export default HeaderLinks;
