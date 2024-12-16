# week2-assignment

This is a walking skeleton for an accessible image gallery.

# Reflection for my Image Gallery:

================================================================

Introduction:
Building this image gallery was an eye-opening experience that required the use of HTML, CSS, and JavaScript. Through the problems and solutions I created, I gained a better understanding of responsive web design, JavaScript-driven DOM manipulation, and browser error debugging. This reflection outlines the project's essential steps, obstacles, and learnings.

Project Goals:
The primary purpose of this project was to construct a fully functional and responsive image gallery that dynamically loads images with scaled variations for better speed. In addition, I wanted to include accessibility features and ensure smooth navigation via keyboard inputs.

Challenges faced and Solutions Implemented

1. Dynamically loading resized images.

Challenge: At first, I battled with dynamically linking resized photos (e.g., -small.jpg, -medium.jpg, and -large.jpg) using the original image URLs in the images data array. Errors such as Failed parsing'srcset' attribute value occurred as a result of faulty path construction or missing files.

Solution: I fixed it by:

Creating srcset attributes dynamically with a baseName obtained from the original src.

To match the actual file structure in the /Images folder, replace all spaces in file names with underscores.

Checking that all resized photos exist and renaming them consistently.

Key Learning: Dynamically creating routes is a powerful method, but it demands painstaking attention to file naming and folder structure consistency.

2. Debugging 404 Errors

Problem: Many 404 (Not Found) problems occurred as a result of incorrect file locations or missing scaled images.

Solution:

I utilised browser developer tools (Network Tab) to find the wrong paths.

I updated the JavaScript logic to replace spaces with underscores and normalise file paths.

Renamed image files in the /Images folder to match dynamically created directories.

Key Learning: Debugging network requests is critical for detecting missing resources and resolving file path errors in dynamic applications.

3. Using srcset and \*\*sizes in responsive design

Challenge: In order to load photos of the right size for various screen sizes while preserving quality and performance, I had to build srcset and sizes.

Solution:

incorporated responsive features (sizes and srcset) for huge pictures and thumbnails.

made ensuring that larger photos used -medium.jpg or -large.jpg as needed, and that thumbnails loaded the smallest version (-small.jpg) by default.

used browser tools to test the implementation and confirm that the images loaded correctly.

Key Learning: srcset and sizes offer a practical means of optimising image loading, which improves responsiveness and speed.
