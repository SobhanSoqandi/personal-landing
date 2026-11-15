import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import { getNav, hasContact } from "@/utils/profile";

export default function LandingPage({ profile }) {
  const nav = getNav(profile);

  return (
    <>
      <Header name={profile.name} logo={profile.logo} nav={nav} />
      <main>
        <Hero profile={profile} />
        <Skills skills={profile.skills} />
        <Portfolio projects={profile.projects} intro={profile.portfolioIntro} kind={profile.kind} />
        {profile.about && <About about={profile.about} />}
        {hasContact(profile.contact) && <Contact contact={profile.contact} name={profile.name} kind={profile.kind} />}
      </main>
      <Footer profile={profile} nav={nav} />
    </>
  );
}
