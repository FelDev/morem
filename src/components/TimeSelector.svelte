<div class="time-selector-wrapper">
    
    <div id="startTime">
        <div class="time-unit">
            <label for="hours">HH</label>
            <button on:mousedown={() => {if($hhStartTime < 99) $hhStartTime++}}>▲</button>
            <input value={zeroFormating($hhStartTime)} type="number" id="hours" name="hours" min="00" max="24" required placeholder="00" readonly>
            <button on:click={() => {if($hhStartTime > 0) $hhStartTime--}}>▼</button>
        </div>
        <div class="time-unit">
            <label for="minutes">MM</label>
            <button on:click={() => {if($mmStartTime < 59) $mmStartTime++}}>▲</button>
            <input value={zeroFormating($mmStartTime)} type="number" id="minutes" name="minutes" min="00" max="59" placeholder="10" readonly>
            <button on:click={() => {if($mmStartTime > 0) $mmStartTime--}}>▼</button>
        </div>
        <div class="time-unit">
            <label for="seconds">SS</label>
            <button on:click={() => {if($ssStartTime < 59) $ssStartTime++}}>▲</button>
            <input value={zeroFormating($ssStartTime)} type="number" id="seconds" name="seconds" min="00" max="59" required placeholder="00" readonly>
            <button on:click={() => {if($ssStartTime > 0) $ssStartTime--}}>▼</button>
        </div>
    </div>

    <div id="dailyIncreaseChecker">
        <input id="dailyIncrease" type="checkbox" bind:checked={$dailyIncreaseIsOn}> 
        <label for="dailyIncrease" > Increase timer everyday? </label>
    </div>

    {#if $dailyIncreaseIsOn}
        <div id="dailyIncrease" transition:slide="{{delay: 50, duration: 600, easing: sineInOut }}">
            <div class="time-unit">
                <label for="hours">HH</label>
                <button on:mousedown={() => {if($hhDailyIncrease < 99) $hhDailyIncrease++}}>▲</button>
                <input value={zeroFormating($hhDailyIncrease)} type="number" id="hours" name="hours" min="00" max="24" required placeholder="00" readonly>
                <button on:click={() => {if($hhDailyIncrease > 0) $hhDailyIncrease--}}>▼</button>
            </div>
            <div class="time-unit">
                <label for="minutes">MM</label>
                <button on:click={() => {if($mmDailyIncrease < 59) $mmDailyIncrease++}}>▲</button>
                <input value={zeroFormating($mmDailyIncrease)} type="number" id="minutes" name="minutes" min="00" max="59" placeholder="10" readonly>
                <button on:click={() => {if($mmDailyIncrease > 0) $mmDailyIncrease--}}>▼</button>
            </div>
            <div class="time-unit">
                <label for="seconds">SS</label>
                <button on:click={() => {if($ssDailyIncrease < 59) $ssDailyIncrease++}}>▲</button>
                <input value={zeroFormating($ssDailyIncrease)} type="number" id="seconds" name="seconds" min="00" max="59" required placeholder="00" readonly>
                <button on:click={() => {if($ssDailyIncrease > 0) $ssDailyIncrease--}}>▼</button>
            </div>
        </div>
    {/if}

    <button class="basic" on:click={() => currentScreen.set("Meditation")}> <!-- on:click={() => $currentScreen = "Meditation"}   ça chie. aucune idée pourquoi. -->
        Start Meditation
    </button>
</div>

<script>
    import {timerStarted, hhStartTime, mmStartTime, ssStartTime, hhDailyIncrease, mmDailyIncrease, ssDailyIncrease, dailyIncreaseIsOn} from './stores.js';
    import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import {currentScreen} from './stores.js';

    function zeroFormating(value) {
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }
	
</script>

<style lang="scss">
	.time-selector-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        #startTime, #dailyIncreaseChecker, #dailyIncrease {
            display: flex;
            justify-content: center;
        }

        #dailyIncreaseChecker {
            font-size: 2rem;
            display: flex;
            // justify-content: center;
            align-items: center;
            input {
                margin-right: 1rem; 
            }
        }
    }
    .time-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        input {
            font-size:2rem;
            text-align: center;
        }
        
        button {
            font-size:3rem;
            background: none;
            border: none;
        }
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
        margin: 0; 
    }

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
</style>