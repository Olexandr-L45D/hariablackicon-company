// ContactMapModal.jsx
import { useState } from "react";
import css from "./FeedbackModalPhone.module.css";
import FeedbackFormPhone from "../FeedbackFormPhone/FeedbackFormPhone";
import { useNavigate } from "react-router-dom";

export default function FeedbackModalPhone() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={closeModal}>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <button className={css.closeBtn} onClick={closeModal}>
              ✕
            </button>

            <div className={css.mapBox}>
              <FeedbackFormPhone fullScreen={true} onSuccess={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
