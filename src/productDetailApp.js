import Swiper from 'swiper';

export function createSwiper() {
    return new Swiper('.swiper', {
        slidesPerView: 3, // 👈 แก้จาก slicePerView เป็น slidesPerView
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
        },
        grabCursor: true,
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        allowSlideNext: true,
        autoplay: {
            delay: 5000
        }
    });
}

createSwiper()

window.addEventListener("keyup", (e) => {
if(e.key !== "Enter") { return }
console.log(e.key)
})