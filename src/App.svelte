<script>
//import dependencies
	import Renderheader from './components/Renderheader.svelte';
	import Renderproducts from './components/Renderproducts.svelte';
	// import Rendercoinvalues from './components/Rendercoinvalues.svelte';
	import Footer from './components/Footer.svelte';

</script>
<svelte:head>
<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet">
</svelte:head>
<main>
<!-- Render all the necessary components in the main element -->
<Renderheader />
<Renderproducts />
<Footer />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-family: 'Playfair Display';
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
	.header {

	}
	.product-container {
	  font-family: 'Playfair Display';
	}

	.nav-logo {
	  padding: 10px;
	}
	.nav-company-name {
	  color: #1a4855;
	  font-family: "pacifico" !important;
	}
	.nav-company-slogan {
	  font-family: 'Playfair Display';
	}
	
</style>
