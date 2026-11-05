#!/usr/bin/env python3
"""
Xyzzy Apps — Repository Registry Synchronizer
Fetches all repositories from GitHub CLI (gh), detects live GitHub Pages,
categorizes projects, and regenerates projects.json and app.js.

Usage:
    python sync.py
"""

import json
import subprocess
import sys
import urllib.request
import urllib.error

# Verified manual descriptions for repos missing GitHub metadata descriptions
CUSTOM_DESCRIPTIONS = {
    "flatvc": "Key-Value Version Control System in Go — A simplified, human-friendly CLI version control system storing commits as immutable key-value trees.",
    "marionette": "Structured Code Annotation Indexing & Query System — Parse, index, and query inline code annotations and structural metadata across large codebases.",
    "pdp": "Headless dataflow core, forked and modernized from Pure Data (Pd) for embedded audio synthesis and headless DSP routing.",
    "ping-pong": "A clean, lightweight retro table-tennis ping pong game in pure HTML5 and Canvas.",
    "sedit": "A bottom-up source editor where the first line sits at the bottom and lines stack upward, matching natural growth direction.",
    "tangly": "An eight-legged interactive creature that lives on your desktop — walks where you click, makes quiet noises, and can be live-patched via REPL.",
    "shdr": "A human-friendly shading language in Python using decorators and plain English syntax to compile into GPU shaders.",
    "c2eng": "DECSS: Descriptive English for C Statements and Subroutines — translates C source code into readable descriptive English prose.",
    "cha-yen": "Bubble Tea on Android — bringing Charm's Bubble Tea TUI architecture and Elm-style state modeling to mobile terminal environments.",
    "mc": "Multiple Dispatch Compiler for C — a transpiler adding Julia-style multiple dispatch to C, inspired by Objective-C's runtime model.",
    "diver": "Minimalist Single File Component (SFC) compiler and static site generator for Node.js using native ES Modules.",
}

CATEGORIES = {
    "compilers": {
        "id": "compilers",
        "name": "Languages & Compilers",
        "icon": "⚡",
        "desc": "Radical programming languages, prefix concatenative Lisps, transpilers, bytecode VMs, and lean syntax experiments.",
        "order": 1
    },
    "literate": {
        "id": "literate",
        "name": "Literate & Conversational Code",
        "icon": "📖",
        "desc": "Literate programming tools, prose-to-code translation, English DSLs, and topologic explain-order compilation.",
        "order": 2
    },
    "systems": {
        "id": "systems",
        "name": "Systems, Low-Level & DevTools",
        "icon": "🛠️",
        "desc": "Readable NASM assembly macros, C static analyzers, hygienic macro expanders, and unconventional source editors.",
        "order": 3
    },
    "audio_video": {
        "id": "audio_video",
        "name": "Audio & Creative Tech",
        "icon": "🎵",
        "desc": "Real-time DAW MIDI inference engines, algorithmic hardgroove techno, headless Pure Data DSP, and video REPLs.",
        "order": 4
    },
    "sim_games": {
        "id": "sim_games",
        "name": "Simulations, AI & Games",
        "icon": "🕹️",
        "desc": "Live desktop arthropods, insect neuro-simulations, reinforcement learning agents writing haiku, and custom 3D shaders.",
        "order": 5
    },
    "web_runtime": {
        "id": "web_runtime",
        "name": "Web & Novel Runtimes",
        "icon": "🌐",
        "desc": "Go executing like PHP with Fiber templating, native ESM Single File Component compilers, and mobile TUI ports.",
        "order": 6
    }
}

REPO_CATEGORY_MAP = {
    # Compilers & Languages
    "otto": "compilers", "tick": "compilers", "preforth": "compilers", "raptor": "compilers",
    "clilang": "compilers", "esc": "compilers", "prose": "compilers", "pcl": "compilers",
    "paren": "compilers", "rsh": "compilers", "arli": "compilers", "kdl-lisp": "compilers",
    "mc": "compilers", "go2cpp": "compilers", "carbide": "compilers", "CapsuleC": "compilers",
    "tccd": "compilers", "goc": "compilers", "s-ir": "compilers", "contin": "compilers",
    "cua": "compilers", "oc": "compilers", "rift": "compilers", "tornedo": "compilers",

    # Literate & Prose
    "goweb": "literate", "fragment": "literate", "weft": "literate", "linen": "literate",
    "docco-md": "literate", "c2eng": "literate", "enx": "literate", "readable_maths": "literate",
    "promptpatch": "literate", "syncarlo": "literate",

    # Systems & Tools
    "rasm": "systems", "cppp": "systems", "genc": "systems", "occ": "systems",
    "olibc": "systems", "oolibc": "systems", "flatvc": "systems", "marionette": "systems",
    "zapota": "systems", "drum-linux": "systems", "posixlab": "systems", "icicle": "systems",
    "duke": "systems", "sedit": "systems", "samre": "systems", "dag": "systems",
    "waitg": "systems", "dmovie": "systems", "bubbletea": "systems", "wish": "systems",

    # Audio & Creative Tech
    "Jbd": "audio_video", "fftechno": "audio_video", "endless_dub": "audio_video",
    "pdp": "audio_video", "SP": "audio_video", "slopcore-factory": "audio_video",
    "shdr": "audio_video", "canvasterm": "audio_video",

    # Simulations & Games
    "doge-world": "sim_games", "tangly": "sim_games", "holmsy": "sim_games",
    "faiku": "sim_games", "fly-lab": "sim_games", "spear": "sim_games",
    "useless-box": "sim_games", "batminton": "sim_games", "ping-pong": "sim_games",
    "frames": "sim_games",

    # Web & Runtimes
    "gohp": "web_runtime", "easycgi": "web_runtime", "diver": "web_runtime",
    "cha-yen": "web_runtime", "cordis": "web_runtime",
}

def check_pages_url(repo_name):
    """Check if repository has an active GitHub Pages deployment returning HTTP 200."""
    url = f"https://xyzzyapps.github.io/{repo_name}/"
    req = urllib.request.Request(url, method="HEAD")
    req.add_header("User-Agent", "Mozilla/5.0")
    try:
        with urllib.request.urlopen(req, timeout=3) as resp:
            if resp.status == 200:
                return url
    except Exception:
        pass
    return None

def guess_category(name, desc):
    """Heuristic category deduction if repo is not in static map."""
    text = (name + " " + (desc or "")).lower()
    if any(k in text for k in ["compiler", "transpiler", "lisp", "forth", "bytecode", "syntax", "language"]):
        return "compilers"
    if any(k in text for k in ["literate", "markdown", "noweb", "prose", "weave", "tangle"]):
        return "literate"
    if any(k in text for k in ["audio", "midi", "synth", "techno", "sound", "dsp"]):
        return "audio_video"
    if any(k in text for k in ["game", "simulation", "shader", "three.js", "creature", "fly"]):
        return "sim_games"
    if any(k in text for k in ["web", "http", "cgi", "sfc", "api"]):
        return "web_runtime"
    return "systems"

def generate_tags(repo, category):
    tags = []
    lang = repo.get("primaryLanguage")
    if lang:
        tags.append(lang["name"])
    
    desc_lower = (repo.get("description") or "").lower()
    if "compiler" in desc_lower or "transpiler" in desc_lower or category == "compilers":
        tags.append("compiler")
    if "lisp" in desc_lower or "forth" in desc_lower:
        tags.append("concatenative/lisp")
    if "audio" in desc_lower or "midi" in desc_lower or "sound" in desc_lower:
        tags.append("audio")
    if "three.js" in desc_lower or "shader" in desc_lower or "graphics" in desc_lower:
        tags.append("graphics")
    if "literate" in desc_lower or category == "literate":
        tags.append("literate-code")
    if "tui" in desc_lower or "terminal" in desc_lower or "editor" in desc_lower:
        tags.append("tui/cli")
    if "simulation" in desc_lower or "fly" in desc_lower:
        tags.append("simulation")
    if repo.get("stargazerCount", 0) > 0:
        tags.append("popular")
    
    seen = set()
    return [t for t in tags if not (t in seen or seen.add(t))][:4]

def main():
    print("[1/4] Querying GitHub CLI for repositories...")
    fields = "name,description,url,isPrivate,isFork,stargazerCount,primaryLanguage,createdAt,updatedAt,pushedAt,homepageUrl,isArchived"
    cmd = ["gh", "repo", "list", "xyzzyapps", "--limit", "200", f"--json={fields}"]
    
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        raw_repos = json.loads(res.stdout)
    except Exception as e:
        print(f"Error executing gh CLI: {e}")
        print("Falling back to existing repos.json if present...")
        with open("repos.json", "r", encoding="utf-8") as f:
            raw_repos = json.load(f)

    # Filter out the pages portfolio repository itself
    raw_repos = [r for r in raw_repos if r["name"] != "xyzzyapps.github.io"]
    print(f"Found {len(raw_repos)} repositories.")

    print("[2/4] Detecting active GitHub Pages and classifying entries...")
    processed_repos = []
    pages_count = 0

    for r in raw_repos:
        name = r["name"]
        cat = REPO_CATEGORY_MAP.get(name) or guess_category(name, r.get("description"))

        desc = r.get("description") or CUSTOM_DESCRIPTIONS.get(name) or "An open-source codebase by Xyzzy Apps."

        # Check for GitHub Pages
        homepage = r.get("homepageUrl") or ""
        gh_page = check_pages_url(name)
        if not gh_page and homepage.startswith("https://xyzzyapps.github.io/"):
            gh_page = homepage

        has_page = bool(gh_page)
        if has_page:
            pages_count += 1

        lang = r.get("primaryLanguage")
        lang_name = lang["name"] if lang else "Other"

        processed = {
            "name": name,
            "description": desc,
            "category": cat,
            "language": lang_name,
            "stars": r.get("stargazerCount", 0),
            "url": r["url"],
            "homepage": homepage or gh_page or "",
            "githubPage": gh_page,
            "hasGithubPage": has_page,
            "isFork": r.get("isFork", False),
            "isArchived": r.get("isArchived", False),
            "createdAt": r.get("createdAt"),
            "updatedAt": r.get("updatedAt"),
            "tags": generate_tags(r, cat),
            "featured": r.get("stargazerCount", 0) >= 1 or has_page or name in [
                "otto", "tick", "preforth", "rasm", "Jbd", "raptor", "fftechno", 
                "doge-world", "arli", "goweb", "weft", "tangly", "endless_dub", "diver"
            ]
        }
        processed_repos.append(processed)

    output_data = {
        "user": {
            "login": "xyzzyapps",
            "name": "Xyzzy Apps",
            "bio": "Radical programming language design, human-readable computing, literate programming, generative audio, and eccentric desktop simulations.",
            "avatar": "https://avatars.githubusercontent.com/u/89282585?v=4",
            "github": "https://github.com/xyzzyapps",
            "twitter": "https://twitter.com/xyzzyapps",
            "blog": "https://xyzzyapps.link",
            "repoCount": len(processed_repos),
            "pagesCount": pages_count
        },
        "categories": CATEGORIES,
        "repos": processed_repos
    }

    print(f"[3/4] Writing projects.json ({len(processed_repos)} repos, {pages_count} pages)...")
    with open("projects.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print("[4/4] Regenerating embedded app.js engine...")
    subprocess.run([sys.executable, "generate_app_js.py"], check=True)

    print("\n[OK] Synchronization complete!")
    print("To publish changes to GitHub Pages:")
    print("    git add .")
    print("    git commit -m \"Update repository registry\"")
    print("    git push origin main")

if __name__ == "__main__":
    main()
