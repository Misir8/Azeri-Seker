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




//Contact Page
const leftTriangle = document.querySelector(".triangle-left-blue");
const leftTriangleWhite = document.querySelector(".triangle-left-white");
const overlayContact = document.querySelector(".overlay-contact");
const rightTriangleBlue = document.querySelector(".triangle-right-blue");
const rightTriangleWhite = document.querySelector(".triangle-right-white");


if(rightTriangleBlue !== null || leftTriangle !== null ){
    leftTriangle.addEventListener("click", function () {
        leftTriangle.style.display = "none";
        leftTriangleWhite.style.display = "none";
        overlayContact.style.right = "0";
        rightTriangleBlue.style.display = "block";
        rightTriangleWhite.style.display = "block";
    });

    rightTriangleBlue.addEventListener("click", function () {
        leftTriangle.style.display = "block";
        leftTriangleWhite.style.display = "block";
        overlayContact.style.right = "-99%";
        rightTriangleBlue.style.display = "none";
        rightTriangleWhite.style.display = "none";
    });
}


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



    /* starts contact map */
    var marker = $('.marker');
    marker.css('display', 'none');
    if ($('#map').length > 0) {
        function initMap(getId) {
            if (document.getElementById(getId)) {
                let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
                let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));

                var location = { lat, lng };
                map = new google.maps.Map(document.getElementById(getId), {
                    zoom: 16,
                    disableDefaultUI: true,
                    center: location,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                marker = new google.maps.Marker({
                    map: map,
                    position: location,
                    animation: google.maps.Animation.DROP,
                    icon:`${marker[0].src}`,
                });
                marker.addListener('click', function() {
                    $('.contact_details').removeClass('dnonemobile');
                });
                marker.addListener('click', toggleBounce);
            }
        }
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        initMap("map");
        google.maps.event.addDomListener(window, "load", initMap);
    }

    /* ends contact map */



});


