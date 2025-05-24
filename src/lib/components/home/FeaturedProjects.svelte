<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { projects } from '$lib/data/projects';
  
  // Get featured projects (first 3)
  const featuredProjects = projects.slice(0, 3);
  
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate project cards
    gsap.from('.project-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.featured-projects',
        start: 'top 80%',
      }
    });
  });
</script>

<section class="py-20 md:py-32 featured-projects">
  <div class="container-delta">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20">
      <div>
        <h2 class="mb-4">Featured Projects</h2>
        <p class="text-lg md:text-xl text-delta-gray max-w-2xl font-serif">
          A selection of our most innovative and impactful architectural works.
        </p>
      </div>
      <a href="/projects" class="btn btn-secondary mt-6 md:mt-0">
        View All Projects
      </a>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {#each featuredProjects as project, index}
        <div class="project-card image-hover h-[500px] relative group overflow-hidden">
          <img
            src={project.featuredImage}
            alt={project.title}
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-delta-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <div class="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
              <p class="text-delta-accent mb-2 uppercase tracking-wider">{project.category}</p>
              <h3 class="text-white mb-3">{project.title}</h3>
              <p class="text-delta-light mb-4 font-serif">{project.location}</p>
              <a 
                href={`/projects/${project.slug}`}
                class="inline-block text-white border-b border-delta-accent pb-1 hover:text-delta-accent transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>