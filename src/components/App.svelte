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
		{/if}

	</main>

	<Footer />

</div>

<script>
	import Nav from '@components/Nav';
	import Timer from '@components/Timer';
	import Footer from '@components/Footer';
	import TimeSelector from '@components/TimeSelector';
	import BurgerMenu from '@components/BurgerMenu';
	import {currentScreen} from './stores.js';
	
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
</style>
