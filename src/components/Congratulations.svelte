<div id="congratulations">
    <h1 class="basic">Congratulations!</h1>
    <div>
        <h2>You sat for:</h2>
        <h2 class="time">{formatTime($lastSittingTime)}</h2>
    </div>
    <div>
        <h2 class="basic">Your next session's length will be:</h2>
        <h2 class="time">{formatTime(nextDuration)}</h2>
    </div>

</div>

<script>
    import {lastSittingTime, dailyIncreaseIsOn} from './stores.js';
    import {hhStartTime, mmStartTime, ssStartTime, hhDailyIncrease, mmDailyIncrease, ssDailyIncrease} from './stores.js';
    import {formatTime} from './FormatTime'
    
    let nextDuration = $ssStartTime + ($mmStartTime * 60) + ($hhStartTime * 60 * 60);

    if ($dailyIncreaseIsOn) {
        nextDuration = (($ssStartTime + $ssDailyIncrease) + (($mmStartTime + $mmDailyIncrease) * 60) + (($hhStartTime + $hhDailyIncrease) * 60 * 60));
    }
    
</script>

<style lang="scss">
    #congratulations {
        text-align: center;
        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(to right, #fc28a8, #03edf9) !important;
                opacity: 1;
                z-index: 6;
            }
        }
        div {
            margin-bottom: 1rem;

            h2 {
                font-size: 2rem;
                margin-bottom: 0.25rem;

                &.time {
                    color: var(--blue);
                    font-size: 2.2rem;
                }
            }
        }
    }
</style>