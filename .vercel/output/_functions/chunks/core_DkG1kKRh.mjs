import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/core.astro
var core_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Core,
	file: () => $$file,
	url: () => $$url
});
var $$Core = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CORE — Shipedge" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "CORE — Shipedge",
		"subtitle": "Full WMS para centros de distribución y 3PLs. Arquitectura multi-tenant con workflows específicos por cliente, automatización de facturación e integración robótica.",
		"accentColor": "#4FC3F7",
		"logo": "/logos/core.svg",
		"concepts": [
			{
				title: "Arquitectura Multi-Tenant",
				description: "Gestiona múltiples clientes bajo un mismo techo de forma segura. Aísla inventario, órdenes y reportes mientras mantiene visibilidad centralizada para operadores 3PL."
			},
			{
				title: "Automatización de Facturación",
				description: "Captura cada evento facturable automáticamente. Desde tarifas de almacenamiento hasta picking, packing y servicios de valor agregado — sin ingresos perdidos."
			},
			{
				title: "Integración Robótica",
				description: "Soporte nativo para sistemas ASRS (almacenamiento y recuperación automáticos), robots móviles autónomos (AMR) y estaciones de pick inteligentes. Armonía entre humanos y robots."
			},
			{
				title: "Workflows por Cliente",
				description: "Diseña reglas de enrutamiento, empaquetado y requisitos de SLA personalizados por cliente sin escribir una sola línea de código."
			},
			{
				title: "Visibilidad Completa",
				description: "Dashboard centralizado con visibilidad en tiempo real de todas las operaciones del centro de distribución. Métricas de rendimiento, KPIs y alertas automáticas."
			}
		],
		"keyTakeaways": [
			"Arquitectura diseñada para escalar centros de distribución modernos",
			"Multi-tenant real: cada cliente con sus workflows y facturación",
			"Integración nativa con robótica y automatización de warehouse",
			"100% de eventos facturables capturados automáticamente",
			"Visibilidad total de operaciones en un solo panel"
		],
		"relatedModules": [
			{
				name: "OMNIO",
				slug: "omnio",
				color: "#7db4e8"
			},
			{
				name: "EDGE",
				slug: "edge",
				color: "#66BB6A"
			},
			{
				name: "XENVIO",
				slug: "xenvio",
				color: "#ddb897"
			}
		]
	})}` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/core.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/core.astro";
var $$url = "/core";
// \0virtual:astro:page:src/pages/core@_@astro
var page = () => core_exports;
export { page };
