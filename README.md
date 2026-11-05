# xyzzyapps.github.io // Technical Registry

> Production URL: **[https://xyzzyapps.github.io](https://xyzzyapps.github.io/)**  
> GitHub Repository: **[`xyzzyapps/xyzzyapps.github.io`](https://github.com/xyzzyapps/xyzzyapps.github.io)**

A slop-free, high-density, brutalist index and technical registry cataloging **77 open-source repositories** across 12 languages and 6 research tracks, with direct launchers for all **14 hosted GitHub Pages**.

---

## ⚡ How to Update When You Add a New Repo

When you create a new GitHub repository under `@xyzzyapps`, updating this portfolio takes just one command:

### 1-Command Automated Sync

From this directory (`xyzzyapps.github.io`), run:

```bash
python sync.py
```

This automated script will:
1. Query the GitHub CLI (`gh repo list xyzzyapps`) for all current repositories.
2. Probe each repository to detect if an active GitHub Page is deployed at `https://xyzzyapps.github.io/<repo>/`.
3. Infer the category and tags based on language and keywords.
4. Regenerate `projects.json` and the zero-dependency client engine `app.js`.

### Commit and Push to Deploy

Push the updated files to `main`; GitHub Pages deploys automatically within seconds:

```bash
git add .
git commit -m "Add <repo-name> to technical registry"
git push origin main
```

---

## 🛠️ Customizing Repositories & Categories (Optional)

If you want to manually assign a specific category or custom description to your new repository:

Open [`sync.py`](sync.py):

1. **Assign a Category**: Add your repo name to `REPO_CATEGORY_MAP`:
   ```python
   REPO_CATEGORY_MAP = {
       "my-new-repo": "compilers",   # compilers, literate, systems, audio_video, sim_games, web_runtime
       ...
   }
   ```
2. **Add a Custom Description** (if the repo doesn't have one set on GitHub):
   ```python
   CUSTOM_DESCRIPTIONS = {
       "my-new-repo": "A concise, technical description of the project.",
       ...
   }
   ```
3. Re-run `python sync.py && git add . && git commit -m "Update registry" && git push origin main`.

---

## 📁 Repository Structure

* **`index.html`** — High-density, brutalist semantic HTML interface with CLI-style grep search.
* **`style.css`** — Slop-free brutalist stylesheet (sharp 0px borders, monospace hierarchy, dark/light modes, zero external font blockers).
* **`app.js`** — Client engine featuring instant client-side filtering, category group rendering, 1-click clone copy, and detail modals.
* **`projects.json`** — Machine-readable JSON catalog of all repositories, tags, stars, and GitHub Page links.
* **`sync.py`** — Python synchronizer that hooks into `gh` CLI and rebuilds the registry.
* **`.nojekyll`** — Disables Jekyll on GitHub Pages for direct asset serving.

---

## 🌐 Research Categories Overview

| Code | Category | Repos | Scope |
| :---: | :--- | :---: | :--- |
| `01` | **Languages & Compilers** | 24 | Radical language experiments, prefix concatenative Lisps, Smalltalk/Tcl hybrids, C transpilers. |
| `02` | **Literate & Conversational Code** | 10 | Noweb Markdown wrappers, topological explain-order compilers, C-to-English translators. |
| `03` | **Systems, Low-Level & DevTools** | 20 | NASM readable assembly macros, C static analyzers, unconventional TUI/GUI editors. |
| `04` | **Audio & Creative Tech** | 8 | Real-time DAW MIDI inference engines, algorithmic hardgroove techno, headless Pure Data DSP. |
| `05` | **Simulations, AI & Games** | 10 | Live desktop creatures, fruit fly neuro-simulations, reinforcement learning, custom 3D shaders. |
| `06` | **Web & Novel Runtimes** | 5 | Go with PHP-style templating, native ESM Single File Component compilers, mobile TUIs. |
