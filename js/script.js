const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")
const body = document.body;

burger.addEventListener("click", burgerHandler);
popup.addEventListener("click", (e) => {
    burgerHandler(e);
});



function burgerHandler(e) {

    if (popup.classList.contains('open')) {
        popup.classList.add('close')
        body.classList.remove('noscroll');
        popupSlide.classList.add('slideout');

        setTimeout(() => {
            popup.classList.remove('close');
            popup.classList.remove('open');
            popupSlide.classList.remove('slideout');
            popupSlide.classList.remove('slidein');
        }, 300);

    } else {
        body.classList.add('noscroll');
        popup.classList.add("open");
        popupSlide.classList.add("slidein")

    }
    burger.classList.toggle('active');
}

var nav = document.querySelector("nav");
var stop = (nav.offsetTop);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (window.innerWidth >= 900) {
        if (scrollTop >= stop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

}

const worker = document.querySelectorAll('#worker');
const links = document.querySelectorAll('#links');
if (window.innerWidth >= 860) {
    worker.forEach(function (e, id) {
        e.addEventListener("mouseenter", () => {
            links.forEach(elem => {
                elem.classList.remove('active');
                elem.classList.remove('opacity');

            });
            links[id].classList.add('active');
            setTimeout(() => {
                links[id].classList.add('opacity');

            }, 20);
        });
    });
}
else {
    links.forEach(elem => {
        elem.classList.add('active');
        elem.classList.add('opacity');

    });
}