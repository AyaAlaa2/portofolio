"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeaderBanner = () => {
  const t = useTranslations("HeaderBanner");
  return (
    <div className="flex bg-[#df8227] text-white h-12 justify-center items-center overflow-hidden relative">
      <motion.div
        className="absolute"
        animate={{
          y: [-50, 0, 0, -50],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
        }}
      >
        {t("message")}
      </motion.div>

      <motion.div
        className="absolute"
        animate={{
          y: [-50, 0, 0, -50],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
          delay: 3, // هنا تخليها تبدأ بعد نص مدة الأولى
        }}
      >
        <div className="flex flex-row gap-4 items-center">
        {t("follow-us")}
  <span>
          <FaFacebook />
        </span>
        <span>
          <FaLinkedin />
        </span>
        <span>
          <FaInstagram />
        </span>
        </div>
      
      </motion.div>
    </div>
  );
};

export default HeaderBanner;
