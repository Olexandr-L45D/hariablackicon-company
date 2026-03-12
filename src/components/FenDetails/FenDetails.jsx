// FenDetails.module.css
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./FenDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const FenDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const items = useSelector(state => state.campers.items);

  const fen = items.find(item => String(item.id) === id);

  if (!fen) return <p>No characteristics found</p>;

  return (
    <container className={css.containerList}>
      <h1 className={css.titles}>{fen.name}</h1>
      <section key={fen.id} className={css.cartItem}>
        <figure className={css.imgCard}>
          <img className={css.images} src={fen.photo} alt={fen.name} />
        </figure>

        <section className={css.cartContainer}>
          <ul className={css.cartComent}>
            <li className={css.descrip}>
              <strong>{t("catalog.type")}&nbsp;</strong>
              {fen.fen_type}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.apli")}&nbsp; </strong> {fen.aplication}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.airflo")}:&nbsp; </strong> {fen.airflow_cap}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.max")}:&nbsp; </strong> {fen.max_pressure}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.motorPow")}:&nbsp; </strong> {fen.power_kw}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.nois")}:&nbsp; </strong> {fen.nois_level}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.impeller")}:&nbsp; </strong> {fen.material}
            </li>

            <li className={css.descrip}>
              <strong>{t("catalog.temperat")}:&nbsp; </strong>
              {fen.temperature}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.weight")}:&nbsp; </strong> {fen.weight}
            </li>
            <li className={css.descrip}>
              <strong>{t("catalog.rotation")}:&nbsp; </strong>
              {fen.rotation_direction}
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
          {fen.subtitle}
        </h3>
        <p className={css.moreDescrip}>{fen.description}</p>
        <h2 className={css.schemeTitle}>{t("catalog.scheme")}</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={fen.scheme} alt={fen.scheme} />
        </figure>
        <h2 className={css.schemeTitle}>{t("catalog.table")}</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={fen.table} alt={fen.table} />
        </figure>
      </section>
      <ScrollToTopButton />
    </container>
  );
};

export default FenDetails;
