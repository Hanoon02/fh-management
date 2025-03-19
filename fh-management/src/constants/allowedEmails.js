export const ALLOWED_EMAILS = Object.keys(import.meta.env)
    .filter((key) => key.startsWith("VITE_EMAIL"))
    .map((key) => import.meta.env[key]);