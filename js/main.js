const btnHamburguesa = document.getElementById("hamburger");
const menuNav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav-item');

btnHamburguesa.addEventListener('click', () => {
    menuNav.classList.toggle('abierto')
})

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        menuNav.classList.remove("abierto")
    })
})

document.addEventListener('click', (e) => {
    if (
        !menuNav.contains(e.target) &&
        !btnHamburguesa.contains(e.target)
    ) {
        menuNav.classList.remove("abierto")
    }
})

