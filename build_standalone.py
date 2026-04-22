#!/usr/bin/env python3
"""Build a single-file standalone version of Sales HQ.

Bundles index.html + its 4 iframe pages (and news-data.js) into one HTML file
that works by double-click or via any static HTML preview — no server needed.
"""
import base64
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent

def read(p):
    return (ROOT / p).read_text(encoding="utf-8")

# 1. Inline news-data.js into accounts-news.html so the iframe is self-contained.
news_data_js = read("news-data.js")
accounts_news = read("accounts-news.html")
accounts_news = accounts_news.replace(
    '<script src="news-data.js"></script>',
    f"<script>\n{news_data_js}\n</script>",
)

pages = {
    "accounts": read("accounts.html"),
    "news": accounts_news,
    "pitchbuilder": read("advanced-pitch-builder.html"),
    "interactivewar": read("interactive-war-room.html"),
}

# 2. Base64-encode each page.
b64 = {k: base64.b64encode(v.encode("utf-8")).decode("ascii") for k, v in pages.items()}

# 3. Take index.html as base, swap iframe src for a data attribute the bootstrap
# script will resolve to a Blob URL.
index = read("index.html")
index = re.sub(
    r'<iframe src="(accounts|accounts-news|advanced-pitch-builder|interactive-war-room)\.html"',
    lambda m: {
        "accounts": '<iframe data-embed="accounts"',
        "accounts-news": '<iframe data-embed="news"',
        "advanced-pitch-builder": '<iframe data-embed="pitchbuilder"',
        "interactive-war-room": '<iframe data-embed="interactivewar"',
    }[m.group(1)],
    index,
)

bootstrap = f"""
<script id="__embedded_pages__" type="application/json">
{{
  "accounts": "{b64['accounts']}",
  "news": "{b64['news']}",
  "pitchbuilder": "{b64['pitchbuilder']}",
  "interactivewar": "{b64['interactivewar']}"
}}
</script>
<script>
(function(){{
  var data = JSON.parse(document.getElementById('__embedded_pages__').textContent);
  function b64ToBlobUrl(b64) {{
    var bin = atob(b64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], {{type: 'text/html;charset=utf-8'}}));
  }}
  document.querySelectorAll('iframe[data-embed]').forEach(function(f){{
    var key = f.getAttribute('data-embed');
    if (data[key]) f.src = b64ToBlobUrl(data[key]);
  }});
}})();
</script>
"""

if "</body>" in index:
    index = index.replace("</body>", bootstrap + "\n</body>")
else:
    index += bootstrap

out = ROOT / "sales-hq-standalone.html"
out.write_text(index, encoding="utf-8")
print(f"Wrote {out} ({out.stat().st_size:,} bytes)")
