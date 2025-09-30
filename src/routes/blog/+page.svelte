<script>
	import { posts } from '$lib/posts/index.js'
</script>

<section class="mx-auto max-w-6xl px-4 py-16">
	<h1 class="mb-6 text-4xl font-bold text-slate-100">Blog</h1>
	<div class="grid gap-8 md:grid-cols-2">
		{#each posts as post}
			<a
				href={`/blog/${post.slug}`}
				class="block overflow-hidden rounded-lg bg-slate-800 ring-1 ring-slate-700 transition-colors hover:ring-slate-600"
			>
				{#if post.meta.cover}
					<img src={post.meta.cover} alt={post.meta.title} class="h-48 w-full object-cover" />
				{/if}
				<div class="p-4">
					<h2 class="mb-2 text-2xl font-semibold text-slate-100">{post.meta.title}</h2>
					<p class="text-sm text-slate-400">{post.meta.date}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
