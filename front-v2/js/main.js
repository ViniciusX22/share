var scrollPosition = 60;
var burgerActive = windowScrolled = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(toggleNavbar);
    toggleNavBackground();
});

// Muda cor da navbar de acordo com a posição da barra de rolagem
$(window).on('scroll', toggleNavBackground);

function toggleNavbar() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    if (!windowScrolled) {
        if (burgerActive) {
            $(".navbar-burger").removeClass("is-active");
            $(".navbar-menu").removeClass("is-active");

            // Remove a classe scrolled nas classes navbar e navbar-item
            $(".navbar").removeClass('scrolled');
            $('.navbar-item').removeClass('scrolled-text');
            burgerActive = false;
            console.log(burgerActive);
        } else {
            $(".navbar-burger").addClass("is-active");
            $(".navbar-menu").addClass("is-active");

            // Adiciona a classe scrolled nas classes navbar e navbar-item
            $(".navbar").addClass('scrolled');
            $('.navbar-item').addClass('scrolled-text');
            burgerActive = true;
            console.log(burgerActive);

        }
    } else {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        burgerActive = !burgerActive;
        console.log(burgerActive);

    }
}

function toggleNavBackground() {
    if (isAtPosition() && !windowScrolled) {
        $(".navbar").addClass('scrolled');
        $('.navbar-item').addClass('scrolled-text');
        windowScrolled = true;
        console.log("Is position:", windowScrolled);
    } else if (!isAtPosition() && !burgerActive) {
        $(".navbar").removeClass('scrolled');
        $('.navbar-item').removeClass('scrolled-text');
        windowScrolled = false;
        console.log("!burguer:", windowScrolled);
    }
}

function isAtPosition() {
    return $(window).scrollTop() >= scrollPosition;
}

function goTo(section) {
    if ($(window).width() <= 1087)
        toggleNavbar();
    $('body').animate({
        scrollTop: $(section).offset().top - 80
    }, 1000);
    console.log($(section).offset());
}

function toggleModal() {
    $('#resultados').toggleClass('is-active');
    $('html').toggleClass('is-clipped');
}