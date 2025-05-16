import { useTranslation } from "react-i18next";
import logos from "../data/logos";

export default function Logos() {
  const { i18n } = useTranslation();
  const lang = i18n.language as keyof typeof logos[0]["title"];

  return (
    <div className="grid gap-4">
      {logos
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((logo) => (
          <div key={logo.id} className="py-4">
            <div className="w-full max-h-64 mb-2 flex items-center justify-center overflow-hidden">
              <img
                src={logo.image || `images/${logo.id}.png`}
                alt={logo.title[lang]}
                className="h-full max-h-64 w-auto object-contain rounded-xl bg-white"
              />
            </div>
            <h2 className="text-3xl font-title font-extrabold font-stretch-expanded inline">{logo.title[lang]}</h2>
            <p className="text">{logo.description?.[lang]}</p>
            <p className="text-sm text-stone-600 dark:text-stone-400">{logo.date}</p>
            {Array.isArray(logo.link) && logo.link.length > 0 && (
              <div className="flex flex-wrap gap-x-2">
                {(logo.link as [string, string][]).map(([label, url], idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red-700 dark:text-red-400 underline underline-offset-2"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
