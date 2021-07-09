jQuery(window).scroll(function () {
    $("section").each(function (t, e) {
        var n = $(e).offset().top - 300,
            a = n + $(e).height(),
            i = $(window).scrollTop(),
            e = $(e).attr("id");
        n < i && i < a && ($("a.active").removeClass("active"), $('a[href="#' + e + '"]').addClass("active"));
    });
}),
    $(".it-mobile-menu").on("click", function () {
        $(".it-navbar").addClass("it-navbar_open");
    }),
    $(".it-mobile-close").on("click", function () {
        $(".it-navbar").removeClass("it-navbar_open");
    }),
    $(".it-navbar__link").on("click", function () {
        $(".it-navbar").removeClass("it-navbar_open");
    }),
    $(".it-button_white").on("click", function () {
        $(".modal").addClass("modal--open");
    }),
    $(".modal-close").on("click", function () {
        $(".modal").removeClass("modal--open");
    }),
    $(".it-navbar").on("click", "a", function (t) {
        t.preventDefault();
        (t = $(this).attr("href")), (t = $(t).offset().top - 200);
        $("body,html").animate({ scrollTop: t }, 800);
    });
    $('.sections').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });
    function num(value){
        $('.sections').slick('slickGoTo', value)
    }
      
    $('.it-card__item').on('click', function(){
        $('.it-card__item').removeClass('it-card__item_active');
        $(this).addClass('it-card__item_active');
    })
const elem = document.getElementById("it_map_1"),
    elem1 = document.getElementById("it_map_2"),
    elem2 = document.getElementById("it_map_3");
document.addEventListener("scroll", function () {
    var t = elem.getBoundingClientRect().top + 200,
        e = elem1.getBoundingClientRect().top - 450,
        n = elem2.getBoundingClientRect().top;
    elem.classList.toggle("it-map__item_active", t + elem.clientHeight <= window.innerHeight && 450 <= t),
        elem1.classList.toggle("it-map__item_active", e <= 0),
        elem2.classList.toggle("it-map__item_active", n + elem2.clientHeight <= window.innerHeight && 0 <= n);
}),
    window.addEventListener("DOMContentLoaded", function () {
        var l;
        function t(t) {
            t.keyCode && (l = t.keyCode), this.selectionStart < 3 && t.preventDefault();
            var e = "+7 (___) ___-__-__",
                n = 0,
                a = e.replace(/\D/g, ""),
                i = this.value.replace(/\D/g, ""),
                o = e.replace(/[_\d]/g, function (t) {
                    return n < i.length ? i.charAt(n++) || a.charAt(n) : t;
                });
            -1 != (n = o.indexOf("_")) && (n < 5 && (n = 3), (o = o.slice(0, n)));
            e = e
                .substr(0, this.value.length)
                .replace(/_+/g, function (t) {
                    return "\\d{1," + t.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            (!(e = new RegExp("^" + e + "$")).test(this.value) || this.value.length < 5 || (47 < l && l < 58)) && (this.value = o), "blur" == t.type && this.value.length < 5 && (this.value = "");
        }
        var e = document.querySelector("#tel1");
        e.addEventListener("input", t, !1), e.addEventListener("focus", t, !1), e.addEventListener("blur", t, !1), e.addEventListener("keydown", t, !1);
    });
