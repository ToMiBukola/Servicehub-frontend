const hamburgerIcon = document.getElementById('hamburgerIcon');
const cancelIcon = document.getElementById('cancelIcon');
const navbarLinks = document.getElementById('navbarLinks');

hamburgerIcon.addEventListener('click', () => {
  navbarLinks.classList.add('active');
  hamburgerIcon.classList.add('hidden');
  cancelIcon.classList.remove('hidden');
});

cancelIcon.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
  cancelIcon.classList.add('hidden');
  hamburgerIcon.classList.remove('hidden');
});