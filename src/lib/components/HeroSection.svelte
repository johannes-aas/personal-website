<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  let innerWidth = 1000
  let innerHeight = 1000
  let mouseX = innerWidth / 2 // initialize to center
  let mouseY = innerHeight / 2
  let isTouchDevice = false

  // center
  $: cx = innerWidth / 2
  $: cy = innerHeight / 2

  // direction vector from center to mouse
  $: dx = mouseX - cx
  $: dy = mouseY - cy

  // normalize direction
  $: len = Math.hypot(dx, dy) || 1
  $: ux = -dx / len
  $: uy = -dy / len

  $: maxDistance = Math.min(cx, cy)
  $: actualDistance = Math.hypot(dx, dy)
  $: distanceFraction = isTouchDevice ? 0 : Math.min(actualDistance / maxDistance, 1)

  const handleMouseMove = (e) => {
    if (!isTouchDevice) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
  };

  const handleResize = () => {
    if (browser) {
      innerWidth = window.innerWidth;
      innerHeight = window.innerHeight;
      // Keep mouse centered on resize if touch device
      if (isTouchDevice) {
        mouseX = innerWidth / 2;
        mouseY = innerHeight / 2;
      }
    }
  };

  onMount(() => {
    // Set initial values
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;

    // Detect touch device
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Initialize mouse position to center
    mouseX = innerWidth / 2;
    mouseY = innerHeight / 2;
  });
</script>

<svelte:window 
  on:mousemove={handleMouseMove}
  on:resize={handleResize}
/>

<section class="w-full flex flex-col items-center portrait:items-start">
  <div class="relative mx-auto pt-8 sm:pt-0">
    <svg
      class="w-auto h-auto p-4 md:p-10 overflow-visible portrait:w-[clamp(200px,calc(100svw),600px)] portrait:h-auto landscape:w-auto landscape:h-[clamp(200px,calc(100svh-5rem),700px)]"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {#each Array(8) as _, i (i)}
        <g
          class="stroke-[#4d87b4]"
          stroke-width={0.7}
          opacity={1 - i / 8}
          transform={`translate(${ux * i * 0.8 * distanceFraction}, ${uy * i * 0.8 * distanceFraction}) scale(${1 - i * 0.02})`}
          transform-origin="100 100"
        >
          <path d="M199.5 199.5H147.375V187H102.918L90.418 199.5H13.707L199.5 13.707V199.5Z" />
          <path d="M132.125 0.5V10.25H145.875V0.5H188.809L146.518 43.6211H130.772V58.1035L88.5 102.744V0.5H132.125Z" />
          <path d="M71.5 0.5V118.152L0.5 188.797V94.5H15.5V0.5H71.5Z" />
        </g>
      {/each}
    </svg>
    <h1 class="absolute inset-0 pointer-events-none m-4 md:m-10 font-bold text-2xl sm:text-4xl md:text-5xl">
      <span class="absolute top-[14%] left-2 md:-left-[8%]">
        Johannes
      </span>
      <span class="absolute top-[36%] left-[38%]">
        Hansen
      </span>
      <span class="absolute top-[54%] right-[8%]">
        Aas
      </span>
    </h1>
  </div>
</section>