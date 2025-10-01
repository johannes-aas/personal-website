<script>
	import Logo from './Logo.svelte'
	import ThemeSwitcher from './ThemeSwitcher.svelte'
</script>

<header>
	<nav class="mx-auto max-w-6xl px-4 pt-8">
		<div class="flex justify-between">
			<div class="flex items-center">
				<a href="/" class="h-12 w-12">
					<Logo />
				</a>
			</div>
      <div class="flex gap-6">
        <div class="flex items-center space-x-8">
          <a href="/about" class="text-[var(--muted)] hover:text-[var(--base-fg)] transition-colors">About</a>
          <a href="/projects" class="text-[var(--muted)] hover:text-[var(--base-fg)] transition-colors">Projects</a>
          <a href="/blog" class="text-[var(--muted)] hover:text-[var(--base-fg)] transition-colors">Blog</a>
        </div>
        <ThemeSwitcher/>
      </div>
		</div>
	</nav>
</header>
