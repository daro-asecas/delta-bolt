<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let isLoaded = false;
  
  onMount(() => {
    isLoaded = true;
  });
</script>

{#if isLoaded}
  <div in:fade={{ duration: 300, delay: 100 }}>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
{:else}
  <div class="fixed inset-0 flex items-center justify-center bg-delta-white">
    <div class="w-20 h-20 flex items-center justify-center">
      <div class="text-2xl font-display">Δ</div>
    </div>
  </div>
{/if}