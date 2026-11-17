import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../components/ui/Section";
import { useLanguage } from "../context/languageContext";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-md border border-line bg-raised px-3 py-2.5 text-ink placeholder-muted transition-colors focus:border-accent focus:outline-none";

function Contact() {
  const { translations: t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || status === "sending") return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      );
      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-2xl leading-relaxed">{t.contact.description}</p>

      <form ref={form} onSubmit={sendEmail} className="mt-8 max-w-xl space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-1.5 text-sm text-muted">
            <span>{t.contact.form.name}</span>
            <input type="text" name="user_name" autoComplete="name" required className={fieldClass} />
          </label>
          <label className="block space-y-1.5 text-sm text-muted">
            <span>{t.contact.form.email}</span>
            <input type="email" name="user_email" autoComplete="email" required className={fieldClass} />
          </label>
        </div>

        <label className="block space-y-1.5 text-sm text-muted">
          <span>{t.contact.form.message}</span>
          <textarea name="message" required rows={5} className={`${fieldClass} resize-y`} />
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={isSending}
            className="rounded-md border border-accent bg-accent px-4 py-2 text-sm font-medium text-surface transition-colors hover:border-ink hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t.contact.form.sending : t.contact.form.send}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${status === "error" ? "text-red-300" : "text-accent"}`}
          >
            {status === "success" && t.contact.form.success}
            {status === "error" && t.contact.form.error}
          </p>
        </div>
      </form>
    </Section>
  );
}

export default Contact;
