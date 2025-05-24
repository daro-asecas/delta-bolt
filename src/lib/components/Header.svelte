<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let isScrolled = false;
  let isMobileMenuOpen = false;
  
  // Navigation links
  const navLinks = [
    { label: 'Home', url: '/' },
    { label: 'Projects', url: '/projects' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' }
  ];
  
  // Check if current page matches URL
  $: isActive = (url) => {
    return $page.url.pathname === url || 
      ($page.url.pathname.startsWith(url) && url !== '/');
  };
  
  // Handle scroll events
  function handleScroll() {
    isScrolled = window.scrollY > 50;
  }
  
  // Handle click outside mobile menu
  function handleClickOutside(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (isMobileMenuOpen && mobileMenu && !mobileMenu.contains(event.target) && !event.target.classList.contains('menu-toggle')) {
      isMobileMenuOpen = false;
    }
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<header 
  class="fixed w-full z-50 transition-all duration-300 {isScrolled ? 'py-4 bg-delta-white shadow-md' : 'py-6 bg-transparent'}" 
>
  <div class="container-delta">
    <div class="flex items-center justify-between">
      <a 
        href="/" 
        class="text-3xl font-display {isScrolled || $page.url.pathname !== '/' ? 'text-delta-black' : 'text-delta-white'}"
      >
        Δ DELTA
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex items-center space-x-8">
          {#each navLinks as link}
            <li>
              <a 
                href={link.url}
                class="relative py-2 {isScrolled || $page.url.pathname !== '/' ? 'text-delta-black hover:text-delta-gray' : 'text-delta-white hover:text-delta-light'} transition-colors"
                class:after:absolute={isActive(link.url)}
                class:after:bottom-0={isActive(link.url)}
                class:after:left-0={isActive(link.url)}
                class:after:w-full={isActive(link.url)}
                class:after:h-0.5={isActive(link.url)}
                class:after:bg-delta-accent={isActive(link.url)}
              >
                {link.label}
              </a>
            </li>
          {/each}
          
          <li>
            <a 
              href="/contact" 
              class="btn btn-primary"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
      
      <!-- Mobile Menu Toggle -->
      <button 
        class="md:hidden menu-toggle p-2"
        on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <div class="w-6 h-5 flex flex-col justify-between">
          <span class="w-full h-0.5 bg-delta-black transition-all transform {isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"></span>
          <span class="w-full h-0.5 bg-delta-black transition-all {isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
          <span class="w-full h-0.5 bg-delta-black transition-all transform {isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
        </div>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div 
      id="mobile-menu" 
      class="fixed inset-0 mt-16 bg-delta-white z-40 transition-transform duration-300 {isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
    >
      <div class="container-delta py-12">
        <nav>
          <ul class="space-y-6">
            {#each navLinks as link}
              <li>
                <a 
                  href={link.url} 
                  class="text-2xl font-display block py-2 border-b border-gray-200 {isActive(link.url) ? 'text-delta-accent' : 'text-delta-black'}"
                  on:click={() => isMobileMenuOpen = false}
                >
                  {link.label}
                </a>
              </li>
            {/each}
            
            <li class="pt-4">
              <a 
                href="/contact" 
                class="btn btn-primary block text-center"
                on:click={() => isMobileMenuOpen = false}
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  {/if}
</header>

<!-- Spacer for fixed header -->
<div class="h-20"></div>