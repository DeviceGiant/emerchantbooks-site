#!/usr/bin/env python3
"""Pre-deploy gate: fail if site copy carries AI tells. Run before every push.
Checks src/content/*.ts and src/app pages for em/en dashes and banned AI vocabulary
per ~/buybackbear/docs/03-marketing/human-voice-rules.md."""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "src"
BANNED = [
    r"—", r"–",  # em/en dashes: the loudest tell
    r"\bleverag(e|ing|ed)\b", r"\bseamless(ly)?\b", r"\brobust\b", r"\bdelve\b",
    r"\bnavigating the\b", r"\blandscape of\b", r"\brealm\b", r"\btapestry\b",
    r"\btestament to\b", r"\bunlock(ing)? the\b", r"\bgame.changer\b", r"\bcutting.edge\b",
    r"\btop.notch\b", r"\bhassle.free\b", r"\bplethora\b", r"\bmyriad of\b",
    r"In today's fast", r"When it comes to", r"In the world of", r"In conclusion",
    r"It's important to note", r"\bMoreover,", r"\bFurthermore,", r"\bAdditionally,",
]
fails = 0
for f in list(ROOT.rglob("*.ts")) + list(ROOT.rglob("*.tsx")):
    text = f.read_text(encoding="utf-8")
    for pat in BANNED:
        for m in re.finditer(pat, text):
            line = text[:m.start()].count("\n") + 1
            print(f"FAIL {f.relative_to(ROOT.parent)}:{line}  pattern: {pat!r}")
            fails += 1
if fails:
    print(f"\n{fails} AI-tell violations. Fix before deploying.")
    sys.exit(1)
print("humanize check: CLEAN")
