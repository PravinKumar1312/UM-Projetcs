// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      const offset = 60;
      const pos = target.offsetTop - offset;
  
      window.scrollTo({ top: pos, behavior: 'smooth' });
    });
  });
  
  // Highlight active section
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentId) {
        link.classList.add('active');
      }
    });
  });
  