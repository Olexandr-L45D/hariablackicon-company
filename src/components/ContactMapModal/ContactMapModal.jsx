// ContactMapModal.jsx
import { useState } from "react";
import css from "./ContactMapModal.module.css";
import ContactMap from "../ContactMap/ContactMap";
import { useTranslation } from "react-i18next";

export default function ContactMapModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <button className={css.buttonHead} onClick={() => setIsOpen(true)}>
        {t("aboutus.openMap")}
      </button>

      {isOpen && (
        <div className={css.overlay} onClick={() => setIsOpen(false)}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <button className={css.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <div className={css.mapBox}>
              <ContactMap fullScreen={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
