/**
 * Xyzzy Apps — Slop-Free Technical Registry Engine
 * High-density, brutalist developer index with instant search, category grouping,
 * and direct GitHub Pages launchers.
 */

// Embedded dataset fallback
const INITIAL_DATA = {"user": {"login": "xyzzyapps", "name": "Xyzzy Apps", "bio": "Radical programming language design, human-readable computing, literate programming, generative audio, and eccentric desktop simulations.", "avatar": "https://avatars.githubusercontent.com/u/89282585?v=4", "github": "https://github.com/xyzzyapps", "twitter": "https://twitter.com/xyzzyapps", "blog": "https://xyzzyapps.link", "repoCount": 77, "pagesCount": 14}, "categories": {"compilers": {"id": "compilers", "name": "Languages & Compilers", "icon": "⚡", "desc": "Radical programming languages, prefix concatenative Lisps, transpilers, bytecode VMs, and zero-filler syntax experiments.", "order": 1}, "literate": {"id": "literate", "name": "Literate & Conversational Code", "icon": "📖", "desc": "Literate programming tools, prose-to-code translation, English DSLs, and topologic explain-order compilation.", "order": 2}, "systems": {"id": "systems", "name": "Systems, Low-Level & DevTools", "icon": "🛠️", "desc": "Readable NASM assembly macros, C static analyzers, hygienic macro expanders, and unconventional source editors.", "order": 3}, "audio_video": {"id": "audio_video", "name": "Audio & Creative Tech", "icon": "🎵", "desc": "Real-time DAW MIDI inference engines, algorithmic hardgroove techno, headless Pure Data DSP, and video REPLs.", "order": 4}, "sim_games": {"id": "sim_games", "name": "Simulations, AI & Games", "icon": "🕹️", "desc": "Live desktop arthropods, insect neuro-simulations, reinforcement learning agents writing haiku, and custom 3D shaders.", "order": 5}, "web_runtime": {"id": "web_runtime", "name": "Web & Novel Runtimes", "icon": "🌐", "desc": "Go executing like PHP with Fiber templating, native ESM Single File Component compilers, and mobile TUI ports.", "order": 6}}, "repos": [{"name": "otto", "description": "otto: The Zero-Filler English Automation Shell & Systems Language (PolyForm Noncommercial 1.0.0)", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/otto", "homepage": "https://xyzzyapps.github.io/otto/", "githubPage": "https://xyzzyapps.github.io/otto/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-11-05T09:32:24Z", "updatedAt": "2026-11-05T10:06:26Z", "tags": ["C", "compiler"], "featured": true}, {"name": "tick", "description": "Tick: A strict, zero-filler synthesis of Smalltalk pure message passing and Tcl command tokens with Protothreads coroutines and WebAssembly", "category": "compilers", "language": "C", "stars": 1, "url": "https://github.com/xyzzyapps/tick", "homepage": "https://xyzzyapps.github.io/tick/", "githubPage": "https://xyzzyapps.github.io/tick/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-11-04T20:51:44Z", "updatedAt": "2026-11-05T09:17:57Z", "tags": ["C", "compiler", "popular"], "featured": true}, {"name": "preforth", "description": "PreForth: A prefix concatenative programming language with linear bytecode compilation, goto control flow, and bidirectional C ABI FFI bridge", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/preforth", "homepage": "https://xyzzyapps.github.io/preforth/", "githubPage": "https://xyzzyapps.github.io/preforth/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-11-04T21:35:10Z", "updatedAt": "2026-11-04T22:29:46Z", "tags": ["C", "compiler", "concatenative/lisp"], "featured": true}, {"name": "doge-world", "description": "Studio Ghibli & Ni no Kuni style Three.js custom shaders with animated Doge and pleasant meadow wind", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/doge-world", "homepage": "https://xyzzyapps.github.io/doge-world/", "githubPage": "https://xyzzyapps.github.io/doge-world/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-11-03T16:40:52Z", "updatedAt": "2026-11-04T00:34:33Z", "tags": ["JavaScript", "graphics"], "featured": true}, {"name": "batminton", "description": "A Famicom badminton match. You versus the computer. First to 11 points.", "category": "sim_games", "language": "Dart", "stars": 0, "url": "https://github.com/xyzzyapps/batminton", "homepage": "https://xyzzyapps.github.io/batminton/", "githubPage": "https://xyzzyapps.github.io/batminton/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-11-01T03:14:49Z", "updatedAt": "2026-11-01T09:19:49Z", "tags": ["Dart"], "featured": false}, {"name": "raptor", "description": "A Perl5 subset of Raku in Golang over Moar-vm in go", "category": "compilers", "language": "Go", "stars": 8, "url": "https://github.com/xyzzyapps/raptor", "homepage": "https://xyzzyapps.github.io/raptor/", "githubPage": "https://xyzzyapps.github.io/raptor/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-08-13T19:54:40Z", "updatedAt": "2026-10-29T10:23:54Z", "tags": ["Go", "compiler", "popular"], "featured": true}, {"name": "spear", "description": "Spear - A papercut hoplite duel for X Player Cards", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/spear", "homepage": "https://xyzzyapps.github.io/spear/", "githubPage": "https://xyzzyapps.github.io/spear/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-10-22T06:01:08Z", "updatedAt": "2026-10-22T06:56:17Z", "tags": ["JavaScript"], "featured": false}, {"name": "useless-box", "description": "A Three.js useless box for X Player Cards", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/useless-box", "homepage": "https://xyzzyapps.github.io/useless-box/", "githubPage": "https://xyzzyapps.github.io/useless-box/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-10-19T20:29:31Z", "updatedAt": "2026-10-19T22:43:25Z", "tags": ["JavaScript", "graphics"], "featured": false}, {"name": "enx", "description": "Strip English prose from mixed English and code, for Ruby, Perl and C", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/enx", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-19T17:36:17Z", "updatedAt": "2026-10-19T17:36:30Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "fftechno", "description": "Hardgroove techno synthesized entirely with ffmpeg + an ASCII/BW VapourSynth video (PolyForm Noncommercial).", "category": "audio_video", "language": "Python", "stars": 5, "url": "https://github.com/xyzzyapps/fftechno", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-10T17:53:19Z", "updatedAt": "2026-10-26T05:48:10Z", "tags": ["Python", "audio", "popular"], "featured": true}, {"name": "flatvc", "description": "Key-Value Version Control System in Go — A simplified, human-friendly CLI version control system storing commits as immutable key-value trees.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/flatvc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-15T00:00:28Z", "updatedAt": "2026-10-15T00:02:01Z", "tags": ["Go"], "featured": false}, {"name": "marionette", "description": "Structured Code Annotation Indexing & Query System — Parse, index, and query inline code annotations and structural metadata across large codebases.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/marionette", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-14T21:45:55Z", "updatedAt": "2026-10-14T22:28:34Z", "tags": ["Go"], "featured": false}, {"name": "pdp", "description": "Headless dataflow core, forked and modernized from Pure Data (Pd) for embedded audio synthesis and headless DSP routing.", "category": "audio_video", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/pdp", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-10T00:04:41Z", "updatedAt": "2026-10-10T00:08:39Z", "tags": ["C"], "featured": false}, {"name": "endless_dub", "description": "Generative dub techno in the browser. PolyForm Noncommercial 1.0.0.", "category": "audio_video", "language": "JavaScript", "stars": 1, "url": "https://github.com/xyzzyapps/endless_dub", "homepage": "https://xyzzyapps.github.io/endless_dub/", "githubPage": "https://xyzzyapps.github.io/endless_dub/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-09-23T22:08:19Z", "updatedAt": "2026-10-09T22:57:44Z", "tags": ["JavaScript", "audio", "popular"], "featured": true}, {"name": "slopcore-factory", "description": "Headless lyrics + storyboard -> HyperFrames video factory (blueprint, lipsync planning, animation scenes).", "category": "audio_video", "language": "Python", "stars": 1, "url": "https://github.com/xyzzyapps/slopcore-factory", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-04T20:55:15Z", "updatedAt": "2026-10-14T09:44:24Z", "tags": ["Python", "popular"], "featured": false}, {"name": "ping-pong", "description": "A clean, lightweight retro table-tennis ping pong game in pure HTML5 and Canvas.", "category": "sim_games", "language": "HTML", "stars": 0, "url": "https://github.com/xyzzyapps/ping-pong", "homepage": "https://xyzzyapps.github.io/ping-pong/", "githubPage": "https://xyzzyapps.github.io/ping-pong/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-10-08T20:13:19Z", "updatedAt": "2026-10-08T20:25:09Z", "tags": ["HTML"], "featured": false}, {"name": "sedit", "description": "A bottom-up source editor where the first line sits at the bottom and lines stack upward, matching natural growth direction.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/sedit", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-08T13:07:43Z", "updatedAt": "2026-10-08T13:18:02Z", "tags": ["Go"], "featured": false}, {"name": "paren", "description": "English as a harness scripting language", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/paren", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-06T18:32:39Z", "updatedAt": "2026-10-06T18:56:45Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "duke", "description": "DUKE - the gunman text editor: a Go/Ebitengine editor where a sprite walks the buffer and you delete with a katana, shotgun or rocket", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/duke", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-10-01T03:32:45Z", "updatedAt": "2026-10-02T12:03:24Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "tangly", "description": "An eight-legged interactive creature that lives on your desktop — walks where you click, makes quiet noises, and can be live-patched via REPL.", "category": "sim_games", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/tangly", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-20T21:41:09Z", "updatedAt": "2026-10-01T00:12:34Z", "tags": ["Go"], "featured": true}, {"name": "go2cpp", "description": "Go to C++ transpiler", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/go2cpp", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-30T17:27:35Z", "updatedAt": "2026-09-30T17:34:29Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "frames", "description": "Porting Minsky's frames to C++ to act as a base for Agent Supervision", "category": "sim_games", "language": "C++", "stars": 0, "url": "https://github.com/xyzzyapps/frames", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-30T15:20:37Z", "updatedAt": "2026-09-30T15:20:59Z", "tags": ["C++"], "featured": false}, {"name": "SP", "description": "SP — minimum video editor REPL: sexpistol s-expressions over OpenTimelineIO and FFmpeg (PolyForm Noncommercial)", "category": "audio_video", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/SP", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-30T14:46:55Z", "updatedAt": "2026-09-30T14:57:21Z", "tags": ["Python", "tui/cli"], "featured": false}, {"name": "shdr", "description": "A human-friendly shading language in Python using decorators and plain English syntax to compile into GPU shaders.", "category": "audio_video", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/shdr", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-25T18:40:02Z", "updatedAt": "2026-09-25T18:41:01Z", "tags": ["Python"], "featured": false}, {"name": "zapota", "description": "Zig-built C library demo suite: Windows, Linux, macOS, WASI, Android, Raspberry Pi", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/zapota", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-20T15:48:06Z", "updatedAt": "2026-09-24T03:48:47Z", "tags": ["C"], "featured": false}, {"name": "arli", "description": " arli Arity-driven Lisp is a Forth-like Lisp dialect that eliminates parentheses through arity-driven parsing ", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/arli", "homepage": "https://xyzzyapps.github.io/arli/", "githubPage": "https://xyzzyapps.github.io/arli/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-07-28T07:42:36Z", "updatedAt": "2026-09-24T01:37:54Z", "tags": ["Go", "compiler", "concatenative/lisp"], "featured": true}, {"name": "genc", "description": "C++-style templates for C (genny-style codegen)", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/genc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-20T12:06:30Z", "updatedAt": "2026-09-20T12:06:38Z", "tags": ["Go"], "featured": false}, {"name": "canvasterm", "description": "Full-viewport canvas terminal apps using xterm sequences (vendored xwterm)", "category": "audio_video", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/canvasterm", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-19T20:15:05Z", "updatedAt": "2026-09-19T20:45:28Z", "tags": ["JavaScript", "tui/cli"], "featured": false}, {"name": "promptpatch", "description": "Implement # TODO: functions and # @ai annotations via tree-sitter and an OpenAI-compatible LLM", "category": "literate", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/promptpatch", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-18T22:54:57Z", "updatedAt": "2026-09-18T22:55:09Z", "tags": ["Python", "literate-code"], "featured": false}, {"name": "goweb", "description": "Noweb-style literate programming for GitHub Flavored Markdown", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/goweb", "homepage": "https://xyzzyapps.github.io/goweb/", "githubPage": "https://xyzzyapps.github.io/goweb/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-08-15T05:00:35Z", "updatedAt": "2026-09-18T22:18:27Z", "tags": ["Go", "literate-code"], "featured": true}, {"name": "tornedo", "description": "Cyclone-like memory-safe systems programming language", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/tornedo", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:51:07Z", "updatedAt": "2026-09-13T16:49:31Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "faiku", "description": "MaleCNS mushroom-body RL that writes Japanese and English haiku as a fly font.", "category": "sim_games", "language": "Python", "stars": 1, "url": "https://github.com/xyzzyapps/faiku", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-11T08:58:25Z", "updatedAt": "2026-09-14T13:49:43Z", "tags": ["Python", "simulation", "popular"], "featured": false}, {"name": "fly-lab", "description": "Fly Lab: simulated fly motor circuits and a trainable dark ambient readout for Ableton Live. Independent project.", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/fly-lab", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": true, "isArchived": false, "createdAt": "2026-09-10T23:22:13Z", "updatedAt": "2026-09-10T23:22:13Z", "tags": ["JavaScript", "simulation"], "featured": false}, {"name": "holmsy", "description": "A fruit fly on your desktop.", "category": "sim_games", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/holmsy", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-10T21:22:16Z", "updatedAt": "2026-09-10T21:31:04Z", "tags": ["Python", "simulation"], "featured": false}, {"name": "readable_maths", "description": "Translate maths to easy to read methaphors and python code", "category": "literate", "language": "HTML", "stars": 0, "url": "https://github.com/xyzzyapps/readable_maths", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-08T20:28:19Z", "updatedAt": "2026-09-08T20:30:53Z", "tags": ["HTML", "literate-code"], "featured": false}, {"name": "esc", "description": "esc — an English-like programming language transpiled 1:1 to 20 target languages, with round-trip importers (esc as a verbalisable pivot)", "category": "compilers", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/esc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-08T19:50:08Z", "updatedAt": "2026-09-08T19:52:58Z", "tags": ["TypeScript", "compiler"], "featured": false}, {"name": "icicle", "description": "Terminal icicle of one call run plus Whyline, from a tree-sitter source scan.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/icicle", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-04T20:08:03Z", "updatedAt": "2026-09-07T21:56:20Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "prose", "description": "An english like scripting language which is more deterministic than SKILL.md", "category": "compilers", "language": "JavaScript", "stars": 1, "url": "https://github.com/xyzzyapps/prose", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-27T12:17:20Z", "updatedAt": "2026-09-07T15:23:05Z", "tags": ["JavaScript", "compiler", "popular"], "featured": false}, {"name": "weft", "description": "Write in the order you explain. Compile in the order it depends.", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/weft", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-06T23:23:38Z", "updatedAt": "2026-09-06T23:29:27Z", "tags": ["Go", "literate-code"], "featured": true}, {"name": "pcl", "description": "PCL —  prompt command language ", "category": "compilers", "language": "Go", "stars": 1, "url": "https://github.com/xyzzyapps/pcl", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T15:21:29Z", "updatedAt": "2026-09-05T22:00:02Z", "tags": ["Go", "compiler", "popular"], "featured": false}, {"name": "rift", "description": "Readable protocol/impl syntax that transpiles to production Rust", "category": "compilers", "language": "Rust", "stars": 0, "url": "https://github.com/xyzzyapps/rift", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-05T15:09:46Z", "updatedAt": "2026-09-05T15:09:55Z", "tags": ["Rust", "compiler"], "featured": false}, {"name": "syncarlo", "description": "SynCarlo: search the docs, read the English, roll for the program. Monte Carlo program synthesis (Lisp IR → Python).", "category": "literate", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/syncarlo", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-04T19:14:57Z", "updatedAt": "2026-09-04T19:18:15Z", "tags": ["Python", "concatenative/lisp", "literate-code"], "featured": false}, {"name": "CapsuleC", "description": "A C dialect introducing leaf and extrinsic functions to make testing easy", "category": "compilers", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/CapsuleC", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-04T15:06:26Z", "updatedAt": "2026-09-04T15:11:05Z", "tags": ["Python", "compiler"], "featured": false}, {"name": "tccd", "description": "A new dialect of C inspired by betterC", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/tccd", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-04T14:42:14Z", "updatedAt": "2026-09-04T14:49:28Z", "tags": ["C", "compiler"], "featured": false}, {"name": "c2eng", "description": "DECSS: Descriptive English for C Statements and Subroutines — translates C source code into readable descriptive English prose.", "category": "literate", "language": "Perl", "stars": 0, "url": "https://github.com/xyzzyapps/c2eng", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-04T11:53:54Z", "updatedAt": "2026-09-04T11:54:28Z", "tags": ["Perl", "literate-code"], "featured": false}, {"name": "contin", "description": "CPS-native language with a tiny kernel and Go FFI libraries", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/contin", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-24T23:11:06Z", "updatedAt": "2026-09-03T18:43:52Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "cha-yen", "description": "Bubble Tea on Android — bringing Charm's Bubble Tea TUI architecture and Elm-style state modeling to mobile terminal environments.", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/cha-yen", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-09-03T14:36:57Z", "updatedAt": "2026-09-03T14:38:48Z", "tags": ["Go"], "featured": false}, {"name": "gohp", "description": "gohp: Go code that runs like PHP, served by Fiber. Full Go semantics, PHP-style templating, compile-on-request.", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/gohp", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-26T21:05:58Z", "updatedAt": "2026-08-27T20:20:44Z", "tags": ["Go"], "featured": false}, {"name": "dag", "description": "dag.py — a minimal dependency-ordered DAG evaluation engine", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/dag", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-27T08:44:33Z", "updatedAt": "2026-08-27T18:05:43Z", "tags": ["Python"], "featured": false}, {"name": "fragment", "description": "fragment: a noweb-style literate programming wrapper (tangle + run + pipes + conditionals)", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/fragment", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-26T10:14:18Z", "updatedAt": "2026-08-26T19:02:55Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "cua", "description": "A coroutine only lua prototype", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/cua", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-26T08:18:03Z", "updatedAt": "2026-08-26T08:23:01Z", "tags": ["C", "compiler"], "featured": false}, {"name": "goc", "description": "C subset compiler targeting Go Plan 9 assembly", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/goc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-25T01:21:11Z", "updatedAt": "2026-08-25T06:54:40Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "mc", "description": "Multiple Dispatch Compiler for C — a transpiler adding Julia-style multiple dispatch to C, inspired by Objective-C's runtime model.", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/mc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:49:11Z", "updatedAt": "2026-08-21T16:49:38Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "olibc", "description": "Object-oriented C wrapper for libc: every libc function is a method pointer in a struct.", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/olibc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:48:09Z", "updatedAt": "2026-08-21T16:57:26Z", "tags": ["C"], "featured": false}, {"name": "oolibc", "description": "Object-oriented libc wrapper in C (Go-style)", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/oolibc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:46:27Z", "updatedAt": "2026-08-21T16:46:38Z", "tags": ["C"], "featured": false}, {"name": "oc", "description": "Oc — message syntax for C (Go transpiler)", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/oc", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:45:13Z", "updatedAt": "2026-08-21T16:53:59Z", "tags": ["C", "compiler"], "featured": false}, {"name": "linen", "description": "Literate programming which weaves by line number labels", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/linen", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-20T22:47:06Z", "updatedAt": "2026-08-20T22:56:20Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "bubbletea", "description": "A powerful little TUI framework 🏗", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/bubbletea", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": true, "isArchived": false, "createdAt": "2026-08-18T18:50:50Z", "updatedAt": "2026-08-18T18:50:50Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "docco-md", "description": "Docco-style markdown documentation generator (prose and code side by side)", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/docco-md", "homepage": "https://xyzzyapps.github.io/docco-md/", "githubPage": "https://xyzzyapps.github.io/docco-md/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-08-14T13:38:22Z", "updatedAt": "2026-08-14T14:30:39Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "kdl-lisp", "description": "A Lisp dialect whose source syntax is KDL", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/kdl-lisp", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:28:17Z", "updatedAt": "2026-08-14T12:28:56Z", "tags": ["Go", "compiler", "concatenative/lisp"], "featured": false}, {"name": "occ", "description": "Orthodox C++ Checker (occ) — libclang static analyzer for the Orthodox C++ subset", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/occ", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:05:52Z", "updatedAt": "2026-08-14T12:10:04Z", "tags": ["Python"], "featured": false}, {"name": "samre", "description": "Go port of the sam/acme regular expression engine", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/samre", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:01:35Z", "updatedAt": "2026-08-14T12:01:59Z", "tags": ["Go"], "featured": false}, {"name": "diver", "description": "Minimalist Single File Component (SFC) compiler and static site generator for Node.js using native ES Modules.", "category": "web_runtime", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/diver", "homepage": "https://xyzzyapps.github.io/diver/", "githubPage": "https://xyzzyapps.github.io/diver/", "hasGithubPage": true, "isFork": false, "isArchived": false, "createdAt": "2026-08-14T11:53:23Z", "updatedAt": "2026-08-14T11:57:11Z", "tags": ["JavaScript"], "featured": true}, {"name": "easycgi", "description": "CGI script runner in golang", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/easycgi", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-13T23:06:46Z", "updatedAt": "2026-08-13T23:15:02Z", "tags": ["Go"], "featured": false}, {"name": "cordis", "description": "Meta-Framework of Spatiotemporal Composability", "category": "web_runtime", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/cordis", "homepage": "https://deepseek-harness.github.io/deepseek-harness/reference/cordis-primer", "githubPage": null, "hasGithubPage": false, "isFork": true, "isArchived": false, "createdAt": "2026-08-16T15:21:50Z", "updatedAt": "2026-08-16T15:21:50Z", "tags": ["TypeScript"], "featured": false}, {"name": "wish", "description": "Make SSH apps, just like that! 💫", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/wish", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": true, "isArchived": false, "createdAt": "2026-08-18T18:51:48Z", "updatedAt": "2026-08-18T18:51:48Z", "tags": ["Go"], "featured": false}, {"name": "carbide", "description": "Carbide: C-Style Rust Transpiler", "category": "compilers", "language": "Rust", "stars": 0, "url": "https://github.com/xyzzyapps/carbide", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-10T18:12:28Z", "updatedAt": "2026-08-11T09:17:17Z", "tags": ["Rust", "compiler"], "featured": false}, {"name": "drum-linux", "description": "drumLinux — DRM Kiosk Distribution", "category": "systems", "language": "Shell", "stars": 0, "url": "https://github.com/xyzzyapps/drum-linux", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-09T11:11:45Z", "updatedAt": "2026-08-10T18:33:58Z", "tags": ["Shell"], "featured": false}, {"name": "rasm", "description": "Macros on nasm for readable assembly", "category": "systems", "language": "Assembly", "stars": 12, "url": "https://github.com/xyzzyapps/rasm", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-06T12:53:39Z", "updatedAt": "2026-09-26T12:27:25Z", "tags": ["Assembly", "popular"], "featured": true}, {"name": "posixlab", "description": "Cygwin demo app", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/posixlab", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-03T10:53:22Z", "updatedAt": "2026-08-10T18:34:38Z", "tags": ["C"], "featured": false}, {"name": "dmovie", "description": "Vibe debugging", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/dmovie", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-08-02T12:07:30Z", "updatedAt": "2026-08-10T18:34:23Z", "tags": ["Python"], "featured": false}, {"name": "clilang", "description": "Clilang is a TCL-like programming language implemented in Go, specifically designed to be written entirely as command-line arguments without running into shell conflict issues.", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/clilang", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:44:51Z", "updatedAt": "2026-08-10T18:34:12Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "rsh", "description": "rsh readable shell ", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/rsh", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:41:33Z", "updatedAt": "2026-08-10T18:32:30Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "s-ir", "description": "SIR Strict IR is a C-like systems language that is a strict wrapper over LLVM IR.", "category": "compilers", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/s-ir", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:32:42Z", "updatedAt": "2026-08-10T18:32:16Z", "tags": ["Python", "compiler"], "featured": false}, {"name": "waitg", "description": " waitg —  A small, language-portable primitive for \"wait for N keyed events, each carrying a payload, then proceed based on actor model ", "category": "systems", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/waitg", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-07-28T07:31:18Z", "updatedAt": "2026-08-10T18:31:44Z", "tags": ["TypeScript"], "featured": false}, {"name": "cppp", "description": "Cppp is a Go-based token macro expander for C: pattern-matching macros, hygienic expansion, a large stdlib, a small C runtime, then (by default) the system C preprocessor.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/cppp", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2026-07-26T08:56:20Z", "updatedAt": "2026-08-10T18:30:54Z", "tags": ["Go"], "featured": false}, {"name": "Jbd", "description": "With JBD you try to build a MIDI inference engine between two instruments, say guitar and drums and interact with the inference engine from your DAW with the help of MIDI.", "category": "audio_video", "language": "C++", "stars": 9, "url": "https://github.com/xyzzyapps/Jbd", "homepage": "", "githubPage": null, "hasGithubPage": false, "isFork": false, "isArchived": false, "createdAt": "2023-03-24T21:27:58Z", "updatedAt": "2026-07-28T11:38:28Z", "tags": ["C++", "audio", "popular"], "featured": true}]};

let state = {
  data: INITIAL_DATA,
  searchQuery: '',
  category: 'all',
  language: 'all',
  sortBy: 'featured',
  viewMode: 'grouped', // 'grouped' (default) or 'flat'
  onlyPages: false,
  selectedProject: null
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  loadDataAndRender();
});

function initTheme() {
  const savedTheme = localStorage.getItem('xyzzy_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('xyzzy_theme', next);
    });
  }
}

async function loadDataAndRender() {
  try {
    if (window.location.protocol.startsWith('http')) {
      const res = await fetch('projects.json');
      if (res.ok) {
        state.data = await res.json();
      }
    }
  } catch (e) {
    console.warn('Fallback to embedded dataset:', e);
  }

  parseUrlParams();
  updateCategoryCounts();
  render();
}

function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace('#', '');

  if (params.has('q')) {
    state.searchQuery = params.get('q');
    const input = document.getElementById('searchInput');
    if (input) input.value = state.searchQuery;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = 'block';
  }

  if (params.has('pages') && params.get('pages') === '1') {
    state.onlyPages = true;
    state.category = 'pages';
  }

  if (params.has('view')) {
    state.viewMode = params.get('view') === 'flat' ? 'flat' : 'grouped';
  }

  if (params.has('category')) {
    state.category = params.get('category');
  } else if (hash && ['compilers', 'literate', 'systems', 'audio_video', 'sim_games', 'web_runtime', 'pages', 'featured'].includes(hash)) {
    state.category = hash;
  }

  if (params.has('lang')) {
    state.language = params.get('lang');
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = state.language;
  }

  updateTabUi();
}

function updateTabUi() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.category === state.category) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });

  const viewGroupedBtn = document.getElementById('viewModeGrouped');
  const viewFlatBtn = document.getElementById('viewModeFlat');
  if (viewGroupedBtn && viewFlatBtn) {
    viewGroupedBtn.classList.toggle('active', state.viewMode === 'grouped');
    viewFlatBtn.classList.toggle('active', state.viewMode === 'flat');
  }
}

function initEventListeners() {
  // Search Input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      render();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearSearchBtn.style.display = 'none';
      render();
    });
  }

  // Category Tabs
  const catTabs = document.getElementById('categoryTabs');
  if (catTabs) {
    catTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab-btn');
      if (!tab) return;
      const cat = tab.dataset.category;
      
      if (cat === 'pages') {
        state.onlyPages = !state.onlyPages;
        state.category = state.onlyPages ? 'pages' : 'all';
      } else {
        state.onlyPages = false;
        state.category = cat;
      }
      
      updateTabUi();
      render();
    });
  }

  // Language Select
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      state.language = e.target.value;
      render();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });
  }

  // View Mode toggles
  const viewGroupedBtn = document.getElementById('viewModeGrouped');
  const viewFlatBtn = document.getElementById('viewModeFlat');
  if (viewGroupedBtn) {
    viewGroupedBtn.addEventListener('click', () => {
      state.viewMode = 'grouped';
      updateTabUi();
      render();
    });
  }
  if (viewFlatBtn) {
    viewFlatBtn.addEventListener('click', () => {
      state.viewMode = 'flat';
      updateTabUi();
      render();
    });
  }

  // Modal Close
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  if (modalClose && modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Reset Filters button
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }
}

function updateCategoryCounts() {
  const repos = state.data.repos || [];
  
  const counts = {
    all: repos.length,
    featured: repos.filter(r => r.featured).length,
    compilers: repos.filter(r => r.category === 'compilers').length,
    literate: repos.filter(r => r.category === 'literate').length,
    systems: repos.filter(r => r.category === 'systems').length,
    audio_video: repos.filter(r => r.category === 'audio_video').length,
    sim_games: repos.filter(r => r.category === 'sim_games').length,
    web_runtime: repos.filter(r => r.category === 'web_runtime').length,
    pages: repos.filter(r => r.hasGithubPage).length
  };

  const setIfExists = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setIfExists('countAll', counts.all);
  setIfExists('countFeatured', counts.featured);
  setIfExists('countCompilers', counts.compilers);
  setIfExists('countLiterate', counts.literate);
  setIfExists('countSystems', counts.systems);
  setIfExists('countAudio', counts.audio_video);
  setIfExists('countGames', counts.sim_games);
  setIfExists('countWeb', counts.web_runtime);
  setIfExists('countPages', counts.pages);

  // Top metric counters
  setIfExists('statRepoCount', repos.length);
  const uniqueLangs = new Set(repos.map(r => r.language).filter(Boolean));
  setIfExists('statLangCount', uniqueLangs.size);
  setIfExists('statPagesCount', counts.pages);
}

function getFilteredRepos() {
  let repos = [...(state.data.repos || [])];

  // GitHub Pages only filter
  if (state.category === 'pages' || state.onlyPages) {
    repos = repos.filter(r => r.hasGithubPage);
  } else if (state.category === 'featured') {
    repos = repos.filter(r => r.featured);
  } else if (state.category !== 'all') {
    repos = repos.filter(r => r.category === state.category);
  }

  // Language filter
  if (state.language !== 'all') {
    repos = repos.filter(r => r.language.toLowerCase() === state.language.toLowerCase());
  }

  // Search Query filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    repos = repos.filter(r => {
      const nameMatch = r.name.toLowerCase().includes(q);
      const descMatch = (r.description || '').toLowerCase().includes(q);
      const tagMatch = (r.tags || []).some(t => t.toLowerCase().includes(q));
      const langMatch = (r.language || '').toLowerCase().includes(q);
      return nameMatch || descMatch || tagMatch || langMatch;
    });
  }

  // Sort
  if (state.sortBy === 'stars') {
    repos.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  } else if (state.sortBy === 'recent') {
    repos.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
  } else if (state.sortBy === 'name') {
    repos.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Pages & Featured first, then stars
    repos.sort((a, b) => {
      if (a.hasGithubPage && !b.hasGithubPage) return -1;
      if (!a.hasGithubPage && b.hasGithubPage) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.stars || 0) - (a.stars || 0);
    });
  }

  return repos;
}

function render() {
  const container = document.getElementById('projectsContainer');
  const emptyState = document.getElementById('emptyState');
  const visibleCountEl = document.getElementById('visibleCount');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!container) return;

  const filtered = getFilteredRepos();

  if (visibleCountEl) {
    visibleCountEl.textContent = filtered.length;
  }

  const hasActiveFilters = state.category !== 'all' || state.language !== 'all' || state.searchQuery.length > 0 || state.onlyPages;
  if (resetBtn) {
    resetBtn.style.display = hasActiveFilters ? 'inline' : 'none';
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // Grouped by Category Mode (Default)
  if (state.viewMode === 'grouped' && state.category === 'all' && !state.onlyPages) {
    renderGroupedCategories(container, filtered);
  } else {
    renderFlatGrid(container, filtered);
  }
}

function renderGroupedCategories(container, repos) {
  const categories = state.data.categories;
  const catKeys = Object.keys(categories).sort((a, b) => (categories[a].order || 99) - (categories[b].order || 99));

  let html = '';

  for (const catKey of catKeys) {
    const cat = categories[catKey];
    const catRepos = repos.filter(r => r.category === catKey);

    if (catRepos.length === 0) continue;

    const pagesInCat = catRepos.filter(r => r.hasGithubPage).length;
    const numPrefix = String(cat.order || '0').padStart(2, '0');

    html += `
      <section class="category-block" id="category-${catKey}">
        <div class="category-header">
          <div class="category-title-wrap">
            <span class="category-num">// [${numPrefix}]</span>
            <h2 class="category-title">${escapeHtml(cat.name)}</h2>
            <div class="category-desc">${escapeHtml(cat.desc)}</div>
          </div>
          <div class="category-counts">
            <span class="count-pill">[${catRepos.length} ENTRIES]</span>
            ${pagesInCat > 0 ? `<span class="count-pill pages">[● ${pagesInCat} LIVE PAGES]</span>` : ''}
          </div>
        </div>

        <div class="projects-grid">
          ${catRepos.map(repo => createCardHtml(repo)).join('')}
        </div>
      </section>
    `;
  }

  container.innerHTML = html;
}

function renderFlatGrid(container, repos) {
  let bannerHtml = '';
  
  if (state.category === 'pages' || state.onlyPages) {
    bannerHtml = `
      <div class="flat-banner">
        <h3>// FILTER: REPOSITORIES WITH HOSTED GITHUB PAGES</h3>
        <p>Displaying 14 projects with live browser web applications, compilers, and documentation hosted at xyzzyapps.github.io</p>
      </div>
    `;
  } else if (state.category !== 'all' && state.data.categories[state.category]) {
    const cat = state.data.categories[state.category];
    bannerHtml = `
      <div class="flat-banner">
        <h3>// FILTER: ${escapeHtml(cat.name).toUpperCase()}</h3>
        <p>${escapeHtml(cat.desc)}</p>
      </div>
    `;
  }

  container.innerHTML = `
    ${bannerHtml}
    <div class="projects-grid">
      ${repos.map(repo => createCardHtml(repo)).join('')}
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createCardHtml(repo) {
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);
  const spotlightBadge = repo.featured ? '<span class="spotlight-pill">SPOTLIGHT</span>' : '';
  const starBadge = repo.stars > 0 ? `<span class="star-count">★${repo.stars}</span>` : '';
  const pageBadge = hasPage ? `
    <a href="${escapeHtml(repo.githubPage)}" target="_blank" rel="noopener noreferrer" class="page-badge-link" title="Open hosted GitHub Page">
      LIVE PAGE ↗
    </a>
  ` : '';

  const tagsHtml = (repo.tags || []).map(t => 
    `<span class="tag-code" onclick="window.filterByTag('${escapeHtml(t)}')">${escapeHtml(t)}</span>`
  ).join('');

  const cloneCmd = `git clone ${repo.url}.git`;

  return `
    <article class="project-card ${hasPage ? 'has-page' : ''}" data-name="${escapeHtml(repo.name)}">
      <div class="card-header-line">
        <div class="project-name-group">
          <span class="project-name">
            <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a>
          </span>
          ${pageBadge}
          ${spotlightBadge}
        </div>
        <div class="card-meta-line">
          <span class="lang-tag">${escapeHtml(repo.language)}</span>
          ${starBadge}
        </div>
      </div>

      <p class="project-desc">${escapeHtml(repo.description)}</p>

      <div class="project-tags">${tagsHtml}</div>

      <div class="card-actions-strip">
        ${hasPage ? `
          <a href="${escapeHtml(repo.githubPage)}" target="_blank" rel="noopener noreferrer" class="action-link-page">
            [OPEN PAGE ↗]
          </a>
        ` : repo.homepage ? `
          <a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener noreferrer" class="action-link-page">
            [LIVE DEMO ↗]
          </a>
        ` : ''}
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="action-link">
          [CODE]
        </a>
        <button class="action-link" onclick="window.openDetailModal('${escapeHtml(repo.name)}')">
          [DETAILS]
        </button>
        <button class="action-btn-copy" onclick="window.copyToClipboard('${cloneCmd}')">
          [CLONE]
        </button>
      </div>
    </article>
  `;
}

window.filterByTag = function(tag) {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.value = tag;
    state.searchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
    render();
    const controls = document.getElementById('controls');
    if (controls) controls.scrollIntoView({ behavior: 'smooth' });
  }
};

window.setCategoryFilter = function(cat) {
  state.category = cat;
  state.onlyPages = (cat === 'pages');
  updateTabUi();
  render();
  const controls = document.getElementById('controls');
  if (controls) controls.scrollIntoView({ behavior: 'smooth' });
};

window.resetAllFilters = function() {
  state.searchQuery = '';
  state.category = 'all';
  state.language = 'all';
  state.sortBy = 'featured';
  state.onlyPages = false;
  state.viewMode = 'grouped';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = 'all';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  updateTabUi();
  render();
};

window.openDetailModal = function(name) {
  const repo = (state.data.repos || []).find(r => r.name === name);
  if (!repo) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const cloneCmd = `git clone ${repo.url}.git`;
  const created = repo.createdAt ? repo.createdAt.substring(0, 10) : 'N/A';
  const updated = repo.updatedAt ? repo.updatedAt.substring(0, 10) : 'N/A';
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);

  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-row">
        <span class="modal-repo-name">${escapeHtml(repo.name)}</span>
        ${hasPage ? `<a href="${escapeHtml(repo.githubPage)}" target="_blank" rel="noopener noreferrer" class="page-badge-link">LIVE PAGE ↗</a>` : ''}
        ${repo.stars > 0 ? `<span class="star-count">★${repo.stars}</span>` : ''}
      </div>
      <div style="font-size: 0.8rem; color: var(--text-dim);">
        LANGUAGE: ${escapeHtml(repo.language).toUpperCase()} // CATEGORY: ${escapeHtml((state.data.categories[repo.category] || {}).name || repo.category).toUpperCase()}
      </div>
    </div>

    <p class="modal-desc">${escapeHtml(repo.description)}</p>

    <div class="modal-code-box">
      <code>${escapeHtml(cloneCmd)}</code>
      <button class="modal-copy-btn" onclick="window.copyToClipboard('${cloneCmd}')">[COPY]</button>
    </div>

    <div class="modal-details-grid">
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">GitHub Pages URL</span>
        <span class="modal-detail-val">
          ${hasPage ? `<a href="${escapeHtml(repo.githubPage)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green); text-decoration: underline;">${escapeHtml(repo.githubPage)}</a>` : 'NOT CONFIGURED'}
        </span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Repository</span>
        <span class="modal-detail-val">
          <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" style="color: var(--text); text-decoration: underline;">${escapeHtml(repo.url)}</a>
        </span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Created</span>
        <span class="modal-detail-val">${escapeHtml(created)}</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Last Pushed</span>
        <span class="modal-detail-val">${escapeHtml(updated)}</span>
      </div>
    </div>

    <div class="modal-btn-row">
      ${hasPage ? `
        <a href="${escapeHtml(repo.githubPage)}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
          [LAUNCH GITHUB PAGE ↗]
        </a>
      ` : repo.homepage ? `
        <a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
          [OPEN LIVE DEMO ↗]
        </a>
      ` : ''}
      <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="btn-secondary-action">
        [VIEW REPO ON GITHUB ↗]
      </a>
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

window.copyToClipboard = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast();
  });
};

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.add('is-visible');
  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2000);
}
