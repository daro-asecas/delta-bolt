<script>
  export let selectedCategory = 'all';
  export let filterProjects;
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'Residential', name: 'Residential' },
    { id: 'Commercial', name: 'Commercial' },
    { id: 'Cultural', name: 'Cultural' },
    { id: 'Mixed-Use', name: 'Mixed-Use' }
  ];
</script>

<div class="flex flex-wrap gap-4">
  {#each categories as category}
    <button
      class="px-5 py-2 rounded-full transition-colors {selectedCategory === category.id ? 'bg-delta-black text-delta-white' : 'bg-delta-light text-delta-dark hover:bg-delta-dark hover:text-delta-white'}"
      on:click={() => filterProjects(category.id)}
    >
      {category.name}
    </button>
  {/each}
</div>