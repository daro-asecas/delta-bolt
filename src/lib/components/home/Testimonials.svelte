<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  const testimonials = [
    {
      quote: "Working with Delta Estudio was a transformative experience. They truly listened to our needs and translated them into a space that exceeds our expectations every day.",
      author: "Michael Rodriguez",
      role: "Homeowner",
      project: "Hillside Residence"
    },
    {
      quote: "Delta's approach to our commercial space balanced functionality with stunning design. The attention to detail and thoughtful use of materials created a space our clients love visiting.",
      author: "Sarah Williams",
      role: "CEO",
      project: "Luminous Office Building"
    },
    {
      quote: "The team at Delta showed exceptional creativity in working with our challenging site constraints. The resulting design feels both bold and perfectly integrated with the surroundings.",
      author: "James Chen",
      role: "Foundation Director",
      project: "Riverside Cultural Center"
    }
  ];
  
  let currentIndex = 0;
  let intervalId;
  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }
  
  onMount(() => {
    // Start auto-rotation
    intervalId = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<section class="py-20 md:py-32 bg-delta-dark text-white">
  <div class="container-delta">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="mb-16">Client Testimonials</h2>
      
      <div class="relative overflow-hidden">
        <div class="relative h-80">
          {#each testimonials as testimonial, i}
            {#if i === currentIndex}
              <div 
                class="absolute w-full transition-all duration-500 ease-in-out"
                in:fade={{ duration: 500 }}
              >
                <div class="text-5xl text-delta-accent mb-6">"</div>
                <p class="text-xl md:text-2xl mb-8 font-serif">
                  {testimonial.quote}
                </p>
                <div>
                  <p class="font-medium text-lg">{testimonial.author}</p>
                  <p class="text-delta-light">{testimonial.role}, {testimonial.project}</p>
                </div>
              </div>
            {/if}
          {/each}
        </div>
        
        <div class="flex justify-center space-x-4 mt-8">
          <button 
            class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            on:click={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            on:click={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>