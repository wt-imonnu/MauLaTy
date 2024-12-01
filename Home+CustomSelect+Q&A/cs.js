var dropdownBtn = document.querySelector('.dropdown-btn')
var dropdownMenu = document.querySelector('.dropdown-menu')
var items = document.querySelectorAll('.item')

window.addEventListener('click', function () {
    closeMenu()
})

dropdownBtn.addEventListener ('click', (e) => {
    e.stopPropagation()
    toggleMenu()
})

items.forEach(item => item.addEventListener ('click', itemClickHandler))

function toggleMenu() {
    dropdownMenu.classList.toggle('open')
}

function closeMenu() {
    dropdownMenu.classList.remove('open')
}

function itemClickHandler(e) {
    closeMenu()
}