<script>
	var Prismic = require('prismic-javascript');

	var apiEndpoint = "https://mapscout.cdn.prismic.io/api/v2";
	var apiToken = "MC5YMkVkUVJJQUFDY0FjU19f.Le-_vS3vv71q77-9BO-_ve-_ve-_ve-_vT3vv73vv70G77-9Ru-_ve-_vQTvv73vv71eX--_vXYKPe-_ve-_vRpN";
	
	let people;
	Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {
	return api.query(""); // An empty query will return all the documents
	}).then(function(response) {
	console.log("Documents: ", response.results);
		response.results.map((item) => {
			console.log(item)
		})
	}, function(err) {
	console.log("Something went wrong: ", err);
	});
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>