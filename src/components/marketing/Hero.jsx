import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { isReservedUsername, isValidUsername } from "@/utils/username";

const perks = ["بدون دامنه", "بدون هاست", "بدون برنامه‌نویس", "آماده‌ی سئو"];

const rise = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
});

export default function Hero({ host, demoHref }) {
  const [username, setUsername] = useState("");
  const value = username.toLowerCase();
  const reserved = isReservedUsername(value);
  const valid = isValidUsername(value) && !reserved;

  const hint = !value
    ? "نام‌کاربری با حروف انگلیسی، عدد، - و _ و حداقل ۳ کاراکتر"
    : reserved
      ? "این نام‌کاربری رزرو شده است"
      : valid
        ? "قالب نام‌کاربری درست است"
        : "فقط حروف انگلیسی، عدد، - و _ (۳ تا ۳۰ کاراکتر)";

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#3b82f614_1px,transparent_1px),linear-gradient(to_bottom,#3b82f614_1px,transparent_1px)] bg-size-[52px_52px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div animate={{ x: [0, 50, 0], y: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -top-32 right-[-5rem] h-96 w-96 rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-600/25" />
      <motion.div animate={{ x: [0, -40, 0], y: [0, -50, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute bottom-[-6rem] left-[-4rem] h-96 w-96 rounded-full bg-sky-400/25 blur-3xl dark:bg-blue-500/15" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-500 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
          </span>
          به‌زودی؛ نسخه‌ی آزمایشی
        </motion.span>

        <motion.h1 {...rise(1)} className="mt-7 text-4xl font-black leading-[1.35] text-slate-900 dark:text-white sm:text-6xl">
          لندینگ و رزومه‌ی آنلاین‌تان را در{" "}
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="bg-linear-to-r from-blue-600 via-sky-400 to-blue-600 bg-size-[200%_auto] bg-clip-text text-transparent"
          >
            چند دقیقه
          </motion.span>{" "}
          بسازید
        </motion.h1>

        <motion.p {...rise(2)} className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
          مهندس، پزشک، معمار یا مکانیک؛ هر حرفه‌ای که هستید، با یک آدرس اختصاصی خودتان و کارهایتان را آنلاین نشان بدهید.
        </motion.p>

        <motion.div {...rise(3)} className="mx-auto mt-10 max-w-xl">
          <div dir="ltr" className={`flex items-center gap-2 rounded-2xl border bg-white/80 p-2 shadow-xl shadow-blue-500/10 backdrop-blur transition dark:bg-white/5 ${valid ? "border-emerald-500/50" : "border-slate-200 focus-within:border-blue-500 dark:border-white/10"}`}>
            <span className="pl-3 text-sm font-medium text-slate-400 sm:text-base">{host}/</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value.replace(/\s/g, ""))}
              placeholder="yourname"
              maxLength={30}
              autoCapitalize="none"
              spellCheck={false}
              aria-label="نام‌کاربری"
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-300 dark:text-white dark:placeholder:text-slate-600 sm:text-base"
            />
            <button disabled title="ثبت‌نام به‌زودی فعال می‌شود" className="shrink-0 cursor-not-allowed rounded-xl bg-slate-200 px-5 py-3 text-sm font-bold text-slate-500 dark:bg-white/10 dark:text-slate-400">
              به‌زودی
            </button>
          </div>
          <p className={`mt-3 flex items-center justify-center gap-1.5 text-xs ${valid ? "text-emerald-600 dark:text-emerald-400" : value && !valid ? "text-rose-500" : "text-slate-400"}`}>
            {valid && <FiCheck size={14} />}
            {hint}
          </p>
        </motion.div>

        <motion.div {...rise(4)} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to={demoHref} className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-500 active:scale-95">
            مشاهده‌ی نمونه‌ی زنده
            <FiArrowLeft className="transition-transform group-hover:-translate-x-1.5" />
          </Link>
          <a href="#how" className="rounded-full border border-blue-200 bg-white/60 px-7 py-3.5 font-bold text-blue-700 backdrop-blur transition hover:-translate-y-1 hover:border-blue-500 dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-200">
            نحوه‌ی کار
          </a>
        </motion.div>

        <motion.ul {...rise(5)} className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-1.5">
              <FiCheck className="text-blue-500" />
              {perk}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
