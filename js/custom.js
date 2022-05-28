/*global $, alert, console*/

document.addEventListener('DOMContentLoaded', (event) => {
    $(function (){
        'use strict';

        //links add active class
        $('.navbar .navbar-collapse .navbar-nav .nav-item').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        //Adjust Slider Height
        var winH = $(window).height(),
            winW = $(window).width(),
            upH  = $('.upper-bar').innerHeight(),
            navH = $('.navbar').innerHeight();

        $('.slider , .carousel-item').height(winH - (upH + navH));

        //Featured work link add active class
        $('.featured-link li').click(function() {
            $(this).addClass('active').siblings().removeClass('active');

            if($(this).data('class') === 'all'){

                $('.featured-img .fimg').css('opacity' , 1).show(); //Show all image

            }else{
                /*$('.featured-img .col-6').hide();*/

                if (winW > 576) {
                                            
                    $('.featured-img .fimg').css('opacity' , '.07'); //Hide other image

                    $($(this).data('class')).css('opacity' , 1); //show this Featured's images

                } else {

                    $('.featured-img .fimg').css('display' , 'none'); //Hide other image

                    $($(this).data('class')).css('display' , 'block'); //show this Featured's images
                }
            }
        });

        
        /* Other things */
        // Add Scroll to Top the page
        // Select header
        const header = document.querySelector('.upper-bar');

        //create back to top a
        const goTop = document.createElement('a');

        //select a of goTop
        goTop.addEventListener('click' , e => {
            e.preventDefault();
            window.scrollTo({ 
                top: 0,
                left: 0, 
                behavior: 'smooth' 
            });
        });

        //set attributes of a
        goTop.href = '#top';
        goTop.id = 'back-to-top';
        goTop.textContent = '↑';
        goTop.title = "Back to top";
        goTop.style.cssText = 'display: none';

        //add event scroll to window to display goTop
        window.addEventListener('scroll' , e => {
            e.preventDefault();
            const headerTop = header.getBoundingClientRect().top;
    
            if (headerTop < 0) {
                goTop.style.cssText = 'display: block';
            }else {
                goTop.style.cssText = 'display: none';
            }
        });

        document.body.appendChild(goTop);
    });
});