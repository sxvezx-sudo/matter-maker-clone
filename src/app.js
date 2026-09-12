import { renderCollection } from "./ui/productCollection.js"
import { renderProductCard } from "./ui/productCard.js"
import { renderCategory } from "./ui/productCategory.js"

window.addEventListener("keyup", (e) => {
    if(e.key !== "Enter") { return };
    renderCollection()
    renderCategory()
})