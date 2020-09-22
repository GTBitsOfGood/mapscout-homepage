<script>
    import Map from './Map.svelte';
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtD3k03RcZx7VI6ahZ75IcUDNIklSUMNg&callback=initMap">
	</script>
</svelte:head>

<Map/>