<script>
  import { onMount } from "svelte";

  let theme = "light";

  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      theme = saved;
    } else {
      theme =
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    }
    applyTheme();
  });

  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    applyTheme();
  }

  function applyTheme() {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-full transition cursor-pointer"
  aria-label="Toggle theme"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    view-box="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="w-6 h-6 text-[var(--base-fg)]"
  >
    {#if theme === "light"}
      <!-- Moon Icon -->
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
    {:else}
      <!-- Sun Icon -->
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    {/if}
  </svg>
</button>