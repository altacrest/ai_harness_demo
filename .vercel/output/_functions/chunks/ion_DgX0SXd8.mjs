import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/ion.astro
var ion_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ion,
	file: () => $$file,
	url: () => $$url
});
var $$Ion = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "ION — iond.ai" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "ION — iond.ai",
		"subtitle": "La plataforma de integración AI-native que hace cada conexión inteligente, sin esfuerzo y siempre activa. Powered by ionMind + ionFlow + ionCLI — build once, invoke from anywhere, runs forever.",
		"accentColor": "#b497dd",
		"logo": "/logos/ion.svg",
		"concepts": [
			{
				title: "Visual Flows (ionFlow)",
				description: "Motor de workflows visuales que permite crear integraciones complejas arrastrando y soltando. Conecta ERPs legacy, maquinaria de warehouse, aplicaciones cloud modernas y agentes de IA sin deuda técnica."
			},
			{
				title: "Auto-API Reading",
				description: "Capacidad de leer y entender APIs automáticamente. ionMind analiza la documentación de APIs y genera conectores inteligentes que se adaptan a cambios en las interfaces."
			},
			{
				title: "Headless Daemon (iond)",
				description: "Daemon headless que corre como servicio permanente. Build once, invoke from anywhere, runs forever. Procesa eventos, webhooks y triggers sin intervención manual."
			},
			{
				title: "Dynamic PDFs & Embeddable Widgets",
				description: "Generación dinámica de documentos PDF (facturas, packing slips, manifiestos) y widgets embebibles que se integran en cualquier interfaz existente."
			},
			{
				title: "Interoperabilidad Sin Deuda Técnica",
				description: "Conecta sistemas legacy con infraestructura moderna sin acumular deuda técnica. La capa de traducción permite que sistemas incompatibles se comuniquen de forma nativa."
			}
		],
		"keyTakeaways": [
			"Integración AI-native: cada conexión es inteligente y auto-adaptativa",
			"ionFlow + ionMind + ionCLI como stack de integración completo",
			"Headless daemon que corre forever sin mantenimiento",
			"Conecta ERPs legacy, robótica, cloud y agentes de IA",
			"Zero deuda técnica en las integraciones"
		],
		"relatedModules": [
			{
				name: "OMNIO",
				slug: "omnio",
				color: "#7db4e8"
			},
			{
				name: "AI",
				slug: "ai",
				color: "#97ddd2"
			},
			{
				name: "CORE",
				slug: "core",
				color: "#4FC3F7"
			}
		]
	})}` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/ion.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/ion.astro";
var $$url = "/ion";
// \0virtual:astro:page:src/pages/ion@_@astro
var page = () => ion_exports;
export { page };
