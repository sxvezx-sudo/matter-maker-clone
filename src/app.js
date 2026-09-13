import { createCollection } from "./ui/productCollection.js"
import { createProductCard } from "./ui/productCard.js"
import { renderCategory } from "./ui/productCategory.js"
import { getProducts } from "./data/products.js"
import { getCollectionData,
         getCollection } from "./data/collections.js"

const products = getProducts()
console.log(products)
const collectionData = getCollectionData()
console.log(collectionData)
const collections = getCollection(products, collectionData)
console.log(collections)
const collectionList = document.querySelector(".collection-list")
const category = document.querySelector(".category");

window.addEventListener("keyup", (e) => {
    if(e.key !== "Enter") { return };

    collections.forEach(col => {
        const collection = (createCollection(col))
        collectionList.append(collection);
        renderCategory()

        const products = col.products;
        const slider = collection.querySelector(".collection__slider");

        products.forEach(pd => {
            const card = createProductCard(pd);
            slider.append(card)
        })
    })
})


const sliderItem = document.querySelectorAll(".collection__slide-item");

sliderItem.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        const img = e.target.querySelector(".product-card__img");
        img.classList.add("product-card__img--fade");
        
    })
    item.addEventListener("mouseleave", (e) => {
        
    })
})