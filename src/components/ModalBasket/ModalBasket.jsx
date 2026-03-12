// ModalBasket

import { useState } from "react";
import css from "./ModalBasket.module.css";

export default function ModalBasket() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={() => setIsOpen(false)}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <button className={css.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <div className={css.mapBox}></div>
          </div>
        </div>
      )}
    </>
  );
}
