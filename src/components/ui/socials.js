import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { socialUrls, toWhatsapp } from "@/utils/contact";

export const getSocials = (contact = {}) => {
  const urls = socialUrls(contact);
  return [
    contact.phone && contact.whatsapp && { label: "واتس‌اپ", href: `https://wa.me/${toWhatsapp(contact.phone)}`, icon: FaWhatsapp, hover: "hover:bg-emerald-500 hover:shadow-emerald-500/30" },
    urls.instagram && { label: "اینستاگرام", href: urls.instagram, icon: FaInstagram, hover: "hover:bg-pink-500 hover:shadow-pink-500/30" },
    urls.linkedin && { label: "لینکدین", href: urls.linkedin, icon: FaLinkedinIn, hover: "hover:bg-sky-600 hover:shadow-sky-600/30" },
    urls.github && { label: "گیت‌هاب", href: urls.github, icon: FaGithub, hover: "hover:bg-slate-800 hover:shadow-slate-800/30 dark:hover:bg-white dark:hover:text-black" },
  ].filter(Boolean);
};
