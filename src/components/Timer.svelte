<div id="timer">
	<h2>{$timerStarted ? formatTime(timeToRun) : "--:--"}</h2>
	<button class="basic" on:click={toggle}>{buttonText}</button>
    <button class="basic" on:click={stop} id="btnFinishEarly" class:timerStarted={$timerStarted}>Finish Early</button>
    
</div>

<script>
	// import TimeSelector from '@components/TimeSelector';
	import {timerStarted, hhStartTime,mmStartTime,ssStartTime} from './stores.js';

    let buttonText = "Start";
    // let timerStarted = false;
    let timerPaused = false;
    let timer;
    let timeToRun = 0;

    function setTimer() {
        if ($timerStarted) {
            return;
        }
        $timerStarted = true;
        timeToRun = $ssStartTime + ($mmStartTime * 60) + ($hhStartTime * 60 * 60)

        timer = setInterval(() => {
            if (timerPaused) {
                return;
            }

            if (timeToRun == 0) {
                notifyEndOfMeditation()
            } else {
                timeToRun--;
            }
        }, 1000);

        buttonText = "Pause"
        return
    }

    function notifyEndOfMeditation() {
        let audio = new Audio("./assets/sounds/zen_temple_bell.mp3");
        audio.play(); // Uncaught (in promise) DOMException en prod ici... 🤔
        stop();
        console.log('@notifyEndOfMeditation');
        // alert(`Thank yourself. You sat for ${formatTime($ssStartTime + ($mmStartTime * 60) + ($hhStartTime * 60 * 60))}`)
        
    }

    function toggle() {
        console.log('@toggle');
        if(!$timerStarted) {
            return setTimer()
        }
        
        timerPaused = !timerPaused
        
        if(timerPaused) {
            buttonText = "Start"
        } else {
            buttonText = "Pause"
        }
        
    }

    function stop() {
        if (!$timerStarted) {
            return;
        }
        $timerStarted = false;
        buttonText = "Start"
        clearInterval(timer);

    }

    function formatTime(seconds) {
        let hours = Math.floor(seconds / 3600);
        seconds -= hours*3600;
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes*60;

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if (hours == "00") return minutes+':'+seconds;
        return hours+':'+minutes+':'+seconds;
    }

    // #DELETE
    function msToTime(duration) {
        // console.log('@ss: ', ss);
        
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

    #btnFinishEarly {
        visibility: hidden;
        &.timerStarted {
            visibility: visible;
        }
    }
</style>
