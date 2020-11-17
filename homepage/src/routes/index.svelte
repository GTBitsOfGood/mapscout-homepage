<script>
	import Card from '../components/Card.svelte';
</script>

<style>
	section {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.bg-image {
		background-image: url("/homepage-hero-1.png");
		background-repeat: no-repeat;
		background-position: right;
	}

	.wrapper {
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 0;
	}

	div {
		width: 30vw;
	}

	h1 {
		font-weight: 700;
	}

	.alternate-text {
		color: #226dff;
	}

	.alternate {
		background-color: #0A1D7C;
		color: #fff;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	p {
		font-size: 1.3em;
	}

	.placeholder {
		height: 45vh;
		width: 30vw;
		background: #C4C4C4;
		filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
	}

	.main-disc {
		width: 65%;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
	}

	.buffer {
		display: none;
	}

	.card-container {
		display: flex;
	}

	.normal {
		width: 100%;
	}

	@media only screen and (max-width: 768px) {
		h1 {
			font-size: 10vw;
		}

		p {
			font-size: 1.1em;
		}

		.wrapper {
			width: 90%;
			flex-direction: column-reverse;
			align-items: space-between;
		}

		div {
			width: 90%;
		}

		.placeholder {
			height: 30vh;
			width: 70vw;
			background: #C4C4C4;
		}

		.alternate {
			background-color: #fff;
			color: #000;
		}

		.buffer {
			display: block;
			padding: 3vh;
		}

		.main-disc {
			width: 90%;
			padding-top: 2vh;
			align-items: center;
			justify-content: center;
		}

		.card-container {
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}

		.bg-image {
			background: none;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<!-- <h1>Main</h1> -->
<section class="bg-image">
	<div class="wrapper">
		<div>
			<h1>Create <span class="alternate-text">beautiful</span> resource maps.</h1>
			<p>
				Mapscout makes it simple to build and customize interactive 
				resource maps and is completely free for non-profits.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
		<div class="buffer">&nbsp</div>
		<img class="placeholder" src="/favicon.png" alt="place_holder"/>
	</div>
</section>
<section class="alternate">
	<div class="wrapper">
		<div>
			<h1>Easily add, edit, and delete resources</h1>
			<p>
				Admins can smoothly manipulate anywhere from ten to ten thousand custom, presented data points.
			</p>
		</div>
		<div class="buffer">&nbsp</div>
		<img class="placeholder" src="/favicon.png" alt="place_holder"/>
	</div>
</section>
<section>
	<div class="wrapper reverse">
		<div>
			<h1>Create powerful <span class="alternate-text">search filters</span></h1>
			<p>
				Our unique template builder enables visitors to intuitively search with fully 
				<span class="alternate-text">controlled</span>, customizable 
				<span class="alternate-text">categories</span>.
			</p>
		</div>
		<div class="buffer">&nbsp</div>
		<img class="placeholder" src="/favicon.png" alt="place_holder"/>
	</div>
</section>
<section class="alternate">
	<div class="wrapper">
		<div>
			<h1>Integrate Mapscout with your website</h1>
			<p>
				Mapscout is both web and mobile friendly and can be effortlessly added to existing sites.
			</p>
		</div>
		<div class="buffer">&nbsp</div>
		<img class="placeholder" src="/favicon.png" alt="place_holder"/>
	</div>
</section>
<section>
	<div class="main-disc">
		<div class="normal">
			<h1>Our Maps</h1>
			<p>
				Currently, we are supporting nine unique clients with interactive 
				resource maps that allow visitors to see what is offered near them 
				and navigate often overwhelming systems.
			</p>
		</div>
		<div class="card-container">
			<Card 
				image="/favicon.png"
				title="The Philadelphia Alliance for Child Trauma Services (PACTS)" 
				discription="PACTS is a network of child serving systems and organizations that provides evidence-based practices for traumatized youth and their families in the greater Philadelphia area."
			/>
			<Card 
				image="/favicon.png"
				title="ClinWiki" 
				discription="A 501(c)(3) focused on making clinical trials more transparent and approachable in order to drive participation and faster progress against serious diseases."
			/>
			<Card 
				image="/favicon.png"
				title="Georgia DBHDD" 
				discription="Organization description Organization
				description Organization description Organization description Organization description Organization description"
			/>
		</div>
		<div class="buffer">&nbsp</div>
	</div>		
</section>
<section class="alternate">
	<div class="main-disc">
		<div class="normal">
			<h1>About Bits of Good</h1>
			<p>
				The GT Bits of Good team connects students with local nonprofits by 
				building powerful web apps in order to redefine social good.
			</p>
		</div>
		<div class="card-container">
			<Card 
				image="/favicon.png"
				title="Volunteer Management Solution" 
				discription="Designing a general solution for nonprofits to accept volunteers, manage mass emails, and advertise new volunteering events."
			/>
			<Card 
				image="/favicon.png"
				title="Donation Marketplace Solution" 
				discription="Designing a centralized web-platform for users to make donations and purchase nonprofit merchandise online."
			/>
			<Card 
				image="/favicon.png"
				title="Boys & Girls Club of Metro Atlanta - Safety" 
				discription="Creating an improved, user-friendly bus attendance system for the Boys and Girls Club of Metro Atlanta."
			/>
		</div>
	</div>		
</section>