<nav class="nav">
	<h1>Morem</h1>
	<button on:click={showMenu}>🍔</button>
</nav>

<script>

	function showMenu() {
		console.log('@yayyy');
	}
</script>

<style lang="scss">
	nav {
		background: #2A2A2A;
		border-bottom: 2px solid var(--blue); 
		text-align: center;
		// display: flex;
		// justify-content: flex-end;
		h1 {
			font-size: 2.5rem;
			padding-bottom: 1rem;
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
