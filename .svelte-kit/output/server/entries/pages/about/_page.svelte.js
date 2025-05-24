import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
const TeamMember = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  return `<div class="team-member group"><div class="mb-6 image-hover"><img${add_attribute("src", member.image, 0)}${add_attribute("alt", member.name, 0)} class="w-full h-80 object-cover"></div> <h3 class="text-xl mb-1">${escape(member.name)}</h3> <p class="text-delta-gray mb-3">${escape(member.role)}</p> <p class="text-delta-dark">${escape(member.bio)}</p></div>`;
});
const Stats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="py-20 bg-delta-black text-white" data-svelte-h="svelte-1e0hora"><div class="container-delta"><div class="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"><div><p class="text-5xl font-display text-delta-accent mb-2">15+</p> <p class="text-delta-light">Years of Experience</p></div> <div><p class="text-5xl font-display text-delta-accent mb-2">120+</p> <p class="text-delta-light">Projects Completed</p></div> <div><p class="text-5xl font-display text-delta-accent mb-2">18</p> <p class="text-delta-light">Design Awards</p></div> <div><p class="text-5xl font-display text-delta-accent mb-2">24</p> <p class="text-delta-light">Team Members</p></div></div></div></div>`;
});
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const timeline = [
    {
      year: "2010",
      title: "Delta Architecture Founded",
      description: "Established by Elena Ramírez and David Chen with a vision for innovative, sustainable architecture."
    },
    {
      year: "2012",
      title: "First Major Commission",
      description: "Completed the award-winning Bayside Residence, establishing our reputation for thoughtful residential design."
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "Opened our second office in London, expanding our practice to international markets."
    },
    {
      year: "2018",
      title: "Award for Sustainable Design",
      description: "Received the Global Sustainable Architecture Award for our innovative approach to environmental design."
    },
    {
      year: "2021",
      title: "First Cultural Project",
      description: "Completed our first major cultural institution, the Riverside Gallery, to critical acclaim."
    },
    {
      year: "2025",
      title: "Looking to the Future",
      description: "Continuing to grow our practice with a focus on regenerative design and community-centered architecture."
    }
  ];
  return `<section class="py-20 timeline-section"><div class="container-delta"><h2 class="mb-16 text-center" data-svelte-h="svelte-1o6zjt">Our Journey</h2> <div class="relative"> <div class="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-delta-light"></div>  ${each(timeline, (item, i) => {
    return `<div class="timeline-item relative flex flex-col md:flex-row items-start mb-16 last:mb-0"> <div class="${"md:w-1/2 pb-8 md:pb-0 " + escape(
      i % 2 === 0 ? "md:pr-12 text-left" : "md:pl-12 md:order-1 text-left md:text-right",
      true
    )}"><div class="inline-block bg-delta-black text-white px-4 py-2 text-xl font-display mb-4">${escape(item.year)}</div> <h3 class="text-xl mb-2">${escape(item.title)}</h3> <p class="text-delta-gray">${escape(item.description)}</p></div>  <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-delta-accent border-4 border-delta-light mt-2"></div> </div>`;
  })}</div></div></section>`;
});
const Values = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="py-16 bg-delta-light" data-svelte-h="svelte-1a0822a"><div class="container-delta"><h2 class="mb-16 text-center">Our Values</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"><div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path></svg></div> <h3 class="text-xl mb-4">Human-Centered Design</h3> <p>We design for people first, creating spaces that enhance quality of life, foster connection, and adapt to changing needs.</p></div> <div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><path d="M7 12a5 5 0 0 1 5-5c2.76 0 5 2.24 5 5s-2.24 5-5 5"></path><path d="M12 17a5 5 0 1 0 0 10 5 5 0 0 0 0-10"></path><path d="M12 12a5 5 0 0 0 5-5c0-2.76-2.24-5-5-5S7 4.24 7 7"></path><path d="M7 7a5 5 0 1 1 0-10 5 5 0 0 1 0 10"></path><path d="M17 7a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path><path d="M17 12a5 5 0 0 1-5 5c-2.76 0-5-2.24-5-5s2.24-5 5-5"></path></svg></div> <h3 class="text-xl mb-4">Environmental Responsibility</h3> <p>Sustainability is integral to our practice, informing everything from material selection to energy systems and site planning.</p></div> <div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><line x1="12" y1="21" x2="12" y2="3"></line><polyline points="6 15 12 9 18 15"></polyline></svg></div> <h3 class="text-xl mb-4">Design Excellence</h3> <p>We pursue design excellence through rigorous exploration, attention to detail, and a commitment to craft at every scale.</p></div> <div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg></div> <h3 class="text-xl mb-4">Contextual Sensitivity</h3> <p>Each project responds to its unique cultural, historical, and physical context, creating architecture that belongs to its place.</p></div> <div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg></div> <h3 class="text-xl mb-4">Innovation</h3> <p>We embrace new technologies, materials, and methods that advance architectural possibilities and address contemporary challenges.</p></div> <div class="p-8 bg-white"><div class="w-16 h-16 rounded-full bg-delta-accent/10 flex items-center justify-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-delta-accent"><path d="M17 7.53v6.97A6 6 0 0 1 5 16v-2"></path><path d="M9 10V5a3 3 0 0 1 6 0v10.5"></path></svg></div> <h3 class="text-xl mb-4">Collaboration</h3> <p>We believe the best solutions emerge through open dialogue between clients, consultants, builders, and our interdisciplinary team.</p></div></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const teamMembers = [
    {
      name: "Elena Ramírez",
      role: "Founding Partner & Design Director",
      image: "https://images.pexels.com/photos/5717577/pexels-photo-5717577.jpeg",
      bio: "With over 20 years of experience, Elena leads our design vision with a focus on sustainable urban environments."
    },
    {
      name: "David Chen",
      role: "Founding Partner & Technical Director",
      image: "https://images.pexels.com/photos/936043/pexels-photo-936043.jpeg",
      bio: "David brings engineering precision and material innovation to every project, blending form and function seamlessly."
    },
    {
      name: "Sophia Johnson",
      role: "Senior Architect",
      image: "https://images.pexels.com/photos/5717684/pexels-photo-5717684.jpeg",
      bio: "Specializing in residential architecture, Sophia creates spaces that reflect the unique personalities of our clients."
    },
    {
      name: "Marcus Lee",
      role: "Urban Design Specialist",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg",
      bio: "Marcus focuses on creating harmonious urban spaces that enhance community engagement and sustainability."
    },
    {
      name: "Olivia Torres",
      role: "Interior Design Lead",
      image: "https://images.pexels.com/photos/6533984/pexels-photo-6533984.jpeg",
      bio: "With an eye for detail, Olivia transforms interiors into cohesive expressions of our architectural vision."
    },
    {
      name: "Thomas Weber",
      role: "Sustainability Consultant",
      image: "https://images.pexels.com/photos/4064444/pexels-photo-4064444.jpeg",
      bio: "Thomas ensures our projects meet the highest environmental standards while maintaining design excellence."
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-jlxjnc_START -->${$$result.title = `<title>About | Delta Estudio</title>`, ""}<meta name="description" content="Learn about Delta Estudio's philosophy, team, and design approach."><!-- HEAD_svelte-jlxjnc_END -->`, ""} <section class="bg-delta-black text-delta-white py-20 md:py-28" data-svelte-h="svelte-5d1989"><div class="container-delta"><div class="max-w-4xl"><h1 class="mb-8">About Delta</h1> <p class="text-xl md:text-2xl mb-6 text-delta-light font-serif">Founded in 2010, Delta Estudio exists at the intersection of design innovation and sustainable practices.</p> <p class="text-lg text-delta-light font-serif">We believe architecture should respond to both human needs and environmental context, creating spaces that inspire, 
        endure, and evolve over time. Our interdisciplinary team brings diverse perspectives to each project, 
        resulting in thoughtful solutions that transcend conventional boundaries.</p></div></div></section> <section class="py-16 md:py-24"><div class="container-delta"><h2 class="mb-16 text-center" data-svelte-h="svelte-djd1vw">Our Team</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">${each(teamMembers, (member) => {
    return `${validate_component(TeamMember, "TeamMember").$$render($$result, { member }, {}, {})}`;
  })}</div></div></section> ${validate_component(Values, "Values").$$render($$result, {}, {}, {})} ${validate_component(Stats, "Stats").$$render($$result, {}, {}, {})} ${validate_component(Timeline, "Timeline").$$render($$result, {}, {}, {})} <section class="py-20 bg-delta-light" data-svelte-h="svelte-1lrkhss"><div class="container-delta"><div class="max-w-4xl mx-auto text-center"><h2 class="mb-8">Our Approach</h2> <p class="text-xl mb-12 font-serif">Every project begins with deep listening and collaborative dialogue. We engage with clients, 
        communities, and contexts to create architecture that resonates on multiple levels.</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left"><div><h3 class="text-xl mb-4">Research</h3> <p>We begin with comprehensive research into site conditions, cultural context, and client needs.</p></div> <div><h3 class="text-xl mb-4">Concept Development</h3> <p>Ideas emerge through iterative sketching, modeling, and dialogue, evolving toward clear design concepts.</p></div> <div><h3 class="text-xl mb-4">Execution</h3> <p>Meticulous attention to detail ensures designs are realized with precision and excellence.</p></div></div></div></div></section>`;
});
export {
  Page as default
};
