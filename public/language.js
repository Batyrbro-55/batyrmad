/* Only the language preference is stored; answers remain in page memory. */
const languageParams = new URLSearchParams(location.search);
let savedLanguage = null;
try { savedLanguage = localStorage.getItem('research-language'); } catch (_) {}
const requestedLanguage = languageParams.get('lang');
const siteLanguage = ['kk','en'].includes(requestedLanguage) ? requestedLanguage : ['kk','en'].includes(savedLanguage) ? savedLanguage : null;
function chooseLanguage(language) {
  try { localStorage.setItem('research-language', language); } catch (_) {}
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  location.replace(url.href);
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => chooseLanguage(button.dataset.language)));
function loadSiteScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script'); script.src = src;
    script.onload = resolve; script.onerror = reject; document.body.append(script);
  });
}
async function startSite() {
  if (!siteLanguage) { document.querySelector('#language-entry').hidden = false; return; }
  document.documentElement.lang = siteLanguage;
  if (siteLanguage === 'en') {
    document.querySelector('.skip-link').textContent = 'Skip to content';
    document.querySelector('.wordmark').innerHTML = 'YOUTH &<br>GAMBLING';
    document.querySelector('.header-meta').innerHTML = 'Regulation in Kazakhstan<br><small>Research and legal analysis</small>';
    document.querySelector('.header-link').textContent = 'Sources ↗';
    document.querySelector('.nav-label').textContent = 'CONTENTS';
    document.querySelector('#page-nav').setAttribute('aria-label', 'Research sections');
    document.querySelector('.sidebar-foot').innerHTML = '<p>Law. Evidence.<br>Informed proposals.</p><small>Legal sources reviewed<br>28 September 2026</small>';
    document.querySelector('.site-footer span').textContent = 'Author: Batyrkhan Madeni · For education and research';
    document.querySelector('.site-footer button').textContent = 'Methodology and limitations ↗';
    document.querySelector('.close').setAttribute('aria-label', 'Close window');
    document.querySelector('meta[name=description]').content = 'Youth gambling in Kazakhstan: research, legal analysis and policy proposals by Batyrkhan Madeni.';
  }
  document.querySelectorAll('.language-switch [data-language]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.language === siteLanguage)));
  try {
    await loadSiteScript(siteLanguage === 'en' ? 'app.en.js' : 'app.js');
    await loadSiteScript(siteLanguage === 'en' ? 'research.en.js' : 'research.js');
    document.querySelector('#site-shell').hidden = false;
  } catch (_) {
    document.querySelector('#language-entry').hidden = false;
    document.querySelector('#entry-status').textContent = 'Жүктеу қатесі. Қайта таңдап көріңіз. / Could not load the site. Please choose again.';
  }
}
startSite();
