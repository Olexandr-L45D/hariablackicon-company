import css from "./AboutUsPage.module.css";
import { useTranslation } from "react-i18next";
import BlendBottom from "../../assets/images/BlendBottom.png";
import elevator from "../../assets/images/elevatorbig.png";
import laboratory from "../../assets/images/woodworking.png";
import carWash from "../../assets/images/carWashs.png";
import Haria from "../../assets/images/Haria.png";
import bakery from "../../assets/images/bakery.png";

export default function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <section className={css.container}>
      <section className={css.background}>
        <section className={css.card}>
          <ul className={css.usContent}>
            <li className={css.titleHaria}>
              <img className={css.imagesHaria} src={Haria} alt="Haria" />
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsTop")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsSecond")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsMidle")}</strong>
            </li>
            <li className={css.carttextUs}>
              <strong>{t("aboutus.carttextUsBotton")}</strong>
            </li>
          </ul>
          <section className={css.ulCard}>
            <ul className={css.topBlokImgCard}>
              <li className={css.liImgCard}>
                <img className={css.images} src={elevator} alt="elevator" />
              </li>

              <li className={css.liImgCard}>
                <img className={css.images} src={laboratory} alt="laboratory" />
              </li>
            </ul>

            <ul className={css.bottomBlokImgCard}>
              <li className={css.liImgCard}>
                <img className={css.images} src={carWash} alt="carWash" />
              </li>

              <li className={css.liImgCard}>
                <img className={css.images} src={bakery} alt="bakery" />
              </li>
            </ul>
          </section>
        </section>
        <div className={css.blockBlendBottom}>
          <img
            className={css.imagesBlendBottom}
            src={BlendBottom}
            alt="BlendBottom"
          />
        </div>
      </section>
    </section>
  );
}
