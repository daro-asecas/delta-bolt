<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  onMount(() => {
    // Animate hero content
    gsap.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });
</script>

<section class="relative h-screen-90 overflow-hidden">
  <!-- Background Image -->
  <div class="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg" 
      alt="Modern architectural building" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-delta-black/70 to-transparent"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 h-full flex items-center">
    <div class="container-delta">
      <div class="max-w-2xl hero-content">
        <h1 class="text-white mb-6">Designing spaces that inspire and endure</h1>
        <p class="text-xl md:text-2xl text-delta-light font-serif mb-8">
          Delta is a forward-thinking architecture studio dedicated to creating thoughtful, sustainable spaces that respond to human needs and environmental context.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/projects" class="btn btn-primary">
            View Our Work
          </a>
          <a href="/contact" class="btn btn-secondary text-white border-white">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
    <span class="text-sm mb-2">Scroll to explore</span>
    <div class="w-px h-10 bg-white/50 animate-pulse"></div>
  </div>
</section>