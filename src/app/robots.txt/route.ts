export const dynamic = "force-static";

const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Amazonbot", "DuckAssistBot",
  "Bytespider", "CCBot", "cohere-ai", "meta-externalagent",
];

// Paths that waste crawl budget or have no search value.
const DISALLOW = ["/api/", "/_next/data/"];

export function GET() {
  const block = (ua: string) =>
    [`User-agent: ${ua}`, "Allow: /", ...DISALLOW.map((p) => `Disallow: ${p}`), ""].join("\n");

  const body = [
    "# emerchantbooks.com robots.txt",
    "# Ecommerce accounting firm for $100K+/mo sellers. Everything public is crawlable.",
    "# Machine-readable site summary for AI agents: https://emerchantbooks.com/llms.txt",
    "",
    "# Default: all crawlers",
    block("*"),
    "# Content signals (Cloudflare/IETF proposal): we welcome search indexing and AI answers that cite us.",
    "Content-Signal: search=yes, ai-input=yes, ai-train=yes",
    "",
    "# AI crawlers, listed explicitly. An explicit group replaces the default for that bot,",
    "# so each carries the same rules rather than inheriting them.",
    ...AI_BOTS.map(block),
    "# Sitemaps",
    "Sitemap: https://emerchantbooks.com/sitemap.xml",
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
