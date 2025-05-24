import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<div class="fixed inset-0 flex items-center justify-center bg-delta-white" data-svelte-h="svelte-lsplec"><div class="w-20 h-20 flex items-center justify-center"><div class="text-2xl font-display">Δ</div></div></div>`}`;
});
export {
  Layout as default
};
