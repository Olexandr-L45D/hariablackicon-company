import { Link, useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";
import { setFilter } from "../../redux/filters/slice";
import { useTranslation } from "react-i18next";
import cardLeft from "../../assets/images/fanHomeLeft.png";
import cardCenter from "../../assets/images/fanHomeCenter.png";
import cardRight from "../../assets/images/fanHomeRight.png";
import VectorHomeCenter from "../../assets/images/VectorHomeCenter.png";
import Advantages from "../../assets/images/Advantages.png";
import Advantagestablet from "../../assets/images/Advantagestablet.png";
import startHomePage from "../../assets/images/startHomePage.png";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, ready } = useTranslation();

  const handleCategoryClick = category => {
    dispatch(
      setFilter({
        filterName: "category",
        value: category,
      })
    );

    navigate(`/catalog?category=${category}`);
  };
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <>
      <section className={css.container}>
        <section className={css.background}>
          <section className={css.card}>
            <figure className={css.cardTopImages}>
              <img
                loading="lazy"
                className={css.bigImagesTop}
                src={startHomePage}
                alt="Industrial centrifugal ventilation fan for HVAC systems"
              />
            </figure>
            <div className={css.heroContent}>
              <h1 className={css.cartTitleTop}>{t("navigation.titleHome")}</h1>
              <h2 className={css.cartTextTop}>{t("navigation.titleWelcom")}</h2>
              <section className={css.containerButtons}>
                <section className={css.cartBtn}>
                  <Link to="/catalog">
                    <div className={css.buttonViews}>
                      <button className={css.btnVie} type="button">
                        {t("navigation.View")}
                      </button>
                    </div>
                  </Link>
                </section>
                <section className={css.cartBtnSecond}>
                  <Link to="/feedbackPhone">
                    <div
                      className={`${css.buttonViewsSecond} ${css.buttonViewsSecondMobil}`}
                    >
                      <button className={css.btnVieSecond} type="button">
                        {t("navigation.orderCallback")}
                      </button>
                    </div>
                  </Link>
                </section>
              </section>
            </div>
          </section>
        </section>

        <section className={css.containerCategories}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>{t("navigation.bestSel")}</h2>
          </div>

          <ul className={css.ulCardCategories}>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img
                  loading="lazy"
                  className={css.images}
                  src={cardRight}
                  alt="Industrial heat exchangers for heating, cooling and HVAC systems"
                />
              </figure>

              <h3 className={css.cartImagesText}>
                {t("homepage.bestSelImagesRight")}
              </h3>

              <div className={css.buttonViewsSecond}>
                <button
                  className={css.btnVieSecond}
                  type="button"
                  onClick={() => handleCategoryClick("heat-exchanger")}
                >
                  {t("navigation.buttonLernMore")}
                </button>
              </div>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img
                  loading="lazy"
                  className={css.images}
                  src={cardCenter}
                  alt="Valves Industrial systems"
                />
              </figure>
              <h3 className={css.cartImagesText}>
                {t("homepage.bestSelValves")}
              </h3>
              <div className={css.buttonViewsSecond}>
                <button
                  className={css.btnVieSecond}
                  type="button"
                  onClick={() => handleCategoryClick("valves")}
                >
                  {t("navigation.buttonLernMore")}
                </button>
              </div>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img
                  loading="lazy"
                  className={css.images}
                  src={cardLeft}
                  alt="Industrial centrifugal ventilation fan for HVAC systems"
                />
              </figure>
              <h3 className={css.cartImagesText}>
                {t("homepage.bestSelFans")}
              </h3>
              <div className={css.buttonViewsSecond}>
                <button
                  className={css.btnVieSecond}
                  type="button"
                  onClick={() => handleCategoryClick("centrifugal")}
                >
                  {t("navigation.buttonLernMore")}
                </button>
              </div>
            </li>
          </ul>
        </section>
        <figure className={css.cardImagesFigure}>
          <img
            loading="lazy"
            className={css.imagFigure}
            src={VectorHomeCenter}
            alt="Figured background image"
          />
        </figure>
        <div className={css.titleBlockAdvantages}>
          <h2 className={css.cartTitleTextAdvantages}>
            {t("navigation.advantages")}
          </h2>
        </div>
        <section className={css.containerAdvantages}>
          <h3 className={`${css.labelTop} ${css.labelTopMobile}`}>
            {t("homepage.advantageFlexibility")}
          </h3>
          <h3 className={`${css.labelLeft} ${css.labelLeftTopMobile}`}>
            {t("homepage.advantagesHight")}
          </h3>
          <figure className={css.cardBigImages}>
            <img
              loading="lazy"
              className={css.bigImages}
              src={Advantages}
              alt="AdvantagesImages"
            />
          </figure>
          <h3 className={`${css.labelRight} ${css.labelRightTopMobile}`}>
            {t("homepage.bestSelFast")}
          </h3>
          <h3 className={css.labelBotton}>{t("homepage.bestSelEvery")}</h3>
        </section>
        {/* mibile version to 799 width */}
        <section className={css.containerAdvantagesMobile}>
          <img
            loading="lazy"
            className={css.advantagesMobileImage}
            src={Advantagestablet}
            alt="Advantagestablet"
          />
        </section>

        <section className={`${css.container} ${css.containerMobil}`}>
          <div className={`${css.titleBlock} ${css.titleBlockMobile}`}>
            <h2 className={css.cartTitleText}>{t("navigation.producer")}</h2>
          </div>

          <figure className={css.cardProducer}>
            <p className={css.cardProdText}>{t("navigation.cardProdText")}</p>
          </figure>
        </section>

        <section className={css.containerReviews}>
          <div className={css.titleBlockReviews}>
            <h2 className={css.cartTitleText}>{t("homepage.titleReviews")}</h2>
          </div>
          <ul className={css.ulCardReviews}>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                <BiSolidUser />

                {t("homepage.bestReviews")}
              </h3>
              <p className={css.reviewsText}>{t("homepage.bestReviewsLeft")}</p>
            </li>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                <BiSolidUser />

                {t("homepage.bestReviewsRight")}
              </h3>
              <p className={css.reviewsText}>{t("homepage.bestTextRight")}</p>
            </li>
          </ul>
        </section>
      </section>
      <ScrollToTopButton />
    </>
  );
}
