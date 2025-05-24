<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  onMount(() => {
    // Animation for text content
    gsap.from('.about-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%'
      }
    });
    
    // Animation for image
    gsap.from('.about-image', {
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%'
      }
    });
  });
</script>

<section class="py-20 md:py-32 bg-delta-light about-section">
  <div class="container-delta">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="about-content">
        <h2 class="mb-6">About Delta</h2>
        <p class="text-xl md:text-2xl mb-8 font-serif">
          Delta Estudio was founded on the belief that architecture should respond to both human needs and environmental context.
        </p>
        <p class="mb-6">
          Our interdisciplinary team brings diverse perspectives to each project, resulting in thoughtful solutions that transcend conventional boundaries. We believe in the power of design to shape experiences, foster community, and create lasting value.
        </p>
        <p class="mb-8">
          From private residences to public institutions, our work is characterized by spatial clarity, material authenticity, and contextual sensitivity.
        </p>
        <a href="/about" class="btn btn-secondary">
          Learn More About Us
        </a>
      </div>
      
      <div class="about-image relative">
        <div class="absolute -top-8 -left-8 w-32 h-32 bg-delta-accent z-0"></div>
        <div class="relative z-10 aspect-square bg-delta-light p-4">
          <img 
            src="https://images.pexels.com/photos/2850463/pexels-photo-2850463.jpeg" 
            alt="Delta Estudio Team" 
            class="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  </div>
</section>