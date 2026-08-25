#!/usr/bin/env bash
# One-command publish: gate -> build -> commit -> push -> deploy (SSH/localhost) -> verify -> reindex.
# Usage: scripts/ship.sh "commit message"
set -euo pipefail
cd "$(dirname "$0")/.."
MSG="${1:-Content update}"
python3 scripts/humanize_check.py
npm run build 2>&1 | grep -E "Compiled|error" | head -2
git add -A && git commit -q -m "$MSG

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>" || echo "nothing to commit"
git push origin main 2>&1 | tail -1
# deploy via SSH -> localhost (port 8000 is firewalled externally)
ssh -o BatchMode=yes root@137.184.60.7 'TOKEN=$(cat /root/.coolify_token); R=$(curl -s --max-time 20 -X POST "http://localhost:8000/api/v1/deploy?uuid=vqhxjennl2x20bm5q5bqf70l" -H "Authorization: Bearer $TOKEN"); D=$(echo "$R" | python3 -c "import json,sys; print(json.load(sys.stdin)[\"deployments\"][0][\"deployment_uuid\"])" 2>/dev/null); [ -z "$D" ] && { echo "DEPLOY FAILED: $R"; exit 1; }; for i in $(seq 1 40); do S=$(curl -s -H "Authorization: Bearer $TOKEN" "http://localhost:8000/api/v1/deployments/$D" | python3 -c "import json,sys; print(json.load(sys.stdin).get(\"status\",\"?\"))" 2>/dev/null); case "$S" in finished) echo "deploy: finished"; exit 0;; failed|cancelled*) echo "deploy: $S"; exit 1;; esac; sleep 15; done; echo "deploy: timeout"; exit 1'
sleep 5
curl -s -o /dev/null -w 'live: %{http_code}\n' --max-time 15 https://emerchantbooks.com/
# reindex: GSC sitemap + Indexing API (all sitemap URLs, capped by quota) + IndexNow
/usr/bin/python3 - << 'PY' 2>/dev/null
import sys, re, urllib.request
sys.path.insert(0, "/Users/saad/.config/claude-seo")
import index_monitor as im
from googleapiclient.discovery import build
from google.oauth2 import service_account
key = "/Users/saad/emerchantbooks/site/gsc-index-emerchantbooks.json"
creds = service_account.Credentials.from_service_account_file(key, scopes=["https://www.googleapis.com/auth/webmasters"])
svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
svc.sitemaps().submit(siteUrl="https://emerchantbooks.com/", feedpath="https://emerchantbooks.com/sitemap.xml").execute()
print("GSC sitemap resubmitted")
xml = urllib.request.urlopen("https://emerchantbooks.com/sitemap.xml", timeout=30).read().decode()
urls = re.findall(r"<loc>(.*?)</loc>", xml)
im.notify(key, urls[:150]); print(f"Indexing API: {min(len(urls),150)} URLs notified")
PY
python3 scripts/indexnow_ping.py
