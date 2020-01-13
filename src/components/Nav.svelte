<nav class="nav">
	<h1>Morem</h1>
	<button on:click={() => $currentScreen = "BurgerMenu"} aria-label="Main menu">
		<!-- 🍔 -->
		<svg class="ham ham2 hamRotate {$currentScreen == "BurgerMenu" ? 'active' : ''}" viewBox="0 0 100 100" width="40">
			<path
					class="line top"
					d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381" />
			<path
					class="line middle"
					d="m 30,50 h 40" />
			<path
					class="line bottom"
					d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381" />
		</svg>
	</button>
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
		position: absolute;
		overflow: hidden;
		right: 1px;
		top: -1px;
	
		// much credit to AAlmodovar: https://codepen.io/a-almodovar/pen/WNbJEXp?editors=1100
		.ham {
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			transition: transform 500ms;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			user-select: none;
			
			.line {
				fill: none;
				transition: stroke-dasharray 500ms, stroke-dashoffset 500ms;
				stroke: var(--off-white);
				stroke-width: 5.5;
				stroke-linecap: round;
				&.top {
					stroke-dasharray: 40 121;
				}
				&.bottom {
					stroke-dasharray: 40 121;
				}

			}

			&.active {
				transform: rotate(-45deg);
				.line {
					stroke: var(--light-grey);
					&.top {
						stroke-dashoffset: -102px;
					}
					&.bottom {
						stroke-dashoffset: -102px;
					}
				}

			}
		}
	}
</style>
