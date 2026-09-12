export function renderProductCard(product) {
    const slider = document.querySelector(".collection__slider");
    slider.innerHTML = "";

    // Create Elements //
    const li = document.createElement("li");
    const card = document.createElement("article");
    const imgWrapper = document.createElement("a");
    const img = document.createElement("img");
    const contentContainner = document.createElement("div");
    const price = document.createElement("span");
    const contentWrapper = document.createElement("div");
    const nameWrapper = document.createElement("a");
    const name = document.createElement("h3");
    const iconWrapper = document.createElement("a");
    const icon = document.createElement("svg");

    // Add Class lists // 
    li.classList.add("collection__slide-item")
    card.classList.add("product-card");
    imgWrapper.classList.add("product-card__img-wrapper");
    img.classList.add("product-card__img");
    contentContainner.classList.add("product-card__content");
    price.classList.add("product-card__price");
    contentWrapper.classList.add("product-card__content-wrapper");
    nameWrapper.classList.add("product-card__name-wrapper");
    name.classList.add("product-card__name");
    iconWrapper.classList.add("product-card__icon-wrapper");
    icon.classList.add("product-card__icon");
    
    // Set Attribute // 
    imgWrapper.setAttribute("href", "#");
    img.setAttribute("src", "/assets/image/products/p005/main.jpg");
    img.setAttribute("alt", "");
    nameWrapper.setAttribute("href", "#");
    iconWrapper.setAttribute("href", "#");
    iconWrapper.setAttribute("aria-label", "");
    price.setAttribute("data-price", 1790);

    // Set Data // 
    icon.dataset.lucide = "heart";

    // Text Content //
    name.textContent = "Double Layer Jersey Dress";
    price.textContent = "1,790 THB";

    // Appemd them //
    imgWrapper.append(img);
    nameWrapper.append(name);
    iconWrapper.append(icon);
    contentWrapper.append(nameWrapper, iconWrapper);
    contentContainner.append(contentWrapper, price);
    card.append(imgWrapper, contentContainner);
    li.append(card);
    slider.appendChild(li);
}