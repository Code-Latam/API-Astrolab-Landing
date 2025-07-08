export const getFormattedDate = (dateStr, locale = "es-ES") =>
  new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
