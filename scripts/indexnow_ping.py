#!/usr/bin/env python3
"""Post-deploy: submit all sitemap URLs to IndexNow (Bing/Yandex/Seznam). Run after every article push."""
import json, urllib.request, re
KEY = "e8cceab8ca3c4fac8cf35508ca817879"
HOST = "emerchantbooks.com"
with urllib.request.urlopen(f"https://{HOST}/sitemap.xml", timeout=30) as r:
    urls = re.findall(r"<loc>(.*?)</loc>", r.read().decode())
body = json.dumps({"host": HOST, "key": KEY, "keyLocation": f"https://{HOST}/{KEY}.txt", "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body,
    headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
with urllib.request.urlopen(req, timeout=30) as r:
    print(f"IndexNow: HTTP {r.status} — {len(urls)} URLs submitted")
