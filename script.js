const menuIcon = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links')

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
    })
})

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
})

// link-div
document.querySelectorAll('.fitur-kartu').forEach(function (div) {
    div.addEventListener('click', function () {
        window.location.href = div.dataset.link;
        window.location.href = div.dataset.link;
        window.location.href = div.dataset.link;
    });
});