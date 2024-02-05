$(document).ready(function(){
    const carouseElement = $('#carousel-background');

    const carousel = new bootstrap.Carousel(carouseElement, {
        interval:4000,
        touch:false,
    })
})