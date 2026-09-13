export function createCollection(collectionData) {
    
    // Create Elements // 
    const collection = document.createElement("article");
    const collectionSlider = document.createElement("ul");
    const videoWrapper = document.createElement("a");
    const btn = document.createElement("span");
    let bannerMedia;
    if(collectionData.banner.video) {
        bannerMedia = document.createElement("video");
            bannerMedia.muted = true;
            bannerMedia.loop = true;
            bannerMedia.autoplay = true;
            bannerMedia.playsInline = true;
    }
    if(collectionData.banner.image) {
        bannerMedia = document.createElement("img");
    }

    // Add Class lists //
    collection.classList.add("collection__item");
    collectionSlider.classList.add("collection__slider");
    videoWrapper.classList.add("collection__video-wrap");
    bannerMedia.classList.add("collection__video");
    btn.classList.add("btn", "btn--muted");
    
    // Set Attributes //
    videoWrapper.setAttribute("href", "");
    bannerMedia.src = collectionData.banner.video ?? collectionData.banner.image

    // Text Contnet //
    btn.textContent = "Buy Now";

    // Set Data //
    collection.dataset.collectionId = collectionData.id

    // Append them //
    videoWrapper.append(bannerMedia, btn);
    collection.append(videoWrapper, collectionSlider);
    return collection
}