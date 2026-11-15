import MarketingPage from "@/components/marketing/MarketingPage";
import { faqs } from "@/data/marketing";
import { site } from "@/utils/site";
import useSeo from "@/utils/useSeo";

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebSite", name: site.name, alternateName: site.nameEn, url: site.url, inLanguage: "fa" },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

export default function Home() {
  useSeo({ title: site.title, description: site.description, keywords: site.keywords, url: site.url, jsonLd });
  return <MarketingPage />;
}
