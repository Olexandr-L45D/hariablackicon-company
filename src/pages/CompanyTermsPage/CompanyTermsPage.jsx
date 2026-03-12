import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ContactMapModal from "../../components/ContactMapModal/ContactMapModal";
import css from "./CompanyTermsPage.module.css";
import Haria from "../../assets/images/Haria.png";
import { useTranslation } from "react-i18next";

export default function CompanyTermsPage() {
  const { t } = useTranslation();
  return (
    <main className={css.page}>
      <header className={css.hero}>
        <div className={css.wrapperTop}>
          <h1 className={css.heroTitle}>{t("companyterms.titleCompany")}</h1>
          <figure className={css.titleHari}>
            <img
              className={css.imagesHaria}
              src={Haria}
              alt="Haria Company logo"
            />
          </figure>
          <p className={css.heroText}>{t("companyterms.subtitleCompany")}</p>
        </div>
      </header>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.aboutTheCompany")}
          </h2>
          <article className={css.content}>
            <p>{t("companyterms.aboutWeAreCompany")}</p>
            <p>{t("companyterms.aboutOurExpertise")}</p>
          </article>
        </div>
      </section>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitleManagement")}
          </h2>
          <article className={css.content}>
            <ul className={css.list}>
              <li>{t("companyterms.textManagement")}</li>
              <li>{t("companyterms.textSales")}</li>
              <li>{t("companyterms.textLogistics")}</li>
              <li>{t("companyterms.textAccounting")}</li>
              <li>{t("companyterms.youAlwaysResponsible")}</li>
            </ul>
          </article>
        </div>
      </section>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitleCooperation")}
          </h2>
          <ul className={css.list}>
            <li>{t("companyterms.textB2BCooperation")}</li>
            <li>{t("companyterms.wholesaleDealer")}</li>
            <li>{t("companyterms.minimumQuantity")}</li>
            <li>{t("companyterms.orderProcessing")}</li>
          </ul>
        </div>
      </section>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitlePayment")}
          </h2>
          <ul className={css.list}>
            <li>{t("companyterms.bankTransfer")}</li>
            <li>{t("companyterms.bankInvoice")}</li>
            <li>{t("companyterms.bankPrepayment")}</li>
          </ul>
        </div>
      </section>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitleDelivery")}
          </h2>
          <ul className={css.list}>
            <li>{t("companyterms.deliveryExm")}</li>
            <li>{t("companyterms.deliveryTimeDepends")}</li>
            <li>{t("companyterms.deliveryResponsibility")}</li>
            <li>{t("companyterms.deliveryAdress")}</li>
          </ul>
        </div>
      </section>
      <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitleContacts")}
          </h2>
          <address className={css.contacts}>
            <p>
              Via Santa Maria, 84 <br />
              36030 Sarcedo (VI), Italy
            </p>
            <p>
              <AiFillPhone /> +39 366 388 3621
            </p>
            <p>
              <AiFillPhone /> +39 338 65 28 541
            </p>
            <p>
              <MdEmail /> lyubov@blackicon.it
            </p>
            <ContactMapModal />
          </address>
        </div>
      </section>
    </main>
  );
}

// ця секція щоб завантажити чи скачати договір чи інший документ
// import PdfActionsCondition from "../../components/ConditionsMenu/ConditionsMenu";
/* <section className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.titleParagraf}>
            {t("companyterms.subtitleDocuments")}
          </h2>
          <div className={css.docActions}>
            <PdfActionsCondition
              viewUrl="/pdfs/mnItalvent_1.pdf"
              downloadUrl="/pdfs/mnItalvent_1.pdf"
            />
          </div>
        </div>
      </section> */
