<script>
  import Hero from '$lib/components/home/Hero.svelte';
  import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
  import AboutPreview from '$lib/components/home/AboutPreview.svelte';
  import Services from '$lib/components/home/Services.svelte';
  import Testimonials from '$lib/components/home/Testimonials.svelte';
  import LatestNews from '$lib/components/home/LatestNews.svelte';
</script>

<svelte:head>
  <title>Delta Estudio | Innovative Architectural Design</title>
  <meta name="description" content="Delta Estudio creates thoughtful, sustainable spaces that respond to human needs and environmental context." />
</svelte:head>

<Hero />
<FeaturedProjects />
<AboutPreview />
<Services />
<Testimonials />
<LatestNews />