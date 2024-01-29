<script>
  import Saos from "saos";
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';
  import VideoPlayer from 'svelte-video-player';
	import Card from '../components/Card.svelte';
	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let data = null;
  let cards = null;
  let people = null;
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
  onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			cards = response.results[0].data.body//data for about page is stored in results[1] not [0]
			console.log(cards)
		}, function(err) {
		console.log("Something went wrong: ", err);
		});
	})

  onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			people = response.results[1].data.about_entry //data for about page is stored in results[1] not [0]
			console.log(people)
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
    border-color: #0A1D7C;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  .image {
    width: 50vw
    
  }
  .text-wrapper{
    display: inline-block; 
    white-space:pre-wrap;
    margin-right: 10%;
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

	/* div {
		width: 30vw;
	} */

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
		background-color: #fff;
		color: #000;
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
		width: 100%;
		min-height: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: space-around;
	}

	.buffer {
		display: none;
	}

	.card-container {
		display: flex;
    justify-content: center;
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

{#if data}
	{#each data as item, i}
    {#if item.slice_type == "feature_section"}
      <Saos
      animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
      animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
      top={250}
      bottom={250}>
        <section class= "{i%2 === 1 ? 'alternate' : ''}" >
            <div class="text-wrapper">
              <h1>{item.primary.title[0].text}</h1>
              <p>{item.primary.description[0].text}</p>
              {#if i == 0}
              <button class="btn btn-primary">Get Started</button>
              {/if}
            </div>
            {#if i == 0}
            <div class="image">
              <!-- attempt at Vime player to allow for autoplay
              <vm-player playsinline>
                <vm-default-ui>
                </vm-default-ui>
              </vm-player>
              -->
              <!--<VideoPlayer color= "#0A1D7C" poster="./map1.png" centerIconSize="30px" source="./websiteIntegration.mov" loop autoplay/>-->
              <video controls width="500" height="500"
                autoplay loop muted preload="auto"
                poster="./map1.png">
                <source src ="./websiteIntegration.mov"  type="video/mp4">
                <p>Video unable to load</p>
              </video>
            </div>
            {/if}
            {#if i == 1}
            <div class="image">
              <video controls width="500" height="500"
                autoplay loop muted preload="auto"
                poster="./templateBuilder.png">
                <source src = "./createProvider.mov"  type="video/mp4">
                <p>Video unable to load</p>
              </video>
            </div>
            {/if}
            {#if i == 2}
            <div class="image">
              <video controls width="500" height="500"
                autoplay loop muted preload="auto"
                poster="./map2.png" >
                <source src = "./mapWalkthrough.mov"  type="video/mp4">
                  <p>Video unable to load</p>
              </video>
            </div>
            {/if}
            {#if i == 3}
            <div class="image">
              <video controls width="500" height="500"
                autoplay loop muted preload="auto"
                poster="./mapInfo.png">
                <source src = "./templateBuilder.mov"  type="video/mp4">
                  <p>Video unable to load</p>
              </video>
            </div>
            {/if}
        </section>
      </Saos>
    {:else if item.slice_type == "section_with_cards"}
      <Saos
      animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
      animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
      top={250}
      bottom={250}>
        <section> 
          <div class="main-disc">
            <div class="normal">
              <h1>{item.primary.title[0].text}</h1>
              <p> {item.primary.description[0].text}</p>
            </div>
            <div class="card-container"> 
              {#each item.items as card}
                <Card 
                image={card.card_image.url}
                title={card.card_title ? card.card_title[0].text : ""}
                description={card.card_description ? card.card_description[0].text : ""}
                link={card.link}
            />
              {/each}
            </div>
          </div>		
        </section>
      </Saos> 
    {/if}
	{/each}
{/if}
