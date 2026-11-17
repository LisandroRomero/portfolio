import Section from "../components/ui/Section";
import { useLanguage } from "../context/languageContext";

function About() {
  const { translations: t } = useLanguage();
  const [lead, ...rest] = t.about.description;

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-2xl space-y-4 leading-relaxed">
        <p className="text-lg md:text-xl md:leading-snug">{lead}</p>
        {rest.map((text) => (
          <p key={text} className="text-muted">
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default About;
