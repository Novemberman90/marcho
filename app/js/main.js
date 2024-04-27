$(function() {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

    $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);

});

/* 
Тут смесь js и JQeiry
Нужно записвать это так
const deadline = $('.promo__clock').attr('data-time');
потому, что когда в админке пользователь дуте вводить дату окончания акции, нужно чтобы она попадала в js в записи html это должно выгдялеть так
<div class="promo__clock-item" data-time="'2024-05-25'">

и мы тогда в js получаем данные в виде атрибута
*/

/*
Такая запись не очень подходит .т.к. сайт будет подключаться к движку и бэк-эендер не сможет сюда добраться т.к. он работает с РНР
 const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); */