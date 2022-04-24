$(function(){
    $('.testimonial-section__slider').slick({
        prevArrow: false,
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./assets/images/testimonial/arrow-next.svg" alt=""></button>',
    });
});

$(document).ready(function(){
    $('.slick-btn').click(function(){
        var btn = $('.slick-btn').prop({disabled: true});
        $('.testimonial-section__assessment-content:nth-child(1)').slideToggle({
            duration: 500,
            complete: function() {
                btn.prop({disabled: false});
            }
        }); 
    });
    $('.slick-btn').click(function(){
        var btn = $('.slick-btn').prop({disabled: true});
        $('.testimonial-section__assessment-content:nth-child(2)').slideToggle({
            duration: 500,
            complete: function() {
                btn.prop({disabled: false});
            }
        });
    });
});