import { motion } from "framer-motion";
import { FiArrowUp, FiHeart, FiMail, FiPhone } from "react-icons/fi";
import { toPersianDigits } from "@/utils/persian";
import { formatPhone, toTel } from "@/utils/contact";
import { pronoun } from "@/utils/profile";
import { site } from "@/utils/site";
import { getSocials } from "@/components/ui/socials";

const columns = {
  4: "lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]",
  3: "lg:grid-cols-[1.5fr_1fr_1.2fr]",
  2: "lg:grid-cols-[1.5fr_1fr]",
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const title = "mb-5 text-sm font-bold text-slate-900 dark:text-white";

function Footer({ profile, nav }) {
  const year = new Date().toLocaleDateString("fa-IR", { year: "numeric" });
  const { name, nameEn = name, tagline, contact = {}, services = [] } = profile;
  const us = pronoun(profile);
  const socials = getSocials(contact);
  const quickLinks = [{ title: "خانه", href: "#home" }, ...nav];
  const contacts = [
    contact.phone && { icon: FiPhone, text: toPersianDigits(formatPhone(contact.phone)), href: `tel:${toTel(contact.phone)}` },
    contact.email && { icon: FiMail, text: contact.email, href: `mailto:${contact.email}` },
  ].filter(Boolean);
  const grid = columns[2 + Number(services.length > 0) + Number(contacts.length > 0)];

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-slate-200 bg-linear-to-b from-slate-50 to-blue-50 text-slate-600 dark:border-white/10 dark:from-slate-950 dark:to-slate-950 dark:text-slate-400"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 right-[-4rem] h-80 w-80 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/20"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-[-4rem] h-80 w-80 rounded-full bg-sky-400/15 blur-3xl dark:bg-blue-500/10"
      />
      <span
        dir="ltr"
        className="pointer-events-none absolute inset-x-0 -bottom-[0.18em] select-none text-center text-[22vw] font-black leading-none tracking-tighter bg-linear-to-b from-blue-500/20 to-transparent bg-clip-text text-transparent"
      >
        {nameEn.split(" ")[0].toUpperCase()}
      </span>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-8 lg:px-12"
      >
        <div className={`grid gap-12 sm:grid-cols-2 ${grid}`}>
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: 12, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 text-xl font-black text-white shadow-lg shadow-blue-600/30"
              >
                {nameEn[0]}
              </motion.span>
              <div>
                <p className="text-lg font-extrabold text-slate-900 dark:text-white">{name}</p>
                <p dir="ltr" className="text-right text-xs tracking-widest text-blue-600 dark:text-blue-400">{nameEn.toUpperCase()}</p>
              </div>
            </div>
            {tagline && <p className="mt-5 max-w-sm text-sm leading-8">{tagline}</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.92 }}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-lg shadow-transparent transition hover:border-transparent hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 ${hover}`}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className={title}>دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ title: label, href }) => (
                <li key={href}>
                  <a href={href} className="group flex items-center gap-2 text-sm transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                    <span className="h-px w-3 bg-current opacity-40 transition-all duration-300 group-hover:w-6 group-hover:opacity-100" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {services.length > 0 && (
          <motion.div variants={item}>
            <h4 className={title}>خدمات</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
          )}

          {contacts.length > 0 && (
          <motion.div variants={item}>
            <h4 className={title}>تماس با {us}</h4>
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, text, href }) => (
                <motion.a
                  key={text}
                  href={href}
                  whileHover={{ x: -6 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 backdrop-blur transition-colors hover:border-blue-500/50 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon size={16} />
                  </span>
                  <span dir="ltr" className="text-sm font-medium text-slate-800 dark:text-slate-200">{text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          )}
        </div>

        <motion.div
          variants={item}
          className="relative mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pb-10 pt-6 text-xs dark:border-white/10 sm:flex-row"
        >
          <p>© {year} تمامی حقوق برای {name} محفوظ است.</p>
          <p className="flex items-center gap-1.5">
            ساخته‌شده با <FiHeart className="animate-pulse text-blue-500" size={14} /> در{" "}
            <a href={site.url} className="font-semibold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400">{site.name}</a>
          </p>
          <motion.button
            type="button"
            aria-label="بازگشت به بالا"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-700"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;