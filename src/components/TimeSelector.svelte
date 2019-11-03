<div class="time-selector-wrapper">
    <div class="time-unit">
        <label for="hours">HH</label>
        <button on:mousedown={() => {if($hh < 99) $hh++}}>▲</button>
        <input value={zeroFormating($hh)} type="number" id="hours" name="hours" min="00" max="24" required placeholder="00" readonly>
        <button on:click={() => {if($hh > 0) $hh--}}>▼</button>
    </div>
    <div class="time-unit">
        <label for="minutes">MM</label>
        <button on:click={() => {if($mm < 59) $mm++}}>▲</button>
        <input value={zeroFormating($mm)} type="number" id="minutes" name="minutes" min="00" max="59" placeholder="10" readonly>
        <button on:click={() => {if($mm > 0) $mm--}}>▼</button>
    </div>
    <div class="time-unit">
        <label for="seconds">SS</label>
        <button on:click={() => {if($ss < 59) $ss++}}>▲</button>
        <input value={zeroFormating($ss)} type="number" id="seconds" name="seconds" min="00" max="59" required placeholder="00" readonly>
        <button on:click={() => {if($ss > 0) $ss--}}>▼</button>
    </div>


</div>

<script>
    import {hh,mm,ss} from './stores.js';
    
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
        justify-content: center;
        // width: 100%;
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
        // justify-content: center
        button {
            font-size:3rem;
            // border:2px solid blue;
            // background: #222;
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