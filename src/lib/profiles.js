import { profiles } from "@/data/profiles";

export const getProfile = (username = "") => profiles.find((p) => p.username === username.toLowerCase()) ?? null;

export const getAllProfiles = () => profiles;
