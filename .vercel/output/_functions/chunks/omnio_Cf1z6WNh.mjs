import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/omnio.astro
var omnio_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Omnio,
	file: () => $$file,
	url: () => $$url
});
var $$Omnio = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "OMNIO — OmniOrders" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "OMNIO — OmniOrders",
		"subtitle": "Gestión distribuida de órdenes con sincronización de inventario en tiempo real y enrutamiento inteligente por proximidad. Precisión zero-error en todos los canales.",
		"accentColor": "#7db4e8",
		"logo": "/logos/omnio.svg",
		"concepts": [
			{
				title: "Proximity Routing",
				description: "Evalúa inventario en toda la red y enruta cada orden al nodo de fulfillment más cercano al destino. Logra las tarifas de envío más bajas y la entrega más rápida planificando la ruta completa antes de comenzar."
			},
			{
				title: "Order Splitting Inteligente",
				description: "Cuando un pedido tiene artículos en diferentes ubicaciones, el sistema divide la orden automáticamente y coordina los envíos para que lleguen al cliente de forma óptima."
			},
			{
				title: "Sincronización Multi-Canal",
				description: "Agrega órdenes de Shopify, Amazon, WooCommerce, Walmart, TikTok Shop y más en una sola cola unificada. Sincroniza inventario en tiempo real para prevenir overselling."
			},
			{
				title: "Go + Dragonfly",
				description: "Backend construido con Go y Dragonfly para rendimiento extremo. Maneja picos de volumen con 99.99% de uptime SLA garantizado."
			},
			{
				title: "Precisión Zero-Error",
				description: "Orquesta cada orden con precisión zero-error a través de todos los canales. Validación en cada paso del proceso desde la recepción hasta el despacho."
			}
		],
		"keyTakeaways": [
			"Enrutamiento por proximidad para las tarifas más bajas y entregas más rápidas",
			"Order splitting automático cuando el inventario está distribuido",
			"Sincronización de inventario en tiempo real para prevenir overselling",
			"Backend Go + Dragonfly para rendimiento de producción extremo",
			"Integración nativa con todos los canales de venta principales"
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
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/omnio.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/omnio.astro";
var $$url = "/omnio";
// \0virtual:astro:page:src/pages/omnio@_@astro
var page = () => omnio_exports;
export { page };
