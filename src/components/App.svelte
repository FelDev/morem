<div class="app">
	
	<Nav />

	<Timer />

	<!-- <main class="wrapper"> -->
	<!-- </main> -->

	<Footer />
</div>

<script>
	import Nav from '@components/Nav';
	import Timer from '@components/Timer';
	import Footer from '@components/Footer';

</script>

<style lang="scss">
	.app {
		position: relative;
		min-height: 100vh;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.wrapper {
		width: 75%;
		margin: 0 auto;
		position: relative;
		min-height: calc(55vh - 16px);
		z-index: 1;
	}
	
	.section {
		padding-bottom: 64px;

		h2 {
			margin-bottom: 16px;
		}
	}
	
	@media screen and (max-width: 769px) {
		.wrapper {
			width: 90%
		}
	}
</style>
