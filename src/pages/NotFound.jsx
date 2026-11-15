import { Link } from "react-router-dom";
import { toPersianDigits } from "@/utils/persian";
import { site } from "@/utils/site";
import useSeo from "@/utils/useSeo";

export default function NotFound() {
  useSeo({ title: "صفحه پیدا نشد", description: site.description, url: site.url, index: false });
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-5 text-center">
      <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative">
        <p className="bg-linear-to-b from-blue-500 to-blue-800 bg-clip-text text-8xl font-black text-transparent sm:text-9xl">
          {toPersianDigits(404)}
        </p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">صفحه‌ای که دنبالش بودید پیدا نشد</h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">ممکنه آدرس اشتباه باشه یا صفحه جابه‌جا شده باشه.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500"
        >
          بازگشت به خانه
        </Link>
      </div>
    </main>
  );
}
