<script>
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  
  const projects = [
    {
      title: 'React Calendar',
      description: 'A modern, responsive calendar built with React, TypeScript, and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://johannes-aas.github.io/react-calendar/',
      githubUrl: 'https://github.com/johannes-aas/react-calendar'
    },
  ]
</script>

<div class="max-w-6xl mx-auto py-16 px-4">
  <h1 class="text-4xl font-bold mb-8">My Projects</h1>
  
  <div class="grid md:grid-cols-2 gap-8">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</div>