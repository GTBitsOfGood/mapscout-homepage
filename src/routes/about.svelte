<script>
	import { onMount } from 'svelte';
	import Prismic  from 'prismic-javascript';
	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let people = "default";
	let titleOne = "My Name";
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
	section {
		width: 100%;
	}
	.image {
		height: 277px;
		width: 277px;
		border-radius:8px;
	}
	.card {
		display: inline-block;
		margin-left: 11rem; 
		border: 0;
	}
	.description {
		padding: 15px;
		display: flex;
		flex-direction: column;
	}
	h1 {
		font-family: 'Avenir';
    	font-weight: 850;
    	font-size: 24px;
		margin-left:-1rem;
		margin-bottom: -0.02rem;
	}
	h3 {
		font-family: 'Avenir';
		font-style: bold;
    	font-weight: 850;
    	font-size: 40px;
		margin-top: 5rem;
		margin-left: 11.9rem;
		padding-bottom: 0.5rem;
		color: #267dfa;
	}
	h3 span {
		color: black;
		
	}
	p {
		font-size: 20px;
		margin-left:-1rem;
		font-family: 'Avenir';
    	font-weight: 100;
		color: #A6A6A6;
	}
	p1 {
		font-size: 20px;
		margin-left:-1rem;
		font-family: 'Avenir';
    	font-weight: 100;
		color: #A6A6A6;
		margin-top: -1.25rem;
	}
	.member-container {
    	width: 100%;
    	display: grid;
    	grid-template-columns: repeat(auto-fill, 340px);
    	column-gap: 0px;
    	row-gap: 20px;
    	justify-content: start;
    	align-items: stretch;		
  }
	
	
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="padding">&nbsp</div>
<fieldset>
	<h3><span>The </span>Team</h3>
</fieldset>
{#if people}
	<div class="member-container">
		{#each people as person}
			<section>
				<div class="row">
					<div class="col-sm-6">
						<div class="card">
							<img class="image" src={image} alt={alternate}>
							<div class="description">
								<h1>{titleOne}</h1>
								<!-- <h1>{people[0].person_description[0].text}</h1> -->

								<p>{titleTwo}</p>
								<!-- <h1>{people[0].person_description[1].text}</h1> -->

								<p1>{titleThree}</p1>
								<!-- <h1>{people[0].person_description[1].text}</h1> -->
							</div>
						</div>
					</div>
				</div>		
			</section>
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