<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte'

	const projects = [
		{
			title: 'React Calendar',
			description: 'A modern, responsive calendar built with React, TypeScript, and Tailwind CSS',
			technologies: ['React', 'Tailwind CSS', 'TypeScript'],
			liveUrl: 'https://johannes-aas.github.io/react-calendar/',
			githubUrl: 'https://github.com/johannes-aas/react-calendar'
		},
		{
			title: 'Portfolio',
			description: 'This website',
			technologies: ['SvelteKit', 'Tailwind CSS'],
			githubUrl: 'https://github.com/johannes-aas/johannesaas.dev'
		}
	]
</script>

<div class="mx-auto max-w-6xl px-4 py-16">
	<h1 class="mb-8 text-4xl font-bold">My Projects</h1>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
