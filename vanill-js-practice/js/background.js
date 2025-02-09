const images = ["0.jpg", "1.jpg", "2.jpg"];

const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;

document.body.appendChild(bgImage);
