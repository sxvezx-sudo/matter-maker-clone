import { createIcon } from "../utils/icon.js";

export function createProductCard(product) {

    // Create Elements //
    const li = document.createElement("li");
    const card = document.createElement("article");
    const imgWrapper = document.createElement("a");
    const img = document.createElement("img");
    const imgHover = document.createElement("img");
    const contentContainner = document.createElement("div");
    const price = document.createElement("span");
    const contentWrapper = document.createElement("div");
    const nameWrapper = document.createElement("a");
    const name = document.createElement("h3");
    const iconWrapper = document.createElement("a");
    const icon = createIcon("heart", "product-card__icon");

    // Create Icons //

    // Add Class lists // 
    li.classList.add("collection__slide-item")
    card.classList.add("product-card");
    imgWrapper.classList.add("product-card__img-wrapper");
    img.classList.add("product-card__img");
    imgHover.classList.add("product-card__img", "product-card__img--hover");
    contentContainner.classList.add("product-card__content");
    price.classList.add("product-card__price");
    contentWrapper.classList.add("product-card__content-wrapper");
    nameWrapper.classList.add("product-card__name-wrapper");
    name.classList.add("product-card__name");
    iconWrapper.classList.add("product-card__icon-wrapper");
    
    // Set Attribute // 
    imgWrapper.href = `/product.html?id=${product.id}`
    img.setAttribute("src", product.images.main);
    img.setAttribute("alt", product.name);
    imgHover.setAttribute("src", product.images.front);
    imgHover.setAttribute("alt", product.name);
    nameWrapper.setAttribute("href", "#");
    iconWrapper.setAttribute("href", "#");
    iconWrapper.setAttribute("aria-label", "favourite");
    price.setAttribute("data-price", product.price);

    // Set Data // 
    card.dataset.id = product.id;
    icon.dataset.lucide = "heart";

    // Text Content //
    name.textContent = product.name;
    price.textContent = `${product.price.toLocaleString()} THB`;

    // Add Events Listener //
    imgWrapper.addEventListener("mouseenter", (e) => {
        const mainImg = imgWrapper.querySelector("img");
        mainImg.classList.add("product-card__img--fade");
    });

    imgWrapper.addEventListener("mouseleave", (e) => {
        const mainImg = imgWrapper.querySelector("img");
        mainImg.classList.remove("product-card__img--fade");
    });

    imgWrapper.addEventListener("click", (e) => {

    })

    // Appemd them //
    imgWrapper.append(img, imgHover);
    nameWrapper.append(name);
    iconWrapper.append(icon);
    contentWrapper.append(nameWrapper, iconWrapper);
    contentContainner.append(contentWrapper, price);
    card.append(imgWrapper, contentContainner);
    li.append(card);
    return li
}