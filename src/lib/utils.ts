export { cn } from "cn"

export function absoluteUrl(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.fuadtesfaye.me")
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
}
