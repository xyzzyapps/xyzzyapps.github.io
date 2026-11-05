/**
 * Xyzzy Apps — Client Application Engine
 * Interactive filtering, search, categorization, modal preview and clone helpers.
 */

// Embedded dataset fallback
const INITIAL_DATA = {"user": {"login": "xyzzyapps", "name": "Xyzzy Apps", "bio": "Radical programming language design, human-readable computing, literate programming, generative audio, and eccentric desktop simulations.", "avatar": "https://avatars.githubusercontent.com/u/89282585?v=4", "github": "https://github.com/xyzzyapps", "twitter": "https://twitter.com/xyzzyapps", "blog": "https://xyzzyapps.link", "repoCount": 77}, "categories": {"compilers": {"id": "compilers", "name": "Languages & Compilers", "icon": "⚡", "desc": "Novel programming languages, transpilers, bytecode VMs, and radical syntax experiments."}, "literate": {"id": "literate", "name": "Literate & Prose Code", "icon": "📖", "desc": "Literate programming, prose-to-code translation, English DSLs, and source weaving."}, "systems": {"id": "systems", "name": "Systems & DevTools", "icon": "🛠️", "desc": "Assembly macros, C/C++ static analyzers, version control, and unconventional text editors."}, "audio_video": {"id": "audio_video", "name": "Audio & Creative Tech", "icon": "🎵", "desc": "Algorithmic techno, DAW MIDI inference engines, video REPLs, and GPU shaders."}, "sim_games": {"id": "sim_games", "name": "Simulations & Games", "icon": "🕹️", "desc": "Desktop virtual creatures, insect neuro-simulations, 3D shaders, and retro games."}, "web_runtime": {"id": "web_runtime", "name": "Web & Runtimes", "icon": "🌐", "desc": "Dynamic runtimes, CGI servers, single-file component compilers, and mobile TUIs."}}, "repos": [{"name": "otto", "description": "otto: The Zero-Filler English Automation Shell & Systems Language (PolyForm Noncommercial 1.0.0)", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/otto", "homepage": "https://xyzzyapps.github.io/otto/", "isFork": false, "isArchived": false, "createdAt": "2026-11-05T09:32:24Z", "updatedAt": "2026-11-05T10:06:26Z", "tags": ["C", "compiler"], "featured": true}, {"name": "tick", "description": "Tick: A strict, zero-filler synthesis of Smalltalk pure message passing and Tcl command tokens with Protothreads coroutines and WebAssembly", "category": "compilers", "language": "C", "stars": 1, "url": "https://github.com/xyzzyapps/tick", "homepage": "https://xyzzyapps.github.io/tick/", "isFork": false, "isArchived": false, "createdAt": "2026-11-04T20:51:44Z", "updatedAt": "2026-11-05T09:17:57Z", "tags": ["C", "compiler", "popular"], "featured": true}, {"name": "preforth", "description": "PreForth: A prefix concatenative programming language with linear bytecode compilation, goto control flow, and bidirectional C ABI FFI bridge", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/preforth", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-11-04T21:35:10Z", "updatedAt": "2026-11-04T22:29:46Z", "tags": ["C", "compiler", "concatenative/lisp"], "featured": false}, {"name": "doge-world", "description": "Studio Ghibli & Ni no Kuni style Three.js custom shaders with animated Doge and pleasant meadow wind", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/doge-world", "homepage": "https://xyzzyapps.github.io/doge-world/", "isFork": false, "isArchived": false, "createdAt": "2026-11-03T16:40:52Z", "updatedAt": "2026-11-04T00:34:33Z", "tags": ["JavaScript", "graphics"], "featured": true}, {"name": "batminton", "description": "A Famicom badminton match. You versus the computer. First to 11 points.", "category": "sim_games", "language": "Dart", "stars": 0, "url": "https://github.com/xyzzyapps/batminton", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-11-01T03:14:49Z", "updatedAt": "2026-11-01T09:19:49Z", "tags": ["Dart"], "featured": false}, {"name": "raptor", "description": "A Perl5 subset of Raku in Golang over Moar-vm in go", "category": "compilers", "language": "Go", "stars": 8, "url": "https://github.com/xyzzyapps/raptor", "homepage": "https://xyzzyapps.github.io/raptor/", "isFork": false, "isArchived": false, "createdAt": "2026-08-13T19:54:40Z", "updatedAt": "2026-10-29T10:23:54Z", "tags": ["Go", "compiler", "popular"], "featured": true}, {"name": "spear", "description": "Spear - A papercut hoplite duel for X Player Cards", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/spear", "homepage": "https://xyzzyapps.github.io/spear/", "isFork": false, "isArchived": false, "createdAt": "2026-10-22T06:01:08Z", "updatedAt": "2026-10-22T06:56:17Z", "tags": ["JavaScript"], "featured": false}, {"name": "useless-box", "description": "A Three.js useless box for X Player Cards", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/useless-box", "homepage": "https://xyzzyapps.github.io/useless-box/", "isFork": false, "isArchived": false, "createdAt": "2026-10-19T20:29:31Z", "updatedAt": "2026-10-19T22:43:25Z", "tags": ["JavaScript", "graphics"], "featured": false}, {"name": "enx", "description": "Strip English prose from mixed English and code, for Ruby, Perl and C", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/enx", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-19T17:36:17Z", "updatedAt": "2026-10-19T17:36:30Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "fftechno", "description": "Hardgroove techno synthesized entirely with ffmpeg + an ASCII/BW VapourSynth video (PolyForm Noncommercial).", "category": "audio_video", "language": "Python", "stars": 5, "url": "https://github.com/xyzzyapps/fftechno", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-10T17:53:19Z", "updatedAt": "2026-10-26T05:48:10Z", "tags": ["Python", "audio", "popular"], "featured": true}, {"name": "flatvc", "description": "Key-Value Version Control System in Go — A simplified, human-friendly CLI version control system storing commits as immutable key-value trees.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/flatvc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-15T00:00:28Z", "updatedAt": "2026-10-15T00:02:01Z", "tags": ["Go"], "featured": false}, {"name": "marionette", "description": "Structured Code Annotation Indexing & Query System — Parse, index, and query inline code annotations and structural metadata across large codebases.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/marionette", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-14T21:45:55Z", "updatedAt": "2026-10-14T22:28:34Z", "tags": ["Go"], "featured": false}, {"name": "pdp", "description": "Headless dataflow core, forked and modernized from Pure Data (Pd) for embedded audio synthesis and headless DSP routing.", "category": "audio_video", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/pdp", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-10T00:04:41Z", "updatedAt": "2026-10-10T00:08:39Z", "tags": ["C"], "featured": false}, {"name": "endless_dub", "description": "Generative dub techno in the browser. PolyForm Noncommercial 1.0.0.", "category": "audio_video", "language": "JavaScript", "stars": 1, "url": "https://github.com/xyzzyapps/endless_dub", "homepage": "https://xyzzyapps.github.io/endless_dub/", "isFork": false, "isArchived": false, "createdAt": "2026-09-23T22:08:19Z", "updatedAt": "2026-10-09T22:57:44Z", "tags": ["JavaScript", "audio", "popular"], "featured": true}, {"name": "slopcore-factory", "description": "Headless lyrics + storyboard -> HyperFrames video factory (blueprint, lipsync planning, animation scenes).", "category": "audio_video", "language": "Python", "stars": 1, "url": "https://github.com/xyzzyapps/slopcore-factory", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-04T20:55:15Z", "updatedAt": "2026-10-14T09:44:24Z", "tags": ["Python", "popular"], "featured": false}, {"name": "ping-pong", "description": "A clean, lightweight retro table-tennis ping pong game in pure HTML5 and Canvas.", "category": "sim_games", "language": "HTML", "stars": 0, "url": "https://github.com/xyzzyapps/ping-pong", "homepage": "https://xyzzyapps.github.io/ping-pong/", "isFork": false, "isArchived": false, "createdAt": "2026-10-08T20:13:19Z", "updatedAt": "2026-10-08T20:25:09Z", "tags": ["HTML"], "featured": false}, {"name": "sedit", "description": "A bottom-up source editor where the first line sits at the bottom and lines stack upward, matching natural growth direction.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/sedit", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-08T13:07:43Z", "updatedAt": "2026-10-08T13:18:02Z", "tags": ["Go"], "featured": false}, {"name": "paren", "description": "English as a harness scripting language", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/paren", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-06T18:32:39Z", "updatedAt": "2026-10-06T18:56:45Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "duke", "description": "DUKE - the gunman text editor: a Go/Ebitengine editor where a sprite walks the buffer and you delete with a katana, shotgun or rocket", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/duke", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-10-01T03:32:45Z", "updatedAt": "2026-10-02T12:03:24Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "tangly", "description": "An eight-legged interactive creature that lives on your desktop — walks where you click, makes quiet noises, and can be live-patched via REPL.", "category": "sim_games", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/tangly", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-20T21:41:09Z", "updatedAt": "2026-10-01T00:12:34Z", "tags": ["Go"], "featured": true}, {"name": "go2cpp", "description": "Go to C++ transpiler", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/go2cpp", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-30T17:27:35Z", "updatedAt": "2026-09-30T17:34:29Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "frames", "description": "Porting Minsky's frames to C++ to act as a base for Agent Supervision", "category": "sim_games", "language": "C++", "stars": 0, "url": "https://github.com/xyzzyapps/frames", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-30T15:20:37Z", "updatedAt": "2026-09-30T15:20:59Z", "tags": ["C++"], "featured": false}, {"name": "SP", "description": "SP — minimum video editor REPL: sexpistol s-expressions over OpenTimelineIO and FFmpeg (PolyForm Noncommercial)", "category": "audio_video", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/SP", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-30T14:46:55Z", "updatedAt": "2026-09-30T14:57:21Z", "tags": ["Python", "tui/cli"], "featured": false}, {"name": "shdr", "description": "A human-friendly shading language in Python using decorators and plain English syntax to compile into GPU shaders.", "category": "audio_video", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/shdr", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-25T18:40:02Z", "updatedAt": "2026-09-25T18:41:01Z", "tags": ["Python"], "featured": false}, {"name": "zapota", "description": "Zig-built C library demo suite: Windows, Linux, macOS, WASI, Android, Raspberry Pi", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/zapota", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-20T15:48:06Z", "updatedAt": "2026-09-24T03:48:47Z", "tags": ["C"], "featured": false}, {"name": "arli", "description": " arli Arity-driven Lisp is a Forth-like Lisp dialect that eliminates parentheses through arity-driven parsing ", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/arli", "homepage": "https://xyzzyapps.github.io/arli/tour/", "isFork": false, "isArchived": false, "createdAt": "2026-07-28T07:42:36Z", "updatedAt": "2026-09-24T01:37:54Z", "tags": ["Go", "compiler", "concatenative/lisp"], "featured": true}, {"name": "genc", "description": "C++-style templates for C (genny-style codegen)", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/genc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-20T12:06:30Z", "updatedAt": "2026-09-20T12:06:38Z", "tags": ["Go"], "featured": false}, {"name": "canvasterm", "description": "Full-viewport canvas terminal apps using xterm sequences (vendored xwterm)", "category": "audio_video", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/canvasterm", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-19T20:15:05Z", "updatedAt": "2026-09-19T20:45:28Z", "tags": ["JavaScript", "tui/cli"], "featured": false}, {"name": "promptpatch", "description": "Implement # TODO: functions and # @ai annotations via tree-sitter and an OpenAI-compatible LLM", "category": "literate", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/promptpatch", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-18T22:54:57Z", "updatedAt": "2026-09-18T22:55:09Z", "tags": ["Python", "literate-code"], "featured": false}, {"name": "goweb", "description": "Noweb-style literate programming for GitHub Flavored Markdown", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/goweb", "homepage": "https://xyzzyapps.github.io/goweb/", "isFork": false, "isArchived": false, "createdAt": "2026-08-15T05:00:35Z", "updatedAt": "2026-09-18T22:18:27Z", "tags": ["Go", "literate-code"], "featured": true}, {"name": "tornedo", "description": "Cyclone-like memory-safe systems programming language", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/tornedo", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:51:07Z", "updatedAt": "2026-09-13T16:49:31Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "faiku", "description": "MaleCNS mushroom-body RL that writes Japanese and English haiku as a fly font.", "category": "sim_games", "language": "Python", "stars": 1, "url": "https://github.com/xyzzyapps/faiku", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-11T08:58:25Z", "updatedAt": "2026-09-14T13:49:43Z", "tags": ["Python", "simulation", "popular"], "featured": false}, {"name": "fly-lab", "description": "Fly Lab: simulated fly motor circuits and a trainable dark ambient readout for Ableton Live. Independent project.", "category": "sim_games", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/fly-lab", "homepage": "", "isFork": true, "isArchived": false, "createdAt": "2026-09-10T23:22:13Z", "updatedAt": "2026-09-10T23:22:13Z", "tags": ["JavaScript", "simulation"], "featured": false}, {"name": "holmsy", "description": "A fruit fly on your desktop.", "category": "sim_games", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/holmsy", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-10T21:22:16Z", "updatedAt": "2026-09-10T21:31:04Z", "tags": ["Python", "simulation"], "featured": false}, {"name": "readable_maths", "description": "Translate maths to easy to read methaphors and python code", "category": "literate", "language": "HTML", "stars": 0, "url": "https://github.com/xyzzyapps/readable_maths", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-08T20:28:19Z", "updatedAt": "2026-09-08T20:30:53Z", "tags": ["HTML", "literate-code"], "featured": false}, {"name": "esc", "description": "esc — an English-like programming language transpiled 1:1 to 20 target languages, with round-trip importers (esc as a verbalisable pivot)", "category": "compilers", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/esc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-08T19:50:08Z", "updatedAt": "2026-09-08T19:52:58Z", "tags": ["TypeScript", "compiler"], "featured": false}, {"name": "icicle", "description": "Terminal icicle of one call run plus Whyline, from a tree-sitter source scan.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/icicle", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-04T20:08:03Z", "updatedAt": "2026-09-07T21:56:20Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "prose", "description": "An english like scripting language which is more deterministic than SKILL.md", "category": "compilers", "language": "JavaScript", "stars": 1, "url": "https://github.com/xyzzyapps/prose", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-27T12:17:20Z", "updatedAt": "2026-09-07T15:23:05Z", "tags": ["JavaScript", "compiler", "popular"], "featured": false}, {"name": "weft", "description": "Write in the order you explain. Compile in the order it depends.", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/weft", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-06T23:23:38Z", "updatedAt": "2026-09-06T23:29:27Z", "tags": ["Go", "literate-code"], "featured": true}, {"name": "pcl", "description": "PCL —  prompt command language ", "category": "compilers", "language": "Go", "stars": 1, "url": "https://github.com/xyzzyapps/pcl", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T15:21:29Z", "updatedAt": "2026-09-05T22:00:02Z", "tags": ["Go", "compiler", "popular"], "featured": false}, {"name": "rift", "description": "Readable protocol/impl syntax that transpiles to production Rust", "category": "compilers", "language": "Rust", "stars": 0, "url": "https://github.com/xyzzyapps/rift", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-05T15:09:46Z", "updatedAt": "2026-09-05T15:09:55Z", "tags": ["Rust", "compiler"], "featured": false}, {"name": "syncarlo", "description": "SynCarlo: search the docs, read the English, roll for the program. Monte Carlo program synthesis (Lisp IR → Python).", "category": "literate", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/syncarlo", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-04T19:14:57Z", "updatedAt": "2026-09-04T19:18:15Z", "tags": ["Python", "concatenative/lisp", "literate-code"], "featured": false}, {"name": "CapsuleC", "description": "A C dialect introducing leaf and extrinsic functions to make testing easy", "category": "compilers", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/CapsuleC", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-04T15:06:26Z", "updatedAt": "2026-09-04T15:11:05Z", "tags": ["Python", "compiler"], "featured": false}, {"name": "tccd", "description": "A new dialect of C inspired by betterC", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/tccd", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-04T14:42:14Z", "updatedAt": "2026-09-04T14:49:28Z", "tags": ["C", "compiler"], "featured": false}, {"name": "c2eng", "description": "DECSS: Descriptive English for C Statements and Subroutines — translates C source code into readable descriptive English prose.", "category": "literate", "language": "Perl", "stars": 0, "url": "https://github.com/xyzzyapps/c2eng", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-04T11:53:54Z", "updatedAt": "2026-09-04T11:54:28Z", "tags": ["Perl", "literate-code"], "featured": false}, {"name": "contin", "description": "CPS-native language with a tiny kernel and Go FFI libraries", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/contin", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-24T23:11:06Z", "updatedAt": "2026-09-03T18:43:52Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "cha-yen", "description": "Bubble Tea on Android — bringing Charm's Bubble Tea TUI architecture and Elm-style state modeling to mobile terminal environments.", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/cha-yen", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-09-03T14:36:57Z", "updatedAt": "2026-09-03T14:38:48Z", "tags": ["Go"], "featured": false}, {"name": "gohp", "description": "gohp: Go code that runs like PHP, served by Fiber. Full Go semantics, PHP-style templating, compile-on-request.", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/gohp", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-26T21:05:58Z", "updatedAt": "2026-08-27T20:20:44Z", "tags": ["Go"], "featured": false}, {"name": "dag", "description": "dag.py — a minimal dependency-ordered DAG evaluation engine", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/dag", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-27T08:44:33Z", "updatedAt": "2026-08-27T18:05:43Z", "tags": ["Python"], "featured": false}, {"name": "fragment", "description": "fragment: a noweb-style literate programming wrapper (tangle + run + pipes + conditionals)", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/fragment", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-26T10:14:18Z", "updatedAt": "2026-08-26T19:02:55Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "cua", "description": "A coroutine only lua prototype", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/cua", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-26T08:18:03Z", "updatedAt": "2026-08-26T08:23:01Z", "tags": ["C", "compiler"], "featured": false}, {"name": "goc", "description": "C subset compiler targeting Go Plan 9 assembly", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/goc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-25T01:21:11Z", "updatedAt": "2026-08-25T06:54:40Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "mc", "description": "Multiple Dispatch Compiler for C — a transpiler adding Julia-style multiple dispatch to C, inspired by Objective-C's runtime model.", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/mc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:49:11Z", "updatedAt": "2026-08-21T16:49:38Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "olibc", "description": "Object-oriented C wrapper for libc: every libc function is a method pointer in a struct.", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/olibc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:48:09Z", "updatedAt": "2026-08-21T16:57:26Z", "tags": ["C"], "featured": false}, {"name": "oolibc", "description": "Object-oriented libc wrapper in C (Go-style)", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/oolibc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:46:27Z", "updatedAt": "2026-08-21T16:46:38Z", "tags": ["C"], "featured": false}, {"name": "oc", "description": "Oc — message syntax for C (Go transpiler)", "category": "compilers", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/oc", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-21T16:45:13Z", "updatedAt": "2026-08-21T16:53:59Z", "tags": ["C", "compiler"], "featured": false}, {"name": "linen", "description": "Literate programming which weaves by line number labels", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/linen", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-20T22:47:06Z", "updatedAt": "2026-08-20T22:56:20Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "bubbletea", "description": "A powerful little TUI framework 🏗", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/bubbletea", "homepage": "", "isFork": true, "isArchived": false, "createdAt": "2026-08-18T18:50:50Z", "updatedAt": "2026-08-18T18:50:50Z", "tags": ["Go", "tui/cli"], "featured": false}, {"name": "docco-md", "description": "Docco-style markdown documentation generator (prose and code side by side)", "category": "literate", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/docco-md", "homepage": "https://xyzzyapps.github.io/docco-md/", "isFork": false, "isArchived": false, "createdAt": "2026-08-14T13:38:22Z", "updatedAt": "2026-08-14T14:30:39Z", "tags": ["Go", "literate-code"], "featured": false}, {"name": "kdl-lisp", "description": "A Lisp dialect whose source syntax is KDL", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/kdl-lisp", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:28:17Z", "updatedAt": "2026-08-14T12:28:56Z", "tags": ["Go", "compiler", "concatenative/lisp"], "featured": false}, {"name": "occ", "description": "Orthodox C++ Checker (occ) — libclang static analyzer for the Orthodox C++ subset", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/occ", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:05:52Z", "updatedAt": "2026-08-14T12:10:04Z", "tags": ["Python"], "featured": false}, {"name": "samre", "description": "Go port of the sam/acme regular expression engine", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/samre", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-14T12:01:35Z", "updatedAt": "2026-08-14T12:01:59Z", "tags": ["Go"], "featured": false}, {"name": "diver", "description": "Minimalist Single File Component (SFC) compiler and static site generator for Node.js using native ES Modules.", "category": "web_runtime", "language": "JavaScript", "stars": 0, "url": "https://github.com/xyzzyapps/diver", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-14T11:53:23Z", "updatedAt": "2026-08-14T11:57:11Z", "tags": ["JavaScript"], "featured": false}, {"name": "easycgi", "description": "CGI script runner in golang", "category": "web_runtime", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/easycgi", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-13T23:06:46Z", "updatedAt": "2026-08-13T23:15:02Z", "tags": ["Go"], "featured": false}, {"name": "cordis", "description": "Meta-Framework of Spatiotemporal Composability", "category": "web_runtime", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/cordis", "homepage": "https://deepseek-harness.github.io/deepseek-harness/reference/cordis-primer", "isFork": true, "isArchived": false, "createdAt": "2026-08-16T15:21:50Z", "updatedAt": "2026-08-16T15:21:50Z", "tags": ["TypeScript"], "featured": false}, {"name": "wish", "description": "Make SSH apps, just like that! 💫", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/wish", "homepage": "", "isFork": true, "isArchived": false, "createdAt": "2026-08-18T18:51:48Z", "updatedAt": "2026-08-18T18:51:48Z", "tags": ["Go"], "featured": false}, {"name": "carbide", "description": "Carbide: C-Style Rust Transpiler", "category": "compilers", "language": "Rust", "stars": 0, "url": "https://github.com/xyzzyapps/carbide", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-10T18:12:28Z", "updatedAt": "2026-08-11T09:17:17Z", "tags": ["Rust", "compiler"], "featured": false}, {"name": "drum-linux", "description": "drumLinux — DRM Kiosk Distribution", "category": "systems", "language": "Shell", "stars": 0, "url": "https://github.com/xyzzyapps/drum-linux", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-09T11:11:45Z", "updatedAt": "2026-08-10T18:33:58Z", "tags": ["Shell"], "featured": false}, {"name": "rasm", "description": "Macros on nasm for readable assembly", "category": "systems", "language": "Assembly", "stars": 12, "url": "https://github.com/xyzzyapps/rasm", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-06T12:53:39Z", "updatedAt": "2026-09-26T12:27:25Z", "tags": ["Assembly", "popular"], "featured": true}, {"name": "posixlab", "description": "Cygwin demo app", "category": "systems", "language": "C", "stars": 0, "url": "https://github.com/xyzzyapps/posixlab", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-03T10:53:22Z", "updatedAt": "2026-08-10T18:34:38Z", "tags": ["C"], "featured": false}, {"name": "dmovie", "description": "Vibe debugging", "category": "systems", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/dmovie", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-08-02T12:07:30Z", "updatedAt": "2026-08-10T18:34:23Z", "tags": ["Python"], "featured": false}, {"name": "clilang", "description": "Clilang is a TCL-like programming language implemented in Go, specifically designed to be written entirely as command-line arguments without running into shell conflict issues.", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/clilang", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:44:51Z", "updatedAt": "2026-08-10T18:34:12Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "rsh", "description": "rsh readable shell ", "category": "compilers", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/rsh", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:41:33Z", "updatedAt": "2026-08-10T18:32:30Z", "tags": ["Go", "compiler"], "featured": false}, {"name": "s-ir", "description": "SIR Strict IR is a C-like systems language that is a strict wrapper over LLVM IR.", "category": "compilers", "language": "Python", "stars": 0, "url": "https://github.com/xyzzyapps/s-ir", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-07-28T09:32:42Z", "updatedAt": "2026-08-10T18:32:16Z", "tags": ["Python", "compiler"], "featured": false}, {"name": "waitg", "description": " waitg —  A small, language-portable primitive for \"wait for N keyed events, each carrying a payload, then proceed based on actor model ", "category": "systems", "language": "TypeScript", "stars": 0, "url": "https://github.com/xyzzyapps/waitg", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-07-28T07:31:18Z", "updatedAt": "2026-08-10T18:31:44Z", "tags": ["TypeScript"], "featured": false}, {"name": "cppp", "description": "Cppp is a Go-based token macro expander for C: pattern-matching macros, hygienic expansion, a large stdlib, a small C runtime, then (by default) the system C preprocessor.", "category": "systems", "language": "Go", "stars": 0, "url": "https://github.com/xyzzyapps/cppp", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2026-07-26T08:56:20Z", "updatedAt": "2026-08-10T18:30:54Z", "tags": ["Go"], "featured": false}, {"name": "Jbd", "description": "With JBD you try to build a MIDI inference engine between two instruments, say guitar and drums and interact with the inference engine from your DAW with the help of MIDI.", "category": "audio_video", "language": "C++", "stars": 9, "url": "https://github.com/xyzzyapps/Jbd", "homepage": "", "isFork": false, "isArchived": false, "createdAt": "2023-03-24T21:27:58Z", "updatedAt": "2026-07-28T11:38:28Z", "tags": ["C++", "audio", "popular"], "featured": true}]};

let state = {
  data: INITIAL_DATA,
  searchQuery: '',
  category: 'all',
  language: 'all',
  sortBy: 'featured',
  selectedProject: null
};

// Language color mapping
const LANG_CLASS_MAP = {
  'Go': 'lang-Go',
  'Python': 'lang-Python',
  'C': 'lang-C',
  'JavaScript': 'lang-JavaScript',
  'TypeScript': 'lang-TypeScript',
  'Rust': 'lang-Rust',
  'Assembly': 'lang-Assembly',
  'C++': 'lang-Cpp',
  'Dart': 'lang-Dart',
  'Perl': 'lang-Perl',
  'Shell': 'lang-Shell',
  'HTML': 'lang-HTML'
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
    console.warn('Using embedded dataset fallback:', e);
  }

  parseUrlParams();
  updateCategoryCounts();
  renderProjects();
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

  if (params.has('category')) {
    state.category = params.get('category');
  } else if (hash && ['compilers', 'literate', 'systems', 'audio_video', 'sim_games', 'web_runtime', 'demos', 'featured'].includes(hash)) {
    state.category = hash;
  }

  if (params.has('lang')) {
    state.language = params.get('lang');
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = state.language;
  }

  // Update active tab UI
  updateTabUi();
}

function updateTabUi() {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    if (tab.dataset.category === state.category) {
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    } else {
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }
  });
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
      renderProjects();
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
      renderProjects();
    });
  }

  // Category Tabs
  const catTabs = document.getElementById('categoryTabs');
  if (catTabs) {
    catTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.cat-tab');
      if (!tab) return;
      state.category = tab.dataset.category;
      updateTabUi();
      renderProjects();
    });
  }

  // Language Select
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      state.language = e.target.value;
      renderProjects();
    });
  }

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProjects();
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
    demos: repos.filter(r => r.homepage && r.homepage.length > 0).length
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
  setIfExists('countDemos', counts.demos);

  // Top stat counters
  setIfExists('statRepoCount', repos.length);
  const uniqueLangs = new Set(repos.map(r => r.language).filter(Boolean));
  setIfExists('statLangCount', uniqueLangs.size);
  setIfExists('statDemoCount', counts.demos);
}

function filterAndSortRepos() {
  let repos = [...(state.data.repos || [])];

  // Category filter
  if (state.category === 'featured') {
    repos = repos.filter(r => r.featured);
  } else if (state.category === 'demos') {
    repos = repos.filter(r => r.homepage && r.homepage.length > 0);
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
    // Featured first, then stars
    repos.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.stars || 0) - (a.stars || 0);
    });
  }

  return repos;
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const emptyState = document.getElementById('emptyState');
  const visibleCountEl = document.getElementById('visibleCount');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!grid) return;

  const filtered = filterAndSortRepos();

  if (visibleCountEl) {
    visibleCountEl.textContent = filtered.length;
  }

  // Show/hide reset button based on whether filters are active
  const hasActiveFilters = state.category !== 'all' || state.language !== 'all' || state.searchQuery.length > 0;
  if (resetBtn) {
    resetBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(repo => createCardHtml(repo)).join('');
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
  const langClass = LANG_CLASS_MAP[repo.language] || 'lang-Other';
  const hasDemo = Boolean(repo.homepage);
  const featuredBadge = repo.featured ? '<span class="badge-featured">⭐ Spotlight</span>' : '';
  const starBadge = repo.stars > 0 ? `<span class="star-badge">★ ${repo.stars}</span>` : '';

  const tagsHtml = (repo.tags || []).map(t => 
    `<span class="tag-pill" onclick="window.filterByTag('${escapeHtml(t)}')">${escapeHtml(t)}</span>`
  ).join('');

  const cloneCmd = `git clone ${repo.url}.git`;

  return `
    <article class="project-card ${repo.featured ? 'is-featured' : ''}" data-name="${escapeHtml(repo.name)}">
      <div class="card-top-row">
        <div class="card-title-group">
          <h2 class="project-title">
            <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a>
          </h2>
          ${featuredBadge}
        </div>
        <div class="card-stats">
          <div class="lang-badge">
            <span class="lang-dot ${langClass}"></span>
            <span>${escapeHtml(repo.language)}</span>
          </div>
          ${starBadge}
        </div>
      </div>

      <p class="project-description">${escapeHtml(repo.description)}</p>

      <div class="project-tags">${tagsHtml}</div>

      <div class="card-actions">
        ${hasDemo ? `
          <a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener noreferrer" class="btn-card btn-primary-glow">
            <span>🚀 Live Demo</span>
          </a>
        ` : ''}
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="btn-card btn-secondary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>Source</span>
        </a>
        <button class="btn-card btn-secondary" onclick="window.openDetailModal('${escapeHtml(repo.name)}')" title="Inspect details">
          <span>Details</span>
        </button>
        <button class="btn-icon-only" onclick="window.copyToClipboard('${cloneCmd}', 'Clone command copied!')" title="Copy git clone command">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </article>
  `;
}

// Global Actions & Modal
window.filterByTag = function(tag) {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.value = tag;
    state.searchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
    renderProjects();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

window.setCategoryFilter = function(cat) {
  state.category = cat;
  updateTabUi();
  renderProjects();
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.resetAllFilters = function() {
  state.searchQuery = '';
  state.category = 'all';
  state.language = 'all';
  state.sortBy = 'featured';

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) langSelect.value = 'all';

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  updateTabUi();
  renderProjects();
};

window.openDetailModal = function(name) {
  const repo = (state.data.repos || []).find(r => r.name === name);
  if (!repo) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const cloneCmd = `git clone ${repo.url}.git`;
  const created = repo.createdAt ? new Date(repo.createdAt).toLocaleDateString() : 'N/A';
  const updated = repo.updatedAt ? new Date(repo.updatedAt).toLocaleDateString() : 'N/A';

  modalBody.innerHTML = `
    <div class="modal-header-top">
      <h2 class="modal-title" id="modalTitle">${escapeHtml(repo.name)}</h2>
      ${repo.featured ? '<span class="badge-featured">⭐ Spotlight</span>' : ''}
      ${repo.stars > 0 ? `<span class="star-badge">★ ${repo.stars}</span>` : ''}
    </div>
    <div class="lang-badge" style="margin-bottom: 1rem;">
      <span class="lang-dot ${LANG_CLASS_MAP[repo.language] || 'lang-Other'}"></span>
      <strong>Language:</strong> ${escapeHtml(repo.language)}
    </div>

    <p class="modal-desc">${escapeHtml(repo.description)}</p>

    <div class="modal-code-snippet">
      <code>${escapeHtml(cloneCmd)}</code>
      <button class="snippet-copy-btn" onclick="window.copyToClipboard('${cloneCmd}', 'Command copied!')">Copy</button>
    </div>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <strong>Category</strong>
        ${escapeHtml((state.data.categories[repo.category] || {}).name || repo.category)}
      </div>
      <div class="modal-meta-item">
        <strong>Repository URL</strong>
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">GitHub Link</a>
      </div>
      <div class="modal-meta-item">
        <strong>Created</strong>
        ${escapeHtml(created)}
      </div>
      <div class="modal-meta-item">
        <strong>Last Updated</strong>
        ${escapeHtml(updated)}
      </div>
    </div>

    <div class="modal-actions">
      ${repo.homepage ? `
        <a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noopener noreferrer" class="btn-card btn-primary-glow">
          🚀 Open Live Demo
        </a>
      ` : ''}
      <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="btn-card btn-secondary">
        View on GitHub &rarr;
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

window.copyToClipboard = function(text, toastMsg = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(toastMsg);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(toastMsg);
  });
};

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = msg;
  toast.classList.add('is-visible');

  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2500);
}
