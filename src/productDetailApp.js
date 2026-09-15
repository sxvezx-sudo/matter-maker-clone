import { getProducts } from './data/products.js';
import Swiper from 'swiper';

// เก็บ Instance ของ Swiper ไว้เพื่อ destroy เมื่อมีการ re-render
let swiperInstance = null;

export function initSwiper() {
    // ถ้ามี swiper เดิมอยู่ให้ทำลายก่อนสร้างใหม่ ป้องกัน Memory Leak / Error
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }

    swiperInstance = new Swiper('.product-detail__slider-container', {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
            el: '.product-detail__pagination',
            clickable: true,
        },
        grabCursor: true,
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

export function renderProductDetail(product) {
    const container = document.querySelector(".product-detail__container");
    
    // ล้างเฉพาะส่วน Slider เดิมก่อนสร้างใหม่ (คงส่วน content-container ไว้)
    const oldSlider = container.querySelector(".product-detail__slider-container");
    const oldPagination = container.querySelector(".product-detail__pagination");
    if (oldSlider) oldSlider.remove();
    if (oldPagination) oldPagination.remove();

    // 1. Create Slider Elements
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("product-detail__slider-container", "swiper");

    const sliderList = document.createElement("ul");
    sliderList.classList.add("product-detail__slider-list", "swiper-wrapper");

    // 2. Loop สร้าง Slide จาก images
    Object.values(product.images).forEach(imgUrl => {
        const sliderItem = document.createElement("li");
        sliderItem.classList.add("product-detail__slider-item", "swiper-slide");

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("product-detail__img-wrapper");

        const imgNode = document.createElement("img");
        imgNode.classList.add("product-detail__img");
        imgNode.src = imgUrl;
        imgNode.alt = product.name;

        imgWrapper.append(imgNode);
        sliderItem.append(imgWrapper);
        sliderList.append(sliderItem);
    });

    sliderContainer.append(sliderList);

    // 3. Create Pagination
    const pagination = document.createElement("div");
    pagination.classList.add("product-detail__pagination", "swiper-pagination");

    // 4. ดัน Slider และ Pagination เข้าไปด้านหน้าสุดของ container
    const contentContainer = container.querySelector(".product-detail__content-container");
    container.insertBefore(pagination, contentContainer);
    container.insertBefore(sliderContainer, pagination);

    // 5. อัปเดตข้อมูล Text (ชื่อสินค้า/ราคา)
    const title = container.querySelector(".product-detail__title");
    const price = container.querySelector(".product-detail__price");
    if (title) title.textContent = product.name;
    if (price) price.textContent = `${product.price.toLocaleString()} THB`;

    // 6. สั่งให้ Swiper ทำงานหลังจาก append DOM ลงหน้าเว็บแล้วเท่านั้น!
    initSwiper();
}

// Event Listener สำหรับทดสอบ
const productsData = getProducts();
const params = new URLSearchParams(window.location.search)
const productId = params.get("id")
const product = productsData.find(pd => pd.id == productId);

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail(product);
});