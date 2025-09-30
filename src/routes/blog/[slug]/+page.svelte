<script>
	import { posts } from '$lib/posts/index.js'
	import { page } from '$app/stores'

	const slug = $page.params.slug
	const post = posts.find((p) => p.slug === slug)
</script>

<section class="mx-auto max-w-3xl px-4 py-16">
	<article
		class="prose prose-lg prose-invert prose-headings:font-bold prose-a:text-sky-400 hover:prose-a:text-sky-300 prose-code:text-pink-400 prose-pre:border prose-pre:border-gray-800 prose-pre:bg-gray-900 prose-img:rounded-xl"
	>
		<svelte:component this={post.component} />
	</article>
</section>
