// HeatExchangeDetails.module.css
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./HeatExchangeDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const HeatExchangeDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const items = useSelector(state => state.campers.items);

  const heat = items.find(item => String(item.id) === id);

  if (!heat) return <p>No characteristics found Heat Exchange</p>;

  return (
    <container className={css.containerList}>
      <h1 className={css.titles}>{heat.name}</h1>
      <section key={heat.id} className={css.cartItem}>
        <figure className={css.imgCard}>
          <img className={css.images} src={heat.photo} alt={heat.name} />
        </figure>

        <section className={css.cartContainer}>
          <ul className={css.cartComent}>
            <li className={css.descrip}>
              <strong>{t("catalog.apli")}&nbsp; </strong> {heat.aplication}
            </li>

            <li className={css.descrip}>
              <strong>{t("catalog.fanTypeMaterial")}:&nbsp; </strong>{" "}
              {heat.material}
            </li>
          </ul>
        </section>
      </section>

      <button className={css.buttonIcon}>
        <GoArrowLeft className={css.icons} />
        <NavLink className={css.linkGo} to="/catalog">
          {t("navigation.go_Catalog")}
        </NavLink>
      </button>
      <section className={css.containerSecind}>
        <h2 className={css.titleDescr}>{t("catalog.description")}</h2>
        <h3 className={css.schemeTitle}>
          <strong className={css.schemeTitle}></strong>
          {heat.subtitle}
        </h3>
        <p className={css.moreDescrip}>{heat.description}</p>
        <h2 className={css.schemeTitle}>{t("catalog.scheme")}</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={heat.scheme} alt={heat.scheme} />
        </figure>
      </section>
      <ScrollToTopButton />
    </container>
  );
};

export default HeatExchangeDetails;
