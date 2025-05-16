import { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { applyTheme } from "../utils/theme";
import { useTheme } from "../utils/useTheme";
import ThemeToggle from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";
import logo from "../assets/GKP-2408-draft-cutout.png";

export default function Header({ scrollLimit = 240 }: { scrollLimit?: number }) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();
  const size = useTransform(scrollY, [0, scrollLimit], [160, 32]);
  const top = useTransform(scrollY, [0, scrollLimit], [56, 20]);
  const left = useTransform(scrollY, [0, scrollLimit], ["50%", "0%"]);
  const x = useTransform(scrollY, [0, scrollLimit], ["-50%", "0%"]);
  const cptop = useTransform(scrollY, [0, scrollLimit], [scrollLimit + 16, 16]);
  const cpleft = useTransform(scrollY, [0, scrollLimit], [16, 72]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 w-full p-0 font-bold uppercase bg-stone-300/50 dark:bg-black/50 backdrop-blur-2xl backdrop-saturate-150 z-[100]">
      <motion.div
        className="relative p-4 flex justify-between items-center max-w-4xl mx-auto border-b border-stone-400 dark:border-stone-700"
        style={{
          paddingTop: cptop,
          paddingLeft: cpleft,
        }}
      >
        <div className="absolute top-0 left-0 px-4 w-full max-w-4xl h-1">
          <motion.div
            className="relative origin-top-left aspect-square dark:invert"
            style={{
              top: top,
              left: left,
              x: x,
              width: size,
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" className="h-full drop-shadow-stone-500/40 drop-shadow-2xl" />
            </Link>
          </motion.div>
        </div>
        <nav className="space-x-4">
          <Link
            to="/projects"
            className={location.pathname.startsWith("/projects") ? "" : "opacity-60 hover:opacity-100 transition"}
          >
            {t("tabs.projects")}
          </Link>
          <Link
            to="/logos"
            className={location.pathname.startsWith("/logos") ? "" : "opacity-60 hover:opacity-100 transition"}
          >
            {t("tabs.logos")}
          </Link>
          <Link
            to="/friends"
            className={location.pathname.startsWith("/friends") ? "" : "opacity-60 hover:opacity-100 transition"}
          >
            {t("tabs.friends")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </motion.div>
    </header>
  );
}
