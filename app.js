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
    thumbnail.alt = image.alt;
    thumbnail.className = "thumbnail";

    // Event listener to display the large image
    thumbnail.addEventListener("click", () => {
      displayLargeImage(image);
    });

    thumbnailContainer.appendChild(thumbnail);
  });
}

// Display large image
function displayLargeImage(image) {
  largeImage.src = image.src;
  largeImage.alt = image.alt;
}

// Initialize the gallery
createThumbnails(images);
displayLargeImage(images[0]); // Show the first image by default
