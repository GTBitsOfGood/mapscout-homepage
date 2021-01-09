<script>
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';

	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let people = "default";

	onMount(async() => {
		Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
		return api.query(""); // An empty query will return all the documents
		}).then(function(response) {
			people = response.results[0].data.about_entry
			// [i].person_image.url
			// [i].person_image -> .url .alt .dimensions.width .dimensions.height

			console.log(response.results[0].data.about_entry[0])
		}, function(err) {
		console.log("Something went wrong: ", err);
		});
	})
</script>
<style>
	.padding {
		height: 15vh;
	}

	h1 {
		background-color: aqua;
		height: 100vh;
	}
</style>
<svelte:head>
	<title>About</title>
</svelte:head>

<div class="padding">&nbsp</div>
<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
<!-- <img src ={people[0].person_image.url} alt="jason_picture" /> -->