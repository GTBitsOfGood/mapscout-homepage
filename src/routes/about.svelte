<script>
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';
	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let people = "default";
	let titleOne = "Me";
	let titleTwo = "My Description"
	let image = ""
	let alternate = ""
	onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
			return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			console.log(response.results)
			people = response.results[1].data.about_entry //data for about page is stored in results[1] not [0]
			console.log(people)
			titleOne = people[0].person_description[0].text
			titleTwo = people[0].person_description[1].text
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
	.image {
		height: 30vh;
		width: 30vw;
	}
	.card {
		width: 30vw;
		display: flex;
		flex-direction: row;
		border: 0;
	}
	.description {
		padding: 15px;
		display: flex;
		flex-direction: column;
	}
	
	h1 {
		background-color: lightblue;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="padding">&nbsp</div>
{#if people}
	{#each people as person}
		<section>
			<div class="card">
				<img class="image" src={image} alt={alternate}>

				<div class="description">
					<h1>{titleOne}</h1>
					<!-- <h1>{people[0].person_description[0].text}</h1> -->

					<p>{titleTwo}</p>
					<!-- <h1>{people[0].person_description[1].text}</h1> -->
				</div>
			</div>
		</section>
	{/each}
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