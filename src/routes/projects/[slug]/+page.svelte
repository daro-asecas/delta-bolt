<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { projects } from '$lib/data/projects';
  import RelatedProjects from '$lib/components/projects/RelatedProjects.svelte';
  
  let project;
  let relatedProjects = [];
  
  $: {
    const slug = $page.params.slug;
    project = projects.find(p => p.slug === slug);
    
    // Find related projects in the same category
    if (project) {
      relatedProjects = projects
        .filter(p => p.category === project.category && p.slug !== project.slug)
        .slice(0, 3);
    }
  }
  
  onMount(() => {
    // Animate project details on load
    gsap.from('.project-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
    
    // Animate images with a slight delay
    gsap.from('.project-image', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      ease: 'power2.out'
    });
  });
</script>

<svelte:head>
  {#if project}
    <title>{project.title} | Delta Estudio</title>
    <meta name="description" content={project.description} />
  {:else}
    <title>Project | Delta Estudio</title>
  {/if}
</svelte:head>

{#if project}
  <div class="mb-20">
    <div class="h-screen-90 relative">
      <div class="absolute inset-0">
        <img 
          src={project.featuredImage} 
          alt={project.title} 
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-delta-black/60 to-transparent flex items-center">
        <div class="container-delta text-delta-white">
          <div class="max-w-3xl">
            <p class="text-delta-accent mb-3 uppercase tracking-wider">{project.category}</p>
            <h1 class="mb-4">{project.title}</h1>
            <p class="text-xl md:text-2xl font-serif">{project.location}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container-delta my-20">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div class="lg:col-span-2 project-content">
          <p class="text-xl font-serif mb-8">{project.description}</p>
          
          <div class="prose prose-lg max-w-none mb-12">
            <p>
              {project.content || "This project exemplifies our approach to harmonizing architecture with its surroundings. Through careful consideration of materials, light, and spatial composition, we've created a design that responds to both site conditions and client needs."
              }
            </p>
            <p>
              The design process involved extensive collaboration with the client and thorough site analysis. We explored multiple conceptual approaches before arriving at a solution that balances innovation with practicality.
            </p>
          </div>
          
          <div class="grid grid-cols-2 gap-8 mb-16">
            {#each (project.images || []).slice(0, 2) as image, index}
              <div class="project-image overflow-hidden">
                <img 
                  src={image} 
                  alt={`${project.title} detail ${index + 1}`} 
                  class="w-full h-[300px] object-cover"
                />
              </div>
            {/each}
          </div>
          
          <div class="prose prose-lg max-w-none">
            <p>
              The final design achieves a delicate balance between form and function, creating spaces that are both aesthetically striking and highly livable. Special attention was given to the quality of light throughout the day, ensuring the spaces feel dynamic and responsive to changing conditions.
            </p>
            <p>
              Sustainable strategies were integrated throughout, including passive heating and cooling systems, locally-sourced materials, and energy-efficient systems that reduce the building's carbon footprint without compromising design excellence.
            </p>
          </div>
        </div>
        
        <div>
          <div class="sticky top-32">
            <h3 class="text-xl mb-6">Project Details</h3>
            
            <div class="space-y-6 mb-12">
              <div>
                <p class="text-delta-gray mb-1">Client</p>
                <p class="font-medium">{project.client || 'Private Client'}</p>
              </div>
              
              <div>
                <p class="text-delta-gray mb-1">Location</p>
                <p class="font-medium">{project.location}</p>
              </div>
              
              <div>
                <p class="text-delta-gray mb-1">Year</p>
                <p class="font-medium">{project.year || '2023'}</p>
              </div>
              
              <div>
                <p class="text-delta-gray mb-1">Size</p>
                <p class="font-medium">{project.size || '450 sq m'}</p>
              </div>
              
              <div>
                <p class="text-delta-gray mb-1">Services</p>
                <p class="font-medium">
                  {project.services || 'Architectural Design, Interior Design, Landscape Design'}
                </p>
              </div>
            </div>
            
            <a href="/contact" class="btn btn-primary block text-center">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
    
    {#if project.images && project.images.length > 2}
      <div class="container-delta my-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each project.images.slice(2) as image, index}
            <div class="project-image overflow-hidden aspect-square">
              <img 
                src={image} 
                alt={`${project.title} detail ${index + 3}`} 
                class="w-full h-full object-cover"
              />
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    {#if relatedProjects.length > 0}
      <RelatedProjects projects={relatedProjects} />
    {/if}
  </div>
{:else}
  <div class="container-delta py-32 text-center">
    <h1 class="mb-4">Project Not Found</h1>
    <p class="mb-8">The project you're looking for doesn't exist or has been removed.</p>
    <a href="/projects" class="btn btn-primary">View All Projects</a>
  </div>
{/if}