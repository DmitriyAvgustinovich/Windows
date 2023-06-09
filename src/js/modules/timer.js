const timer = (id, deadline) => {

    const addZero = (num) => {
        return num <= 9 ? '0' + num : num
    };

    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            days = Math.floor((total / (1000 * 60 * 60 * 24)));

        return { total, days, hours, minutes, seconds };
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds")

        const updateClock = () => {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            const timeInterval = setInterval(updateClock, 1000);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            }
        }

        updateClock();
    };

    setClock(id, deadline);
};

export { timer }