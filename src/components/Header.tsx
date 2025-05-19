"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Container from "./Container";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();
  const navigation = [
    { key: "menu.features", url: "#features" },
    { key: "menu.faq", url: "#sss" },
    { key: "menu.testimonials", url: "#testimonials" },
  ];

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
      <Container className="!px-0">
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/images/logo.png"} width={75} height={75} alt="debto's logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navigation.map(item => (
              <li key={item.key}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-foreground-accent transition-colors"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://app.debto.money/"
                target="_blank"
                className="text-secondary bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
              >
                {t("header.ctaButton")}
              </Link>
            </li>
            {/* Language flags grouped */}
            <li className="flex items-center space-x-2">
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`text-2xl ${
                  i18n.language === "en" ? "opacity-100" : "opacity-50 hover:opacity-100"
                } transition-opacity`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => i18n.changeLanguage("tr")}
                className={`text-2xl ${
                  i18n.language === "tr" ? "opacity-100" : "opacity-50 hover:opacity-100"
                } transition-opacity`}
              >
                🇹🇷
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {navigation.map(item => (
              <li key={item.key}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                onClick={toggleMenu}
              >
                {t("header.ctaButton")}
              </Link>
            </li>
            {/* Mobile language flags */}
            <li className="flex space-x-2">
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  toggleMenu();
                }}
                className={`text-2xl ${
                  i18n.language === "en" ? "opacity-100" : "opacity-50 hover:opacity-100"
                } transition-opacity`}
              >
                🇬🇧
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("tr");
                  toggleMenu();
                }}
                className={`text-2xl ${
                  i18n.language === "tr" ? "opacity-100" : "opacity-50 hover:opacity-100"
                } transition-opacity`}
              >
                🇹🇷
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
