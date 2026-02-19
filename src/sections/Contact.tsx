import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/languageContext";

function Contact() {
  const { translations: t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Error al enviar el mensaje");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#20202a] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-semibold text-white md:text-4xl">
          {t.contact.title}
        </h2>

        <p className="mb-12 text-center text-[#b0b0b0]">
          {t.contact.description}
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-xl border-2 border-[#ff6b35] bg-[#2a2a34] p-8 shadow-lg space-y-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder={t.contact.form.name}
            required
            className="w-full rounded-lg border-2 border-[#404040] bg-[#20202a] px-4 py-3 text-white placeholder-[#b0b0b0] focus:border-[#ff6b35] focus:outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder={t.contact.form.email}
            required
            className="w-full rounded-lg border-2 border-[#404040] bg-[#20202a] px-4 py-3 text-white placeholder-[#b0b0b0] focus:border-[#ff6b35] focus:outline-none"
          />

          <textarea
            name="message"
            placeholder={t.contact.form.message}
            required
            rows={5}
            className="w-full rounded-lg border-2 border-[#404040] bg-[#20202a] px-4 py-3 text-white placeholder-[#b0b0b0] focus:border-[#ff6b35] focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#ff6b35] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#e55a2b]"
          >
            {t.contact.form.send}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
