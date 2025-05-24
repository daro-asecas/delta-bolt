<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  
  const articles = [
    {
      title: "Delta Wins International Award for Sustainable Urban Housing",
      date: "April 15, 2025",
      excerpt: "Our Greenview Residences project has been recognized for its innovative approach to sustainable urban living.",
      image: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
      slug: "sustainable-urban-housing-award"
    },
    {
      title: "New Cultural Center Opens to Public",
      date: "March 2, 2025",
      excerpt: "The highly anticipated Riverside Cultural Center has opened its doors, creating a new hub for community engagement.",
      image: "https://images.pexels.com/photos/1719651/pexels-photo-1719651.jpeg",
      slug: "riverside-cultural-center-opens"
    },
    {
      title: "Delta Expands with New International Office",
      date: "February 10, 2025",
      excerpt: "We're excited to announce the opening of our new office in Barcelona, expanding our global presence.",
      image: "https://images.pexels.com/photos/3277468/pexels-photo-3277468.jpeg",
      slug: "new-international-office"
    }
  ];
  
  onMount(() => {
    // Animate articles
    gsap.from('.news-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.news-section',
        start: 'top 80%'
      }
    });
  });
</script>

<section class="py-20 news-section">
  <div class="container-delta">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
        <h2 class="mb-4">Latest News</h2>
        <p class="text-lg text-delta-gray max-w-2xl font-serif">
          Stay updated with Delta's latest projects, awards, and insights.
        </p>
      </div>
      <a href="#" class="btn btn-secondary mt-6 md:mt-0">View All News</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each articles as article, i}
        <div class="news-card border border-delta-light rounded-lg overflow-hidden group hover:border-delta-accent transition-colors">
          <div class="aspect-video overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div class="p-6">
            <p class="text-delta-gray mb-2">{article.date}</p>
            <h3 class="text-xl mb-3">{article.title}</h3>
            <p class="text-delta-gray mb-4">{article.excerpt}</p>
            <a 
              href={`/news/${article.slug}`} 
              class="inline-block text-delta-black border-b border-delta-accent pb-1 hover:text-delta-accent transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>