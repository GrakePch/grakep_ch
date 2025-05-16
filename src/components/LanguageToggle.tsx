import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };
  return (
    <button onClick={toggleLang} className="px-4 py-2 rounded-full hover:bg-stone-500/25 transition w-10 flex justify-center">
      {i18n.language === 'en' ? '中' : 'EN'}
    </button>
  );
}