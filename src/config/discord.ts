/**
 * Community Discord invite (hero "Join Discord", support links).
 * Set PUBLIC_DISCORD_INVITE_URL in .env / Cloudflare — never use checkout (/go/) or Zadeyo here.
 */

/** Paste your real invite here if env is missing or invalid. */
export const DEFAULT_DISCORD_INVITE = 'https://discord.gg/nba2k27hack';

export const DISCORD_INVITE_URL = (
  import.meta.env.PUBLIC_DISCORD_INVITE_URL as string | undefined
)?.trim();

export function isDiscordUrl(url: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  if (lower.includes('zadeyo.com')) return false;
  if (lower.includes('/go/')) return false;
  if (lower.includes('checkout')) return false;
  return lower.includes('discord.com') || lower.includes('discord.gg');
}

export function discordInviteUrl(): string {
  if (DISCORD_INVITE_URL && isDiscordUrl(DISCORD_INVITE_URL)) {
    return DISCORD_INVITE_URL;
  }
  return DEFAULT_DISCORD_INVITE;
}
