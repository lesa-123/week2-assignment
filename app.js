console.log("test");

// To Do: I want to store my images
const images = [
  {
    src: "Images/Temple1.jpg",
    alt: "Monk walking up stone steps to a Japanese temple surrounded by lush green trees",
  },
  {
    src: "Images/Temple2.jpg",
    alt: "Visitors climbing large stone steps leading to a traditional Japanese temple gate with red pillars and green-tiled roof",
  },
  {
    src: "Images/statue.jpg",
    alt: "Large bronze Buddha statue in a meditative pose, surrounded by visitors and trees under a clear blue sky",
  },
  {
    src: "Images/statues.jpg",
    alt: "Close-up of intricately carved stone monk statues holding staffs, arranged in a row",
  },
  {
    src: "Images/Many statues.jpg",
    alt: "Collection of small stone monk statues holding offering bowls, arranged in neat rows",
  },
  {
    src: "Images/meigestuin.jpg",
    alt: "Japanese temple interior with a vibrant red circular window framing a scenic landscape and decorative lanterns hanging from the ceiling",
  },
  {
    src: "Images/hydrangeas.jpg",
    alt: "Close-up of a vibrant blue hydrangea flower surrounded by dark green leaves",
  },
  {
    scr: "Images/hokokuji.jpg",
    alt: "Tall green bamboo stalks in a dense bamboo grove surrounded by lush greenery",
  },
  {
    src: "Images/mnt fuji,jpg",
    alt: "Mount Fuji with a snow-capped peak reflected on a calm lake, framed by vibrant red maple leaves against a clear blue sky",
  },
  {
    src: "Images/kokomae crossing2.jpg",
    alt: "A person walking across a railroad in Kokomae crossing with yellow and black signal poles near the sea under a bright blue sky",
  },
  {
    src: "Images/kokomae crossing.jpg",
    alt: "Bustling railroad crossing in Kokomae Japan near the sea with people and vehicles waiting, and waves crashing under golden evening light",
  },
  {
    src: "Images/train passing1.jpg",
    alt: "A green and yellow train arriving at a platform in Kokomae Japan with the sea and golden sunset sky in the background",
  },
  {
    src: "Images/train passing2.jpg",
    alt: "A green and yellow train moving along a lush railway track surrounded by dense green foliage",
  },
];

// To Do: I want to create my thumnail images
// Select DOM elements being manipulated:
const thumbnailContainer = document.querySelector(".thumbnail-container");
const largeImageContainer = document.querySelector(".large-image-container");

// Function to create thumbnail images:
function createThumbnails(imagesArray) {
  //Loop through the array to create multiple thumbnails
  imagesArray.forEach((images) => {
    // create an image element
    const thumbnail = document.createElement("img");
    // Assign properties to the image element
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    // Add a class to style name
    thumbnail.className = "thumbnail";

    // Add an event listener for when the user clicks on the thumbnail
    thumbnail.addEventListener("click", () => {
      // call the events handler
      createLargeImagesHandler(image);
    });

    // Change the theumbnail image to the thumbnail container
    thumbnailContainer.appendChild(thumbnail);
  });
}

//Call the function to create thumbnails
createThumbnails(images);
