import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import css from "./FeedbackMenu.module.css";
import { FaWhatsapp } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeedbackMenu = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className={css.feedbackEntryBtn} onClick={() => setOpenModal(true)}>
        {t("footernav.footerResp")}
      </div>

      {openModal && (
        <div
          className={css.feedbackModalOverlay}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <div className={css.feedbackModal} onClick={e => e.stopPropagation()}>
            <h2 className={css.modalTitle}>{t("footernav.footCallUs")}</h2>

            <div className={css.modalButtons}>
              <a
                href="viber://chat?number=%2B393663883621"
                className={css.modalBtn}
              >
                <FaViber className={css.icon} />
                Viber
              </a>

              <a
                href="https://instagram.com/hariablackicon/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <IoLogoInstagram className={css.icon} />
                Instagram
              </a>
              <a
                href="https://t.me/lyubovshybunka"
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaTelegramPlane className={css.icon} />
                Telegram
              </a>
              <a
                href="https://wa.me/393663883621"
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaWhatsapp className={css.icon} />
                WhatsApp
              </a>

              {/* ✔ LinkedIn  ← вставити лінк-? якщо скине якщо ні то видалити (можливо  замінити на фейсбук?*/}
              {/* <a
                href="https://www.linkedin.com/in/your_Prof"
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaLinkedin className={css.icon} />
                LinkedIn
              </a> */}
            </div>

            <button
              className={css.modalClose}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              {t("footernav.footFeedbClose")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackMenu;
