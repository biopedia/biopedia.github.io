function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const params = new URLSearchParams(window.location.search);
const subjectId = params.get("id");
const targetTopicSlug = params.get("topic");
const subject = subjectsData.find(s => s.id === subjectId);

const container = document.getElementById("subjectContent");

if (!subject) {
  container.innerHTML = `<p style="text-align:center; padding:60px;">Subject not found.</p>`;
} else {
  document.title = subject.name + " — BioPedia";
  document.getElementById("subjectHeader").innerHTML = `
    <span class="icon">${subject.icon}</span>
    <h1>${subject.name}</h1>
    <p>${subject.tagline}</p>
  `;

  if (subject.topics.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted);">Content for this subject is coming soon.</p>`;
  } else {
    subject.topics.forEach(topic => {
      const slug = slugify(topic.title);
      const points = topic.theory.map(point => `<li>${point}</li>`).join("");
      container.innerHTML += `
        <div class="topic" id="${slug}">
          <h2>${topic.title}</h2>
          <ul class="theory-points">${points}</ul>
          ${topic.image ? `<img src="${topic.image}" alt="${topic.title} diagram">` : ""}
        </div>`;
    });

    // If arriving from a topic search result, scroll to it and briefly highlight
    if (targetTopicSlug) {
      const el = document.getElementById(targetTopicSlug);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.classList.add("topic-highlight");
          setTimeout(() => el.classList.remove("topic-highlight"), 2000);
        }, 100);
      }
    }
  }
}

// Theme (same as homepage)
document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "light");