const $menuBtn = document.querySelector('.menu-btn')
let isMenuOpen = false
$menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        $menuBtn.classList.add('open')
    } else {
        $menuBtn.classList.remove('open')
    }

    isMenuOpen = !isMenuOpen
})

var swiper = new Swiper('.swiper', {
    slidesPerView: '3',
    centeredSlides: true,
    // freeMode: true,
    // centeredSlides: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    spaceBetween: 630,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
        clickable: true,
    },
})