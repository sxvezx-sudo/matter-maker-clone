export function createCollection(collectionData) {

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
    // video.play()

    // video.setAttribute("autoplay");
    // video.setAttribute("muted");
    // video.setAttribute("loop");
    // video.setAttribute("playsinline");

    // Text Contnet //
    btn.textContent = "Buy Now";

    // Set Data //
    collection.dataset.collectionId = collectionData.id

    // Append them //
    videoWrapper.append(video, btn);
    collection.append(videoWrapper, collectionSlider);
    return collection
}