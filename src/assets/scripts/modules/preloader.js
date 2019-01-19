
const preloader = document.querySelector(".preloader");
const numPreloader = document.querySelector(".preloader__num");
const images = document.images;
const imagesCount = images.length;
const percent = 100 / imagesCount;
let counter = 0;

for (let i = 0; i < imagesCount; i++) {
    const img = images[i];
    const imgCopy = new Image();
    imgCopy.src = img.src;
    imgCopy.onload = imgLoad;
    imgCopy.onerror = imgLoad;
}

function imgLoad() {
    counter++;
    numPreloader.innerHTML = Math.round(percent * counter);
}

window.addEventListener("load", setStyle);

function setStyle() {
    setTimeout(() => {
    preloader.style.opacity = 0;
    }, 1500);

    setTimeout(() => {
    preloader.style.display = "none";
    }, 2000);
}
