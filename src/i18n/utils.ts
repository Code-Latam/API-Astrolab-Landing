import { ui, defaultLang } from "@/i18n";
import { routes, showDefaultLang } from "@/i18n/ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const getDictionary = (currentLocale: string = defaultLang) => {
  return ui[currentLocale as keyof typeof ui];
};

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathName] !==
        undefined;
    const translatedPath = hasTranslation
      ? "/" +
        (routes[l as keyof typeof routes] as Record<string, string>)[pathName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getPathInDefaultLanguage(
  path: string,
  currentLanguage: keyof typeof ui
) {
  const pathsInCurrentLanguage = routes[currentLanguage];
  if (currentLanguage === defaultLang) {
    return path;
  } else {
    let routeInCurrentLanguage = path.replace("/" + currentLanguage, "");

    // Home page
    if (!routeInCurrentLanguage || routeInCurrentLanguage === "/") return "/";

    routeInCurrentLanguage = routeInCurrentLanguage.replace("/", "");
    const routeInDefaultLanguage = Object.keys(pathsInCurrentLanguage).find(
      (key) =>
        pathsInCurrentLanguage[key as keyof typeof pathsInCurrentLanguage] ===
        routeInCurrentLanguage
    );

    return "/" + routeInDefaultLanguage;
  }
}
