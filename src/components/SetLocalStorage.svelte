<script context="module">
    
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // * Maybe, just maybe, this should be in stores.js.
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    import {hhStartTime, mmStartTime, ssStartTime, hhDailyIncrease, mmDailyIncrease, ssDailyIncrease, dailyIncreaseIsOn} from './stores.js';    
    import { get } from 'svelte/store';

    export function setLocalStorage() {
        
        localStorage.setItem("appState", JSON.stringify({
            lastTime: (get(hhStartTime) * 60 * 60) + (get(mmStartTime) * 60) + get(ssStartTime), // seconds
            increase: (get(hhDailyIncrease) * 60 * 60) + (get(mmDailyIncrease) * 60) + get(ssDailyIncrease), // seconds
            dailyIncreaseIsOn: get(dailyIncreaseIsOn), // boolean for now, hours eventually?
            lastSession: Date.now()  // JS Date Object
        }))
    }

</script>