const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each element slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => {
  fadeObserver.observe(el);
});



const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-fill');
        bars.forEach((bar, i) => {
          bar.style.animationDelay = `${i * 0.12}s`;
        });
        // Stop observing once triggered
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-cat').forEach((cat) => {
  barObserver.observe(cat);
});

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === '#' + current;
    link.style.color = isActive ? 'var(--accent)' : '';
  });
});



const sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email   = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const subject = document.querySelector('input[placeholder="Subject"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your message..."]').value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Demo confirmation (replace with real form submission)
    alert(`Thanks, ${name}! Your message has been sent. I'll get back to you within 24 hours.`);

    // Clear the form
    document.querySelector('input[placeholder="Your Name"]').value   = '';
    document.querySelector('input[placeholder="Email Address"]').value = '';
    document.querySelector('input[placeholder="Subject"]').value     = '';
    document.querySelector('textarea[placeholder="Your message..."]').value = '';
  });
}


navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId  = link.getAttribute('href').replace('#', '');
    const targetEl  = document.getElementById(targetId);
    const navHeight = document.querySelector('nav').offsetHeight;

    if (targetEl) {
      const offsetTop = targetEl.offsetTop - navHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});


document.querySelectorAll('.blog-card').forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.blog-title').textContent;
    alert(`Opening article: "${title}"\n\n(Replace this with a real link in production)`);
  });
});