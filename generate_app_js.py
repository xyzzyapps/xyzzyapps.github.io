import json

with open('projects.json', 'r', encoding='utf-8') as f:
    site_data = json.load(f)

json_str = json.dumps(site_data, ensure_ascii=False)

js_content = f"""/**
 * Xyzzy Apps — Client Application Engine
 * Grouped category layout, instant search, language filter, GitHub Pages direct launcher.
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

// Language color mapping
const LANG_CLASS_MAP = {{
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
    console.warn('Using embedded dataset fallback:', e);
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
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {{
    if (tab.dataset.category === state.category) {{
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    }} else {{
      tab.classList.remove('active');
      tab.setAttribute('aria-selected', 'false');
    }}
  }});

  // Update view mode toggle buttons if any
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
      const tab = e.target.closest('.cat-tab');
      if (!tab) return;
      const cat = tab.dataset.category;
      
      if (cat === 'pages') {{
        state.onlyPages = !state.onlyPages;
        if (state.onlyPages) {{
          state.category = 'pages';
        }} else {{
          state.category = 'all';
        }}
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

  // Top stat counters
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
    // Featured & Pages first, then stars
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
    resetBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
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
    // Flat Grid Mode (or when a specific single category/pages is filtered)
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

    html += `
      <section class="category-block" id="category-${{catKey}}">
        <div class="category-block-header">
          <div class="cat-header-left">
            <span class="category-block-icon">${{cat.icon}}</span>
            <div>
              <h2 class="category-block-title">${{escapeHtml(cat.name)}}</h2>
              <p class="category-block-desc">${{escapeHtml(cat.desc)}}</p>
            </div>
          </div>
          <div class="cat-header-badges">
            <span class="cat-total-badge">${{catRepos.length}} Projects</span>
            ${{pagesInCat > 0 ? `<span class="cat-pages-badge">🌐 ${{pagesInCat}} GitHub ${{pagesInCat === 1 ? 'Page' : 'Pages'}}</span>` : ''}}
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
  let headerHtml = '';
  
  if (state.category === 'pages' || state.onlyPages) {{
    headerHtml = `
      <div class="flat-header-banner">
        <span class="banner-icon">🌐</span>
        <div>
          <h3>Repositories with Live GitHub Pages</h3>
          <p>Directly explore interactive web demos, compiler playgrounds, and online documentation hosted at xyzzyapps.github.io</p>
        </div>
      </div>
    `;
  }} else if (state.category !== 'all' && state.data.categories[state.category]) {{
    const cat = state.data.categories[state.category];
    headerHtml = `
      <div class="flat-header-banner">
        <span class="banner-icon">${{cat.icon}}</span>
        <div>
          <h3>${{escapeHtml(cat.name)}}</h3>
          <p>${{escapeHtml(cat.desc)}}</p>
        </div>
      </div>
    `;
  }}

  container.innerHTML = `
    ${{headerHtml}}
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
  const langClass = LANG_CLASS_MAP[repo.language] || 'lang-Other';
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);
  const featuredBadge = repo.featured ? '<span class="badge-featured">⭐ Spotlight</span>' : '';
  const starBadge = repo.stars > 0 ? `<span class="star-badge">★ ${{repo.stars}}</span>` : '';
  const pageBadge = hasPage ? `
    <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="badge-github-page" title="Open live GitHub Page at ${{escapeHtml(repo.githubPage)}}">
      <span class="live-dot"></span>
      <span>GitHub Page</span>
    </a>
  ` : '';

  const tagsHtml = (repo.tags || []).map(t => 
    `<span class="tag-pill" onclick="window.filterByTag('${{escapeHtml(t)}}')">${{escapeHtml(t)}}</span>`
  ).join('');

  const cloneCmd = `git clone ${{repo.url}}.git`;

  return `
    <article class="project-card ${{repo.featured ? 'is-featured' : ''}} ${{hasPage ? 'has-page-card' : ''}}" data-name="${{escapeHtml(repo.name)}}">
      <div class="card-top-row">
        <div class="card-title-group">
          <h3 class="project-title">
            <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer">${{escapeHtml(repo.name)}}</a>
          </h3>
          ${{featuredBadge}}
          ${{pageBadge}}
        </div>
        <div class="card-stats">
          <div class="lang-badge">
            <span class="lang-dot ${{langClass}}"></span>
            <span>${{escapeHtml(repo.language)}}</span>
          </div>
          ${{starBadge}}
        </div>
      </div>

      <p class="project-description">${{escapeHtml(repo.description)}}</p>

      <div class="project-tags">${{tagsHtml}}</div>

      <div class="card-actions">
        ${{hasPage ? `
          <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-pages-glow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>GitHub Page &rarr;</span>
          </a>
        ` : repo.homepage ? `
          <a href="${{escapeHtml(repo.homepage)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-pages-glow">
            <span>🚀 Live Demo</span>
          </a>
        ` : ''}}
        <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-secondary" title="View Source on GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>Source</span>
        </a>
        <button class="btn-card btn-secondary" onclick="window.openDetailModal('${{escapeHtml(repo.name)}}')" title="Inspect details">
          <span>Details</span>
        </button>
        <button class="btn-icon-only" onclick="window.copyToClipboard('${{cloneCmd}}', 'Clone command copied!')" title="Copy git clone command">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </article>
  `;
}}

// Global Actions & Modal
window.filterByTag = function(tag) {{
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {{
    searchInput.value = tag;
    state.searchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.style.display = 'block';
    render();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {{
      projectsSection.scrollIntoView({{ behavior: 'smooth' }});
    }}
  }}
}};

window.jumpToCategory = function(catKey) {{
  state.category = 'all';
  state.onlyPages = false;
  state.viewMode = 'grouped';
  updateTabUi();
  render();
  
  setTimeout(() => {{
    const el = document.getElementById('category-' + catKey);
    if (el) {{
      el.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
    }}
  }}, 50);
}};

window.setCategoryFilter = function(cat) {{
  state.category = cat;
  state.onlyPages = false;
  updateTabUi();
  render();
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {{
    projectsSection.scrollIntoView({{ behavior: 'smooth' }});
  }}
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
  const created = repo.createdAt ? new Date(repo.createdAt).toLocaleDateString() : 'N/A';
  const updated = repo.updatedAt ? new Date(repo.updatedAt).toLocaleDateString() : 'N/A';
  const hasPage = Boolean(repo.hasGithubPage && repo.githubPage);

  modalBody.innerHTML = `
    <div class="modal-header-top">
      <h2 class="modal-title" id="modalTitle">${{escapeHtml(repo.name)}}</h2>
      ${{repo.featured ? '<span class="badge-featured">⭐ Spotlight</span>' : ''}}
      ${{hasPage ? `<a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="badge-github-page"><span class="live-dot"></span> GitHub Page</a>` : ''}}
      ${{repo.stars > 0 ? `<span class="star-badge">★ ${{repo.stars}}</span>` : ''}}
    </div>
    
    <div class="lang-badge" style="margin-bottom: 1rem;">
      <span class="lang-dot ${{LANG_CLASS_MAP[repo.language] || 'lang-Other'}}"></span>
      <strong>Primary Language:</strong> ${{escapeHtml(repo.language)}}
    </div>

    <p class="modal-desc">${{escapeHtml(repo.description)}}</p>

    <div class="modal-code-snippet">
      <code>${{escapeHtml(cloneCmd)}}</code>
      <button class="snippet-copy-btn" onclick="window.copyToClipboard('${{cloneCmd}}', 'Command copied!')">Copy</button>
    </div>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <strong>Category</strong>
        ${{escapeHtml((state.data.categories[repo.category] || {{}}).name || repo.category)}}
      </div>
      <div class="modal-meta-item">
        <strong>GitHub Page Status</strong>
        ${{hasPage ? `<a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-emerald); font-weight: 600; text-decoration: underline;">Available &rarr; View Live</a>` : 'Source Only'}}
      </div>
      <div class="modal-meta-item">
        <strong>Repository URL</strong>
        <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: underline;">GitHub Repository</a>
      </div>
      <div class="modal-meta-item">
        <strong>Last Updated</strong>
        ${{escapeHtml(updated)}}
      </div>
    </div>

    <div class="modal-actions">
      ${{hasPage ? `
        <a href="${{escapeHtml(repo.githubPage)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-pages-glow" style="padding: 0.65rem 1.25rem; font-size: 0.95rem;">
          🌐 Launch GitHub Page (${{escapeHtml(repo.name)}}) &rarr;
        </a>
      ` : repo.homepage ? `
        <a href="${{escapeHtml(repo.homepage)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-pages-glow" style="padding: 0.65rem 1.25rem; font-size: 0.95rem;">
          🚀 Open Live Demo &rarr;
        </a>
      ` : ''}}
      <a href="${{escapeHtml(repo.url)}}" target="_blank" rel="noopener noreferrer" class="btn-card btn-secondary" style="padding: 0.65rem 1.25rem; font-size: 0.95rem;">
        View on GitHub &rarr;
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

window.copyToClipboard = function(text, toastMsg = 'Copied to clipboard!') {{
  navigator.clipboard.writeText(text).then(() => {{
    showToast(toastMsg);
  }}).catch(() => {{
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(toastMsg);
  }});
}};

function showToast(msg) {{
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;

  toastMessage.textContent = msg;
  toast.classList.add('is-visible');

  setTimeout(() => {{
    toast.classList.remove('is-visible');
  }}, 2500);
}}
"""

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Regenerated app.js with category-grouped rendering and GitHub Pages launcher!")
