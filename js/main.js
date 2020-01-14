//Overlay Menu
const openBtn = document.querySelector(".overlay-menu-img");
const closeBtn = document.querySelector(".overlay-menu-img-close");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector('.overlay-nav-menu');

openBtn.addEventListener("click", function (event) {
    event.preventDefault();
    openBtn.style.display = "none";
    closeBtn.style.transform = "scaleY(1)";
    nav.classList.add('focus-in-expand-fwd')

    if (window.matchMedia("(max-width: 539px)").matches) {
        overlay.style.left = "0px";
    } else {
        overlay.style.left = "0px";
    }
});

closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.left = "-100%";
    openBtn.style.display = "block";
    closeBtn.style.transform = "scaleY(0)";
    nav.classList.remove('focus-in-expand-fwd')
});

//JQuery

$(document).ready(function(){

    $(".overlay-nav-menu a").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $(".overlay-submenu-main").css({"display": "block"});
            if (window.matchMedia("(max-width: 991px)").matches) {
                /* The viewport is less than, or equal to, 700 pixels wide */
                $(".overlay-nav").css({"display": "none"})
            } else {
                $(".overlay-nav").css({"display": "block"})
            }
            resize()
        })
    });


    $( "body" ).on( "click", ".submenu-close", function() {
        $(".overlay-submenu-main").css({"display": "none"});
        $(".overlay-nav").css({"display": "block"})

        window.addEventListener('resize', function () {
            if (window.matchMedia("(max-width: 991px)").matches) {
                /* The viewport is less than, or equal to, 700 pixels wide */
                $(".overlay-nav").css({"display": "block"})
            }
        });
    });

    function resize() {
        window.addEventListener('resize', function () {
            if (window.matchMedia("(max-width: 991px)").matches) {
                /* The viewport is less than, or equal to, 700 pixels wide */
                $(".overlay-nav").css({"display": "none"})
            } else {
                $(".overlay-nav").css({"display": "block"})
            }
        });
    }



});
