const digits = (value) => String(value).replace(/\D/g, "");

export const toTel = (phone) => `+98${digits(phone).replace(/^0/, "")}`;

export const toWhatsapp = (phone) => toTel(phone).slice(1);

export const formatPhone = (phone) => digits(phone).replace(/^(\d{4})(\d{3})(\d{4})$/, "$1 $2 $3");

export const socialUrls = ({ instagram, linkedin, github } = {}) => ({
  instagram: instagram && `https://instagram.com/${instagram}`,
  linkedin: linkedin && `https://linkedin.com/${linkedin}`,
  github: github && `https://github.com/${github}`,
});
