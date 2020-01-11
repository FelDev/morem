<div class="app">
	
	<Nav />

	<main>
		{#if $currentScreen == "SelectTime"}
			<section 
				in:slide="{{delay: 300, duration: 250, easing: quintOut}}"
				out:slide="{{delay: 0, duration: 250, easing: quintOut}}"
			>
				<TimeSelector />
			</section>
		{:else if $currentScreen == "BurgerMenu"}
			<section 
				in:slide="{{delay: 300, duration: 250, easing: quintOut}}"
				out:slide="{{delay: 0, duration: 250, easing: quintOut}}"
			>

				<BurgerMenu />
			</section>
		{:else if $currentScreen == "Meditation"}
			<section 
				in:slide="{{delay: 300, duration: 250, easing: quintOut}}"
				out:slide="{{delay: 0, duration: 250, easing: quintOut}}"
			>
				<Timer />
			</section>
		{:else if $currentScreen == "About"}
			<section 
				in:slide="{{delay: 300, duration: 250, easing: quintOut}}"
				out:slide="{{delay: 0, duration: 250, easing: quintOut}}"
			>
				<About />
			</section>
		{:else if $currentScreen == "Congratulations"}
			<section 
				in:slide="{{delay: 300, duration: 250, easing: quintOut}}"
				out:slide="{{delay: 0, duration: 250, easing: quintOut}}"
			>
				<Congratulations />
			</section>
		{/if}

	</main>

	<Footer />

</div>

{#if $timerStarted}
	<div class="cloak" transition:fade="{{duration: 250, easing: quintOut}}"></div>
{/if}

<script>
	import Nav from '@components/Nav';
	import TimeSelector from '@components/TimeSelector';
	import BurgerMenu from '@components/BurgerMenu';
	import Timer from '@components/Timer';
	import About from '@components/About';
	import Footer from '@components/Footer';
	import Congratulations from '@components/Congratulations';
	import {currentScreen, timerStarted} from './stores.js';
	
	import { slide, fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<style lang="scss">
	.app {
		position: relative;
		min-height: 100vh;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
	}
	// section {
		// display: flex;
		// justify-content: center;
	// }

	.cloak {
		background: rgba(0, 0, 0, 0.5);
        position: fixed;
        width:100vw;
        height: 100vh;
		top: 0;		
		z-index: 100;
	}
</style>
