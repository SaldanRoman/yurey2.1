const preloader = document.querySelector('.preloader-img')
setTimeout(function () {
    preloader.parentElement.classList.add('transperant');
    setTimeout(function () {
        preloader.classList.add('move');
        setTimeout(function () {
            preloader.classList.add('invisible')
            preloader.parentElement.classList.add('invisible')
            preloader.parentElement.style.position = 'absolute'
        }, 300);
    }, 300);

}, 500);

document.querySelector('.gallery').addEventListener('click', function (event) {
    const numbOfImage = event.target.getAttribute('data');
    document.querySelectorAll('.carousel-item').forEach(function (element) {
        element.classList.remove('active')
    });
    document.querySelectorAll('.carousel-item')[numbOfImage].classList.add('active');
    document.getElementById('showCaruselButton').click()
})

$('.carousel').carousel({
    interval: 20000000
})