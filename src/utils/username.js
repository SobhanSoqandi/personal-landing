export const reservedUsernames = new Set([
  "about", "admin", "api", "blog", "contact", "dashboard", "help", "login", "logout",
  "panel", "pricing", "privacy", "register", "settings", "signup", "support", "terms",
]);

export const isValidUsername = (value) => /^[a-z0-9][a-z0-9_-]{1,28}[a-z0-9]$/.test(value);

export const isReservedUsername = (value) => reservedUsernames.has(value);
