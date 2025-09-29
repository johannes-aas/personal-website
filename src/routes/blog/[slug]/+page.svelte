<script>
  import { posts } from '$lib/posts/index.js';
  import { page } from '$app/stores';

  const slug = $page.params.slug;
  const post = posts.find((p) => p.slug === slug);
</script>

<section class="max-w-3xl mx-auto py-16 px-4">
  <article class="prose prose-lg prose-invert prose-headings:font-bold prose-a:text-sky-400 hover:prose-a:text-sky-300 prose-img:rounded-xl prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 prose-code:text-pink-400">
    <svelte:component this={post.component} />
  </article>
</section>
