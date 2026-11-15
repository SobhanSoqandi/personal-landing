import { Link } from "react-router-dom";
import Brand from "./Brand";
import { site } from "@/utils/site";

export default function MarketingFooter({ demoHref }) {
  const year = new Date().toLocaleDateString("fa-IR", { year: "numeric" });

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-8">
        <div className="text-center sm:text-start">
          <Brand className="justify-center sm:justify-start" />
          <p className="mt-3 max-w-xs text-xs leading-7">{site.description}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="#features" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">ویژگی‌ها</a>
          <a href="#how" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">نحوه‌ی کار</a>
          <a href="#faq" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">سؤالات متداول</a>
          <Link to={demoHref} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">نمونه‌ی زنده</Link>
        </nav>
        <p className="text-xs">© {year} {site.name}</p>
      </div>
    </footer>
  );
}
