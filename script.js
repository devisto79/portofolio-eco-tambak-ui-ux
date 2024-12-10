// Animasi saat scroll untuk elemen yang muncul
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
