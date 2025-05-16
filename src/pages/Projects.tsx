import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";
import { useMemo, useEffect, useState } from "react";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as keyof (typeof projects)[0]["title"];
  const [searchParams, setSearchParams] = useSearchParams();
  const filterTag = searchParams.get("tag") || "";

  // Collect all tags and their counts
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((p) => {
      (p.tags || []).forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Sorted tag list: by count (desc), then alphabetically
  const allTags = useMemo(() => Object.entries(tagCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])), [tagCounts]);

  // Filtered projects
  const filteredProjects = filterTag ? projects.filter((p) => p.tags?.includes(filterTag)) : projects;

  // Track which project markdowns exist
  const [available, setAvailable] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Check for all project markdowns in the current language, fallback to 'en'
    const checkFiles = async () => {
      const checks: Record<string, boolean> = {};
      await Promise.all(
        projects.map(async (p) => {
          const lang = i18n.language as keyof typeof p.title;
          try {
            await import(`../data/projects/${lang}/${p.id}.md?raw`);
            checks[p.id] = true;
          } catch {
            try {
              await import(`../data/projects/en/${p.id}.md?raw`);
              checks[p.id] = true;
            } catch {
              checks[p.id] = false;
            }
          }
        })
      );
      setAvailable(checks);
    };
    checkFiles();
    // Only re-run when language changes
  }, [i18n.language]);

  return (
    <div>
      {/* Tag Filter Row */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSearchParams({})}
          className={`px-2 py-0.5 rounded text-xs font-medium border-1 uppercase transition-all duration-150 cursor-pointer ${!filterTag ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" : "bg-transparent"}`}
        >
          {t(`projects.tag.all`, "All")} <span className="ml-1">{projects.length}</span>
        </button>
        {allTags.map(([tag, count]) => (
          <button
            key={tag}
            onClick={() => setSearchParams({ tag })}
            className={`px-2 py-0.5 rounded text-xs font-medium border-1 uppercase transition-all duration-150 cursor-pointer ${
              filterTag === tag ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" : "bg-transparent"
            }`}
          >
            {t(`projects.tag.${tag}`, tag)} <span className="ml-1">{count}</span>
          </button>
        ))}
      </div>
      {/* Project List */}
      <div className="grid gap-4">
        {filteredProjects
          .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
          .map((p) => (
            <div key={p.id} className="py-4">
              <img src={p.thumbnail || `images/${p.id}.png`} className="mb-2 w-full h-auto rounded-xl" />
              <div className="mb-1 flex flex-wrap gap-2">
                {p.tags?.map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchParams({ tag })}
                    className={`px-2 py-0.5 rounded text-xs border-1 font-medium uppercase transition-all duration-150 cursor-pointer ${
                      filterTag === tag ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" : "bg-transparent"
                    }`}
                    type="button"
                  >
                    {t(`projects.tag.${tag}`, tag)}
                  </button>
                ))}
              </div>
              <h2 className="text-3xl font-title font-extrabold font-stretch-expanded inline">{p.title[lang]}</h2>
              <p className="text">{p.description?.[lang]}</p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {p.startDate} – {p.endDate}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {t("projects.role")}: {p.role[lang]}
              </p>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {t("projects.status")}: {p.status[lang]}
              </p>
              {(Array.isArray(p.link) && p.link.length > 0 || available[p.id]) && (
                <div className="flex flex-wrap gap-x-2">
                  {available[p.id] && (
                    <Link to={`/projects/${p.id}`} className="text-sm text-red-700 dark:text-red-400 underline underline-offset-2">
                      {t("projects.read_more")}
                    </Link>
                  )}
                  {p.link?.map(([label, url], idx) => (
                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-red-700 dark:text-red-400 underline underline-offset-2">
                      {t(`projects.link.${label}`, label)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
