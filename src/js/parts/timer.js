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