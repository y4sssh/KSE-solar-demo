import requests
import json
import urllib.parse
from pathlib import Path

# Provide a list of search terms
companies = {
    "WAAREE": "Waaree Energies",
    "Adani Solar": "Adani Group",
    "TATA POWER": "Tata Power",
    "VIKRAM SOLAR": "Vikram Solar",
    "GROWATT": "Growatt",
    "ReNew": "ReNew Power",
    "POLYCAB": "Polycab",
    "HAVELLS": "Havells"
}

out_dir = Path("public/images/logos")
out_dir.mkdir(parents=True, exist_ok=True)

for name, term in companies.items():
    print(f"Searching {term}...")
    # Search for exactly this text
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles={urllib.parse.quote(term)}"
    r = requests.get(search_url, headers={"User-Agent": "Mozilla/5.0"})
    data = r.json()
    pages = data.get("query", {}).get("pages", {})
    found = False
    for pid, pdata in pages.items():
        if "original" in pdata:
            img_url = pdata["original"]["source"]
            ext = img_url.split('.')[-1]
            out_file = out_dir / f"{name.lower().replace(' ', '_')}.{ext}"
            print(f"Downloading {img_url} to {out_file}")
            img_r = requests.get(img_url, headers={"User-Agent": "Mozilla/5.0"})
            with open(out_file, "wb") as f:
                f.write(img_r.content)
            found = True
            break
    if not found:
        print(f"No original image found for {term}.")
