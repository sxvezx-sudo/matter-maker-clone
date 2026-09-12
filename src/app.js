import { renderProductCard,
         renderCategory } from "./ui/matter-maker-ui.js"

window.addEventListener("keyup", (e) => {
    if(e.key !== "Enter") { return };
    renderProductCard()
    renderCategory()
})