<div id="timer">
    <h2>{formatTime(timeToRun)}</h2>
    <button class="basic" on:click={toggle}>{buttonText}</button>
    <button class="basic" on:click={notifyEndOfMeditation} id="btnFinishEarly" class:timerStarted={$timerStarted}>Finish Early</button>
</div>

<script>
	// import TimeSelector from '@components/TimeSelector';
	import {timerStarted, hhStartTime,mmStartTime,ssStartTime} from './stores.js';
    import NoSleep from "NoSleep.js"
    var noSleep = new NoSleep();

    let buttonText = "Start";
    let timerPaused = false;
    let timer;
    let timeToRun = $ssStartTime + ($mmStartTime * 60) + ($hhStartTime * 60 * 60);
    timeToRun = timeToRun == 0 ? 60 * 5 : timeToRun; 
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

            if (timeToRun == 1) {
                notifyEndOfMeditation()
            } 
            if (timeToRun > 0) {
                timeToRun--;
            }
        }, 1000);

        buttonText = "Pause"
        noSleep.enable()
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
        timeToRun = 0;
        buttonText = "Start"
        clearInterval(timer);
        noSleep.disable();
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
    
    #btnFinishEarly {
        visibility: hidden;
        &.timerStarted {
            visibility: visible;
        }
    }
    
    #timer {
        display:flex;
        flex-direction: column;
        align-items: center;
		z-index: 200;
        position: relative;
    }

    h2 {
        font-size: 5rem;
    }

</style>
