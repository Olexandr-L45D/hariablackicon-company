import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import IconButtonCatalog from "../../assets/images/Iconbuttoncatal.png";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <section className={css.card}>
        <nav className={css.nav}>
          <div className={css.iconBlok}>
            <img src={IconButtonCatalog} alt="" className={css.imgLogo} />
            <NavLink to="/" className={newLinkClass}>
              {t("navigation.home")}
            </NavLink>
          </div>
          <NavLink to="/catalog" className={newLinkClass}>
            {t("navigation.catalog")}
          </NavLink>

          <NavLink to="/aboutus" className={newLinkClass}>
            {t("navigation.aboutnav")}
          </NavLink>
          <NavLink to="/companyTerms" className={newLinkClass}>
            {t("navigation.deliveryTerms")}
          </NavLink>
        </nav>
      </section>
    </section>
  );
};
