<script>
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';
  import Saos from "saos";
	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let people = null
  let banner= null
	let titleOne = "My Name"
  let data = null
	let titleTwo = "My Role"
	let titleThree = "My Semester"
	let image = ""
	let alternate = ""
	onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			people = response.results[1].data.about_entry //data for about page is stored in results[1] not [0]
			console.log(people)
			// titleOne = people[0].person_name[0].text
			// titleTwo = people[0].person_description[0].text
			// titleThree = people[0].person_semester[0].text
			// image = people[0].person_image.url
			// alternate = people[0].person_image.alt
			// [i].person_image.url
			// [i].person_image -> .url .alt .dimensions.width .dimensions.height
		}, function(err) {
		console.log("Something went wrong: ", err);
		});
	})
  onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			banner = response.results[1].data.about_banner//data for about page is stored in results[1] not [0]
			console.log(banner)
			titleOne = people[0].person_name[0].text
			titleTwo = people[0].person_description[0].text
			titleThree = people[0].person_semester[0].text
			image = people[0].person_image.url
			alternate = people[0].person_image.alt
			// [i].person_image.url
			// [i].person_image -> .url .alt .dimensions.width .dimensions.height
		}, function(err) {
		console.log("Something went wrong: ", err);
		});
	})
</script>
<style>
	.row {
		display: table-row;
	}
	.col-sm-6 {
		display: inline-block;
	}
	.padding {
		height: 16px;
	}
	.feature {
    min-height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
    padding: 0% 10%;
	}
	.image {
		background: #C4C4C4;
    border-radius: 8px;
    object-fit: cover;
    width: 277px;
    height: 277px;

	}
	.card {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		margin-left: 11rem; 
		border: 0;
	}
	.description {
		padding: 15px;
		display: flex;
		flex-direction: column;
	}
	h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
		margin-bottom: -0.02rem;
	}
	.people-title{
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
		margin-top: 5rem;
		margin-left: 11.9rem;
		padding-bottom: 0.5rem;
		color: #267dfa;
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
	h1 span {
		color: black;
		
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

	p1 {
		font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #A6A6A6;
   
	}
	.member-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 277px);
    column-gap: 16px;
    row-gap: 16px;
    justify-content: center;
    padding: 0% 10%;
    /* align-items: stretch; */
  }
	.text-wrapper{
    display: inline-block; 
    white-space:pre-wrap;
    width: 90%;
    /* word-wrap: normal; */
  }
	.padding {
		height: 16px;
	}
  .title{
    left: 15.69%;
    right: 48.12%;
    top: 5.7%;
    bottom: 92.47%;
    font-style: normal;
    font-weight: bold;
    font-size: 44.3404px;
    line-height: 53px;
  }
  .description{
    left: 15.69%;
    right: 55.28%;
    top: 7.98%;
    bottom: 90.39%;
    font-style: normal;
    font-weight: normal;
    font-size: 22.1702px;
    line-height: 27px;
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
  .placeholder {
    width: 100%;
    object-fit: contain;
		background: #C4C4C4;
		filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15));
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
	<title>About</title>
</svelte:head>

<div class="padding">&nbsp</div>
{#if banner}
	{#each banner as item,i}
    <Saos
    animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
    animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
    top={250}
    bottom={250}>
      <section class= "feature" >
          <div class="text-wrapper">
            <h1>{item.banner_title[0].text}</h1>
            <p>{item.banner_description[0].text}</p>
            {#if i == 1}
            <button class="btn btn-primary">Learn More</button>
            {/if}
          </div>
          <div class="">
          <img class="placeholder" src={item.banner_image.url} alt={item.banner_image.alt}/>
          </div>
      </section>
    </Saos>
  {/each}
{/if}
<fieldset>
	<h1 class="people-title"><span>The </span>Team</h1>
</fieldset>
{#if people}
  <div class="member-container">
	{#each people as item}	
  <Saos
  animation={'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}
  animation_out={'slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'}
  top={250}
  bottom={250}>
      <img class="image" src={item.person_image.url} alt={item.person_image.alt}>
      <h2>{item.person_name[0].text}</h2>
      <p1>{item.person_description[0].text}</p1>
      <br>
      <p1>{item.person_semester[0].text}</p1>
  </Saos>		
  {/each}
</div>
{:else}
	<section>
		<div>
			<h1>About this site</h1>

			<p>This is the 'about' page. There's not much here.</p>
		</div>
	</section>
{/if}

	
<!-- <p>{people[0].name}</p> -->
<!-- <img src ={people[0].person_image.url} alt="jason_picture" /> -->