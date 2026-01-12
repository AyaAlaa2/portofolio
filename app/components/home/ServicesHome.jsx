import { useTranslations, useLocale } from "next-intl";
import {
  FaShoppingCart,
  FaBullhorn,
  FaVideo,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const iconsMap = {
  FaShoppingCart,
  FaBullhorn,
  FaVideo,
  FaCode,
  FaMobileAlt,
  MdDesignServices,
};

const ServicesHome = () => {
  const t = useTranslations("HomeServices");
  const locale = useLocale();
  const dir = locale === "ar" ? "ar" : "en";

  const productsKeys = [
    "eCommerce",
    "Design",
    "WebPromotion",
    "ExplainerVideos",
    "WebDevelopment",
    "MobileApp",
  ];

  const products = productsKeys.map((key) => ({
    title: t(`${key}.title`),
    icon: t(`${key}.icon`),
    desc: t(`${key}.desc`),
  }));

  return (
    <div>
      <h1 className="text-center text-2xl">{t("title")}</h1>
      <p className="text-center text-lg">{t("desc")}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => {
          const IconComponent = iconsMap[product.icon];
          return (
            <div
              key={index}
              className="flex items-center flex-col gap-4 p-6 bg-amber-50 rounded shadow-lg group"
            >
              {IconComponent && <IconComponent size={30} />}
              <div>
                <h3 className="text-center text-blue-950 font-extrabold text-2xl">
                  {product.title}
                </h3>
                <p className="text-center">{product.desc}</p>
                <div className="flex items-center justify-center">
                  <button
                    className="mt-2 mx-auto px-4 py-1 bg-orange-500 text-white rounded
                   opacity-0 translate-y-4 transition-all duration-300
                   group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {dir === "ar" ? "شاهد المزيد" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesHome;
