<script>
  import { posts } from '$lib/posts/index.js';
</script>

<section class="max-w-6xl mx-auto py-16 px-4">
  <h1 class="text-4xl font-bold mb-6 text-slate-100">Blog</h1>
  <div class="grid md:grid-cols-2 gap-8">
    {#each posts as post}
      <a href={`/blog/${post.slug}`} class="block bg-slate-800 rounded-lg overflow-hidden ring-1 ring-slate-700 hover:ring-slate-600 transition-colors">
        {#if post.meta.cover}
          <img src={post.meta.cover} alt={post.meta.title} class="w-full h-48 object-cover" />
        {/if}
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2 text-slate-100">{post.meta.title}</h2>
          <p class="text-slate-400 text-sm">{post.meta.date}</p>
        </div>
      </a>
    {/each}
  </div>
</section>
