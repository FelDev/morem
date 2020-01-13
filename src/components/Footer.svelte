<footer>
	<span>Made with <span class="heart">❤</span> by <a href="https://www.felixparadis.com">Félix</a></span>
</footer>

<style lang="scss">
	footer {
		font-size: 1rem;
		font-weight: 800;
		background: #263238;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		font-family: var(--font-header);
		border-top: 2px solid rgba(34, 40, 49, 0.3);
		color: rgba(255, 255, 255, 0.65);
		justify-content: center;
		align-items: center;
		display: flex;
		height: 30px;
		span a {
			color: inherit;
			transition: color var(--transition-duration);
		}
		a:hover {
			color: rgba(255, 255, 255, 1);
		}
	}
	
	.heart:hover {
		color: red; 
	}

</style>
