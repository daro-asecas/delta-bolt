<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-delta-black text-delta-white py-16 md:py-20">
  <div class="container-delta">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
      <div>
        <a href="/" class="text-3xl font-display block mb-6">Δ DELTA</a>
        <p class="text-delta-light mb-6">
          An award-winning architecture studio creating spaces that inspire and endure.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-delta-light hover:text-delta-accent transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" class="text-delta-light hover:text-delta-accent transition-colors" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" class="text-delta-light hover:text-delta-accent transition-colors" aria-label="Pinterest">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="text-xl mb-6">Navigation</h3>
        <ul class="space-y-3">
          <li><a href="/" class="text-delta-light hover:text-white transition-colors">Home</a></li>
          <li><a href="/projects" class="text-delta-light hover:text-white transition-colors">Projects</a></li>
          <li><a href="/about" class="text-delta-light hover:text-white transition-colors">About</a></li>
          <li><a href="/contact" class="text-delta-light hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl mb-6">Contact</h3>
        <address class="not-italic text-delta-light space-y-3">
          <p>123 Design Avenue</p>
          <p>San Francisco, CA 94103</p>
          <p>hello@deltaestudio.com.ar</p>
          <p>+1 (555) 123-4567</p>
        </address>
      </div>
      
      <div>
        <h3 class="text-xl mb-6">Newsletter</h3>
        <p class="text-delta-light mb-4">
          Subscribe to our newsletter for updates on our latest projects and insights.
        </p>
        <form class="flex">
          <input 
            type="email" 
            placeholder="Your email" 
            class="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-delta-dark"
          />
          <button 
            type="submit" 
            class="bg-delta-accent text-white px-4 py-2 rounded-r-md hover:bg-delta-accent/90 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    
    <div class="border-t border-delta-dark pt-8 flex flex-col md:flex-row md:justify-between text-delta-light">
      <p>&copy; {currentYear} Delta Estudio.</p>
      <div class="mt-4 md:mt-0 space-x-6">
        <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-white transition-colors">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>