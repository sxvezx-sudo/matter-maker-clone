import { renderProductCard } from "./productCard.js"

export function renderCollection(collectionData) {
    const collectionList = document.querySelector(".collection-list");
    collectionList.innerHTML = "";

    // Create Elements // 
    const collection = document.createElement("article");
    const collectionSlider = document.createElement("ul");
    const videoWrapper = document.createElement("a");
    const video = document.createElement("video");
    const btn = document.createElement("span");

    // Add Class lists //
    collection.classList.add("collection__item");
    collectionSlider.classList.add("collection__slider");
    videoWrapper.classList.add("collection__video-wrap");
    video.classList.add("collection__video");
    btn.classList.add("btn", "btn--muted");
    
    // Set Attributes //
    videoWrapper.setAttribute("href", "");
    video.setAttribute("src", "/assets/video/haunteddollhouse.mp4");
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.play()

    // video.setAttribute("autoplay");
    // video.setAttribute("muted");
    // video.setAttribute("loop");
    // video.setAttribute("playsinline");

    // Text Contnet //
    btn.textContent = "Buy Now";

    // Append them //
    videoWrapper.append(video,btn);
    collection.append(videoWrapper, collectionSlider);
    collectionList.appendChild(collection);
    renderProductCard()
}

            // <div class="collection-list">
            //     <article class="collection">

            //         <a href="#" class="collection__video-wrap">
            //             <video src="/assets/video/haunteddollhouse.mp4" class="collection__video" autoplay muted loop playsinline></video>
            //             <span class="btn btn--muted">Buy Now</span>
            //         </a>

            //     </article>
            // </div>