var scrollPosition = 60;
var burgerActive = windowScrolled = false;

$(document).ready(function() {
    // Atribuição de listenters para eventos dos elementos

    $(".navbar-burger").click(toggleNavbar);

    $('input[name=resposta]').change(toggleNomeSocial);

    toggleNavBackground();

    // Desce a página para a sessão especificada na URL
    if (location.href.endsWith('#sobre'))
        goTo('#sobre-area');
    else if (location.href.endsWith('#calendario'))
        goTo('#calendario-area');
});

// Muda cor da navbar de acordo com a posição da barra de rolagem
$(window).on('scroll', toggleNavBackground);

function toggleNavbar() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    if (!windowScrolled && !$('.navbar').hasClass('is-dark-green')) {
        if (burgerActive) {
            $(".navbar-burger").removeClass("is-active");
            $(".navbar-menu").removeClass("is-active");

            // Remove a classe scrolled nas classes navbar e navbar-item
            $(".navbar").removeClass('scrolled');
            $('.navbar-item').removeClass('scrolled-text');
            burgerActive = false;
        } else {
            $(".navbar-burger").addClass("is-active");
            $(".navbar-menu").addClass("is-active");

            // Adiciona a classe scrolled nas classes navbar e navbar-item
            $(".navbar").addClass('scrolled');
            $('.navbar-item').addClass('scrolled-text');
            burgerActive = true;

        }
    } else {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
        burgerActive = !burgerActive;

    }
}

function toggleNavBackground() {
    if (isAtPosition() && !windowScrolled || $('.navbar').hasClass('is-dark-green')) {
        $(".navbar").addClass('scrolled');
        $('.navbar-item').addClass('scrolled-text');
        windowScrolled = true;
    } else if (!isAtPosition() && !burgerActive && !$('.navbar').hasClass('is-dark-green')) {
        $(".navbar").removeClass('scrolled');
        $('.navbar-item').removeClass('scrolled-text');
        windowScrolled = false;
    }
}

function toggleNomeSocial(e) {
    console.log('mdou');
    if ($(e.target).val() == 'sim') {
        $("#nome-social").parent().css('display', 'block');
    } else {
        $("#nome-social").parent().css('display', 'none');
    }
}

function showFileName(e) {
    let filePath = $(e.target).val();
    let fileName = filePath.substring(filePath.lastIndexOf('\\')+1);
    $(e.target).parent().find('.file-name').text(fileName);
}

function isAtPosition() {
    return $(window).scrollTop() >= scrollPosition;
}

function goTo(section) {
    if ($(document).width() <= 1069) {
        toggleNavbar();
        console.log('mudo', $(window).width());
    }
    $('body').animate({
        scrollTop: $(section).offset().top - 80
    }, 1000);
}

function toggleModal() {
    $('#resultados').toggleClass('is-active');
    $('html').toggleClass('is-clipped');
}