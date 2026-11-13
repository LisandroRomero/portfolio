import Reveal from "../components/ui/Reveal";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { useLanguage } from "../context/languageContext";

function About() {
  const { translations: t } = useLanguage();
  const [lead, ...rest] = t.about.description;

  return (
    <Section id="about">
      <Reveal>
        <SectionTitle>{t.about.title}</SectionTitle>

        <div className="max-w-3xl space-y-5 leading-relaxed">
          <p className="text-xl text-gray-200 md:text-2xl md:leading-snug">{lead}</p>
          {rest.map((text) => (
            <p key={text} className="text-muted md:text-lg">
              {text}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export default About;
