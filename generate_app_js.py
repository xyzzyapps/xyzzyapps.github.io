import json

with open('projects.json', 'r', encoding='utf-8') as f:
    site_data = json.load(f)

json_str = json.dumps(site_data, ensure_ascii=False)

js_content = f"""/**
 * Xyzzy Apps — Slop-Free Technical Registry Engine
 * High-density, brutalist developer index with instant search, category grouping,
 * and direct GitHub Pages launchers.
 */

// Embedded dataset fallback
const INITIAL_DATA = {json_str};

let state = {{
  data: INITIAL_DATA,
  searchQuery: '',
  category: 'all',
  language: 'all',
  sortBy: 'featured',
  viewMode: 'grouped', // 'grouped' (default) or 'flat'
  onlyPages: false,
  selectedProject: null
}};

document.addEventListener('DOMContentLoaded', () => {{
  initTheme();
  initEventListeners();
  loadDataAndRender();
}});

function initTheme() {{
  const savedTheme = localStorage.getItem('xyzzy_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {{
    themeToggle.addEventListener('click', () => {{
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('xyzzy_theme', next);
    }});
  }}
}}

async function loadDataAndRender() {{
  try {{
    if (window.location.protocol.startsWith('http')) {{
      const res = await fetch('projects.json');
      if (res.ok) {{
        state.data = await res.json();
      }}
    }}
  }} catch (e) {{
    console.warn('Fallback to embedded dataset:', e);
  }}

  parseUrlParams();
  updateCategoryCounts();
  render();
}}

function parseUrlParams() {{
  const params = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace('#', '');

  if (params.has('q')) {{
    state.searchQuery = params.get('q');
    const input = document.getElementById('searchInput');
    if (input) input.value = state.searchQuery;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) clearBtn.style.display = 'block';
  }}

  if (params.has('pages') && params.get('pages') === '1') {{
    state.onlyPages = true;
    state.category = 'pages';
  }}

  if (params.has('view')) {{
    state.viewMode = params.get('view') === 'flat' ? 'flat' : 'grouped';
  }}

  if (params.has('category')) {{
    state.category = params.get('category');
  }} else if (hash && ['compilers', 'literate', 'systems', 'audio_video', 'sim_games', 'web_runtime', 'pages', 'featured'].includes(hash)) {{
    state.category = hash;
  }}

  if (params.has('lang')) {{
    state.language = params.get('lang');
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = state.language;
  }}

  updateTabUi();
}}

function updateTabUi() {{
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {{
    if (tab.dataset.category === state.category) {{
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    }} else {{
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }}
  }});

  const viewGroupedBtn = document.getElementById('viewModeGrouped');
  const viewFlatBtn = document.getElementById('viewModeFlat');
  if (viewGroupedBtn && viewFlatBtn) {{
    viewGroupedBtn.classList.toggle('active', state.viewMode === 'grouped');
    viewFlatBtn.classList.toggle('active', state.viewMode === 'flat');
  }}
}}

function initEventListeners() {{
  // Search Input
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {{
    searchInput.addEventListener('input', (e) => {{
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {{
        clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      }}
      render();
    }});
  }}

  if (clearSearchBtn) {{
    clearSearchBtn.addEventListener('click', () => {{
      state.searchQuery = '';
      if (searchInput) {{
        searchInput.value = '';
        searchInput.focus();
      }}
      clearSearchBtn.style.display = 'none';
      render();
    }});
  }}

  // Category Tabs
  const catTabs = document.getElementById('categoryTabs');
  if (catTabs) {{
    catTabs.addEventListener('click', (e) => {{
      const tab = e.target.closest('.tab-btn');
      if (!tab) return;
      const cat = tab.dataset.category;
      
      if (cat === 'pages') {{
        state.onlyPages = !state.onlyPages;
        state.category = state.onlyPages ? 'pages' : 'all';
      }} else {{
        state.onlyPages = false;
        state.category = cat;
      }}
      
      updateTabUi();
      render();
    }});
  }}

  // Language Select
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {{
    langSelect.addEventListener('change', (e) => {{
      state.language = e.target.value;
      render();
    }});
  }}

  // Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {{
    sortSelect.addEventListener('change', (e) => {{
      state.sortBy = e.target.value;
      render();
    }});
  }}

  // View Mode toggles
  const viewGroupedBtn = document.getElementById('viewModeGrouped');
  const viewFlatBtn = document.getElementById('viewModeFlat');
  if (viewGroupedBtn) {{
    viewGroupedBtn.addEventListener('click', () => {{
      state.viewMode = 'grouped';
      updateTabUi();
      render();
    }});
  }}
  if (viewFlatBtn) {{
    viewFlatBtn.addEventListener('click', () => {{
      state.viewMode = 'flat';
      updateTabUi();
      render();
    }});
  }}

  // Modal Close
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  if (modalClose && modal) {{
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {{
      if (e.target === modal) closeModal();
    }});
  }}

  document.addEventListener('keydown', (e) => {{
    if (e.key === 'Escape') closeModal();
  }});

  // Reset Filters button
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {{
    resetBtn.addEventListener('click', resetAllFilters);
  }}
}}

function updateCategoryCounts() {{
  const repos = state.data.repos || [];
  
  const counts = {{
    all: repos.length,
    featured: repos.filter(r => r.featured).length,
    compilers: repos.filter(r => r.category === 'compilers').length,
    literate: repos.filter(r => r.category === 'literate').length,
    systems: repos.filter(r => r.category === 'systems').length,
    audio_video: repos.filter(r => r.category === 'audio_video').length,
    sim_games: repos.filter(r => r.category === 'sim_games').length,
    web_runtime: repos.filter(r => r.category === 'web_runtime').length,
    pages: repos.filter(r => r.hasGithubPage).length
  }};

  const setIfExists = (id, val) => {{
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }};

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
}}

function getFilteredRepos() {{
  let repos = [...(state.data.repos || [])];

  // GitHub Pages only filter
  if (state.category === 'pages' || state.onlyPages) {{
    repos = repos.filter(r => r.hasGithubPage);
  }} else if (state.category === 'featured') {{
    repos = repos.filter(r => r.featured);
  }} else if (state.category !== 'all') {{
    repos = repos.filter(r => r.category === state.category);
  }}

  // Language filter
  if (state.language !== 'all') {{
    repos = repos.filter(r => r.language.toLowerCase() === state.language.toLowerCase());
  }}

  // Search Query filter
  if (state.searchQuery) {{
    const q = state.searchQuery.toLowerCase();
    repos = repos.filter(r => {{
      const nameMatch = r.name.toLowerCase().includes(q);
      const descMatch = (r.description || '').toLowerCase().includes(q);
      const tagMatch = (r.tags || []).some(t => t.toLowerCase().includes(q));
      const langMatch = (r.language || '').toLowerCase().includes(q);
      return nameMatch || descMatch || tagMatch || langMatch;
    }});
  }}

  // Sort
  if (state.sortBy === 'stars') {{
    repos.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  }} else if (state.sortBy === 'recent') {{
    repos.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
  }} else if (state.sortBy === 'name') {{
    repos.sort((a, b) => a.name.localeCompare(b.name));
  }} else {{
    // Pages & Featured first, then stars
    repos.sort((a, b) => {{
      if (a.hasGithubPage && !b.hasGithubPage) return -1;
      if (!a.hasGithubPage && b.hasGithubPage) return 1;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.stars || 0) - (a.stars || 0);
    }});
  }}

  return repos;
}}

function render() {{
  const container = document.getElementById('projectsContainer');
  const emptyState = document.getElementById('emptyState');
  const visibleCountEl = document.getElementById('visibleCount');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (!container) return;

  const filtered = getFilteredRepos();

  if (visibleCountEl) {{
    visibleCountEl.textContent = filtered.length;
  }}

  const hasActiveFilters = state.category !== 'all' || state.language !== 'all' || state.searchQuery.length > 0 || state.onlyPages;
  if (resetBtn) {{
    resetBtn.style.display = hasActiveFilters ? 'inline' : 'none';
  }}

  if (filtered.length === 0) {{
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }}

  if (emptyState) emptyState.style.display = 'none';

  // Grouped by Category Mode (Default)
  if (state.viewMode === 'grouped' && state.category === 'all' && !state.onlyPages) {{
    renderGroupedCategories(container, filtered);
  }} else {{
    renderFlatGrid(container, filtered);
  }}
}}

function renderGroupedCategories(container, repos) {{
  const categories = state.data.categories;
  const catKeys = Object.keys(categories).sort((a, b) => (categories[a].order || 99) - (categories[b].order || 99));

  let html = '';

  for (const catKey of catKeys) {{
    const cat = categories[catKey];
    const catRepos = repos.filter(r => r.category === catKey);

    if (catRepos.length === 0) continue;

    const pagesInCat = catRepos.filter(r => r.hasGithubPage).length;
    const numPrefix = String(cat.order || '0').padStart(2, '0');

    html += `
      <section class="category-block" id="category-${{catKey}}">
        <div class="category-header">
          <div class="category-title-wrap">
            <span class="category-num">// [${{numPrefix}}]</span>
            <h2 class="category-title">${{escapeHtml(cat.name)}}</h2>
            <div class="category-desc">${{escapeHtml(cat.desc)}}</div>
          </div>
          <div class="category-counts">
            <span class="count-pill">[${{catRepos.length}} ENTRIES]</span>
            ${{pagesInCat > 0 ? `<span class="count-pill pages">[● ${{pagesInCat}} LIVE PAGES]</span>` : ''}}
          </div>
        </div>

        <div class="projects-grid">
          ${{catRepos.map(repo => createCardHtml(repo)).join('')}}
        </div>
      </section>
    `;
  }}

  container.innerHTML = html;
}}

function renderFlatGrid(container, repos) {{
  let bannerHtml = '';
  
  if (state.category === 'pages' || state.onlyPages) {{
    bannerHtml = `
      <div class="flat-banner">
        <h3>// FILTER: REPOSITORIES WITH HOSTED GITHUB PAGES</h3>
        <p>Displaying 14 projects with live browser web applications, compilers, and documentation hosted at xyzzyapps.github.io</p>
      </div>
    `;
  }} else if (state.category !== 'all' && state.data.categories[state.category]) {{
    const cat = state.data.categories[state.category];
    bannerHtml = `
      <div class="flat-banner">
        <h3>// FILTER: ${{escapeHtml(cat.name).toUpperCase()}}</h3>
        <p>${{escapeHtml(cat.desc)}}</p>
      </div>
    `;
  }}

  container.innerHTML = `
    ${{bannerHtml}}
    <div class="projects-grid">
      ${{repos.map(repo => createCardHtml(repo)).join('')}}
    </div>
  `;
}}

function escapeHtml(str) {{
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}}

function createCardHtml(repo) {{
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);
  const spotlightBadge = repo.featured ? '<span class="spotlight-pill">SPOTLIGHT</span>' : '';
  const starBadge = repo.stars > 0 ? `<span class="star-count">★${{repo.stars}}</span>` : '';
  const pageBadge = hasPage ? `
    <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="page-badge-link" title="Open hosted GitHub Page">
      LIVE PAGE ↗
    </a>
  ` : '';

  const tagsHtml = (repo.tags || []).map(t => 
    `<span class="tag-code" onclick="window.filterByTag('${{escapeHtml(t)}}')">${{escapeHtml(t)}}</span>`
  ).join('');

  const cloneCmd = `git clone ${{repo.url}}.git`;

  return `
    <article class="project-card ${{hasPage ? 'has-page' : ''}}" data-name="${{escapeHtml(repo.name)}}">
      <div class="card-header-line">
        <div class="project-name-group">
          <span class="project-name">
            <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer">${{escapeHtml(repo.name)}}</a>
          </span>
          ${{pageBadge}}
          ${{spotlightBadge}}
        </div>
        <div class="card-meta-line">
          <span class="lang-tag">${{escapeHtml(repo.language)}}</span>
          ${{starBadge}}
        </div>
      </div>

      <p class="project-desc">${{escapeHtml(repo.description)}}</p>

      <div class="project-tags">${{tagsHtml}}</div>

      <div class="card-actions-strip">
        ${{hasPage ? `
          <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="action-link-page">
            [OPEN PAGE ↗]
          </a>
        ` : repo.homepage ? `
          <a href="${{escapeHtml(repo.homepage)}}" target="_blank" rel="noopener noreferrer" class="action-link-page">
            [LIVE DEMO ↗]
          </a>
        ` : ''}}
        <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" class="action-link">
          [CODE]
        </a>
        <button class="action-link" onclick="window.openDetailModal('${{escapeHtml(repo.name)}}')">
          [DETAILS]
        </button>
        <button class="action-btn-copy" onclick="window.copyToClipboard('${{cloneCmd}}')">
          [CLONE]
        </button>
      </div>
    </article>
  `;
}}

window.filterByTag = function(tag) {{
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {{
    searchInput.value = tag;
    state.searchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
    render();
    const controls = document.getElementById('controls');
    if (controls) controls.scrollIntoView({{ behavior: 'smooth' }});
  }}
}};

window.setCategoryFilter = function(cat) {{
  state.category = cat;
  state.onlyPages = (cat === 'pages');
  updateTabUi();
  render();
  const controls = document.getElementById('controls');
  if (controls) controls.scrollIntoView({{ behavior: 'smooth' }});
}};

window.resetAllFilters = function() {{
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
}};

window.openDetailModal = function(name) {{
  const repo = (state.data.repos || []).find(r => r.name === name);
  if (!repo) return;

  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const cloneCmd = `git clone ${{repo.url}}.git`;
  const created = repo.createdAt ? repo.createdAt.substring(0, 10) : 'N/A';
  const updated = repo.updatedAt ? repo.updatedAt.substring(0, 10) : 'N/A';
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);

  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-row">
        <span class="modal-repo-name">${{escapeHtml(repo.name)}}</span>
        ${{hasPage ? `<a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="page-badge-link">LIVE PAGE ↗</a>` : ''}}
        ${{repo.stars > 0 ? `<span class="star-count">★${{repo.stars}}</span>` : ''}}
      </div>
      <div style="font-size: 0.8rem; color: var(--text-dim);">
        LANGUAGE: ${{escapeHtml(repo.language).toUpperCase()}} // CATEGORY: ${{escapeHtml((state.data.categories[repo.category] || {{}}).name || repo.category).toUpperCase()}}
      </div>
    </div>

    <p class="modal-desc">${{escapeHtml(repo.description)}}</p>

    <div class="modal-code-box">
      <code>${{escapeHtml(cloneCmd)}}</code>
      <button class="modal-copy-btn" onclick="window.copyToClipboard('${{cloneCmd}}')">[COPY]</button>
    </div>

    <div class="modal-details-grid">
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">GitHub Pages URL</span>
        <span class="modal-detail-val">
          ${{hasPage ? `<a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-green); text-decoration: underline;">${{escapeHtml(repo.githubPage)}}</a>` : 'NOT CONFIGURED'}}
        </span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Repository</span>
        <span class="modal-detail-val">
          <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" style="color: var(--text); text-decoration: underline;">${{escapeHtml(repo.url)}}</a>
        </span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Created</span>
        <span class="modal-detail-val">${{escapeHtml(created)}}</span>
      </div>
      <div class="modal-detail-item">
        <span class="modal-detail-lbl">Last Pushed</span>
        <span class="modal-detail-val">${{escapeHtml(updated)}}</span>
      </div>
    </div>

    <div class="modal-btn-row">
      ${{hasPage ? `
        <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
          [LAUNCH GITHUB PAGE ↗]
        </a>
      ` : repo.homepage ? `
        <a href="${{escapeHtml(repo.homepage)}}" target="_blank" rel="noopener noreferrer" class="btn-primary-action">
          [OPEN LIVE DEMO ↗]
        </a>
      ` : ''}}
      <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" class="btn-secondary-action">
        [VIEW REPO ON GITHUB ↗]
      </a>
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}};

function closeModal() {{
  const modal = document.getElementById('projectModal');
  if (modal) {{
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }}
  document.body.style.overflow = '';
}}

window.copyToClipboard = function(text) {{
  navigator.clipboard.writeText(text).then(() => {{
    showToast();
  }}).catch(() => {{
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast();
  }});
}};

function showToast() {{
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.add('is-visible');
  setTimeout(() => {{
    toast.classList.remove('is-visible');
  }}, 2000);
}}
"""

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Generated slop-free app.js successfully!")
