import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { gsap } from "gsap";
import { p as projects } from "../../../chunks/projects.js";
const ProjectFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedCategory = "all" } = $$props;
  let { filterProjects } = $$props;
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "Residential", name: "Residential" },
    { id: "Commercial", name: "Commercial" },
    { id: "Cultural", name: "Cultural" },
    { id: "Mixed-Use", name: "Mixed-Use" }
  ];
  if ($$props.selectedCategory === void 0 && $$bindings.selectedCategory && selectedCategory !== void 0) $$bindings.selectedCategory(selectedCategory);
  if ($$props.filterProjects === void 0 && $$bindings.filterProjects && filterProjects !== void 0) $$bindings.filterProjects(filterProjects);
  return `<div class="flex flex-wrap gap-4">${each(categories, (category) => {
    return `<button class="${"px-5 py-2 rounded-full transition-colors " + escape(
      selectedCategory === category.id ? "bg-delta-black text-delta-white" : "bg-delta-light text-delta-dark hover:bg-delta-dark hover:text-delta-white",
      true
    )}">${escape(category.name)} </button>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCategory = "all";
  function filterProjects(category) {
    selectedCategory = category;
    if (category === "all") ;
    else {
      projects.filter((project) => project.category === category);
    }
    setTimeout(
      () => {
        gsap.fromTo(".project-card", { y: 20, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        });
      },
      50
    );
  }
  return `${$$result.head += `<!-- HEAD_svelte-1wad999_START -->${$$result.title = `<title>Projects | Delta Estudio</title>`, ""}<meta name="description" content="Explore Delta Estudio's portfolio of innovative architectural projects."><!-- HEAD_svelte-1wad999_END -->`, ""} <section class="py-20 bg-delta-black text-delta-white" data-svelte-h="svelte-dmop7h"><div class="container-delta"><h1 class="mb-2">Projects</h1> <p class="text-xl text-delta-light font-serif max-w-3xl">A curated collection of our architectural work, showcasing our approach to design across scales and contexts.</p></div></section> <section class="py-12 md:py-20"><div class="container-delta">${validate_component(ProjectFilter, "ProjectFilter").$$render($$result, { selectedCategory, filterProjects }, {}, {})} ${``}</div></section>`;
});
export {
  Page as default
};
