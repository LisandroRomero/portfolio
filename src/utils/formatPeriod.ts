import type { Lang } from "../context/languageContext";

/** "2025" (solo año) o "2025-03" (año y mes) */
export type YearMonth = `${number}` | `${number}-${number}`;

const LOCALES: Record<Lang, string> = { es: "es-AR", en: "en-US" };

const formatDate = (date: YearMonth, lang: Lang): string => {
  const [year, month] = date.split("-").map(Number);
  if (!month) return String(year);

  return new Intl.DateTimeFormat(LOCALES[lang], { month: "short", year: "numeric" }).format(
    new Date(year, month - 1)
  );
};

/**
 * formatPeriod("2025-03", null, "es", "Actualidad") → "mar 2025 – Actualidad"
 * formatPeriod("2025", "2025", "en", "Present")     → "2025"
 */
export function formatPeriod(
  start: YearMonth,
  end: YearMonth | null,
  lang: Lang,
  presentLabel: string
): string {
  const from = formatDate(start, lang);
  if (end === start) return from;

  const to = end ? formatDate(end, lang) : presentLabel;
  return `${from} – ${to}`;
}
