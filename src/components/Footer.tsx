"use client";

import Link from "next/link";
import React from "react";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/images/logo.png"} width={75} height={75} alt="debto's logo" />
          </Link>
          <p className="mt-3.5 text-foreground-accent">{t(footerDetails.subheading)}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.linksHeader")}</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map(link => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {t(`menu.${link.text}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.contactHeader")}</h4>

          {/* {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              {t("footer.emailLabel")} {footerDetails.email}
            </a>
          )} */}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              {t("footer.phoneLabel")} {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map(platformName => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Made with &hearts; by{" "}
          <Link href="https://www.enesergun.me/" target="_blank">
            Enes Ergün
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
