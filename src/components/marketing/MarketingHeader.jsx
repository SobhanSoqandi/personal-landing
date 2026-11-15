import { Link } from "react-router-dom";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Brand from "./Brand";

const nav = [
  { title: "ویژگی‌ها", href: "#features" },
  { title: "نحوه‌ی کار", href: "#how" },
  { title: "نمونه", href: "#demo" },
  { title: "سؤالات متداول", href: "#faq" },
];

export default function MarketingHeader({ demoHref }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[22px] border border-blue-500/20 bg-white/70 px-3 shadow-[0_12px_40px_-12px_rgba(37,99,235,.3)] backdrop-blur-2xl dark:border-blue-400/20 dark:bg-slate-950/70 sm:px-4">
        <Brand />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(({ title, href }) => (
            <a key={href} href={href} className="rounded-xl px-4 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
              {title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to={demoHref} className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 sm:block">
            مشاهده‌ی نمونه
          </Link>
        </div>
      </div>
    </header>
  );
}
