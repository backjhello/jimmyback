const PROFILE_CARD_TEMPLATE = `
  <div class="profile-inner">
    <div class="avatar">
      <span>JB</span>
    </div>
    <h1 class="profile-name">Jimmy Back</h1>
    <p class="profile-role">CS Student · Systems & Data</p>
    <span class="profile-chip">Open to Internships</span>

    <div class="profile-divider"></div>

    <div class="contact-list">
      <div class="contact-item">
        <div class="icon-circle">📧</div>
        <div class="contact-text">
          <span class="contact-label">Email</span>
          <span class="contact-value">junhyun3@illinois.edu</span>
        </div>
      </div>
      <div class="contact-item">
        <div class="icon-circle">📱</div>
        <div class="contact-text">
          <span class="contact-label">Phone</span>
          <span class="contact-value">(+1) 447-446-0420</span>
        </div>
      </div>
      <div class="contact-item">
        <div class="icon-circle">🎓</div>
        <div class="contact-text">
          <span class="contact-label">School</span>
          <span class="contact-value">UIUC · Computer Science</span>
        </div>
      </div>
    </div>

    <div class="profile-divider"></div>

    <div class="profile-actions">
      <a href="https://github.com/YOUR_USERNAME" target="_blank" class="btn full primary">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" class="btn full ghost">
        LinkedIn
      </a>
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  renderProfileCards();
  wireNavTabs();
});

function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function renderProfileCards() {
  const targets = document.querySelectorAll("[data-profile-card]");
  targets.forEach(target => {
    target.innerHTML = PROFILE_CARD_TEMPLATE;
  });
}

function wireNavTabs() {
  const tabs = document.querySelectorAll(".topnav-tabs .tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}
