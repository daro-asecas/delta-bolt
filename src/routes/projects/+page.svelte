<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import ProjectFilter from '$lib/components/projects/ProjectFilter.svelte';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
  import { fade } from 'svelte/transition';
  
  let filteredProjects = [...projects];
  let selectedCategory = 'all';
  let isLoaded = false;
  
  onMount(() => {
    isLoaded = true;
    
    gsap.fromTo(
      '.project-card',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out' 
      }
    );
  });
  
  function filterProjects(category) {
    selectedCategory = category;
    
    if (category === 'all') {
      filteredProjects = [...projects];
    } else {
      filteredProjects = projects.filter(project => project.category === category);
    }
    
    // Re-animate filtered results
    setTimeout(() => {
      gsap.fromTo(
        '.project-card',
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out' 
        }
      );
    }, 50);
  }
</script>

<svelte:head>
  <title>Projects | Delta Estudio</title>
  <meta name="description" content="Explore Delta Estudio's portfolio of innovative architectural projects." />
</svelte:head>

<section class="py-20 bg-delta-black text-delta-white">
  <div class="container-delta">
    <h1 class="mb-2">Projects</h1>
    <p class="text-xl text-delta-light font-serif max-w-3xl">
      A curated collection of our architectural work, showcasing our approach to design across scales and contexts.
    </p>
  </div>
</section>

<section class="py-12 md:py-20">
  <div class="container-delta">
    <ProjectFilter {selectedCategory} {filterProjects} />
    
    {#if isLoaded}
      <div in:fade={{ duration: 300 }} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {#each filteredProjects as project}
          <div class="project-card">
            <ProjectCard {project} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>