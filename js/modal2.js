const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const closeButton = document.getElementById("closeButton");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// ===== 各ギャラリー =====

const alicellImages = [
  "img/alicell/alicell.png",
  "img/alicell/alicell2.png",
  "img/alicell/alicell3.png",
];

const hiroImages = ["img/hiro/hiro.png", "img/hiro/hiro2.png"];

const kisaragirennImages = [
  "img/kisaragirenn/kisaragirenn.png",
  "img/kisaragirenn/kisaragirenn2.png",
  "img/kisaragirenn/kisaragirenn3.png",
];

// 現在表示中の画像リスト
let images = [];
let currentImage = 0;

// ===== 開く処理 =====

function openViewer(imageList) {
  images = imageList;
  currentImage = 0;

  viewer.style.display = "flex";
  viewerImage.src = images[currentImage];

  createThumbnails();
}

// ===== カードクリック =====

document.getElementById("alicell").addEventListener("click", () => {
  openViewer(alicellImages);
});

document.getElementById("hiro").addEventListener("click", () => {
  openViewer(hiroImages);
});

document.getElementById("kisaragirenn").addEventListener("click", () => {
  openViewer(kisaragirennImages);
});

// ===== 次へ =====

nextButton.addEventListener("click", (event) => {
  event.stopPropagation();

  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  viewerImage.src = images[currentImage];
  createThumbnails();
});

// ===== 前へ =====

prevButton.addEventListener("click", (event) => {
  event.stopPropagation();

  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  viewerImage.src = images[currentImage];
  createThumbnails();
});

// ===== 閉じる =====

closeButton.addEventListener("click", () => {
  viewer.style.display = "none";
});

// 背景クリック
viewer.addEventListener("click", () => {
  viewer.style.display = "none";
});

// 画像クリックでは閉じない
viewerImage.addEventListener("click", (event) => {
  event.stopPropagation();
});

// ===== サムネイル =====

function createThumbnails() {
  thumbnailContainer.innerHTML = "";

  images.forEach((image, index) => {
    const thumbnail = document.createElement("img");

    thumbnail.src = image;
    thumbnail.classList.add("thumbnail");

    if (index === currentImage) {
      thumbnail.classList.add("active");
    }

    thumbnail.addEventListener("click", (event) => {
      event.stopPropagation();

      currentImage = index;
      viewerImage.src = images[currentImage];

      createThumbnails();
    });

    thumbnailContainer.appendChild(thumbnail);
  });
}
