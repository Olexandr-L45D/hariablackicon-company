import { Link } from "react-router-dom";
// import Bakground from "../../assets/images/blendBakground.PNG";

import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        marginTop: 200,
        paddingTop: 100,
        // backgroundImage: `url(${Bakground})`,
      }}
    >
      <h2>
        {/* 404 - Not Found Page */}
        {t("navigation.notFound")}
      </h2>
      <p>
        {/* Plese use this link to go Home */}
        {t("navigation.pleseUse")}

        <Link to="/">
          {/* Back to home */}
          <button style={{ marginLeft: 20, color: "blue" }}>
            {" "}
            {t("navigation.backButton")}
          </button>
        </Link>
      </p>
    </div>
  );
}
