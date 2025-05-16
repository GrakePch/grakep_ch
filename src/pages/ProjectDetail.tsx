import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectDetail() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [content, setContent] = useState<string>("");

  const p = projects.find((p) => p.id === id);
  const lang = p ? (i18n.language as keyof typeof p.title) : "en";

  useEffect(() => {
    import(`../data/projects/${lang}/${id}.md?raw`)
      .then((module) => setContent(module.default))
      .catch(() => (lang !== "en" ? import(`../data/projects/en/${id}.md?raw`).then((module) => setContent(module.default)).catch(() => setContent("Not found.")) : setContent("Not found.")));
  }, [id, lang]);

  if (!p) return <p>Project not found.</p>;

  return (
    <>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h1 {...props} className="font-title font-extrabold font-stretch-expanded"/>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}
