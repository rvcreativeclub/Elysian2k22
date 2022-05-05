



let loginForm = document.querySelector('.login-form');

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}

let countDate = new Date('may 09, 2022 00:00:00').getTime();
function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;


}

setInterval(function(){
    CountDown();
},1000)

function toggle(){
   document.getElementById("popup-1").classList.toggle("active");
}

var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".featured-slider", {
   spaceBetween: 10,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     450: {
       slidesPerView: 2,
     },
     768: {
       slidesPerView: 3,
     },
     1024: {
       slidesPerView: 4,
     },
   },
 });
 
 var swiper = new Swiper(".arrivals-slider", {
   spaceBetween: 10,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });
 
 var swiper = new Swiper(".blogs-slider", {
   spaceBetween: 10,
   grabCursor:true,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 });