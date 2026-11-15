export const pronoun = (profile) => (profile.kind === "team" ? "ما" : "من");

export const hasContact = ({ phone, email, instagram, linkedin, github } = {}) =>
  Boolean(phone || email || instagram || linkedin || github);

export const getNav = (profile) => {
  const us = pronoun(profile);
  return [
    profile.projects?.length && { title: "نمونه‌کارها", href: "#portfolio" },
    profile.about && { title: `درباره ${us}`, href: "#about" },
    hasContact(profile.contact) && { title: `ارتباط با ${us}`, href: "#contact" },
  ].filter(Boolean);
};
