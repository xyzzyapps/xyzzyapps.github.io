import json
import os

with open('repos.json', 'r', encoding='utf-8') as f:
    raw_repos = json.load(f)

# Descriptions for repos that don't have one in GitHub metadata
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

# Explicit demo URLs
EXTRA_DEMOS = {
    "ping-pong": "https://xyzzyapps.github.io/ping-pong/",
    "endless_dub": "https://xyzzyapps.github.io/endless_dub/",
    "spear": "https://xyzzyapps.github.io/spear/",
}

CATEGORIES = {
    "compilers": {
        "id": "compilers",
        "name": "Languages & Compilers",
        "icon": "⚡",
        "desc": "Novel programming languages, transpilers, bytecode VMs, and radical syntax experiments."
    },
    "literate": {
        "id": "literate",
        "name": "Literate & Prose Code",
        "icon": "📖",
        "desc": "Literate programming, prose-to-code translation, English DSLs, and source weaving."
    },
    "systems": {
        "id": "systems",
        "name": "Systems & DevTools",
        "icon": "🛠️",
        "desc": "Assembly macros, C/C++ static analyzers, version control, and unconventional text editors."
    },
    "audio_video": {
        "id": "audio_video",
        "name": "Audio & Creative Tech",
        "icon": "🎵",
        "desc": "Algorithmic techno, DAW MIDI inference engines, video REPLs, and GPU shaders."
    },
    "sim_games": {
        "id": "sim_games",
        "name": "Simulations & Games",
        "icon": "🕹️",
        "desc": "Desktop virtual creatures, insect neuro-simulations, 3D shaders, and retro games."
    },
    "web_runtime": {
        "id": "web_runtime",
        "name": "Web & Runtimes",
        "icon": "🌐",
        "desc": "Dynamic runtimes, CGI servers, single-file component compilers, and mobile TUIs."
    }
}

REPO_CATEGORY_MAP = {
    # Compilers & Languages
    "otto": "compilers",
    "tick": "compilers",
    "preforth": "compilers",
    "raptor": "compilers",
    "clilang": "compilers",
    "esc": "compilers",
    "prose": "compilers",
    "pcl": "compilers",
    "paren": "compilers",
    "rsh": "compilers",
    "arli": "compilers",
    "kdl-lisp": "compilers",
    "mc": "compilers",
    "go2cpp": "compilers",
    "carbide": "compilers",
    "CapsuleC": "compilers",
    "tccd": "compilers",
    "goc": "compilers",
    "s-ir": "compilers",
    "contin": "compilers",
    "cua": "compilers",
    "oc": "compilers",
    "rift": "compilers",
    "tornedo": "compilers",

    # Literate & Prose
    "goweb": "literate",
    "fragment": "literate",
    "weft": "literate",
    "linen": "literate",
    "docco-md": "literate",
    "c2eng": "literate",
    "enx": "literate",
    "readable_maths": "literate",
    "promptpatch": "literate",
    "syncarlo": "literate",

    # Systems & Tools
    "rasm": "systems",
    "cppp": "systems",
    "genc": "systems",
    "occ": "systems",
    "olibc": "systems",
    "oolibc": "systems",
    "flatvc": "systems",
    "marionette": "systems",
    "zapota": "systems",
    "drum-linux": "systems",
    "posixlab": "systems",
    "icicle": "systems",
    "duke": "systems",
    "sedit": "systems",
    "samre": "systems",
    "dag": "systems",
    "waitg": "systems",
    "dmovie": "systems",
    "bubbletea": "systems",
    "wish": "systems",

    # Audio & Creative Tech
    "Jbd": "audio_video",
    "fftechno": "audio_video",
    "endless_dub": "audio_video",
    "pdp": "audio_video",
    "SP": "audio_video",
    "slopcore-factory": "audio_video",
    "shdr": "audio_video",
    "canvasterm": "audio_video",

    # Simulations & Games
    "doge-world": "sim_games",
    "tangly": "sim_games",
    "holmsy": "sim_games",
    "faiku": "sim_games",
    "fly-lab": "sim_games",
    "spear": "sim_games",
    "useless-box": "sim_games",
    "batminton": "sim_games",
    "ping-pong": "sim_games",
    "frames": "sim_games",

    # Web & Runtimes
    "gohp": "web_runtime",
    "easycgi": "web_runtime",
    "diver": "web_runtime",
    "cha-yen": "web_runtime",
    "cordis": "web_runtime",
}

# Tag generation helper
def generate_tags(repo, category):
    tags = []
    lang = repo.get("primaryLanguage")
    if lang:
        tags.append(lang["name"])
    
    name_lower = repo["name"].lower()
    desc_lower = (repo.get("description") or "").lower()

    if "compiler" in desc_lower or "transpiler" in desc_lower or category == "compilers":
        tags.append("compiler")
    if "lisp" in desc_lower or "forth" in desc_lower:
        tags.append("concatenative/lisp")
    if "audio" in desc_lower or "midi" in desc_lower or "sound" in desc_lower or "techno" in desc_lower:
        tags.append("audio")
    if "three.js" in desc_lower or "shader" in desc_lower or "graphics" in desc_lower:
        tags.append("graphics")
    if "literate" in desc_lower or category == "literate":
        tags.append("literate-code")
    if "tui" in desc_lower or "terminal" in desc_lower or "editor" in desc_lower:
        tags.append("tui/cli")
    if "simulat" in desc_lower or "fly" in desc_lower:
        tags.append("simulation")
    if repo.get("stargazerCount", 0) > 0:
        tags.append("popular")
    
    # deduplicate preserving order
    seen = set()
    return [t for t in tags if not (t in seen or seen.add(t))][:4]

processed_repos = []
unmapped = []

for r in raw_repos:
    name = r["name"]
    cat = REPO_CATEGORY_MAP.get(name)
    if not cat:
        unmapped.append(name)
        cat = "systems"

    desc = r.get("description") or CUSTOM_DESCRIPTIONS.get(name) or "An experimental project by Xyzzy Apps."
    demo = r.get("homepageUrl") or EXTRA_DEMOS.get(name) or ""
    if demo.startswith("https://xyzzyapps.github.io/"):
        has_pages = True
    else:
        has_pages = False

    lang = r.get("primaryLanguage")
    lang_name = lang["name"] if lang else "Other"

    processed = {
        "name": name,
        "description": desc,
        "category": cat,
        "language": lang_name,
        "stars": r.get("stargazerCount", 0),
        "url": r["url"],
        "homepage": demo,
        "isFork": r.get("isFork", False),
        "isArchived": r.get("isArchived", False),
        "createdAt": r.get("createdAt"),
        "updatedAt": r.get("updatedAt"),
        "tags": generate_tags(r, cat),
        "featured": name in [
            "otto", "tick", "rasm", "Jbd", "raptor", "fftechno", 
            "doge-world", "arli", "goweb", "weft", "tangly", "endless_dub"
        ]
    }
    processed_repos.append(processed)

print(f"Processed {len(processed_repos)} repos.")
if unmapped:
    print(f"Warning: unmapped repos: {unmapped}")

output_data = {
    "user": {
        "login": "xyzzyapps",
        "name": "Xyzzy Apps",
        "bio": "Radical programming language design, human-readable computing, literate programming, generative audio, and eccentric desktop simulations.",
        "avatar": "https://avatars.githubusercontent.com/u/89282585?v=4",
        "github": "https://github.com/xyzzyapps",
        "twitter": "https://twitter.com/xyzzyapps",
        "blog": "https://xyzzyapps.link",
        "repoCount": len(processed_repos)
    },
    "categories": CATEGORIES,
    "repos": processed_repos
}

with open("site_data.json", "w", encoding="utf-8") as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print("Saved to site_data.json successfully!")
