'use strict'

const playIntroVideoPlayer = () => {
    const playerWrapper = document.querySelector('.main-section-player--wrapper')
    const player = playerWrapper.querySelector('.main-section-player').contentWindow
    player.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
}

const stopIntroVideoPlayer = () => {
    const playerWrapper = document.querySelector('.main-section-player--wrapper')
    const player = playerWrapper.querySelector('.main-section-player').contentWindow
    player.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', "*");
}

const initIntroVideoPlayer = () => {
    const introPlayBtn = document.querySelector('.main-section__play--wrapper')
    introPlayBtn.addEventListener('click', playIntroVideoPlayer)
    const modal = introPlayBtn.parentNode.querySelector('.modal')
    const closeBtn = modal.getElementsByClassName('close')[0]
    closeBtn.addEventListener('click', stopIntroVideoPlayer)
}

const playELearnVideoPlayer = () => {
    const playerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    const player = playerWrapper.querySelector('.about-elearn-section-player').contentWindow
    playerWrapper.classList.add('visible')
    player.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
}

const pauseELearnVideoPlayer = () => {
    const playerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    const player = playerWrapper.querySelector('.about-elearn-section-player').contentWindow
    player.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
    if (playerWrapper.classList.contains('visible')) {
        playerWrapper.classList.remove('visible')
    }
}

const initELearnVideoPlayer = () => {
    const aboutELearnPlayBtn = document.querySelector('.about-elearn-section__play--wrapper')
    aboutELearnPlayBtn.addEventListener('click', playELearnVideoPlayer)
    const aboutELearnPlayerWrapper = document.querySelector('.about-elearn-section-player--wrapper')
    aboutELearnPlayerWrapper.addEventListener('mouseout', pauseELearnVideoPlayer)
}

const initModalWindowViewer = () => {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach(modalTrigger => {

        const modal = modalTrigger.parentNode.querySelector('.modal')

        const span = modal.getElementsByClassName('close')[0]

        modalTrigger.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
}

const putAccessCode = event => {
    const targetBlock = event.target
    const accessCode = targetBlock.parentNode.querySelector('#accessCode').value
    localStorage.setItem('accessCode', accessCode)
}

const initAccessCodeLocalStorage = () => {
    const submitBtn = document.querySelector('.access-form__submit-btn')
    submitBtn.addEventListener('click', putAccessCode)
}

const init = () => {
    initIntroVideoPlayer()
    initELearnVideoPlayer()
    initModalWindowViewer()
    initAccessCodeLocalStorage()
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