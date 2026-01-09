"use client";
import { useState } from "react";
import Link from "next/link";
import HeaderLinks from "./HeaderLinks";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { MenuIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  switchLang: () => void;
};

const Header = ({ switchLang }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="px-4 sm:px-8 lg:px-20 py-3 border-b-1 border-border-regular sticky top-0 z-50 bg-[#2b2f32]">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <Link href="/" className="flex items-end">
            <Image src="/logo.png" alt="logo" width={98} height={48} />
            <p className="text-[14px] font-semibold text-gradient bg-[linear-gradient(145deg,#ca2583,#e7811c_16.66%,#dffb8d_33.32%,#96c6d0_49.98%,#4e798c_66.64%,#043266)] bg-clip-text text-transparent">
              Software House
            </p>
          </Link>

          <div className="hidden lg:block">
            <HeaderLinks />
          </div>

          <div className="hidden lg:block">
            <LanguageSwitcher switchLang={switchLang} />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white bg-transparent rounded-md transition-colors"
            aria-label="Toggle mobile menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
