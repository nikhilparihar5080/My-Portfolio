// script.js - interactions for Portfolio
// - Theme toggle
// - Mobile nav toggle
// - Typing animation
// - Resume download generator
// - Smooth active nav highlighting
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const burger = document.getElementById('burger');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') root.classList.add('dark');

  // Toggle dark mode
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  // Mobile nav toggle
  burger.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.forEach(link => link.addEventListener('click', () => navbar.classList.remove('open')));

  // Typing effect for job titles
  const typedEl = document.getElementById('typed');
  const titles = ['Experienced Data Analyst', 'SQL | Excel | Python | Power BI', 'Data-driven Insights'];
  let tIndex = 0, cIndex = 0, forward = true;

  function typeLoop(){
    const current = titles[tIndex];
    if(forward){
      cIndex++;
      if(cIndex > current.length){
        forward = false;
        setTimeout(typeLoop, 1200);
        return;
      }
    } else {
      cIndex--;
      if(cIndex < 0){
        forward = true;
        tIndex = (tIndex + 1) % titles.length;
      }
    }
    typedEl.textContent = current.slice(0, cIndex);
    setTimeout(typeLoop, forward ? 120 : 50);
  }
  typeLoop();

  // Resume download - generate a small text resume and prompt download
  const downloadBtn = document.getElementById('download-resume');
  downloadBtn.addEventListener('click', () => {
    const content = `Nikhil Parihar - Resume\nExperienced Data Analyst\nEmail: nikhilpa5080@gmail.com\nPhone: +91 8104455080\nSkills: SQL, Excel, Power BI, Python, Tableau, Statistics`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'Nikhil_Parihar_Resume.txt';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  });

  // Active nav highlighting on scroll
  const sections = document.querySelectorAll('main section[id]');
  function onScroll(){
    const y = window.scrollY;
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      const id = sec.id;
      const link = document.querySelector(`.nav-link[href='#${id}']`);
      if(y >= top && y < bottom){
        link && link.classList.add('active');
      } else {
        link && link.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Contact form handling (demo only)
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      formMsg.textContent = 'Please complete the form before sending.';
      return;
    }
    // Simulated send
    formMsg.textContent = 'Thanks! Your message has been received.';
    form.reset();
    setTimeout(()=> formMsg.textContent = '', 4000);
  });
});
