const menuButtons = document.querySelectorAll('.menu-btn')

menuButtons.forEach(button => button.addEventListener('click', e => {
  e.preventDefault();

  document.body.classList.toggle('menu-active')
}));


window.onclick = e => {
  const menuBtn = e.target.classList.contains('menu-btn')
  if (document.body.classList.contains('menu-active') && !menuBtn) {
    document.body.classList.toggle('menu-active')
  }
}

