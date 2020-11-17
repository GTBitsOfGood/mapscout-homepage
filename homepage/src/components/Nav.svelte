<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 2em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 0;
	}

	img {
		width: 10vw;
		padding: 0.5em
	}
	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em;
		display: block;
		color: #000;
		font-weight: 700;
	}

	button {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		nav {
			padding: 0.5em 1em;
		}
		img {
			display: none;
		}
		ul {
			display: none;
		}
		button {
			display: block;
		}
	}
</style>

<nav>
	<img src="/horizontal_lockup.png" alt="logo"/>
	<button class="btn btn-primary">Get Started</button>
	<ul>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href=".">About</a></li>
		<li><a aria-current="{segment === 'contact' ? 'page' : undefined}" href="about">Contact Us</a></li>
		<li><a aria-current="{segment === 'sign_up' ? 'page' : undefined}" href="sign_up">Sign Up</a></li>
		<li><a aria-current="{segment === 'log_in' ? 'page' : undefined}" href="log_in">Log In</a></li>
	</ul>
</nav>
