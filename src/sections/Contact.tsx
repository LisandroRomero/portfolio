import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonLink from "../components/ui/ButtonLink";
import Card from "../components/ui/Card";
import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { useLanguage } from "../context/languageContext";
import { LINKS } from "../data/links";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-white placeholder-muted/70 transition focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none";

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
    <Section id="contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionTitle subtitle={t.contact.description}>{t.contact.title}</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={LINKS.linkedin} external>
              LinkedIn ↗
            </ButtonLink>
            <ButtonLink href={LINKS.github} external>
              GitHub ↗
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder={t.contact.form.name}
                  aria-label={t.contact.form.name}
                  autoComplete="name"
                  required
                  className={fieldClass}
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder={t.contact.form.email}
                  aria-label={t.contact.form.email}
                  autoComplete="email"
                  required
                  className={fieldClass}
                />
              </div>

              <textarea
                name="message"
                placeholder={t.contact.form.message}
                aria-label={t.contact.form.message}
                required
                rows={5}
                className={`${fieldClass} resize-y`}
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-full bg-accent-strong py-3 font-medium text-white shadow-[0_0_24px] shadow-accent-hover/30 transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? t.contact.form.sending : t.contact.form.send}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-center text-sm ${status === "error" ? "text-red-400" : "text-emerald-400"}`}
              >
                {status === "success" && t.contact.form.success}
                {status === "error" && t.contact.form.error}
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
