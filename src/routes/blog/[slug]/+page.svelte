<script>
	import { posts } from '$lib/posts/index.js'
	import { page } from '$app/stores'

	const slug = $page.params.slug
	const post = posts.find((p) => p.slug === slug)
</script>

<section class="mx-auto max-w-3xl px-4 py-16">
	<article class="markdown">
		<svelte:component this={post.component} />
	</article>
</section>