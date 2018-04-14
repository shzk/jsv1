(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){
    let tab = require('../parts/tab.js');
    let form = require('../parts/form.js');
    let modal = require('../parts/modal.js');
    let calc = require('../parts/calc.js');
    let scroll = require('../parts/scroll.js');
    let slider = require('../parts/slider.js');
    let timer = require('../parts/timer.js');

    tab();
    form();
    modal();
    calc();
    scroll();
    slider();
    timer();
});



























},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calc() {
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
};
module.exports = calc;
},{}],3:[function(require,module,exports){
function form() {
    let message = new Object();
    message.loading = "Зарузка";
    message.success = "Спасибо! Скоро мы с вами свяжемся";
    message.failure = "Что-то пошло не так";

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    //add some content if you wish
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            //clean up inputs
        }
    });
};
module.exports = form;
},{}],4:[function(require,module,exports){
function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.transform = '';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.transform = 'translateY(300%)';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
};
module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll() {
    let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
        speed = 0.7;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            let w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;  // URL с хэшем
                }
            }
        }, false);
    }
};
module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider() {
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n){
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            lideIndex = slides.length;
        };
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        };
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    };

    function plusSlides(n) {
        showSlides(slideIndex += n);
    };

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });
    next.addEventListener('click', function(){
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length +1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
};
module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for ( let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if ( tabContent[b].classList.contains('hide') ) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                } else {
                    hideTabContent(i);
                }
            }
        }
    });
};

module.exports = tab;

},{}],8:[function(require,module,exports){
function timer() {
    let deadline = '2018-04-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60),
            hours = Math.floor( (t/(1000*60*60)) % 24),
            days = Math.floor( (t/(1000*60*60*24)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'days' : days
        };
    }

    function setClock(id,endtime) {
        let timer = document.getElementById(id),
            timerDays = timer.querySelector('.days'),
            timerHours = timer.querySelector('.hours'),
            timerMinutes = timer.querySelector('.minutes'),
            timerSeconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            timerDays.innerHTML = t.days;
            timerHours.innerHTML = t.hours;
            timerMinutes.innerHTML = t.minutes;
            timerSeconds.innerHTML = t.seconds;
            if (t.total <= 0) {
                timerDays.innerHTML = 00;
                timerHours.innerHTML = 00;
                timerMinutes.innerHTML = 00;
                timerSeconds.innerHTML = 00;
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadline);
};
module.exports = timer;
},{}]},{},[1]);
