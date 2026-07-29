#!/usr/bin/env python3
"""
House-style content images for emerchantbooks.com, saved to public/images/<seo-name>.webp.
Same Ideogram v3 pipeline as buybackbear/scripts/generate_page_images.py.
Key: ~/.config/claude-seo/image-api.json (ideogram) or IDEOGRAM_API_KEY.

Usage:  python3 scripts/generate_images.py [--only <name>] [--dry-run]
"""
import os, json, argparse, pathlib, time, urllib.request, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images"

STYLE = {
    "look": "premium editorial business photography, clean and minimal, soft natural light through office windows, shallow depth of field, lots of negative space",
    "composition": "single clear subject, rule of thirds, 16:9, uncluttered, magazine-quality",
    "mood": "trustworthy, established, calm, high-end professional services",
    "palette": ["deep navy blue (#0b1b33)", "emerald green accents (#10b981)", "warm white (#fafafa)", "walnut wood tones"],
    "negative": "text, words, letters, numbers, captions, typography, watermark, logo, brand name, readable screens, app UI, faces in sharp focus, cartoon, illustration, clipart, deformed hands, extra fingers, blurry, low quality, jpeg artifacts",
}

# seo-filename -> subject (house style appended). Filenames ARE the image SEO.
SUBJECTS = {
    "ecommerce-bookkeeping-services-desk": "an organized accountant's desk with a laptop showing soft out-of-focus financial charts, a small stack of shipping boxes in the blurred background suggesting an ecommerce operation",
    "ecommerce-accounting-team-review": "two professionals in a bright modern office reviewing printed financial statements together at a walnut table, seen from behind at a distance",
    "amazon-seller-accountant-settlement-review": "a desk with printed settlement-style spreadsheet pages fanned out beside a laptop and a cardboard shipping box with packing tape, warehouse softly blurred behind",
    "shopify-bookkeeping-storefront-analytics": "a laptop on a clean desk with soft out-of-focus ecommerce dashboard shapes on screen, beside a branded-free shopping bag and a small potted plant",
    "ebay-bookkeeping-reseller-workspace": "a tidy reseller workspace with a shipping scale, stacked padded mailers and a laptop, morning light",
    "walmart-marketplace-accounting-warehouse": "a clean modern fulfillment shelf with neatly stacked brown boxes, one box open on a desk beside a calculator and laptop",
    "etsy-bookkeeping-maker-studio": "a maker's studio bench with craft materials organized in jars, a small kraft shipping box and a laptop with soft blurred spreadsheet, warm light",
    "catch-up-bookkeeping-paper-stack": "a tall neat stack of receipts and bank statements beside an open laptop and reading glasses on a clean desk, suggesting a backlog being organized",
    "monthly-bookkeeping-close-checklist": "a clean desk with a printed monthly report packet, a pen resting on it, coffee cup and laptop, end-of-month close scene",
    "quickbooks-ecommerce-setup-screen": "over-the-shoulder view of a laptop with soft out-of-focus accounting software interface shapes, organized desk with shipping supplies in far background",
    "xero-ecommerce-multicurrency-desk": "a minimal desk with a laptop, a small world-map globe and neatly arranged foreign banknotes under soft light, international commerce concept",
    "netsuite-accounting-finance-office": "a modern corporate finance office with dual monitors showing blurred dashboards, glass wall reflections, executive and established",
    "ecommerce-tax-accountant-documents": "a professional desk with tax forms in a neat folder, a calculator, and a laptop, composed and orderly, no readable text",
    "international-seller-us-llc-compliance": "a passport, a small US flag desk pin and a folder of documents arranged neatly beside a laptop on a clean desk, cross-border business concept",
    "ecommerce-bookkeeping-pricing-meeting": "two chairs at a bright meeting table with a single printed proposal document and two coffee cups, transparent-deal concept, seen from a distance",
    "about-ecommerce-accounting-firm-office": "a bright welcoming boutique office interior with plants, walnut desks and morning light, established professional services firm",
    "contact-ecommerce-bookkeeper-consultation": "a warm desk scene with a phone handset resting beside a notebook and pen, soft window light, approachable consultation concept",
    "article-bookkeeping-cost-calculator": "a calculator, a fan of dollar banknotes and a notepad on a clean desk, cost-analysis concept, overhead flat-lay",
    "article-amazon-seller-taxes-forms": "a desk flat-lay of blank tax-form-style papers, a coffee cup and a small cardboard box, tax-season-for-sellers concept",
    "article-1099k-reconciliation-desk": "two printed spreadsheet pages side by side on a desk with a magnifying glass resting on one, comparison and reconciliation concept",
    "article-chart-of-accounts-organized": "wooden desk organizer trays holding neatly sorted colored file folders beside a laptop, organization-system concept, overhead angle",
    "custom-integrations-ops-engineering": "two monitors on a clean desk showing soft out-of-focus code and flowchart shapes beside a small stack of shipping boxes, ecommerce operations engineering concept",
    "article-form-5472-international-mail": "an official-looking blank document beside a passport and an airmail envelope on a clean desk, international-compliance concept",
}

def build_prompt(subject: str) -> str:
    s = STYLE
    return (f"{subject}. {s['look']}. {s['composition']}. Mood: {s['mood']}. "
            f"Color palette: {', '.join(s['palette'])}.")

def ideogram_key() -> str:
    k = os.environ.get("IDEOGRAM_API_KEY")
    if k: return k
    cfg = pathlib.Path.home() / ".config" / "claude-seo" / "image-api.json"
    return json.load(open(cfg)).get("ideogram_api_key", "")

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")

def generate(name: str, prompt: str, dry: bool) -> None:
    webp = OUT / f"{name}.webp"
    if webp.exists():
        print(f"= {name}.webp exists, skipping"); return
    if dry:
        print(f"[dry] {name}\n      {prompt}\n"); return
    dest = OUT / f"{name}.png"
    boundary = "----ideogrambbbboundary"
    fields = {"prompt": prompt, "aspect_ratio": "16x9", "rendering_speed": "QUALITY",
              "num_images": "1", "negative_prompt": STYLE["negative"]}
    parts = "".join(f'--{boundary}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'
                    for k, v in fields.items())
    body = (parts + f"--{boundary}--\r\n").encode()
    last = None
    for attempt in range(4):
        req = urllib.request.Request(
            "https://api.ideogram.ai/v1/ideogram-v3/generate", data=body,
            headers={"Api-Key": ideogram_key(), "Accept": "application/json", "User-Agent": UA,
                     "Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                url = json.loads(r.read().decode())["data"][0]["url"]
            OUT.mkdir(parents=True, exist_ok=True)
            dl = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(dl, timeout=120) as img:
                dest.write_bytes(img.read())
            os.system(f'cd "{ROOT}" && node -e \'require("sharp")("{dest}")'
                      f'.resize(1600,900,{{fit:"cover"}}).webp({{quality:78}}).toFile("{webp}")'
                      f'.then(()=>require("fs").unlinkSync("{dest}"))\' 2>/dev/null')
            final = webp if webp.exists() else dest
            print(f"OK {final.name}  ({final.stat().st_size // 1024} KB)")
            return
        except urllib.error.HTTPError as e:
            last = f"HTTP {e.code}"
            if e.code in (403, 429, 500, 502, 503, 504):
                time.sleep(3 * (attempt + 1)); continue
            raise
    raise RuntimeError(f"{name}: Ideogram failed after retries: {last}")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--only")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    todo = {args.only: SUBJECTS[args.only]} if args.only else SUBJECTS
    fails = 0
    for name, subject in todo.items():
        try:
            generate(name, build_prompt(subject), args.dry_run)
        except Exception as e:
            print(f"FAIL {name}: {e}"); fails += 1
    print(f"done, {fails} failures")
