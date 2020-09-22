<script>
	import mapConfig from './mapConfig.ts'; // optional
	let container;
	let map;
	let zoom = 17;
    let center = {lat: 33.7756, lng: -84.3963};
    
    import { onMount } from 'svelte';
    
	onMount(async () => {
		map = new google.maps.Map(container, {
            zoom,
			center,
			styles: mapConfig,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            scaleControl: false,
            zoomControl: false,
		});

         var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        for (let i = 0; i < 10; i++) {
            let k = Math.random(i)
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(33.7756 + k*0.00025, -84.3963 - 0.00025*(k-.05)),
                icon: icons['library'].icon,
                map: map
            });
        }


	});
</script>

<style>
.full-screen {
    width: 100%;
    height: 90vh;
}
</style>

<div class="full-screen" bind:this={container}></div>