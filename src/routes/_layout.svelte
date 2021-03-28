<script>
	import Nav from '../components/Nav.svelte';
	let scrolled = false

	const onScroll = ({ target: { documentElement, body } }) => {
		if (body.scrollTop > 0 || documentElement.scrollTop > 0) {
			scrolled = true
		} else {
			scrolled = false
		}
	}
</script>

<Nav {scrolled}/>

<main>
	<slot></slot>
</main>
<svelte:window on:scroll={onScroll} />