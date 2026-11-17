# Plan de mejoras del portfolio

Objetivo: que el portfolio transmita **criterio profesional** en los primeros 30 segundos (recruiter) y en los primeros 2 minutos dentro del repo (recruiter técnico).

Regla de oro: **una fase = un commit (o PR) con conventional commits**. Cada fase deja el sitio funcionando.

El orden está pensado para no rehacer trabajo: primero contenido y bases técnicas, después reestructurar los datos, y recién al final el diseño (que toca los mismos componentes).

---

## Decisiones pendientes (bloquean fases 4 y 5)

- [x] **Food-Store**: 2 fronts (Admin, Store) + API en Python. Falta: ¿qué parte hiciste vos?
- [x] **game-ranking**: solo API, en desarrollo. Repo privado. Oculto del sitio hasta terminar (flag `hidden`).
- [x] **PokeApp / AirLand**: quedan (son monorepos front+back), al final de la lista
- [x] **Unveil**: sep 2025 – feb 2026. Tutoría UTN: mar 2025 – sep 2025
- [x] **CV**: vigente ES = el de octubre 2026. Falta revisar a mano el EN.
- [ ] **Dominio**: ¿tenés o querés uno propio (ej. `lisandroromero.dev`)?

---

## Fase 1 — Correcciones de contenido e i18n (quick wins)

`fix(i18n): correct translations and unify skills across languages`

- [x] Navbar ES: `experience: "Experience"` → `"Experiencia"`
- [x] EN concepts: "Arquitectura en capas" → "Layered Architecture", "POO" → "OOP"
- [x] Reescribir About EN (gramática): "Recent graduate in Programming from UTN..."
- [x] Unificar listas de skills ES/EN (Spring Boot, FastAPI, NestJS en ambas)
- [x] About EN: agregar NestJS (está en ES y no en EN)
- [x] "Sobre Mi" → "Sobre mí"; "FullStack" → "Full Stack"
- [x] Mover a i18n los textos hardcodeados: "Demo", "Código", mensajes del formulario
- [x] Contact: reemplazar `alert()` por mensaje inline de éxito/error + estado "Enviando..." (botón deshabilitado)

**Listo cuando**: cambiando el idioma no aparece ningún texto en el idioma equivocado.

---

## Fase 2 — SEO, performance y CV

> Pendiente: definir `VITE_SITE_URL` en `.env` y en el hosting.

`fix(seo): add meta tags, fix favicon and optimize assets`

- [x] Favicon: mover a `public/favicon.png` (o .svg) y usar `href="/favicon.png"`
- [x] `index.html`: `lang="es"`, `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) y `twitter:card`
- [x] Crear imagen OG 1200×630 en `public/og-image.png`
- [x] Sincronizar `document.documentElement.lang` con el idioma activo
- [x] Detectar idioma inicial desde `navigator.language` y persistir en `localStorage` (con try/catch)
- [x] Foto de perfil: convertir a WebP ~512px (~40 KB), agregar `width`/`height` y `alt` descriptivo
- [x] CV: dejar **un** PDF por idioma con nombre claro, borrar los que sobran
- [x] Atributo `download="Lisandro-Romero-CV-ES.pdf"` / `...-EN.pdf`
- [x] `rel="noopener noreferrer"` en todos los `target="_blank"`

**Listo cuando**: el link pegado en LinkedIn muestra imagen + descripción, y Lighthouse SEO/Performance > 90.

---

## Fase 3 — Bases técnicas y limpieza

`refactor: migrate design tokens to tailwind v4 and remove dead code`

- [x] Mover tokens de `tailwind.config.ts` a `index.css` con `@theme` (Tailwind v4) y borrar el config
- [x] Reemplazar todos los hex hardcodeados (`#ff6b35`, `#2a2a34`, ...) por tokens (`bg-accent`, `bg-card`, ...)
- [x] Borrar código muerto: `components/ui/section.tsx`, `App.css`, `assets/react.svg`, `public/vite.svg`, comentario `//import './App.css'`
- [x] Crear componentes reutilizables reales: `SectionTitle`, `Card`, `Tag`, `ButtonLink`
- [x] `Skills.tsx`: un `map` sobre las categorías en lugar de 5 bloques repetidos
- [x] Tipar el idioma: `type Lang = "es" | "en"` (hecho en Fase 2)
- [x] Unificar `LanguageContext.tsx` / `languageContext.ts` (dos archivos con nombres casi iguales confunden)
- [x] Navbar: links generados desde un array; `aria-label` y `aria-expanded` en el botón ☰
- [x] Arreglar el padding doble (`main px-6` + `section px-6`) y los `max-w` anidados
- [x] `npm run lint` sin errores

**Listo cuando**: no queda ningún hex en los componentes y no hay archivos sin usar.

---

## Fase 4 — Separar datos de traducciones

`refactor(data): split structured content from translations`

Hoy cada proyecto/trabajo está **duplicado** en `es.ts` y `en.ts` (URLs, tecnologías). Cambiar un link implica tocar dos archivos, y así es como aparecieron las listas de skills desincronizadas.

- [x] `src/data/projects.ts`: id, tecnologías, links (`live`, `demo`, `repos: { label, url }[]`), `featured`, imagen
- [x] `src/data/experience.ts`: id, empresa, fechas (`start`, `end | null`), tecnologías
- [x] `src/data/skills.ts`: categorías y skills (las skills no se traducen)
- [x] En `es.ts` / `en.ts` quedan **solo textos**, indexados por id
- [x] Formatear fechas por idioma con `Intl.DateTimeFormat`

**Listo cuando**: agregar un proyecto = una entrada en `data/` + dos textos en i18n.

---

## Fase 5 — Contenido de proyectos y experiencia

`feat(projects): feature game-ranking and rewrite project content`

> Pendiente: deploys en vivo, screenshots y aclarar tu aporte en Food-Store / AirLand.

- [x] Agregar **game-ranking** como proyecto destacado (primero): problema, tu aporte, decisiones técnicas (desempates, round robin, playoffs, tests)
- [x] Reescribir cada proyecto con el formato **problema → aporte → resultado**
- [x] Corregir la descripción de Food-Store (hoy es copia de AirLand)
- [x] Etiquetar los repos: "API", "Admin", "Store" en lugar de 3 veces "Código"
- [ ] Priorizar deploy en vivo sobre video; el video queda como secundario
- [ ] Screenshot/preview por proyecto (WebP)
- [x] Unveil: 3–4 bullets con verbo de acción e impacto; máximo 8 tecnologías
- [x] Tutoría UTN: sacar chips "Buenas Prácticas" y "PSeInt"; 1–2 bullets
- [x] Fechas con mes: "Mar 2025 – Dic 2025" / "– Actualidad"
- [x] Hero: agregar una frase de propuesta de valor

**Listo cuando**: un recruiter entiende qué sabés hacer leyendo solo el Hero y el primer proyecto.

---

## Fase 6 — Diseño

`feat(ui): redesign with indigo depth-and-light style`

> Estilo "Profundidad y luz": fondo #09090b, acento índigo, Inter + JetBrains Mono, cards glass con spotlight, bento grids, timeline, animaciones Reveal. Proyectos: game-ranking oculto (`hidden: true` en `src/data/projects.ts`) hasta terminar la API.

- [x] Naranja **solo** para CTAs, estado activo y proyecto destacado; bordes sutiles (`border`) en el resto
- [x] Títulos de sección consistentes (un solo componente `SectionTitle`)
- [x] Skills: grilla compacta de chips por categoría en lugar de 5 cards
- [x] Projects: card destacada grande + grilla de secundarios
- [x] Experience: formato timeline
- [x] Contacto: mostrar también email/LinkedIn directos, no solo el formulario
- [x] Revisar mobile (375px), contraste (WCAG AA) y foco visible con teclado
- [x] Respetar `prefers-reduced-motion` en los hover/translate

**Listo cuando**: Lighthouse Accessibility > 95 y se ve bien en 375px.

### Fase 6b — Sacar el "aire de IA"

`refactor(ui): replace template styling with a plain typographic layout`

> El estilo "Profundidad y luz" era la plantilla por defecto de las landings generadas. Se reemplazó por un layout tipográfico: grafito #16181c, texto #ebe8e3, acento violeta #a78bfa (links, foco, botón principal y tarjetas), IBM Plex Sans como única familia. Se mantuvieron a pedido el "Sobre mí" original y las tarjetas de Tecnologías.

- [x] Fuera: manchas de luz, grilla de fondo, texto en gradiente, badge "Disponible", eyebrows `// TÍTULO`, fuente mono, spotlight, cards glass, bento, fade-ups, flechas ↗ y emoji
- [x] Secciones con título a la izquierda y contenido a la derecha; tecnologías en tarjetas por categoría
- [x] Textos reescritos sin relleno ("escalables", "sólidas", "calidad y mantenibilidad"); se quitó la categoría "Conceptos"
- [x] OG image y favicon regenerados con la paleta nueva
- [ ] Revisar los textos con tu propia voz (tagline y "Sobre mí")

---

## Fase 7 — Repo y publicación

`docs: replace vite template readme`

- [ ] README propio: qué es, captura, stack, decisiones, cómo correrlo, link al deploy
- [ ] `.env.example` con las variables de EmailJS (sin valores)
- [ ] Descripción, topics y URL del deploy en el repo de GitHub
- [ ] Pinear en GitHub: portfolio, game-ranking, Food-Store
- [ ] Revisión final: Lighthouse, links rotos, ambos idiomas, ambos CVs

---

## Resumen

| Fase | Impacto | Esfuerzo | Bloqueada por |
|---|---|---|---|
| 1. Contenido e i18n | Alto | Bajo | — |
| 2. SEO, perf, CV | Alto | Bajo | Decisión del CV |
| 3. Bases técnicas | Medio | Medio | — |
| 4. Datos vs traducciones | Medio | Medio | Fase 3 |
| 5. Proyectos y experiencia | **Muy alto** | Medio | Decisiones pendientes + Fase 4 |
| 6. Diseño | Alto | Alto | Fases 3–5 |
| 7. Repo y publicación | Medio | Bajo | Todo lo anterior |
