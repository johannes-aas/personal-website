<script>
	export let title
	export let description
	export let technologies = []
	export let liveUrl = ''
	export let githubUrl = ''
</script>

<div class="overflow-hidden rounded-lg bg-slate-800 shadow-md ring-1 ring-slate-700">
	<div class="p-6">
		<h3 class="mb-2 text-xl font-semibold text-slate-100">{title}</h3>
		<p class="mb-4 text-slate-300">{description}</p>

		<div class="mb-4 flex flex-wrap gap-2">
			{#each technologies as tech}
				<span class="rounded border border-slate-600 bg-slate-700 px-2 py-1 text-sm text-slate-200">
					{tech}
				</span>
			{/each}
		</div>

		<div class="flex space-x-4">
			{#if liveUrl}
				<a href={liveUrl} target="_blank" class="font-medium text-sky-300 hover:text-sky-200">
					Live Demo →
				</a>
			{/if}
			{#if githubUrl}
				<a href={githubUrl} target="_blank" class="font-medium text-slate-300 hover:text-slate-200">
					GitHub →
				</a>
			{/if}
		</div>
	</div>
</div>
