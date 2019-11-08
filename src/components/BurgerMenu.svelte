<div id="burgerMenu">
    <h1>Main Menu</h1>
    <button class="basic" on:click={() => $currentScreen = "SelectTime"}>
        Select Timing
    </button>

    <button class="basic" on:click={() => $currentScreen = "Meditation"}>
        Start Meditation
    </button>

    <button class="basic" on:click={() => $currentScreen = "About"}>
        About
    </button>
</div>

<script>
	import {currentScreen} from './stores.js';
</script>

<style lang="scss">
    #burgerMenu {
        display: flex; // #TODO: basic flex class
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
    button {
        max-width: 50rem;
        width: 100%;
    }
</style>
