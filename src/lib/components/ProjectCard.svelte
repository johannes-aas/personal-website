<script>
  export let title;
  export let description;
  export let technologies = [];
  export let liveUrl = '';
  export let githubUrl = '';
</script>

<div class="bg-slate-800 rounded-lg shadow-md overflow-hidden ring-1 ring-slate-700">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <p class="text-slate-300 mb-4">{description}</p>
    
    <div class="flex flex-wrap gap-2 mb-4">
      {#each technologies as tech}
        <span class="bg-slate-700 text-slate-200 text-sm px-2 py-1 rounded border border-slate-600">
          {tech}
        </span>
      {/each}
    </div>
    
    <div class="flex space-x-4">
      {#if liveUrl}
        <a href={liveUrl} target="_blank" class="text-sky-300 hover:text-sky-200 font-medium">
          Live Demo →
        </a>
      {/if}
      {#if githubUrl}
        <a href={githubUrl} target="_blank" class="text-slate-300 hover:text-slate-200 font-medium">
          GitHub →
        </a>
      {/if}
    </div>
  </div>
</div>