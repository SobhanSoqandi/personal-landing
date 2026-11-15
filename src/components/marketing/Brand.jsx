import { Link } from "react-router-dom";
import { site } from "@/utils/site";

export default function Brand({ className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-700 text-lg font-black text-white shadow-lg shadow-blue-600/30">
        P
      </span>
      <span className="text-lg font-extrabold text-slate-900 dark:text-white">{site.name}</span>
    </Link>
  );
}
