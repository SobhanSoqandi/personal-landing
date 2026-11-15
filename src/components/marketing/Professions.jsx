import Reveal from "@/components/ui/Reveal";
import SectionHead from "./SectionHead";
import { professions } from "@/data/marketing";

export default function Professions() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHead badge="برای چه کسانی" title="برای" highlight="هر حرفه‌ای" />
        <Reveal className="flex flex-wrap justify-center gap-3">
          {professions.map((profession) => (
            <span key={profession} className="rounded-full border border-blue-500/20 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-blue-500">
              {profession}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
