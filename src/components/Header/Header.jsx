import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { AiFillPhone } from "react-icons/ai";
import SearchBoxFiltr from "../SearchBoxFiltr/SearchBoxFiltr";
import LogoVent from "../../assets/images/LogoBlackital.png";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <header className={css.header}>
        <NavLink to="/" className={css.titleImg}>
          <img
            src={LogoVent}
            alt="Haria Black Icon Srl Company logo"
            className={css.imgLogo}
          />
        </NavLink>

        <SearchBoxFiltr />
        <article className={css.languageSwitcher}>
          <button
            className={css.activeButton}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={css.activeButton}
            onClick={() => changeLanguage("it")}
          >
            IT
          </button>
          <button
            className={css.activeButton}
            onClick={() => changeLanguage("pl")}
          >
            PL
          </button>
        </article>
        <NavLink to="/feedbackPhone" className={newLinkClass}>
          <p className={css.iconPhoneNumb}>+393663883621</p>
          <p className={css.iconPhoneBlock}>
            <AiFillPhone className={css.iconPhon} />
            {t("navigation.callback")}
          </p>
        </NavLink>
      </header>
    </section>
  );
};
