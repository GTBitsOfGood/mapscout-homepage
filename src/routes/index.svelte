<script>
  import Saos from "saos";
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';
	import Card from '../components/Card.svelte';

	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let data = null;
	let alternate = "alternate";

	onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			data = response.results[0].data.body
			console.log(data)
		}, function(err) {
			console.log("Something went wrong: ", err);
		});
	})
</script>

<style>
	.padding {
		height: 16px;
	}

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
  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }
  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
</style>

<svelte:head>
	<title>MapScout</title>
</svelte:head>

<div class="padding">&nbsp</div>
{#if data}
	{#each data as item}
  <Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
		<section class={alternate}>
			<div class="wrapper">
				<div>
					<h1>{item.primary.title[0].text}</h1>
					<p>{item.primary.description[0].text}</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
				<div class="buffer">&nbsp</div>
				<img class="placeholder" src="/favicon.png" alt="place_holder"/>
			</div>
		</section>
  </Saos>
		{#if alternate == "alternate"} {alternate = ""} 
		{:else} {alternate = ""} {/if}
	{/each}
{/if}
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
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
</Saos>
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
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
</Saos>
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
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
</Saos>
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
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
</Saos>
<Saos
animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
top={250}
bottom={250}>
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
</Saos>