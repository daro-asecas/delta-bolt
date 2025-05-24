<script>
  export let project;
</script>

<div class="group h-full flex flex-col">
  <a href={`/projects/${project.slug}`} class="image-hover aspect-square block flex-grow">
    <img
      src={project.featuredImage}
      alt={project.title}
      class="w-full h-full object-cover"
    />
  </a>
  
  <div class="pt-4 pb-2">
    <p class="text-delta-accent uppercase tracking-wider text-sm">{project.category}</p>
    <h3 class="text-xl mb-1 group-hover:text-delta-accent transition-colors">
      <a href={`/projects/${project.slug}`}>{project.title}</a>
    </h3>
    <p class="text-delta-gray">{project.location}</p>
  </div>
</div>