import { FiBriefcase, FiLink, FiMessageCircle, FiMoon, FiSearch, FiVideo } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "./SectionHead";
import { features } from "@/data/marketing";

const icons = { link: FiLink, briefcase: FiBriefcase, search: FiSearch, moon: FiMoon, chat: FiMessageCircle, video: FiVideo };

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-28 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead badge="ویژگی‌ها" title="هر چیزی که برای" highlight="معرفی خودتان لازم دارید" text="یک صفحه‌ی کامل و تمیز که لازم نیست چیزی از طراحی یا برنامه‌نویسی بدانید." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, title, text, soon }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={21} />
                    </span>
                    {soon && <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-semibold text-fuchsia-600 dark:text-fuchsia-400">به‌زودی</span>}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
