# week2-assignment

This is a walking skeleton for an accessible image gallery.

Reflection for my Image Gallery:

Introduction:
Developing and optimising the image gallery project has been an insightful journey. Through a combination of coding, debugging, and testing, I gained practical experience in implementing front-end development techniques and optimizing website performance. This project reinforced my understanding of HTML, CSS, and JavaScript fundamentals while also introducing me to performance optimization concepts and tools like Lighthouse.

Project Goals:
The primary purpose of this project was to construct a fully functional and responsive image gallery that dynamically loads images with scaled variations for better speed. In addition, I wanted to include accessibility features and ensure smooth navigation via keyboard inputs.

2. Key Challenges and Solutions
   Image Display Issues:

Challenge: Initially, images in my gallery were being repeated or not displaying correctly in different resolutions.

Solution: I dynamically constructed thumbnails and large images using JavaScript, ensuring no duplicates by clearing the container before appending new elements. Explicit width and height attributes were added to reserve space for images, reducing layout shifts.

Performance Optimisation:

Challenge: The Lighthouse audit identified several performance bottlenecks, including render-blocking resources, uncompressed text files, and improperly sized images.

Solution:

I inlined critical CSS to eliminate render-blocking styles and deferred non-critical styles using the media="print" attribute.
Gzip and Brotli compression techniques were researched to minimize text file sizes, (However i did not manage to impliment)
Images were resized using tools on VScode extensions.

Properly Sizing Images:

Challenge: Oversized images were increasing network payloads.

Solution: I utilised the <picture> element with srcset to deliver responsive images optimized for different screen sizes.

Largest Contentful Paint (LCP) and Layout Shifts:

Challenge: The LCP element (hero image) was loading too late, and layout shifts were occurring due to unreserved space for images.

Solution: I preloaded the LCP image and updated CSS to stabilize layouts by reserving space for containers and images with width, height, and min-height.
Accessibility Improvements

Challenge: Making the gallery user-friendly for people with disabilities.
Solution: I added ARIA roles, labels, and aria-live attributes to improve screen reader interactions. Keyboard navigation was implemented to allow users to browse images using arrow keys.
Render-Blocking Resources

Challenge: Lighthouse flagged my CSS and JavaScript as render-blocking resources.
Solution: Critical CSS was inlined directly in the <head>, and JavaScript files were deferred to load after the DOM was parsed.

3. Tools and Techniques Used
   Development Tools:
   VS Code Extensions for resizing images and live server testing.

Performance Optimization:
Google Lighthouse to identify and resolve performance issues like Largest Contentful Paint (LCP) and layout shifts.

Web Development Techniques:
Dynamically created image thumbnails and set responsive srcset attributes.
Inlined CSS for above-the-fold content and deferred JavaScript to reduce blocking resources.

4. Key Takeaways
   Performance is Key:

Preloading assets, reducing payload sizes, and serving next-gen image formats significantly enhanced the site's loading speed.
Explicitly setting image dimensions prevented layout shifts and improved user experience.
Accessibility is Fundamental:

Implementing ARIA attributes and keyboard navigation demonstrated how small adjustments could make a big difference for users with disabilities.
Continuous Testing and Debugging:

Debugging image rendering issues taught me the importance of carefully structuring code and testing across various scenarios.
Efficient Resource Management:

Minifying files, caching static assets, and optimizing images can have a significant impact on reducing load times.

5. Future Improvements
   Further Performance Enhancements:
   Investigate server-side rendering (SSR) or Content Delivery Networks (CDNs) for faster content delivery.

SEO Optimization:
Integrate structured data tags for better indexing by search engines.

User Interactivity:
Enhance the gallery with a slideshow feature or image captions.

6. References
   Coding Tools and Resources

MDN Web Docs:
Responsive Images
DOM Manipulation
Keyboard Events

Squoosh: Image Optimization Tool
CSSNano: CSS Minifier

Optimization Concepts:
Google Lighthouse: Web Performance
PageSpeed Insights
Accessibility Resources:
ARIA Roles and Accessibility Guidelines

Stack Overflow
Regex101
Added additional tools in my VScode extension for resizing images

Youtube videos:
https://youtu.be/4gcy-qT9kGw?si=qhSP1dpS4qdWaBFW

Conclusion
This project has given me valuable hands-on experience in creating a responsive, accessible, and high-performance web application. By addressing the issues identified through tools like Lighthouse, I’ve learned to build websites that are not only visually appealing but also technically efficient and inclusive. This journey has significantly enhanced my front-end development skills and taught me the importance of continuous testing and optimization.
