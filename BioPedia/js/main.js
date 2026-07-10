// Turn a topic title into a URL-safe slug, e.g. "The Cell Membrane" -> "the-cell-membrane"
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Render subject cards (used when search box is empty)
function renderSubjectCards(list) {
  const grid = document.getElementById("subjectGrid");
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);">No subjects found.</p>`;
    return;
  }
  list.forEach(sub => {
    grid.innerHTML += `
      <a class="card" href="subject.html?id=${sub.id}">
        <span class="icon">${sub.icon}</span>
        <h3>${sub.name}</h3>
        <p>${sub.tagline}</p>
      </a>`;
  });
}

// Search across both subjects AND topics
function performSearch(rawTerm) {
  const term = rawTerm.trim().toLowerCase();
  const grid = document.getElementById("subjectGrid");

  if (term === "") {
    renderSubjectCards(subjectsData);
    return;
  }

  const matchedSubjects = subjectsData.filter(s =>
    s.name.toLowerCase().includes(term) || s.tagline.toLowerCase().includes(term)
  );

  const matchedTopics = [];
  subjectsData.forEach(sub => {
    sub.topics.forEach(topic => {
      if (topic.title.toLowerCase().includes(term)) {
        matchedTopics.push({ subject: sub, topic });
      }
    });
  });

  if (matchedSubjects.length === 0 && matchedTopics.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);">No results found for "${rawTerm}".</p>`;
    return;
  }

  let html = "";

  matchedSubjects.forEach(sub => {
    html += `
      <a class="card" href="subject.html?id=${sub.id}">
        <span class="icon">${sub.icon}</span>
        <h3>${sub.name}</h3>
        <p>${sub.tagline}</p>
      </a>`;
  });

  matchedTopics.forEach(({ subject, topic }) => {
    const slug = slugify(topic.title);
    html += `
      <a class="card" href="subject.html?id=${subject.id}&topic=${slug}">
        <span class="icon">${subject.icon}</span>
        <h3>${topic.title}</h3>
        <p class="topic-tag">in ${subject.name}</p>
      </a>`;
  });

  grid.innerHTML = html;
}

renderSubjectCards(subjectsData);

// Search input
document.getElementById("searchInput").addEventListener("input", (e) => {
  performSearch(e.target.value);
});

// Theme toggle
const themeBtn = document.getElementById("themeBtn");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}
applyTheme(localStorage.getItem("theme") || "light");
themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// Mobile menu toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});