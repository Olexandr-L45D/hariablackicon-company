// CatalogGallary
import { NavLink, useSearchParams } from "react-router-dom";
import { setFilter } from "../../redux/filters/slice";
import css from "./CatalogGallary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredByCategory } from "../../redux/filters/selectors";
import { useTranslation } from "react-i18next";
import CentrifStainless from "../../assets/images/CentrifStainless.png";
import CentrifCarbon from "../../assets/images/CentrifCarbon.png";
import imagesValveMix from "../../assets/images/imagesValveMix.png";
import hetMod from "../../assets/images/hetMod.png";
import imagesValves from "../../assets/images/imagesValves.png";
import newHeatMod from "../../assets/images/newHeatMod.png";

export default function CatalogGallary() {
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const trucks = useSelector(selectFilteredByCategory);
  const handleCategoryClick = category => {
    const newParams = new URLSearchParams(params);

    newParams.set("category", category);

    setParams(newParams);

    dispatch(
      setFilter({
        filterName: "category",
        value: category,
      })
    );
  };
  if (!trucks || trucks.length === 0) {
    return <div>No Ventilation available</div>;
  }
  return (
    <container className={css.containerCatalog}>
      <section className={css.containerList}>
        <section className={css.cardTopBlock}>
          <ul className={css.imagesTopBlock}>
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("heat-exchanger")}
              >
                <figure className={css.titleImg}>
                  <img
                    src={newHeatMod}
                    alt="Images Heat"
                    className={css.imgLogo}
                  />
                </figure>

                <p className={css.textImg}>{t("catalog.newHeat")}</p>
              </div>
            </li>
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("heat-exchanger")}
              >
                <figure className={css.titleImg}>
                  <img src={hetMod} alt="Images Heat" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.newHeat")}</p>
              </div>
            </li>

            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("valves")}
              >
                <figure className={css.titleImg}>
                  <img
                    src={imagesValveMix}
                    alt="Images Valve"
                    className={css.imgLogo}
                  />
                </figure>

                <p className={css.textImg}>{t("catalog.fanValves")}</p>
              </div>
            </li>

            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("valves")}
              >
                <figure className={css.titleImg}>
                  <img
                    src={imagesValves}
                    alt="Images Valve"
                    className={css.imgLogo}
                  />
                </figure>

                <p className={css.textImg}>{t("catalog.fanValves")}</p>
              </div>
            </li>
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("centrifugal")}
              >
                <figure className={css.titleImg}>
                  <img
                    src={CentrifStainless}
                    alt="Images Fan"
                    className={css.imgLogo}
                  />
                </figure>

                <p className={css.textImg}>{t("catalog.fanTypeSteel")}</p>
              </div>
            </li>
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("centrifugal")}
              >
                <figure className={css.titleImg}>
                  <img
                    src={CentrifCarbon}
                    alt="Images Fan"
                    className={css.imgLogo}
                  />
                </figure>

                <p className={css.textImg}>{t("catalog.fanTypeCarbon")}</p>
              </div>
            </li>
          </ul>
        </section>
        <section className={css.containerList}>
          <ul className={css.list}>
            {trucks.map(truck => (
              <li key={truck.id} className={css.cartItem}>
                <article className={css.cartContainer}>
                  <figure className={css.imgCard}>
                    <img
                      className={css.images}
                      src={truck.photo}
                      alt={truck.name}
                    />
                    <h3 className={css.titles}>{truck.name}</h3>
                  </figure>
                  <div className={css.buttonIconShowe}>
                    <NavLink className={css.btnShowe} to={`/fen/${truck.id}`}>
                      {t("navigation.show_more")}
                    </NavLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </container>
  );
}
