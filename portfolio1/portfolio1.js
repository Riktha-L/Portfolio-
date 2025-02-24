const image = document.querySelector('.portfolio-image');
    image.onerror = function() {
        console.error('Image failed to load:', image.src);
    };
