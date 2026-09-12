export function renderCategory(product) {
    const category = document.querySelector(".category");
    category.innerHTML = "";

    // Create Elements //
    const categoryItem = document.createElement("a");
    const img = document.createElement("img");
    const text = document.createElement("span");

    // Add Class lists //
    categoryItem.classList.add("category__item");
    img.classList.add("category__img");
    text.classList.add("category__text");

    // Set Attribute //
    categoryItem.setAttribute("href", "");
    img.setAttribute("src", "/assets/image/categories/accessories.jpg");
    img.setAttribute("alt", "");

    // Text Content // 
    text.textContent = "Men";

    // Append them //
    categoryItem.append(img, text);
    category.appendChild(categoryItem);
}