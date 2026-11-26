import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/edge.astro
var edge_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Edge,
	file: () => $$file,
	url: () => $$url
});
var $$Edge = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "EDGE — BinLogic" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "EDGE — BinLogic",
		"subtitle": "Ejecución de warehouse y manejo de materiales — armonía perfecta entre humanos y robots. Integración nativa con robótica, sistemas de manejo de materiales y gestión avanzada de labor.",
		"accentColor": "#66BB6A",
		"logo": "/logos/edge.svg",
		"concepts": [
			{
				title: "Smart Putaway & ABC Slotting",
				description: "Optimización inteligente de ubicaciones basada en frecuencia de demanda. Los productos de alta rotación se posicionan para minimizar tiempos de picking."
			},
			{
				title: "Wave & Batch Picking",
				description: "Rutas de fulfillment optimizadas para el personal del warehouse. Agrupación inteligente de órdenes en waves y batches para maximizar la eficiencia operativa."
			},
			{
				title: "Cross-Docking & QC Packing",
				description: "Movimiento directo de carga desde muelles de entrada a muelles de salida con fricción mínima. Control de calidad integrado en el proceso de packing."
			},
			{
				title: "Integración con Shelfter",
				description: "App móvil de warehouse para escaneo de barcode, conteo y picking desde smartphones estándar o handhelds ruggedizados. Visibilidad de inventario en tiempo real en todas las instalaciones."
			},
			{
				title: "Labor Management Avanzado",
				description: "Métricas de productividad por operador, asignación inteligente de tareas y balance de carga de trabajo. Maximiza la eficiencia del equipo humano junto con la automatización robótica."
			}
		],
		"keyTakeaways": [
			"Putaway inteligente con ABC slotting para eficiencia máxima",
			"Wave & batch picking optimizado reduce tiempos de fulfillment",
			"Cross-docking directo para movimiento de carga sin fricción",
			"App móvil Shelfter para operaciones con dispositivos estándar",
			"Labor management con métricas de productividad por operador"
		],
		"relatedModules": [
			{
				name: "CORE",
				slug: "core",
				color: "#4FC3F7"
			},
			{
				name: "XENVIO",
				slug: "xenvio",
				color: "#ddb897"
			},
			{
				name: "ION",
				slug: "ion",
				color: "#b497dd"
			}
		]
	})}` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/edge.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/edge.astro";
var $$url = "/edge";
// \0virtual:astro:page:src/pages/edge@_@astro
var page = () => edge_exports;
export { page };
