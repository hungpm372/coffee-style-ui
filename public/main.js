const topMenu = document.getElementById('hp-top-menu')
const toggleTopMenuIcon = document.getElementById('hp-togle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('hp-top-menu-expanded')
    } else {
        if (topMenu.classList.contains('hp-top-menu-expanded')) {
            topMenu.classList.remove('hp-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})