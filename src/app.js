import { renderCollection } from "./ui/productCollection.js"
import { renderProductCard } from "./ui/productCard.js"
import { renderCategory } from "./ui/productCategory.js"
import { getProducts } from "./data/products.js"
import { getCollectionData,
         getCollection } from "./data/collections.js"

const products = getProducts()
const collectionData = getCollectionData()
console.log(getCollection(products, collectionData))

window.addEventListener("keyup", (e) => {
    if(e.key !== "Enter") { return };

    const slider = document.querySelector(".collection__slider");

    products.forEach(product => {
        const card = renderProductCard(product)
        slider.append(card)
    })
})

