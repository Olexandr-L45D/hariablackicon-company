import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./FeedbackForm.module.css";
import { useTranslation } from "react-i18next";

export default function FeedbackForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <p className={css.totaltext}>{t("footernav.totaltextForm")}</p>
        <h2 className={css.title}>{t("footernav.footerWriWr")}</h2>

        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className={css.input}
          type="email"
          name="email"
          placeholder=" Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className={css.textarea}
          name="message"
          placeholder="Your feedback or message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className={css.button} type="submit" disabled={sending}>
          {sending ? "Sending…" : t("footernav.footerWriSend")}
        </button>

        {success && (
          <p className={css.success}>{t("footernav.footerWriLetter")}</p>
        )}
      </form>
    </section>
  );
}
