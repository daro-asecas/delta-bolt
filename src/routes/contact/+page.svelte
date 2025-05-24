<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  let name = '';
  let email = '';
  let projectType = '';
  let message = '';
  let isSubmitting = false;
  let isSubmitted = false;
  
  // Form validation
  let errors = { name: '', email: '', message: '' };
  
  function validateForm() {
    let isValid = true;
    errors = { name: '', email: '', message: '' };
    
    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    return isValid;
  }
  
  async function handleSubmit() {
    if (!validateForm()) return;
    
    isSubmitting = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    isSubmitting = false;
    isSubmitted = true;
    
    // Reset form
    name = '';
    email = '';
    projectType = '';
    message = '';
  }
  
  onMount(() => {
    gsap.from('.contact-content > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
      x: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out'
    });
  });
</script>

<svelte:head>
  <title>Contact | Delta Estudio</title>
  <meta name="description" content="Get in touch with Delta Estudio to discuss your project or collaboration opportunities." />
</svelte:head>

<section class="py-20 bg-delta-black text-delta-white">
  <div class="container-delta">
    <h1 class="mb-2">Contact</h1>
    <p class="text-xl text-delta-light font-serif max-w-3xl">
      Let's discuss your vision and explore how we can bring your architectural project to life.
    </p>
  </div>
</section>

<section class="py-20">
  <div class="container-delta">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="contact-content">
        <h2 class="mb-8">Get In Touch</h2>
        
        <div class="mb-12">
          <p class="mb-6">
            Whether you're looking to start a new project, join our team, or simply learn more about our work, 
            we'd love to hear from you. Our collaborative approach begins with a conversation.
          </p>
          
          <div class="mb-8">
            <p class="text-lg font-medium mb-1">Email</p>
            <p class="text-delta-gray">hello@deltaestudio.com.ar</p>
          </div>
          
          <div class="mb-8">
            <p class="text-lg font-medium mb-1">Phone</p>
            <p class="text-delta-gray">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <p class="text-lg font-medium mb-1">Office</p>
            <p class="text-delta-gray">123 Design Avenue</p>
            <p class="text-delta-gray">San Francisco, CA 94103</p>
          </div>
        </div>
        
        <div class="rounded-lg overflow-hidden h-80 bg-delta-light">
          <div class="w-full h-full">
            <!-- Map would be here - using a placeholder -->
            <div class="w-full h-full bg-delta-light flex items-center justify-center">
              <p class="text-delta-gray">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        {#if isSubmitted}
          <div class="bg-green-50 text-green-800 p-8 rounded-lg border border-green-100 text-center">
            <h3 class="text-2xl mb-4">Message Sent!</h3>
            <p>Thank you for reaching out to Delta Estudio. We'll be in touch with you shortly.</p>
            <button 
              class="mt-6 btn btn-primary"
              on:click={() => isSubmitted = false}
            >
              Send Another Message
            </button>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="bg-delta-light p-8 md:p-10 rounded-lg">
            <h3 class="text-2xl mb-8">Contact Form</h3>
            
            <div class="mb-6">
              <label for="name" class="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                bind:value={name}
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-delta-black/30"
                placeholder="Your name"
              />
              {#if errors.name}
                <p class="text-red-500 mt-1 text-sm">{errors.name}</p>
              {/if}
            </div>
            
            <div class="mb-6">
              <label for="email" class="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                bind:value={email}
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-delta-black/30"
                placeholder="Your email"
              />
              {#if errors.email}
                <p class="text-red-500 mt-1 text-sm">{errors.email}</p>
              {/if}
            </div>
            
            <div class="mb-6">
              <label for="projectType" class="block mb-2 font-medium">Project Type</label>
              <select
                id="projectType"
                bind:value={projectType}
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-delta-black/30"
              >
                <option value="">Select project type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Cultural">Cultural</option>
                <option value="Mixed-Use">Mixed-Use</option>
                <option value="Urban Planning">Urban Planning</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div class="mb-8">
              <label for="message" class="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                bind:value={message}
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-delta-black/30 min-h-32"
                placeholder="Tell us about your project or inquiry"
                rows="6"
              ></textarea>
              {#if errors.message}
                <p class="text-red-500 mt-1 text-sm">{errors.message}</p>
              {/if}
            </div>
            
            <button
              type="submit"
              class="btn btn-primary w-full"
              disabled={isSubmitting}
            >
              {#if isSubmitting}
                <span class="inline-block mr-2">Sending...</span>
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>