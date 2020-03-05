<script>

	import products from '../products.js'
	import Renderheader from './components/Renderheader.svelte';
	import Renderproducts from './components/Renderproducts.svelte';
	import Rendershoppingcart from './components/Rendershoppingcart.svelte';
	import Rendershoppingcartmodal from './components/Rendershoppingcartmodal.svelte'

</script>

<main>
<Renderheader />
<Renderproducts />
<Rendershoppingcart />
<Rendershoppingcartmodal />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
