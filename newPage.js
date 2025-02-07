document.getElementById('revealButton').addEventListener('click', function() {
    var card = document.querySelector('.card');
    var imageContainer = document.querySelector('.image-container');

    // Add 'revealed' class to both the card and image
    card.classList.add('revealed');
    imageContainer.classList.add('revealed-image'); // This will move the image higher
});
