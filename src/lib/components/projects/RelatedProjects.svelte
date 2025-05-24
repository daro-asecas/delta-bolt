<script>
  export let projects;
</script>

<section class="py-16 bg-delta-light">
  <div class="container-delta">
    <h2 class="mb-10">Related Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each projects as project}
        <div class="group">
          <a href={`/projects/${project.slug}`} class="image-hover block mb-4 aspect-video">
            <img
              src={project.featuredImage}
              alt={project.title}
              class="w-full h-full object-cover"
            />
          </a>
          
          <p class="text-delta-accent uppercase tracking-wider text-sm">{project.category}</p>
          <h3 class="text-xl group-hover:text-delta-accent transition-colors">
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </h3>
          <p class="text-delta-gray">{project.location}</p>
        </div>
      {/each}
    </div>
  </div>
</section>