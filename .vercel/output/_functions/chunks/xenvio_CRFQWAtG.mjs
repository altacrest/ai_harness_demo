import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/xenvio.astro
var xenvio_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Xenvio,
	file: () => $$file,
	url: () => $$url
});
var $$Xenvio = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "XENVIO" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "XENVIO",
		"subtitle": "Multi-carrier rate shopping y generación de etiquetas — 50+ carriers. Rate shopping en tiempo real entre carriers regionales, internacionales y principales como USPS, FedEx, UPS y DHL.",
		"accentColor": "#ddb897",
		"logo": "/logos/xenvio.svg",
		"concepts": [
			{
				title: "Rate Shopping Multi-Carrier",
				description: "Comparación en tiempo real de tarifas entre 50+ carriers. Selección automática de la mejor tarifa según servicio, velocidad y costo. Incluye carriers regionales, internacionales y principales."
			},
			{
				title: "Generación de Labels a Escala",
				description: "Más de 100 millones de etiquetas de envío generadas. Generación ultra-rápida de labels para fulfillment de alto volumen sin impactar la latencia de procesamiento."
			},
			{
				title: "Box Cubing & Packing",
				description: "Algoritmos inteligentes de empaquetado que optimizan el tamaño de caja para minimizar costos de envío y materiales. Cubicaje automático basado en las dimensiones del producto."
			},
			{
				title: "Devoluciones Automatizadas",
				description: "Gestión completa del ciclo de devoluciones. Generación de etiquetas de retorno, tracking de paquetes devueltos y procesamiento automatizado al llegar al warehouse."
			},
			{
				title: "Tracking Global Unificado",
				description: "Seguimiento de paquetes de todos los carriers en una interfaz unificada. Notificaciones proactivas de estado y alertas de excepciones en la entrega."
			}
		],
		"keyTakeaways": [
			"Rate shopping en tiempo real entre 50+ carriers",
			"100M+ labels generadas con rendimiento de producción",
			"Cubicaje inteligente para minimizar costos de envío",
			"Tracking unificado de todos los carriers en una interfaz",
			"Gestión completa del ciclo de devoluciones"
		],
		"relatedModules": [
			{
				name: "OMNIO",
				slug: "omnio",
				color: "#7db4e8"
			},
			{
				name: "CORE",
				slug: "core",
				color: "#4FC3F7"
			},
			{
				name: "EDGE",
				slug: "edge",
				color: "#66BB6A"
			}
		]
	})}` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/xenvio.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/xenvio.astro";
var $$url = "/xenvio";
// \0virtual:astro:page:src/pages/xenvio@_@astro
var page = () => xenvio_exports;
export { page };
