<script>
	import { onMount } from "svelte";
	export let scrolled;

	// Show mobile icon and display menu
	let showMobileMenu = false;
  
	// List of navigation items
	const navItems = [
	  { label: "About", href: "about" },
	  { label: "Sign Up", href: "#" },
	  { label: "Log In", href: "#" },
	//   { label: "Contact Us", href: "https://bitsofgood.org/contact/" },
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

	//open a new tab and navigate to webpage on same tab
	const openNewTabAndNavigate = () => {
    	window.open("https://bitsofgood.org/contact/", '_blank');
    
    // window.location.href = 'https://weather.com';
  };
  
	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia("(max-width: 767px)");
		mediaListener.addListener(mediaQueryHandler);
	});
  </script>

<style>
	.contact-link {
        border: 2px solid black;
        color: #000;
        border-radius: 5px;
        padding: 8px 12px;
        text-align: center;
        transition: border-color 0.3s, color 0.3s;
        display: inline-block;
		text-decoration: none;
		margin-top: 2px,
		 
	}

	.contact-icon {
		fill: none;
		width: 24px;
		height: 24px;
		margin-left: 1px;
		transition: fill 0.3s;
 	 }

	.contact-icon:hover path{
  		fill: blue;
		
	}

	.contact-link:hover {
        border-color: blue;
        color: blue;
    }

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
		<li>
			<!-- <a href="contact" class="contact-link" on:click={handleMobileIconClick}>
				<svg class="contact-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path xmlns="http://www.w3.org/2000/svg" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z" fill="#0D0D0D"></path>
				</svg>
				Contact Us
			  </a> -->
			  <a href="contact" on:click={openNewTabAndNavigate} class="contact-link" on:click={handleMobileIconClick}>
				Contact Us
				<svg class="contact-icon" fill="blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path xmlns="http://www.w3.org/2000/svg" d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z" fill="#0D0D0D"></path>
				</svg>
			  </a>
		</li>
		</ul>
		<a href="/"><img class="logo" src={'/horizontal_lockup.png'} alt="logo"/></a>
		<button class="btn small btn-primary btn-sm">Get Started</button>
	</div>
</nav>