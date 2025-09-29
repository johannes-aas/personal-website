<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
  <Header />
  <main class="flex-grow">
    {@render children?.()}
  </main>
  <Footer />
</div>
