import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("home.bio")}</h1>
      <div className="mt-4 space-x-4">
        <a href="https://github.com/GrakePch" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href="https://space.bilibili.com/1020137" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          bilibili
        </a>
        <a href="https://modrinth.com/user/GrakePCH" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Modrinth
        </a>
      </div>
    </div>
  );
}
