import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as projects } from "../../chunks/projects.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="relative h-screen-90 overflow-hidden" data-svelte-h="svelte-bexdgm"> <div class="absolute inset-0 z-0"><img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg" alt="Modern architectural building" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-r from-delta-black/70 to-transparent"></div></div>  <div class="relative z-10 h-full flex items-center"><div class="container-delta"><div class="max-w-2xl hero-content"><h1 class="text-white mb-6">Designing spaces that inspire and endure</h1> <p class="text-xl md:text-2xl text-delta-light font-serif mb-8">Delta is a forward-thinking architecture studio dedicated to creating thoughtful, sustainable spaces that respond to human needs and environmental context.</p> <div class="flex flex-col sm:flex-row gap-4"><a href="/projects" class="btn btn-primary">View Our Work</a> <a href="/contact" class="btn btn-secondary text-white border-white">Get In Touch</a></div></div></div></div>  <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"><span class="text-sm mb-2">Scroll to explore</span> <div class="w-px h-10 bg-white/50 animate-pulse"></div></div></section>`;
});
const FeaturedProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featuredProjects = projects.slice(0, 3);
  return `<section class="py-20 md:py-32 featured-projects"><div class="container-delta"><div class="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20" data-svelte-h="svelte-kd6dnh"><div><h2 class="mb-4">Featured Projects</h2> <p class="text-lg md:text-xl text-delta-gray max-w-2xl font-serif">A selection of our most innovative and impactful architectural works.</p></div> <a href="/projects" class="btn btn-secondary mt-6 md:mt-0">View All Projects</a></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">${each(featuredProjects, (project, index) => {
    return `<div class="project-card image-hover h-[500px] relative group overflow-hidden"><img${add_attribute("src", project.featuredImage, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-delta-black/80 via-transparent to-transparent flex flex-col justify-end p-8"><div class="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4"><p class="text-delta-accent mb-2 uppercase tracking-wider">${escape(project.category)}</p> <h3 class="text-white mb-3">${escape(project.title)}</h3> <p class="text-delta-light mb-4 font-serif">${escape(project.location)}</p> <a${add_attribute("href", `/projects/${project.slug}`, 0)} class="inline-block text-white border-b border-delta-accent pb-1 hover:text-delta-accent transition-colors">View Project</a> </div></div> </div>`;
  })}</div></div></section>`;
});
const AboutPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="py-20 md:py-32 bg-delta-light about-section" data-svelte-h="svelte-1abmkd7"><div class="container-delta"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="about-content"><h2 class="mb-6">About Delta</h2> <p class="text-xl md:text-2xl mb-8 font-serif">Delta Estudio was founded on the belief that architecture should respond to both human needs and environmental context.</p> <p class="mb-6">Our interdisciplinary team brings diverse perspectives to each project, resulting in thoughtful solutions that transcend conventional boundaries. We believe in the power of design to shape experiences, foster community, and create lasting value.</p> <p class="mb-8">From private residences to public institutions, our work is characterized by spatial clarity, material authenticity, and contextual sensitivity.</p> <a href="/about" class="btn btn-secondary">Learn More About Us</a></div> <div class="about-image relative"><div class="absolute -top-8 -left-8 w-32 h-32 bg-delta-accent z-0"></div> <div class="relative z-10 aspect-square bg-delta-light p-4"><img src="https://images.pexels.com/photos/2850463/pexels-photo-2850463.jpeg" alt="Delta Estudio Team" class="w-full h-full object-cover"></div></div></div></div></section>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<section class="py-20 md:py-32 services-section"><div class="container-delta"><div class="max-w-3xl mx-auto text-center mb-16" data-svelte-h="svelte-1q7qvy6"><h2 class="mb-6">Our Services</h2> <p class="text-xl text-delta-gray font-serif">We offer a comprehensive range of architectural and design services, tailored to meet the unique needs of each client and project.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(services, (service, i) => {
    return `<div class="service-card p-8 border border-delta-light rounded-lg hover:border-delta-accent transition-colors duration-300"><div class="mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-delta-accent/10 text-delta-accent"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${service.icon === "building" ? `<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect> <line x1="12" y1="6" x2="12" y2="6"></line> <line x1="12" y1="10" x2="12" y2="10"></line> <line x1="12" y1="14" x2="12" y2="14"></line> <line x1="12" y1="18" x2="12" y2="18"></line>` : `${service.icon === "sofa" ? `<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path> <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"></path>` : `${service.icon === "map" ? `<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon> <line x1="9" x2="9" y1="3" y2="18"></line> <line x1="15" x2="15" y1="6" y2="21"></line>` : `${service.icon === "leaf" ? `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>` : `${service.icon === "refresh-ccw" ? `<path d="M3 2v6h6"></path> <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path> <path d="M21 22v-6h-6"></path> <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>` : `${service.icon === "clipboard" ? `<rect width="14" height="18" x="5" y="3" rx="2"></rect> <path d="M15 3h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2"></path> <path d="M9 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"></path> <path d="M8 13h8"></path> <path d="M8 9h8"></path> <path d="M8 17h5"></path>` : ``}`}`}`}`}`}</svg></div> <h3 class="text-xl mb-3">${escape(service.title)}</h3> <p class="text-delta-gray">${escape(service.description)}</p> </div>`;
  })}</div> <div class="text-center mt-12" data-svelte-h="svelte-vwp6cp"><a href="/contact" class="btn btn-primary">Discuss Your Project</a></div></div></section>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<section class="py-20 md:py-32 bg-delta-dark text-white"><div class="container-delta"><div class="max-w-4xl mx-auto text-center"><h2 class="mb-16" data-svelte-h="svelte-j9xllv">Client Testimonials</h2> <div class="relative overflow-hidden"><div class="relative h-80">${each(testimonials, (testimonial, i) => {
    return `${i === currentIndex ? `<div class="absolute w-full transition-all duration-500 ease-in-out"><div class="text-5xl text-delta-accent mb-6" data-svelte-h="svelte-1e72gd1">&quot;</div> <p class="text-xl md:text-2xl mb-8 font-serif">${escape(testimonial.quote)}</p> <div><p class="font-medium text-lg">${escape(testimonial.author)}</p> <p class="text-delta-light">${escape(testimonial.role)}, ${escape(testimonial.project)}</p></div> </div>` : ``}`;
  })}</div> <div class="flex justify-center space-x-4 mt-8"><button class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Previous testimonial" data-svelte-h="svelte-iub4e4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg></button> <button class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Next testimonial" data-svelte-h="svelte-2n44i5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg></button></div></div></div></div></section>`;
});
const LatestNews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<section class="py-20 news-section"><div class="container-delta"><div class="flex flex-col md:flex-row md:items-end justify-between mb-12" data-svelte-h="svelte-11o8nuz"><div><h2 class="mb-4">Latest News</h2> <p class="text-lg text-delta-gray max-w-2xl font-serif">Stay updated with Delta&#39;s latest projects, awards, and insights.</p></div> <a href="#" class="btn btn-secondary mt-6 md:mt-0">View All News</a></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(articles, (article, i) => {
    return `<div class="news-card border border-delta-light rounded-lg overflow-hidden group hover:border-delta-accent transition-colors"><div class="aspect-video overflow-hidden"><img${add_attribute("src", article.image, 0)}${add_attribute("alt", article.title, 0)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div> <div class="p-6"><p class="text-delta-gray mb-2">${escape(article.date)}</p> <h3 class="text-xl mb-3">${escape(article.title)}</h3> <p class="text-delta-gray mb-4">${escape(article.excerpt)}</p> <a${add_attribute("href", `/news/${article.slug}`, 0)} class="inline-block text-delta-black border-b border-delta-accent pb-1 hover:text-delta-accent transition-colors">Read More
            </a></div> </div>`;
  })}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1agjcbt_START -->${$$result.title = `<title>Delta Estudio | Innovative Architectural Design</title>`, ""}<meta name="description" content="Delta Estudio creates thoughtful, sustainable spaces that respond to human needs and environmental context."><!-- HEAD_svelte-1agjcbt_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(FeaturedProjects, "FeaturedProjects").$$render($$result, {}, {}, {})} ${validate_component(AboutPreview, "AboutPreview").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} ${validate_component(LatestNews, "LatestNews").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
