import PortfolioCard from "./PortfolioCard";

export default function Portfolio({ projects, intro, kind }) {
  if (!projects?.length) return null;

  return (
    <section
      id="portfolio"
      dir="rtl"
      className="scroll-mt-28 px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            نمونه‌کارها
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            پروژه‌های{" "}
            <span className="text-blue-600 dark:text-blue-400">{kind === "team" ? "ما" : "من"}</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            {intro ?? "بخشی از پروژه‌ها و نمونه‌کارهای منتخب."}
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}