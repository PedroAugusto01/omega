(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

function calculateTotal() {
    let BRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    let item_price = {}
    let priceFal = parseInt($("#price_fal").val() , 10);
    let priceG36 = parseInt($("#price_g36").val() , 10);
    let priceHk = parseInt($("#price_hk").val() , 10);
    let priceM4a4 = parseInt($("#price_m4a4").val() , 10);
    let priceMtar = parseInt($("#price_mtar").val() , 10);
    let priceAk47 = parseInt($("#price_ak47").val() , 10);
    let priceNavy = parseInt($("#price_navy").val() , 10);
    let priceMachine = parseInt($("#price_machine").val() , 10);
    let priceFive = parseInt($("#price_five").val() , 10);

    let qtdFal = parseInt($("#qtd_fal").val() , 10);
    let qtdG36 = parseInt($("#qtd_g36").val() , 10);
    let qtdHk = parseInt($("#qtd_hk").val() , 10);
    let qtdM4a4 = parseInt($("#qtd_m4a4").val() , 10);
    let qtdMtar = parseInt($("#qtd_mtar").val() , 10);
    let qtdAk47 = parseInt($("#qtd_ak47").val() , 10);
    let qtdNavy = parseInt($("#qtd_navy").val() , 10);
    let qtdMachine = parseInt($("#qtd_machine").val() , 10);
    let qtdFive = parseInt($("#qtd_five").val() , 10);

    let totalFal = document.getElementById("falTotalMuniCalc");
    let totalG36 = document.getElementById("g36TotalMuniCalc");
    let totalHk = document.getElementById("hkTotalMuniCalc");
    let totalM4a4 = document.getElementById("m4a4TotalMuniCalc");
    let totalMtar = document.getElementById("mtarTotalMuniCalc");
    let totalAk47 = document.getElementById("ak47TotalMuniCalc");
    let totalNavy = document.getElementById("navyTotalMuniCalc");
    let totalMachine = document.getElementById("machineTotalMuniCalc");
    let totalFive = document.getElementById("fiveTotalMuniCalc");


    item_price.fal = priceFal * qtdFal;
    totalFal.innerText = `${BRL.format(item_price.fal)}`

    item_price.g36 = priceG36 * qtdG36;
    totalG36.innerText = `${BRL.format(item_price.g36)}`

    item_price.hk = priceHk * qtdHk;
    totalHk.innerText = `${BRL.format(item_price.hk)}`

    item_price.m4a4 = priceM4a4 * qtdM4a4;
    totalM4a4.innerText = `${BRL.format(item_price.m4a4)}`

    item_price.mtar = priceMtar * qtdMtar;
    totalMtar.innerText = `${BRL.format(item_price.mtar)}`

    item_price.ak47 = priceAk47 * qtdAk47;
    totalAk47.innerText = `${BRL.format(item_price.ak47)}`

    item_price.navy = priceNavy * qtdNavy;
    totalNavy.innerText = `${BRL.format(item_price.navy)}`

    item_price.machine = priceMachine * qtdMachine;
    totalMachine.innerText = `${BRL.format(item_price.machine)}`

    item_price.five = priceFive * qtdFive;
    totalFive.innerText = `${BRL.format(item_price.five)}`

    let totalQuantidade = qtdFal + qtdG36 + qtdHk + qtdM4a4 + qtdMtar + qtdAk47 + qtdNavy + qtdMachine + qtdFive;
    let totalPrice = item_price.fal + item_price.g36 + item_price.hk + item_price.m4a4 + item_price.mtar + item_price.ak47 + item_price.navy  + item_price.machine + item_price.five;

    $("#total_value_quantidade").text(totalQuantidade);
    $("#total_value").text(BRL.format(totalPrice));
}