import Reveal from "@/components/ui/Reveal";
import SectionHead from "./SectionHead";
import { steps } from "@/data/marketing";
import { toPersianDigits } from "@/utils/persian";

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-28 overflow-hidden px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHead badge="نحوه‌ی کار" title="در" highlight="سه قدم صفحه‌ی خودتان را بسازید" />
        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-[16%] top-8 hidden h-px bg-linear-to-l from-transparent via-blue-500/40 to-transparent md:block" />
          {steps.map(({ title, text }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="relative h-full rounded-3xl border border-black/10 bg-white/80 p-7 text-center backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 text-2xl font-black text-white shadow-lg shadow-blue-600/30">
                  {toPersianDigits(i + 1)}
                </span>
                <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
