import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./FeedbackFormPhone.module.css";
import { useTranslation } from "react-i18next";

export default function FeedbackFormPhone() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", phone: "" });
    } catch (err) {
      console.error("Email send error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>{t("navigation.feedbackTitle")} </h2>

        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder=" phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button className={css.button} type="submit" disabled={sending}>
          {sending ? "Sending…" : t("navigation.feedbackSend")}
        </button>

        {success && (
          <p className={css.success}>{t("footernav.footerWriLetter")}</p>
        )}
      </form>
    </section>
  );
}
