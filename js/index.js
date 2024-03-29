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


document.querySelectorAll('.checkboxCategory').forEach(checkbox => checkbox.addEventListener('click', check));

let sum = 0;
let a = 0;
let b = 0;
let c = 0;

const unchecked = document.querySelectorAll('.unchecked');
const checked = document.querySelectorAll('.checked');

function check() {
    if (document.getElementById("categoryLeading").checked === true) {
        a = 400;
        unchecked[0].style.display = 'none';
        checked[0].style.display = 'flex';
    } else {
        a = 0;
        unchecked[0].style.display = 'block';
        checked[0].style.display = 'none';
    }

    if (document.getElementById("categoryParodist").checked === true) {
        b = 165;
        unchecked[1].style.display = 'none';
        checked[1].style.display = 'flex';
    } else {
        b = 0;
        unchecked[1].style.display = 'block';
        checked[1].style.display = 'none';
    }

    if (document.getElementById("categoryDj").checked === true) {
        c = 300;
        unchecked[2].style.display = 'none';
        checked[2].style.display = 'flex';
    } else {
        c = 0;
        unchecked[2].style.display = 'block';
        checked[2].style.display = 'none';
    }

    if (document.getElementById("categoryDj").checked === true && document
        .getElementById("categoryParodist").checked === true && document
        .getElementById("categoryLeading").checked === true) {
        sum = 800;
    } else {
        sum = a + b + c;
    }
    document.querySelector('#summary').value = sum;
    document.querySelector('#price').innerText = `Ціна: ${sum} $`;
}



function validateForm(data) {
    if (data.phone != null && data.phone.value.length == 0) {
        alert('Заповніть поля !');
        return false;
    }
    if (document.getElementById("categoryDj").checked === false && document
        .getElementById("categoryParodist").checked === false && document
        .getElementById("categoryLeading").checked === false) {
        alert('Заповніть поля !');
        return false;
    }
}