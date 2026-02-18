import { useLanguage } from "../context/languageContext";

function Skills() {
  const { translations } = useLanguage();

  const { title, categories, items } = translations.skills;

  return (
    <section id="skills">
      <h2>{title}</h2>
      <div>
        <h3>{categories.frontend}</h3>
        <ul>
            {items.frontend.map((skill: string) => (
            <li key={skill}>{skill}</li>
            ))}
        </ul>
     </div>


      <div>
        <div>
          <h3>{categories.backend}</h3>
          <ul>
            {items.backend.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{categories.databases}</h3>
          <ul>
            {items.databases.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{categories.tools}</h3>
          <ul>
            {items.tools.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{categories.concepts}</h3>
          <ul>
            {items.concepts.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
