import { FiPlus } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "./SectionHead";
import { faqs } from "@/data/marketing";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHead badge="سؤالات متداول" title="پاسخ" highlight="پرسش‌های رایج" />
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <Reveal key={q} delay={i * 0.06}>
              <details className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur transition-colors open:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.03]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold text-slate-900 dark:text-white sm:text-base [&::-webkit-details-marker]:hidden">
                  {q}
                  <FiPlus className="shrink-0 text-blue-500 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-8 text-slate-600 dark:text-slate-400">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
