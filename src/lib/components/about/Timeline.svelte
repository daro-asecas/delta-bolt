<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  const timeline = [
    {
      year: "2010",
      title: "Delta Architecture Founded",
      description: "Established by Elena Ramírez and David Chen with a vision for innovative, sustainable architecture."
    },
    {
      year: "2012",
      title: "First Major Commission",
      description: "Completed the award-winning Bayside Residence, establishing our reputation for thoughtful residential design."
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "Opened our second office in London, expanding our practice to international markets."
    },
    {
      year: "2018",
      title: "Award for Sustainable Design",
      description: "Received the Global Sustainable Architecture Award for our innovative approach to environmental design."
    },
    {
      year: "2021",
      title: "First Cultural Project",
      description: "Completed our first major cultural institution, the Riverside Gallery, to critical acclaim."
    },
    {
      year: "2025",
      title: "Looking to the Future",
      description: "Continuing to grow our practice with a focus on regenerative design and community-centered architecture."
    }
  ];
  
  onMount(() => {
    // Animate timeline
    gsap.from('.timeline-item', {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top 70%',
      }
    });
  });
</script>

<section class="py-20 timeline-section">
  <div class="container-delta">
    <h2 class="mb-16 text-center">Our Journey</h2>
    
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-delta-light"></div>
      
      <!-- Timeline Items -->
      {#each timeline as item, i}
        <div class="timeline-item relative flex flex-col md:flex-row items-start mb-16 last:mb-0">
          <!-- Year Marker -->
          <div class="md:w-1/2 pb-8 md:pb-0 {i % 2 === 0 ? 'md:pr-12 text-left' : 'md:pl-12 md:order-1 text-left md:text-right'}">
            <div class="inline-block bg-delta-black text-white px-4 py-2 text-xl font-display mb-4">
              {item.year}
            </div>
            <h3 class="text-xl mb-2">{item.title}</h3>
            <p class="text-delta-gray">{item.description}</p>
          </div>
          
          <!-- Circle Marker -->
          <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-delta-accent border-4 border-delta-light mt-2"></div>
        </div>
      {/each}
    </div>
  </div>
</section>