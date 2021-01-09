<script>
	import Nav from '../components/Nav.svelte';

	export let segment;

	let scrolled = false

	const onScroll = ({ target: { documentElement, body } }) => {
		if (body.scrollTop > 0 || documentElement.scrollTop > 0) {
		scrolled = true
		} else {
		scrolled = false
		}
	}
</script>

<Nav {segment} {scrolled}/>

<main>
	<slot></slot>
</main>
<svelte:window on:scroll={onScroll} />