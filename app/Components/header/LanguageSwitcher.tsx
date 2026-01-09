import Link from "next/link";
import { useLocale } from "next-intl";

type LanguageSwitcherProps = {
  switchLang: () => void;
};

const LanguageSwitcher = ({ switchLang }: LanguageSwitcherProps) => {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2 text-h3">
      <button onClick={switchLang}>
        <p className="text-[16px] font-medium bg-[#033268] text-white py-3 px-5 rounded-md cursor-pointer hover:bg-[#033268]/80">
          {locale === "ar" ? "English" : "العربية"}
        </p>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
