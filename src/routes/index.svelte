<script>
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

 section {
		min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
    padding: 0% 10%;
	}

  .btn-primary{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 8px 12px;
    left: 15.78%;
    right: 73.31%;
    top: 9.91%;
    bottom: 89.28%;
    background: #0A1D7C;
    border-radius: 11.2203px;
    border-color: none;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  .image {

    /* height: 100%; */
  }
  .text-wrapper{
    display: inline-block; 
    white-space:pre-wrap;
    /* word-wrap: normal; */
  }

	.padding {
		height: 16px;
	}

	.bg-image {
		background-image: url("/homepage-hero-1.png");
		background-repeat: no-repeat;
		background-position: right;
	}

	/* .wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	} */

	div {
		width: 30vw;
	}

	h1 {
    left: 15.69%;
    right: 48.12%;
    top: 5.7%;
    bottom: 92.47%;
    font-style: normal;
    font-weight: bold;
    font-size: 44.3404px;
    line-height: 53px;
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
    left: 15.69%;
    right: 55.28%;
    top: 7.98%;
    bottom: 90.39%;
    font-style: normal;
    font-weight: normal;
    font-size: 22.1702px;
    line-height: 27px;
	}

	.placeholder {
    width: 100%;
    object-fit: contain;
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
      left: 10.13%;
      right: -15.03%;
      top: 54.12%;
      bottom: 34.71%;
      font-style: normal;
      font-weight: bold;
      font-size: 33.4792px;
      line-height: 40px;
		}

		p {
      left: 10.13%;
      right: 5.7%;
      top: 68.05%;
      bottom: 21.99%;
      font-style: normal;
      font-weight: normal;
      font-size: 16.7396px;
      line-height: 20px;

		}

		section {
      justify-content: center;
			flex-direction: column-reverse;
			align-items: space-between;
      
		}

		div {
			width: 90%;
		}

		.placeholder {
		  width: 100%;
      margin-bottom: 20px;
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
	<title>MapScout</title>
</svelte:head>

<div class="padding">&nbsp</div>
{#if data}
	{#each data as item, i}
    {#if i<=3}
		<section class= "{i%2 === 1 ? 'alternate' : ''}" >
				<div class="text-wrapper">
					<h1>{item.primary.title[0].text}</h1>
					<p>{item.primary.description[0].text}</p>
          {#if i == 0}
					<button class="btn btn-primary">Get Started</button>
          {/if}
				</div>
        <div class="image">
				<img class="placeholder" src="/favicon.png" alt="place_holder"/>
        </div>
		</section>
    {/if}
    {#if i>3}
    <section>
      <div class="main-disc">
        <div class="normal">
          <h1>{item.primary.title[0].text}</h1>
          <p> {item.primary.description[0].text}</p>
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
    {/if}
	{/each}
{/if}
<!-- <section class="alternate">
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
</section> -->
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