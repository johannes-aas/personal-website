<script>
  export let title;
  export let date;
  export let description;
</script>

<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <header class="mb-10">
    <h1 class="text-4xl font-bold text-white tracking-tight mb-4">{title}</h1>
    {#if description}
      <p class="text-xl text-gray-300 mb-3">{description}</p>
    {/if}
    {#if date}
      <time class="text-gray-400">{new Date(date).toLocaleDateString()}</time>
    {/if}
  </header>

  <div class="prose prose-lg prose-invert max-w-none prose-headings:text-gray-100 prose-strong:text-gray-100 prose-code:text-gray-100 prose-blockquote:text-gray-300">
    <slot />
  </div>
</article>