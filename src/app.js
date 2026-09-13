import { createCollection } from "./ui/productCollection.js"
import { createProductCard } from "./ui/productCard.js"
import { renderCategory } from "./ui/productCategory.js"
import { getProducts } from "./data/products.js"
import { getCollectionData,
         getCollection } from "./data/collections.js"

// Get Products Data && Collections Data //
const products = getProducts()
const collectionData = getCollectionData()

// Get Array of Collection //
const collections = getCollection(products, collectionData)

// DOM Query //
const collectionList = document.querySelector(".collection-list")
collectionList.innerHTML = "";
const category = document.querySelector(".category");
category.innerHTML = "";

const handleDocumentLoaded = () => {

    // Render UIs //
    collections.forEach(collection => {

        // Render Collection // 
        const collectionItem = createCollection(collection);
        collectionList.append(collectionItem);

        // Render Product Card //
        const products = collection.products;
        const sliderListMap = document.querySelectorAll(".collection__slider");
        products.forEach(product => {
            const sliderItem = createProductCard(product);
            sliderListMap.forEach(sliderList => {
                sliderList.append(sliderItem);
            });
        });
    });

    // Add Events Listener Hover Card Interaction //
    const productImages = document.querySelectorAll(".product-card__img-wrapper");

    productImages.forEach(card => {
        card.addEventListener("mouseenter", (e) => {
            const classList = e.target.classList;
            if(classList !== "product-card__img-wrapper") { return }

            const mainImg = e.target.querySelector("img");
            console.log(mainImg)
            mainImg.classList.add("product-card__img--fade");
        });
        card.addEventListener("mouseleave", (e) => {
            const classList = e.target.classList;
            if(classList !== "product-card__img-wrapper") { return }

            const mainImg = e.target.querySelector("img");
            mainImg.classList.remove("product-card__img--fade");
        });
    });
};

document.addEventListener("DOMContentLoaded", handleDocumentLoaded)



