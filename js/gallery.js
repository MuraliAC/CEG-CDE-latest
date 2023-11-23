// gallery page

const titleContainers = document.querySelectorAll('.title-container');
const imageContainer = document.querySelector('.image-container');

// Define arrays for image names corresponding to each title
const imagesForTitles = [
    ["images/Workshop-SPSS/image (1).jpg", "images/Workshop-SPSS/image (2).jpg", "images/Workshop-SPSS/image (3).jpg", "images/Workshop-SPSS/image (4).jpg", "images/Workshop-SPSS/image (5).jpg", "images/Workshop-SPSS/image (6).jpg", "images/Workshop-SPSS/image (7).jpg", "images/Workshop-SPSS/image (8).jpg",
        "images/Workshop-SPSS/image (9).jpg", "images/Workshop-SPSS/image (10).jpg", "images/Workshop-SPSS/image (11).jpg", "images/Workshop-SPSS/image (12).jpg", "images/Workshop-SPSS/image (13).jpg", "images/Workshop-SPSS/image (14).jpg", "images/Workshop-SPSS/image (15).jpg", "images/Workshop-SPSS/image (16).jpg"],
    ["images/Inauguration/image (1).jpg", "images/Inauguration/image (2).jpg", "images/Inauguration/image (3).jpg", "images/Inauguration/image (4).jpg", "images/Inauguration/image (5).jpg", "images/Inauguration/image (6).jpg", "images/Inauguration/image (7).jpg", "images/Inauguration/image (8).jpg",
        "images/Inauguration/image (9).jpg", "images/Inauguration/image (10).jpg", "images/Inauguration/image (11).jpg", "images/Inauguration/image (12).jpg", "images/Inauguration/image (13).jpg", "images/Inauguration/image (14).jpg", "images/Inauguration/image (15).jpg", "images/Inauguration/image (16).jpg",
        "images/Inauguration/image (17).jpg", "images/Inauguration/image (18).jpg", "images/Inauguration/image (19).jpg", "images/Inauguration/image (20).jpg", "images/Inauguration/image (21).jpg", "images/Inauguration/image (22).jpg", "images/Inauguration/image (23).jpg", "images/Inauguration/image (24).jpg",
        "images/Inauguration/image (25).jpg", "images/Inauguration/image (26).jpg", "images/Inauguration/image (27).jpg", "images/Inauguration/image (28).jpg"]
];

// Function to create a thumbnail for each title
function createThumbnails() {
    titleContainers.forEach((container, index) => {
        const thumbnail = container.querySelector('.thumbnail');
        const firstImage = imagesForTitles[index][0];
        thumbnail.src = firstImage;
    });
}

// Function to display or remove images based on the selected title
function toggleImages(images, title) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    images.forEach((imageName) => {
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = imageName;
        imageContainer.appendChild(image);
    });

    // Insert the new image container after the clicked title
    titleContainers.forEach((container, index) => {
        if (container.querySelector('.title') === title) {
            // If the image container exists, remove it
            if (container.nextElementSibling && container.nextElementSibling.classList.contains('image-container')) {
                container.parentNode.removeChild(container.nextElementSibling);
            } else {
                // If the image container doesn't exist, create it and display images
                container.parentNode.insertBefore(imageContainer, container.nextSibling);
            }
        }
    });
}

// Add click event listeners to titles
titleContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        const title = container.querySelector('.title');
        toggleImages(imagesForTitles[index], title);
    });
});

// Initialize thumbnails
createThumbnails();