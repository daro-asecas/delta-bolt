<script>
  import TeamMember from '$lib/components/about/TeamMember.svelte';
  import Stats from '$lib/components/about/Stats.svelte';
  import Timeline from '$lib/components/about/Timeline.svelte';
  import Values from '$lib/components/about/Values.svelte';
  
  const teamMembers = [
    {
      name: 'Elena Ramírez',
      role: 'Founding Partner & Design Director',
      image: 'https://images.pexels.com/photos/5717577/pexels-photo-5717577.jpeg',
      bio: 'With over 20 years of experience, Elena leads our design vision with a focus on sustainable urban environments.'
    },
    {
      name: 'David Chen',
      role: 'Founding Partner & Technical Director',
      image: 'https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg',
      bio: 'David brings engineering precision and material innovation to every project, blending form and function seamlessly.'
    },
    {
      name: 'Sophia Johnson',
      role: 'Senior Architect',
      image: 'https://images.pexels.com/photos/5717684/pexels-photo-5717684.jpeg',
      bio: 'Specializing in residential architecture, Sophia creates spaces that reflect the unique personalities of our clients.'
    },
    {
      name: 'Marcus Lee',
      role: 'Urban Design Specialist',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg',
      bio: 'Marcus focuses on creating harmonious urban spaces that enhance community engagement and sustainability.'
    },
    {
      name: 'Olivia Torres',
      role: 'Interior Design Lead',
      image: 'https://images.pexels.com/photos/6533984/pexels-photo-6533984.jpeg',
      bio: 'With an eye for detail, Olivia transforms interiors into cohesive expressions of our architectural vision.'
    },
    {
      name: 'Thomas Weber',
      role: 'Sustainability Consultant',
      image: 'https://images.pexels.com/photos/4064444/pexels-photo-4064444.jpeg',
      bio: 'Thomas ensures our projects meet the highest environmental standards while maintaining design excellence.'
    }
  ];
</script>

<svelte:head>
  <title>About | Delta Estudio</title>
  <meta name="description" content="Learn about Delta Estudio's philosophy, team, and design approach." />
</svelte:head>

<section class="bg-delta-black text-delta-white py-20 md:py-28">
  <div class="container-delta">
    <div class="max-w-4xl">
      <h1 class="mb-8">About Delta</h1>
      <p class="text-xl md:text-2xl mb-6 text-delta-light font-serif">
        Founded in 2010, Delta Estudio exists at the intersection of design innovation and sustainable practices.
      </p>
      <p class="text-lg text-delta-light font-serif">
        We believe architecture should respond to both human needs and environmental context, creating spaces that inspire, 
        endure, and evolve over time. Our interdisciplinary team brings diverse perspectives to each project, 
        resulting in thoughtful solutions that transcend conventional boundaries.
      </p>
    </div>
  </div>
</section>

<section class="py-16 md:py-24">
  <div class="container-delta">
    <h2 class="mb-16 text-center">Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each teamMembers as member}
        <TeamMember {member} />
      {/each}
    </div>
  </div>
</section>

<Values />

<Stats />

<Timeline />

<section class="py-20 bg-delta-light">
  <div class="container-delta">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-8">Our Approach</h2>
      <p class="text-xl mb-12 font-serif">
        Every project begins with deep listening and collaborative dialogue. We engage with clients, 
        communities, and contexts to create architecture that resonates on multiple levels.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        <div>
          <h3 class="text-xl mb-4">Research</h3>
          <p>We begin with comprehensive research into site conditions, cultural context, and client needs.</p>
        </div>
        <div>
          <h3 class="text-xl mb-4">Concept Development</h3>
          <p>Ideas emerge through iterative sketching, modeling, and dialogue, evolving toward clear design concepts.</p>
        </div>
        <div>
          <h3 class="text-xl mb-4">Execution</h3>
          <p>Meticulous attention to detail ensures designs are realized with precision and excellence.</p>
        </div>
      </div>
    </div>
  </div>
</section>