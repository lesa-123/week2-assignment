console.log("test");

console.log("Initializing Image Gallery");

// Image data array
const images = [
  {
    src: "./Images/Temple1.jpg",
    alt: "Monk walking up stone steps to a Japanese temple surrounded by lush green trees",
  },
  {
    src: "./Images/Temple2.jpg",
    alt: "Visitors climbing large stone steps leading to a traditional Japanese temple gate with red pillars and green-tiled roof",
  },
  {
    src: "./Images/statue.jpg",
    alt: "Large bronze Buddha statue in a meditative pose, surrounded by visitors and trees under a clear blue sky",
  },
  {
    src: "./Images/statues.jpg",
    alt: "Close-up of intricately carved stone monk statues holding staffs, arranged in a row",
  },
  {
    src: "./Images/Many_statues.jpg",
    alt: "Collection of small stone monk statues holding offering bowls, arranged in neat rows",
  },
  {
    src: "./Images/meigetsuin.jpg",
    alt: "Japanese temple interior with a vibrant red circular window framing a scenic landscape and decorative lanterns hanging from the ceiling",
  },
  {
    src: "./Images/hydrangeas.jpg",
    alt: "Close-up of a vibrant blue hydrangea flower surrounded by dark green leaves",
  },
  {
    src: "./Images/hokokuji.jpg",
    alt: "Tall green bamboo stalks in a dense bamboo grove surrounded by lush greenery",
  },
  {
    src: "./Images/mnt_fuji.jpg",
    alt: "Mount Fuji with a snow-capped peak reflected on a calm lake, framed by vibrant red maple leaves against a clear blue sky",
  },
  {
    src: "./Images/kokomae_crossing2.jpg",
    alt: "A person walking across a railroad in Kokomae crossing with yellow and black signal poles near the sea under a bright blue sky",
  },
  {
    src: "./Images/kokomae_crossing.jpg",
    alt: "Bustling railroad crossing in Kokomae Japan near the sea with people and vehicles waiting, and waves crashing under golden evening light",
  },
  {
    src: "./Images/train_passing1.jpg",
    alt: "A green and yellow train arriving at a platform in Kokomae Japan with the sea and golden sunset sky in the background",
  },
  {
    src: "./Images/train_passing2.jpg",
    alt: "A green and yellow train moving along a lush railway track surrounded by dense green foliage",
  },
];
// DOM Elements
const thumbnailContainer = document.querySelector(".thumbnail-container");
const largeImage = document.getElementById("large-image");
let currentImageIndex = 0;
// Function to create thumbnails dynamically
function createThumbnails(imagesArray) {
  // Clear existing thumbnails to avoid duplicates
  thumbnailContainer.innerHTML = "";
  imagesArray.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    // Dynamically construct the base name
    const baseName = image.src.replace(/\.[^/.]+$/, "").replace(/\s+/g, "_");
    // Set thumbnail attributes
    thumbnail.src = `${baseName}-small.jpg`;
    thumbnail.alt = image.alt;
    thumbnail.width = 120;
    thumbnail.height = 120;
    thumbnail.className = "thumbnail";
    thumbnail.setAttribute("loading", "lazy");
    // Add event listener to display large image
    thumbnail.addEventListener("click", () => {
      currentImageIndex = index;
      displayLargeImage(baseName, image.alt);
    });
    // Append thumbnail to the container
    thumbnailContainer.appendChild(thumbnail);
  });
}
// Function to display the large image
function displayLargeImage(baseName, alt) {
  largeImage.src = `${baseName}-large.jpg`;
  largeImage.alt = alt;
  largeImage.width = 1200;
  largeImage.height = 800;
}
// Keyboard navigation to switch images
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const baseName = images[currentImageIndex].src.replace(/\.[^/.]+$/, "");
    displayLargeImage(baseName, images[currentImageIndex].alt);
  } else if (event.key === "ArrowLeft") {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const baseName = images[currentImageIndex].src.replace(/\.[^/.]+$/, "");
    displayLargeImage(baseName, images[currentImageIndex].alt);
  }
});
// Initialize the gallery
createThumbnails(images);
displayLargeImage(images[0].src.replace(/\.[^/.]+$/, ""), images[0].alt);
