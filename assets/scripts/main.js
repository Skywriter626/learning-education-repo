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
    const main = document.querySelector('.main-section-container')
    const modal = main.querySelector('.modal')
    const closeBtn = modal.getElementsByClassName('close')[0]
    closeBtn.addEventListener('click', stopIntroVideoPlayer)
    window.addEventListener('click', event => {
        if (event.target.classList.contains('modal')) {
            stopIntroVideoPlayer()
        }
    })
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
    const modalWindows = document.querySelectorAll('.modal')

    modalWindows.forEach(modalWindow => {

        const span = modalWindow.getElementsByClassName('close')[0]

        const modalTrigger = modalWindow.closest('section').querySelector('.modal-trigger')

        modalTrigger.onclick = function() {
            modalWindow.style.display = "block";
        }

        span.onclick = function() {
            modalWindow.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
            }
        }
    })
}

const putAccessCode = event => {
    const targetBlock = event.target
    const accessCode = targetBlock.parentNode.querySelector('#accessCode').value
    if (accessCode != "") {
        localStorage.setItem('accessCode', accessCode)
        const modalWindow = targetBlock.closest('.modal')
        modalWindow.style.display = "none"
    }
}

const initAccessCodeLocalStorage = () => {
    const submitBtn = document.querySelector('.access-form__submit-btn')
    submitBtn.addEventListener('click', putAccessCode)
}

const init = () => {
    initModalWindowViewer()
    initIntroVideoPlayer()
    initELearnVideoPlayer()
    initAccessCodeLocalStorage()
}

$(document).ready(function(){
	var slider = $('.testimonial-section__slider');
	slider.slick({
		autoplay: false,
	    dots: false,
	    infinite: true,
	    speed: 500,
	    fade: true,
	    cssEase: 'linear',
	    lazyLoad: 'ondemand',
	    controls: false,
	});
	var dot = $(".testimonial-section__assessment-content");
	slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
	    dot.removeClass("visible").eq(nextSlide).addClass("visible")
	});
	dot.on("click", function() {
	    var i = dot.index(this)
	    slider.slick("slickGoTo", i)
	});
	$(".slick-prev").remove();
    $(".slick-next").remove();
	$(".slick-btn").on("click", function() {
	    slider.slick("slickNext")
	})
});

window.addEventListener('DOMContentLoaded', init)