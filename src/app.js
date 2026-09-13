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
        const sliderListMap = collectionItem.querySelectorAll(".collection__slider");
        products.forEach(product => {
            const sliderItem = createProductCard(product);
            sliderListMap.forEach(sliderList => {
                sliderList.append(sliderItem);
            });
        });
    });
};

document.addEventListener("DOMContentLoaded", handleDocumentLoaded)
