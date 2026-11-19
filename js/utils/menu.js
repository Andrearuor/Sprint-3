 export default function menu() {
  const btnHamburguesa = document.getElementById("hamburger");
  const menuNav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-links');
  
  btnHamburguesa.addEventListener('click', () => {
      menuNav.classList.toggle('active')
  })
  
  navLinks.forEach((link) => {
      link.addEventListener('click', () => {
          menuNav.classList.remove("active")
      })
  })
  
  document.addEventListener('click', (e) => {
      if (
          !menuNav.contains(e.target) &&
          !btnHamburguesa.contains(e.target)
      ) {
          menuNav.classList.remove("active")
      }
  })
}

