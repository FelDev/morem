<nav class="nav">
	<h1>Morem</h1>
	<button on:click={() => $currentScreen = "BurgerMenu"}>🍔</button>
</nav>

<script>
	import {currentScreen} from './stores.js';
</script>

<style lang="scss">
	nav {
		background: #2A2A2A;
		border-bottom: 2px solid var(--blue); 
		text-align: center;
		h1 {
			padding-top: 0.25rem;
			padding-bottom: 0.5rem;
		}
	}
	button {
		background: none;
		border: none;
		font-size: 2rem;
		position: absolute;
		right: 2px;
		top: 2px;
	}
</style>
