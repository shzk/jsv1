window.addEventListener('DOMContentLoaded', function(){

    //tabs
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


    //Timer
    let deadline = '2018-04-11';

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
    };

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
        };

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);


    //scrolling
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
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    };


    //modal
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
    })







});