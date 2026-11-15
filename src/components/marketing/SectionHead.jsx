import Reveal from "@/components/ui/Reveal";

export default function SectionHead({ badge, title, highlight, text }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
        {badge}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold leading-snug text-slate-900 dark:text-white sm:text-4xl">
        {title} <span className="text-blue-600 dark:text-blue-400">{highlight}</span>
      </h2>
      {text && <p className="mt-4 text-sm leading-8 text-slate-500 dark:text-slate-400 sm:text-base">{text}</p>}
    </Reveal>
  );
}
