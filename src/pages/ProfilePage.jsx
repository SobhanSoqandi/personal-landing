import { useParams } from "react-router-dom";
import LandingPage from "@/components/landing/LandingPage";
import NotFound from "@/pages/NotFound";
import { getProfile } from "@/lib/profiles";
import { socialUrls } from "@/utils/contact";
import { site } from "@/utils/site";
import useSeo from "@/utils/useSeo";

function Profile({ profile }) {
  const url = `${site.url}/${profile.username}`;
  useSeo({
    title: `${profile.name} | ${profile.title}`,
    description: profile.bio.slice(0, 155),
    keywords: [profile.name, profile.title, ...profile.keywords],
    url,
    image: `${site.url}${profile.image}`,
    index: profile.published,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": profile.kind === "team" ? "Organization" : "Person",
      name: profile.name,
      description: profile.bio,
      image: `${site.url}${profile.image}`,
      url,
      ...(profile.kind !== "team" && { jobTitle: profile.title }),
      sameAs: Object.values(socialUrls(profile.contact)).filter(Boolean),
    },
  });
  return <LandingPage profile={profile} />;
}

export default function ProfilePage() {
  const { username } = useParams();
  const profile = getProfile(username);
  return profile ? <Profile profile={profile} /> : <NotFound />;
}
