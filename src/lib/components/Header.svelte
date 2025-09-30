<script>
	import Logo from './Logo.svelte'
</script>

<header>
	<nav class="mx-auto max-w-6xl px-4 pt-8">
		<div class="flex justify-between">
			<div class="flex items-center">
				<a href="/" class="h-12 w-12">
					<Logo />
				</a>
			</div>
			<div class="flex items-center space-x-8">
				<a href="/about" class="text-gray-400 transition-colors hover:text-gray-50">About</a>
				<a href="/projects" class="text-gray-400 transition-colors hover:text-gray-50">Projects</a>
				<a href="/blog" class="text-gray-400 transition-colors hover:text-gray-50">Blog</a>
			</div>
		</div>
	</nav>
</header>
