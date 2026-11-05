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

# Verified active GitHub Pages hosted at https://xyzzyapps.github.io/<reponame>/
GITHUB_PAGES = {
    "otto": "https://xyzzyapps.github.io/otto/",
    "tick": "https://xyzzyapps.github.io/tick/",
    "preforth": "https://xyzzyapps.github.io/preforth/",
    "doge-world": "https://xyzzyapps.github.io/doge-world/",
    "batminton": "https://xyzzyapps.github.io/batminton/",
    "raptor": "https://xyzzyapps.github.io/raptor/",
    "spear": "https://xyzzyapps.github.io/spear/",
    "useless-box": "https://xyzzyapps.github.io/useless-box/",
    "endless_dub": "https://xyzzyapps.github.io/endless_dub/",
    "ping-pong": "https://xyzzyapps.github.io/ping-pong/",
    "arli": "https://xyzzyapps.github.io/arli/",
    "goweb": "https://xyzzyapps.github.io/goweb/",
    "docco-md": "https://xyzzyapps.github.io/docco-md/",
    "diver": "https://xyzzyapps.github.io/diver/",
}

CATEGORIES = {
    "compilers": {
        "id": "compilers",
        "name": "Languages & Compilers",
        "icon": "⚡",
        "desc": "Radical programming languages, prefix concatenative Lisps, transpilers, bytecode VMs, and zero-filler syntax experiments.",
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
    
    seen = set()
    return [t for t in tags if not (t in seen or seen.add(t))][:4]

processed_repos = []

for r in raw_repos:
    name = r["name"]
    cat = REPO_CATEGORY_MAP.get(name, "systems")

    desc = r.get("description") or CUSTOM_DESCRIPTIONS.get(name) or "An experimental project by Xyzzy Apps."
    
    # Check if this repo has a GitHub Page
    gh_page_url = GITHUB_PAGES.get(name)
    has_github_page = gh_page_url is not None
    
    # External homepage or fallback to gh_page_url
    demo = gh_page_url or r.get("homepageUrl") or ""

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
        "githubPage": gh_page_url,
        "hasGithubPage": has_github_page,
        "isFork": r.get("isFork", False),
        "isArchived": r.get("isArchived", False),
        "createdAt": r.get("createdAt"),
        "updatedAt": r.get("updatedAt"),
        "tags": generate_tags(r, cat),
        "featured": name in [
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
        "pagesCount": len(GITHUB_PAGES)
    },
    "categories": CATEGORIES,
    "repos": processed_repos
}

with open("projects.json", "w", encoding="utf-8") as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print(f"Generated projects.json: {len(processed_repos)} repos, {len(GITHUB_PAGES)} active GitHub Pages.")
