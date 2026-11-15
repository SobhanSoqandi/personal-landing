import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Reveal from "@/components/ui/Reveal";

export default function Cta({ demoHref }) {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-linear-to-br from-blue-600 via-blue-700 to-blue-900 px-6 py-16 text-center shadow-2xl shadow-blue-600/30 dark:ring-1 dark:ring-white/10">
        <div className="absolute -left-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
        <h2 className="relative text-3xl font-black leading-snug text-white sm:text-4xl">آماده‌اید خودتان را آنلاین نشان بدهید؟</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-8 text-blue-100 sm:text-base">
          نمونه‌ی زنده را ببینید؛ ثبت‌نام و ساخت صفحه به‌زودی فعال می‌شود.
        </p>
        <Link to={demoHref} className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50">
          مشاهده‌ی نمونه‌ی زنده
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1.5" />
        </Link>
      </Reveal>
    </section>
  );
}
