const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');

// Toggle mobile menu
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add('active');
        toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
    }
}

// Activate Submenu
// Adding event listeners to all the submenu item
function toggleItem() {
    if (this.classList.contains('submenu-active')) {
        this.classList.remove('submenu-active');
    } else if (menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
        this.classList.add('submenu-active');
    } else {
        this.classList.add('submenu-active');
    }
}

// function to close the dropdown when clicked outside
function closeSubmenu(e) {
    const isClickInside = menu.contains(e.target);
    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

toggle.addEventListener('click', toggleMenu);
// eslint-disable-next-line no-restricted-syntax
for (const item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem);
    }
    item.addEventListener('keypress', toggleItem);
}
document.addEventListener('click', closeSubmenu);
