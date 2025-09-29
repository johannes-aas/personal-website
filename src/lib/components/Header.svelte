<script>
	import Logo from "./Logo.svelte";
</script>

<header>
  <nav class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between h-24">
      <div class="flex items-center">
        <a href="/" class="w-12 h-12">
          <Logo/>
        </a>
      </div>
      <div class="flex items-center space-x-8">
        <a href="/about" class="text-gray-400 hover:text-gray-50 transition-colors">About</a>
        <a href="/projects" class="text-gray-400 hover:text-gray-50 transition-colors">Projects</a>
        <a href="/blog" class="text-gray-400 hover:text-gray-50 transition-colors">Blog</a>
      </div>
    </div>
  </nav>
</header>