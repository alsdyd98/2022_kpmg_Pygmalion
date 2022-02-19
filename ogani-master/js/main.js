/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        /* fetch Item json*/

        fetch('./item.json')
        .then(function(response){
            return response.json();})
        .then(function(json){
            let products = json;
            //console.log(products);
            loaditem(products)
        })
        .then(function(){
            $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
            var containerEl = document.querySelector('.featured__filter');
            var mixer = mixitup(containerEl);
            console.log(mixer)
            // mixer.filter('.apple')
    });
        })
        .catch(function(err){
            console.log('Fetch problem:' + err.message);});


    /*making products list*/
    
    function loaditem(products){
        for(let i = 0; i < products.length ; i++){
            let feature = document.createElement('div')
            let image = document.createElement('div')
            feature.setAttribute("class", "featured__item__text")
//image----------------------------------------------------------
            image.setAttribute("class", "featured__item__pic set-bg")
            image.setAttribute("data-setbg", products[i].img_dir)
            image.style.backgroundImage = products[i].img_dir
            let inner = document.createElement('ul')
            inner.setAttribute("class", "featured__item__pic__hover")

            inner.innerHTML += ('<ul class="featured__item__pic__hover"> ')
            inner.innerHTML += ('  <li><a href="#"><i class="fa fa-heart"></i></a></li>')
            inner.innerHTML += ('  <li><a href="#"><i class="fa fa-retweet"></i></a></li>')
            inner.innerHTML += ('  <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li></ul>')
            image.append(inner)
// feature------------------------------------------------------------
            let name = document.createElement('h6')
            name.append("'" + products[i].name + "'")
            //console.log(name)
            let price = document.createElement('h5')
            price.setAttribute('class', 'price')
            price.innerHTML = products[i].price + " $"

            let carbon = document.createElement('h5')
            carbon.setAttribute('class', 'carbon')
            carbon.style.display = "none"
            carbon.innerHTML = products[i].carbon +  'kg CO2eq'
            feature.append(name, price, carbon)
            //console.log(feature)

            let post = document.createElement('div')
            post.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 mix " + products[i].category)
            let container = document.createElement('div')
            container.setAttribute("class", "featured__item")
            container.append(image, feature)
            post.append(container)
            console.log(post)

            document.getElementById("product_box").append(post)

        }
    }    


        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter_carbon').on('click', function () {
            var x = document.getElementsByClassName('carbon');
            var y = document.getElementsByClassName('price');
                      
            if(document.getElementsByClassName('filter_carbon')[0].classList.contains('active')){
                $('.filter_carbon').removeClass('active');
                for(var i = 0; i < x.length; i++){
                    x[i].style.display = "";
                    y[i].style.display = "none";
                       
                }
            }
            else {
                $(this).addClass('active');

                for(var i = 0; i < x.length; i++){
                    x[i].style.display = "none";
                    y[i].style.display = "";
                    
                }}
        })


    // filter control        
        $('.featured__controls li').on('click', function () {
            $('.featured__controls li').removeClass('active');
            $(this).addClass('active');
            // mixer.filter('.apple')
        });

        // if ($('.featured__filter').length > 0) {
        //     var containerEl = document.querySelector('.featured__filter');
        //     var mixer = mixitup(containerEl);
        //     mixer.filter('.google')
        // }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

    /*--------------------------
        Latest Product Slider
    ----------------------------*/
    $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------------
        Product Discount Slider
    -------------------------------*/
    $(".product__discount__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            320: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 2,
            },

            992: {
                items: 3,
            }
        }
    });

    /*---------------------------------
        Product Details Pic Slider
    ----------------------------------*/
    $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.product__details__pic__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
            $('.product__details__pic__item--large').attr({
                src: imgurl
            });
        }
    });


    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

})(jQuery);