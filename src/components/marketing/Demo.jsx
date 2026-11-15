import { Link } from "react-router-dom";
import { FiArrowLeft, FiGlobe } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "./SectionHead";

export default function Demo({ demo, host }) {
  const chips = (demo.skills ?? []).slice(0, 4);

  return (
    <section id="demo" className="relative scroll-mt-28 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHead badge="نمونه" title="صفحه‌ی شما" highlight="این‌طور دیده می‌شود" text="هر کاربر یک صفحه‌ی اختصاصی با همین کیفیت و ساختار می‌گیرد." />
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl shadow-blue-500/10 dark:border-white/10 dark:bg-slate-900">
              <div dir="ltr" className="flex items-center gap-3 border-b border-black/5 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="flex gap-1.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <i className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <i className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 py-1 text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
                  <FiGlobe size={12} />
                  {host}/{demo.username}
                </span>
              </div>
              <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,.18),transparent_65%)] px-6 py-10 text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-sky-400 text-3xl font-black text-white shadow-xl shadow-blue-500/30">
                  {demo.name[0]}
                </span>
                <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white">{demo.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{demo.title}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {chips.map(({ name }) => (
                    <span key={name} dir="ltr" className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">{name}</span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-16 rounded-2xl border border-black/5 bg-white/80 dark:border-white/10 dark:bg-white/5" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div dir="ltr" className="rounded-2xl border border-black/10 bg-white p-5 text-left shadow-lg dark:border-white/10 dark:bg-slate-900">
                <p className="text-xs text-slate-500 dark:text-slate-400">{host} › {demo.username}</p>
                <p className="mt-1 text-lg font-medium text-blue-700 dark:text-blue-400">{demo.name} | {demo.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{demo.bio.slice(0, 120)}...</p>
              </div>
              <p className="text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
                عنوان و توضیحات صفحه‌ی هر کاربر بر اساس نام و تخصص خودش ساخته می‌شود تا هنگام جست‌وجوی نام شما در گوگل، معرفی کوتاه و درستی دیده شود.
              </p>
              <Link to={`/${demo.username}`} className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500">
                مشاهده‌ی صفحه‌ی واقعی
                <FiArrowLeft className="transition-transform group-hover:-translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
