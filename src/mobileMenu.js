const menuToggler = document.querySelector(".menu__toggle")

const menuClose = document.querySelector('.close__menu')

const mobileMenu = document.querySelector(".mobile__menu")

const mobileLinks = document.querySelectorAll(".mobile__links")

menuToggler.addEventListener('click', () => {
    openMobileMenu();

    menuClose.addEventListener('click' , () => {
        closeMobileMenu();
    })

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        })
    })
})

function openMobileMenu () {
    mobileMenu.classList.add('open__menu')
    menuClose.classList.add('display__block')
    menuToggler.classList.add('display__none')
    document.body.style.overflowY = "hidden";
}

function closeMobileMenu () {
    mobileMenu.classList.remove('open__menu')
    menuToggler.classList.remove('display__none')
    menuClose.classList.remove('display__block')
    document.body.style.overflowY = "auto";
}