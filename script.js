function showTime() {
  const timeEl = document.getElementById('currentTime');
  if (timeEl) {
    timeEl.textContent = 'Agora: ' + new Date().toLocaleString('pt-BR');
  }
}

function showTip() {
  const tipEl = document.getElementById('tip');
  if (!tipEl) return;

  const tips = [
    'Economize água usando irrigação consciente.',
    'Separe resíduos e faça o descarte correto das embalagens.',
    'Plante árvores e preserve nascentes.',
    'Evite queimadas: elas prejudicam o solo e o ar.',
    'Use a tecnologia para monitorar lavouras e reduzir desperdícios.',
    'Prefira soluções sustentáveis para proteger o futuro.'
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipEl.textContent = randomTip;
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');

  const button = document.getElementById('themeButton');
  if (button) {
    button.textContent = theme === 'dark' ? '☀️ Modo claro' : '🌙 Modo escuro';
  }

  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

showTime();
setInterval(showTime, 1000);