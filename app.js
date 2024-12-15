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
    src: "./Images/Many statues.jpg",
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
    src: "./Images/mnt fuji.jpg",
    alt: "Mount Fuji with a snow-capped peak reflected on a calm lake, framed by vibrant red maple leaves against a clear blue sky",
  },
  {
    src: "./Images/kokomae crossing2.jpg",
    alt: "A person walking across a railroad in Kokomae crossing with yellow and black signal poles near the sea under a bright blue sky",
  },
  {
    src: "./Images/kokomae crossing.jpg",
    alt: "Bustling railroad crossing in Kokomae Japan near the sea with people and vehicles waiting, and waves crashing under golden evening light",
  },
  {
    src: "./Images/train passing1.jpg",
    alt: "A green and yellow train arriving at a platform in Kokomae Japan with the sea and golden sunset sky in the background",
  },
  {
    src: "./Images/train passing2.jpg",
    alt: "A green and yellow train moving along a lush railway track surrounded by dense green foliage",
  },
];

// DOM Elements
const thumbnailContainer = document.querySelector(".thumbnail-container");
const largeImage = document.getElementById("large-image");

// Create thumbnails dynamically
function createThumbnails(imagesArray) {
  imagesArray.forEach((image) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.srcset = `
        ${image.src.replace(".jpg", "-small.jpg")} 480w,
        ${image.src.replace(".jpg", "-medium.jpg")} 768w,
        ${image.src.replace(".jpg", "-large.jpg")} 1200w
      `;
    thumbnail.sizes =
      "(max-width: 480px) 100px, (max-width: 768px) 200px, 400px";
    thumbnail.alt = image.alt;
    thumbnail.className = "thumbnail";

    // Event listener to display the large image
    thumbnail.addEventListener("click", () => {
      displayLargeImage(image);
    });

    thumbnailContainer.appendChild(thumbnail);
  });
}

// Display large image with srcset
function displayLargeImage(image) {
  largeImage.src = image.src;
  largeImage.srcset = `
      ${image.src.replace(".jpg", "-small.jpg")} 480w,
      ${image.src.replace(".jpg", "-medium.jpg")} 768w,
      ${image.src.replace(".jpg", "-large.jpg")} 1200w
    `;
  largeImage.sizes = "(max-width: 768px) 80vw, 100vw";
  largeImage.alt = image.alt;
}

// Initialise the gallery
createThumbnails(images);
// Show the first image by default
displayLargeImage(images[0]);
