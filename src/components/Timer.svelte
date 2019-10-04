<div id="timer">
	<h2>{time}</h2>
	<button on:click={toggle}>{buttonText}</button>
</div>

<script>

    const Timer = require('timer-machine')
    let myTimer = new Timer()
    let time = "00:00";
    let buttonText = "Start"
    myTimer.on('time', function (time) {
        msToTime(time)
    })

    function toggle() {
        myTimer.toggle()
        if(myTimer.isStarted()) {
            // myTimer.start()
            buttonText = "Pause"
        } else {
            // myTimer.stop()
            buttonText = "Start"

        }

    }

    setInterval(myTimer.emitTime.bind(myTimer), 250)
    
    function msToTime(duration) {
        let seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        if (hours == "00") {
            time = minutes + ":" + seconds;
        } else {
            time = hours + ":" + minutes + ":" + seconds;
        }
    }

</script>

<style lang="scss">
    
    #timer {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
    h2 {
        font-size: 5rem;
    }

	button {
		background: #2A2A2A;
        border: 0.3rem solid var(--blue);
        border-radius: 1rem;
        font-size: 2rem;
        font-weight: bold;
        margin-top: 2.5rem;
        padding:0.5rem 1rem;
	}
</style>
