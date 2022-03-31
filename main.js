// Select a random div on the page
// Replace with a random student's image
const studentImage = document.createElement('img');
studentImage.setAttribute('src', `/assets/s1.png`);

const body = document.querySelector('body');
body.prepend(studentImage);

// When the image is clicked, display a joke
