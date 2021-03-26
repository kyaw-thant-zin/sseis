// swiper.js
var mySwiper = new Swiper('.swiper-container.swiper-container01', {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  speed: 1000,
  allowTouchMove: false,
  slideToClickedSlide: false,
  preventClicksPropagation: false,
  preventClicks: false,
  simulateTouch: false,
  breakpoints: {
    767: {
      slidesPerView: 1,
    }
  }
});
var mySwiper = new Swiper('.swiper-container.swiper-container02', {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  speed: 1000,
  allowTouchMove: false,
  slideToClickedSlide: false,
  preventClicksPropagation: false,
  preventClicks: false,
  simulateTouch: false,
});
var mySwiper = new Swiper('.swiper-container.swiper-container03', {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  speed: 1000,
  allowTouchMove: false,
  slideToClickedSlide: false,
  preventClicksPropagation: false,
  preventClicks: false,
  simulateTouch: false,
});
var mySwiper = new Swiper('.swiper-container.swiper-container04', {
  loop: true,
  slidesPerView: 1,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
