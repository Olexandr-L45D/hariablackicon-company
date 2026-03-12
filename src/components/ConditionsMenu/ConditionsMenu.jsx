// ConditionsMenu

import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./ConditionsMenu.module.css";
import { AiOutlineDownload } from "react-icons/ai";

const PdfActionsCondition = ({ viewUrl, downloadUrl }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button className={css.buttonHead} onClick={toggleMenu}>
        {t("footernav.footerTerms")}
      </button>

      {open && (
        <div
          style={{
            marginTop: "8px",
            position: "absolute",
            left: 0,
            bottom: 80,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "15px",
            minWidth: "220px",
            zIndex: 100,
          }}
        >
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#f7f7f7",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              {t("footernav.footerView")}
            </button>
          </a>

          {/* <a
            href={viewUrlDelivery}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#f7f7f7",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              📄
              {t("footernav.footerViewDel")}
            </button>
          </a> */}

          <a href={downloadUrl} download style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                background: "#ededed",
                cursor: "pointer",
              }}
            >
              {/* ⬇️ */}
              <AiOutlineDownload color="#fbb007" size={22} />
              {t("footernav.footerViewDown")}
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfActionsCondition;
