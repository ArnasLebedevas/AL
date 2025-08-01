export const env = {
  contactEmail: getRequiredEnv("NEXT_PUBLIC_CONTACT_EMAIL"),
};

export function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}
