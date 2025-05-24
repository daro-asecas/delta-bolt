import { c as create_ssr_component, d as each, f as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as projects } from "../../../../chunks/projects.js";
const RelatedProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects: projects2 } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects2 !== void 0) $$bindings.projects(projects2);
  return `<section class="py-16 bg-delta-light"><div class="container-delta"><h2 class="mb-10" data-svelte-h="svelte-15nrjc9">Related Projects</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(projects2, (project) => {
    return `<div class="group"><a${add_attribute("href", `/projects/${project.slug}`, 0)} class="image-hover block mb-4 aspect-video"><img${add_attribute("src", project.featuredImage, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-full object-cover"></a> <p class="text-delta-accent uppercase tracking-wider text-sm">${escape(project.category)}</p> <h3 class="text-xl group-hover:text-delta-accent transition-colors"><a${add_attribute("href", `/projects/${project.slug}`, 0)}>${escape(project.title)}</a></h3> <p class="text-delta-gray">${escape(project.location)}</p> </div>`;
  })}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let project;
  let relatedProjects = [];
  {
    {
      const slug = $page.params.slug;
      project = projects.find((p) => p.slug === slug);
      if (project) {
        relatedProjects = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-hpgocb_START -->${project ? `${$$result.title = `<title>${escape(project.title)} | Delta Estudio</title>`, ""} <meta name="description"${add_attribute("content", project.description, 0)}>` : `${$$result.title = `<title>Project | Delta Estudio</title>`, ""}`}<!-- HEAD_svelte-hpgocb_END -->`, ""} ${project ? `<div class="mb-20"><div class="h-screen-90 relative"><div class="absolute inset-0"><img${add_attribute("src", project.featuredImage, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-full object-cover"></div> <div class="absolute inset-0 bg-gradient-to-b from-delta-black/60 to-transparent flex items-center"><div class="container-delta text-delta-white"><div class="max-w-3xl"><p class="text-delta-accent mb-3 uppercase tracking-wider">${escape(project.category)}</p> <h1 class="mb-4">${escape(project.title)}</h1> <p class="text-xl md:text-2xl font-serif">${escape(project.location)}</p></div></div></div></div> <div class="container-delta my-20"><div class="grid grid-cols-1 lg:grid-cols-3 gap-16"><div class="lg:col-span-2 project-content"><p class="text-xl font-serif mb-8">${escape(project.description)}</p> <div class="prose prose-lg max-w-none mb-12"><p>${escape(project.content || "This project exemplifies our approach to harmonizing architecture with its surroundings. Through careful consideration of materials, light, and spatial composition, we've created a design that responds to both site conditions and client needs.")}</p> <p data-svelte-h="svelte-wcp3o2">The design process involved extensive collaboration with the client and thorough site analysis. We explored multiple conceptual approaches before arriving at a solution that balances innovation with practicality.</p></div> <div class="grid grid-cols-2 gap-8 mb-16">${each((project.images || []).slice(0, 2), (image, index) => {
    return `<div class="project-image overflow-hidden"><img${add_attribute("src", image, 0)}${add_attribute("alt", `${project.title} detail ${index + 1}`, 0)} class="w-full h-[300px] object-cover"> </div>`;
  })}</div> <div class="prose prose-lg max-w-none" data-svelte-h="svelte-b10qyx"><p>The final design achieves a delicate balance between form and function, creating spaces that are both aesthetically striking and highly livable. Special attention was given to the quality of light throughout the day, ensuring the spaces feel dynamic and responsive to changing conditions.</p> <p>Sustainable strategies were integrated throughout, including passive heating and cooling systems, locally-sourced materials, and energy-efficient systems that reduce the building&#39;s carbon footprint without compromising design excellence.</p></div></div> <div><div class="sticky top-32"><h3 class="text-xl mb-6" data-svelte-h="svelte-yq5cg2">Project Details</h3> <div class="space-y-6 mb-12"><div><p class="text-delta-gray mb-1" data-svelte-h="svelte-zg2w07">Client</p> <p class="font-medium">${escape(project.client || "Private Client")}</p></div> <div><p class="text-delta-gray mb-1" data-svelte-h="svelte-aqyjtj">Location</p> <p class="font-medium">${escape(project.location)}</p></div> <div><p class="text-delta-gray mb-1" data-svelte-h="svelte-192ea4h">Year</p> <p class="font-medium">${escape(project.year || "2023")}</p></div> <div><p class="text-delta-gray mb-1" data-svelte-h="svelte-5alj5d">Size</p> <p class="font-medium">${escape(project.size || "450 sq m")}</p></div> <div><p class="text-delta-gray mb-1" data-svelte-h="svelte-10qh13s">Services</p> <p class="font-medium">${escape(project.services || "Architectural Design, Interior Design, Landscape Design")}</p></div></div> <a href="/contact" class="btn btn-primary block text-center" data-svelte-h="svelte-176kqln">Discuss Your Project</a></div></div></div></div> ${project.images && project.images.length > 2 ? `<div class="container-delta my-20"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(project.images.slice(2), (image, index) => {
    return `<div class="project-image overflow-hidden aspect-square"><img${add_attribute("src", image, 0)}${add_attribute("alt", `${project.title} detail ${index + 3}`, 0)} class="w-full h-full object-cover"> </div>`;
  })}</div></div>` : ``} ${relatedProjects.length > 0 ? `${validate_component(RelatedProjects, "RelatedProjects").$$render($$result, { projects: relatedProjects }, {}, {})}` : ``}</div>` : `<div class="container-delta py-32 text-center" data-svelte-h="svelte-1u8im6q"><h1 class="mb-4">Project Not Found</h1> <p class="mb-8">The project you&#39;re looking for doesn&#39;t exist or has been removed.</p> <a href="/projects" class="btn btn-primary">View All Projects</a></div>`}`;
});
export {
  Page as default
};
