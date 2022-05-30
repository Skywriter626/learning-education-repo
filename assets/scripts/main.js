'use strict'

const showELearnVideoPlayer = () => {
    const playerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    const player = playerWrapper.querySelector('.about-elearn-section-player').contentWindow
    playerWrapper.classList.add('visible')
    player.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
}

const stopELearnVideoPlayer = () => {
    const playerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    const player = playerWrapper.querySelector('.about-elearn-section-player').contentWindow
    player.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
    if (playerWrapper.classList.contains('visible')) {
        playerWrapper.classList.remove('visible')
    }
}

const initELearnVideoPlayer = () => {
    const aboutELearnPlayBtn = document.querySelector('.about-elearn-section__play--wrapper')
    aboutELearnPlayBtn.addEventListener('click', showELearnVideoPlayer)
    const aboutELearnPlayerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    aboutELearnPlayerWrapper.addEventListener('mouseout', stopELearnVideoPlayer)
}

const init = () => {
    initELearnVideoPlayer()
}


window.addEventListener('DOMContentLoaded', init)


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