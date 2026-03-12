// ButtonExportPdf
import { useState } from "react";

const PdfActions = ({ viewUrl, downloadUrl }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleMenu}
        style={{
          padding: "10px 16px",
          background: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        PDF Документація
      </button>

      {/* ВИПАДАЮЧЕ МЕНЮ */}
      {open && (
        <div
          style={{
            marginTop: "8px",
            position: "absolute",
            left: 0,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "10px",
            minWidth: "180px",
            zIndex: 10,
          }}
        >
          {/* Кнопка перегляду */}
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "8px",
                border: "none",
                borderRadius: "4px",
                background: "#f7f7f7",
                cursor: "pointer",
                marginBottom: "6px",
              }}
            >
              📄 Переглянути PDF
            </button>
          </a>

          {/* Кнопка завантаження */}
          <a href={downloadUrl} download style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "8px",
                border: "none",
                borderRadius: "4px",
                background: "#ededed",
                cursor: "pointer",
              }}
            >
              ⬇️ Завантажити PDF
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfActions;
