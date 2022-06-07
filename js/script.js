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
    worker.forEach(function (e) {
        e.addEventListener("mouseleave", () => {
            links.forEach(elem => {
                elem.classList.remove('active');
                elem.classList.remove('opacity');
            });
        });
    });
}
else {
    links.forEach(elem => {
        elem.classList.add('active');
        elem.classList.add('opacity');

    });
}


const myBut = $(".explore_button");
// console.log(myBut);
myBut.on("click", function () {
    $(".modal").fadeIn();
    $(".modal-text").html($(this).parent().parent().children(".explore_content_text-part").children("h3, .explore_item_sub_text").clone());
});
// console.log(myBut.parent().parent().children(".explore_content_text-part").children("h3"));


$(".close, .modal").on("click", function (event) {
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
        $(".modal").fadeOut();
        // console.log(event.target);
    }
    // console.log($(".modal"));
    // console.log($(".modal-content").html());


});
const smallModal = document.querySelector(".small_test_modal");
$(".copy_button").on("click", function () {
    navigator.clipboard.writeText($(this).parent().children(".modal-text").children(".explore_item_sub_text").text());
    // console.log($(".copy_button").parent().children(".modal-text").children(".explore_item_sub_text").text());
    smallModal.classList.add("small_test_modal_active");
    setTimeout(() => {
        smallModal.classList.remove("small_test_modal_active");

    }, 1000);
});
// console.log($(".copy_button").parent().children(".modal-text").children(".explore_item_sub_text").text());
// .children(".explore_item_sub_text").innerText)
