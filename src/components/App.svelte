<div class="app">
	
	<Nav />

	<main>
		<TimeSelector />
		<Timer />
	</main>

	<Footer />

</div>

<script>
	import Nav from '@components/Nav';
	import Timer from '@components/Timer';
	import Footer from '@components/Footer';
	import TimeSelector from '@components/TimeSelector';
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
