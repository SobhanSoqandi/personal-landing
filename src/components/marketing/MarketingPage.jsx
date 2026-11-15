import MarketingHeader from "./MarketingHeader";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Demo from "./Demo";
import Professions from "./Professions";
import Faq from "./Faq";
import Cta from "./Cta";
import MarketingFooter from "./MarketingFooter";
import { getAllProfiles } from "@/lib/profiles";
import { site } from "@/utils/site";

export default function MarketingPage() {
  const [demo] = getAllProfiles();
  const host = new URL(site.url).host;
  const demoHref = `/${demo.username}`;

  return (
    <>
      <MarketingHeader demoHref={demoHref} />
      <main>
        <Hero host={host} demoHref={demoHref} />
        <Features />
        <HowItWorks />
        <Demo demo={demo} host={host} />
        <Professions />
        <Faq />
        <Cta demoHref={demoHref} />
      </main>
      <MarketingFooter demoHref={demoHref} />
    </>
  );
}
