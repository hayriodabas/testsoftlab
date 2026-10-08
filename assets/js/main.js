// TestSoft (testsoftlab.com) - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Device Preview Switcher
  const previewChips = document.querySelectorAll('.preview-chip');
  const heroScreenImg = document.getElementById('hero-screen-img');

  previewChips.forEach(chip => {
    chip.addEventListener('click', () => {
      previewChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const newSrc = chip.getAttribute('data-img');
      if (newSrc && heroScreenImg) {
        heroScreenImg.style.opacity = '0';
        heroScreenImg.style.transform = 'scale(0.96)';
        setTimeout(() => {
          heroScreenImg.src = newSrc;
          heroScreenImg.style.opacity = '1';
          heroScreenImg.style.transform = 'scale(1)';
        }, 180);
      }
    });
  });

  // 2. Portfolio Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const appCards = document.querySelectorAll('.app-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      appCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          const categories = card.getAttribute('data-category') || '';
          if (categories.includes(filter)) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // 3. Dynamic Email Inquiry Form Sync
  const contactTopic = document.getElementById('contact-topic');
  const emailComposeBtn = document.getElementById('email-compose-btn');

  if (contactTopic && emailComposeBtn) {
    contactTopic.addEventListener('change', () => {
      const topic = contactTopic.value;
      const subject = encodeURIComponent(`[TestSoft Inquiry] ${topic}`);
      const body = encodeURIComponent(`Hello TestSoft Team,\n\nI am contacting you regarding: ${topic}.\n\nDetails:\n`);
      emailComposeBtn.href = `mailto:hayriodabas@testsoftlab.com?subject=${subject}&body=${body}`;
    });
  }

  // 4. Navbar Scroll Blur / Elevation
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.14)';
      navbar.style.background = 'rgba(8, 10, 17, 0.9)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      navbar.style.background = 'rgba(8, 10, 17, 0.75)';
    }
  });
});
