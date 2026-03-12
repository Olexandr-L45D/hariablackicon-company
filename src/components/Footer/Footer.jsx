import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Footer.module.css";
import { AiFillPhone } from "react-icons/ai";
import FeedbackMenu from "../FeedbackMenu/FeedbackMenu";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import newFooterLogo from "../../assets/images/newFooterLogo.png";
import footerBg from "../../assets/images/FooterBlend.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const newLinkClassSecond = ({ isActive }) => {
  return clsx(css.linkSecond, isActive && css.active);
};

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.footer}>
      <section
        className={css.container}
        style={{ "--footer-bg": `url(${footerBg})` }}
      >
        <section className={css.leftAllSection}>
          <div className={css.titleText}>
            <figure className={css.titleImg}>
              <img
                src={newFooterLogo}
                alt="HARIA Company logo"
                className={css.imgLogo}
              />
            </figure>
            <p className={css.textLogo}>{t("navigation.textLogoFooter")}</p>
          </div>

          <nav className={css.cardLink}>
            <h2 className={css.titleBlok}>{t("navigation.navigatTitle")}</h2>

            <NavLink to="/aboutus" className={newLinkClassSecond}>
              {t("navigation.about")}
            </NavLink>

            <NavLink to="/catalog" className={newLinkClassSecond}>
              {t("navigation.catalogFo")}
            </NavLink>

            <NavLink to="/companyTerms" className={newLinkClassSecond}>
              {t("navigation.deliveryTerms")}
            </NavLink>
          </nav>
        </section>
        <section className={css.rightAllSection}>
          <section className={css.cardTextBl}>
            <h2 className={css.titleBlok}>{t("navigation.contactTitle")}</h2>

            <ul className={css.titleText}>
              <li className={css.text}>
                <AiFillPhone className={css.iconb} /> +393663883621
              </li>
              <li className={css.text}>
                <a className={css.emailLink} href="mailto:lyubov@blackicon.it">
                  <MdEmail className={css.iconb} />
                  lyubov@blackicon.it
                </a>
              </li>

              <li className={css.text}>Via Santa Maria, nr 84</li>
              <li className={css.text}>36030-Sarcedo-Vcenza-Italia</li>
              <li className={css.text}>
                © 2025 Haria Black Icon Srl. All rights reserved
              </li>
              <li className={css.textDoman}>
                Website:{" "}
                <a
                  href="https://Hariablackicon-company"
                  className={css.textlinck}
                >
                  your-domain?
                </a>
              </li>
            </ul>
          </section>
          <section className={css.rightSection}>
            <section className={css.cardTextBlIcons}>
              <h2 className={css.titleBlokRi}>
                <FeedbackMenu />
              </h2>

              <ul className={css.iconBlocFooter}>
                <li className={css.text}>
                  <FaLinkedin className={css.icon} />
                </li>
                <li className={css.text}>
                  <IoLogoInstagram className={css.icon} />
                </li>
                <li className={css.text}>
                  <FaTelegramPlane className={css.icon} />
                </li>
                <li className={css.text}>
                  <FaViber className={css.icon} />
                </li>
                <li className={css.text}>
                  <FaWhatsapp className={css.icon} />
                </li>
              </ul>
            </section>

            <section className={css.buttonIconBlok}>
              <section className={css.card}>
                <nav className={css.nav}>
                  <NavLink to="/feedbackEmail" className={newLinkClass}>
                    <p className={css.navEmail}>
                      <MdEmail className={css.icon} />
                      {t("footernav.footerWri")}
                    </p>
                  </NavLink>
                </nav>
              </section>
            </section>
          </section>
        </section>
      </section>
    </footer>
  );
};
