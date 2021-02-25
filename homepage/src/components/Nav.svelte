<script>
	import { onMount } from "svelte";
	export let scrolled;

	// Show mobile icon and display menu
	let showMobileMenu = false;
  
	// List of navigation items
	const navItems = [
	  { label: "About", href: "about" },
	  { label: "Contact Us", href: "contact-us" },
	  { label: "Sign Up", href: "#" },
	  { label: "Log In", href: "#" }
	];
  
	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = showMobileMenu); // !showMobileMenu); temporarily removed for testing, needs to be reapplied
  
	// Media match query handler
	const mediaQueryHandler = e => {
	  // Reset mobile state
	  if (!e.matches) {
		showMobileMenu = false;
	  }
	};
  
	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");
		mediaListener.addListener(mediaQueryHandler);
	});
  </script>

<style>
	nav {
		height: 10vh;
		position: fixed;
		width: 100vw;
		background-color: #fff;
		z-index: 2;
	}

	.inner {
		margin: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0 20px;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #000;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		justify-content: space-around;
		margin: 0;
	}

	.navbar-list.mobile {
		position: fixed;
		display: flex;
		flex-direction: column;
		height: 90vh;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 300;
		background-color: rgba(255, 255, 255, 0.8);
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
	}

	.navbar-list a {
		color: #000;
		font-weight: 700;
		font-size: 16px;
		text-decoration: none;
		display: flex;
		align-items: right;
		padding: 0 10px;
	}

	.logo {
		display: none;
		height: 30px;
	}

	.shadow {
		-webkit-box-shadow: 0px 11px 16px -8px rgba(0,0,0,0.49);
		-moz-box-shadow: 0px 11px 16px -8px rgba(0,0,0,0.49);
		box-shadow: 0px 11px 16px -8px rgba(0,0,0,0.49);
	}

	@media only screen and (min-width: 767px) {
		.logo {
			display: block;
		}

		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}

		button {
			display: none;
		}
	}
</style>

<nav>
	<div class={`inner${scrolled ? ' shadow' : ''}`}>
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
		<div class="middle-line"></div>
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
		{#each navItems as item}
			<li>
				<a href={item.href} on:click={handleMobileIconClick}>{item.label}</a>
			</li>
		{/each}
		</ul>
		<a href="/"><img class="logo" src={'/horizontal_lockup.png'} alt="logo"/></a>
		<button class="btn small btn-primary btn-sm">Get Started</button>
	</div>
</nav>