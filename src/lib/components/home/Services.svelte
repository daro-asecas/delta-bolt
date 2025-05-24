<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  const services = [
    {
      title: "Architectural Design",
      description: "Comprehensive design services for residential, commercial, cultural, and mixed-use projects.",
      icon: "building"
    },
    {
      title: "Interior Design",
      description: "Thoughtful interior solutions that complement architectural concepts and enhance spatial experiences.",
      icon: "sofa"
    },
    {
      title: "Urban Planning",
      description: "Strategic planning for neighborhoods, districts, and urban spaces that promote community and sustainability.",
      icon: "map"
    },
    {
      title: "Sustainable Design",
      description: "Environmentally conscious approaches that minimize impact while maximizing comfort and efficiency.",
      icon: "leaf"
    },
    {
      title: "Adaptive Reuse",
      description: "Transforming existing structures with new purpose while honoring their historical and cultural significance.",
      icon: "refresh-ccw"
    },
    {
      title: "Design Consultation",
      description: "Expert guidance on architectural and design decisions for clients at any stage of their project.",
      icon: "clipboard"
    }
  ];
  
  onMount(() => {
    // Animation for services
    gsap.from('.service-card', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 70%'
      }
    });
  });
</script>

<section class="py-20 md:py-32 services-section">
  <div class="container-delta">
    <div class="max-w-3xl mx-auto text-center mb-16">
      <h2 class="mb-6">Our Services</h2>
      <p class="text-xl text-delta-gray font-serif">
        We offer a comprehensive range of architectural and design services, tailored to meet the unique needs of each client and project.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, i}
        <div class="service-card p-8 border border-delta-light rounded-lg hover:border-delta-accent transition-colors duration-300">
          <div class="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-delta-accent/10 text-delta-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {#if service.icon === 'building'}
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="6" x2="12" y2="6"></line>
                <line x1="12" y1="10" x2="12" y2="10"></line>
                <line x1="12" y1="14" x2="12" y2="14"></line>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              {:else if service.icon === 'sofa'}
                <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"></path>
              {:else if service.icon === 'map'}
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                <line x1="9" x2="9" y1="3" y2="18"></line>
                <line x1="15" x2="15" y1="6" y2="21"></line>
              {:else if service.icon === 'leaf'}
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              {:else if service.icon === 'refresh-ccw'}
                <path d="M3 2v6h6"></path>
                <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
                <path d="M21 22v-6h-6"></path>
                <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
              {:else if service.icon === 'clipboard'}
                <rect width="14" height="18" x="5" y="3" rx="2"></rect>
                <path d="M15 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2"></path>
                <path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"></path>
                <path d="M8 13h8"></path>
                <path d="M8 9h8"></path>
                <path d="M8 17h5"></path>
              {/if}
            </svg>
          </div>
          
          <h3 class="text-xl mb-3">{service.title}</h3>
          <p class="text-delta-gray">{service.description}</p>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/contact" class="btn btn-primary">
        Discuss Your Project
      </a>
    </div>
  </div>
</section>