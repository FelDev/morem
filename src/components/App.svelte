<div class="app">
	
	<Nav />

	<Timer />

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
</style>
