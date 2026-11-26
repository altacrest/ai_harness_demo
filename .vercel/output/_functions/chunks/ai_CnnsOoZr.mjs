import { n as __exportAll } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, O as renderTemplate } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
import { t as $$ProductPage } from "./ProductPage_C4lWYKy_.mjs";
// src/pages/ai.astro
var ai_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ai,
	file: () => $$file,
	url: () => "/ai"
});
var $$Ai = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI — Novacrest Intelligence" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "ProductPage", $$ProductPage, {
		"title": "AI — Novacrest Intelligence",
		"subtitle": "Inteligencia centralizada del ecosistema. Dashboards unificados, business intelligence en tiempo real, insights con IA, reportes personalizados y ML forecasting — todo en un solo lugar.",
		"accentColor": "#97ddd2",
		"logo": "/logos/novacrest.svg",
		"concepts": [
			{
				title: "Centralized Intelligence",
				description: "Dashboards centralizados poderosos — un solo panel de cristal para todas las operaciones. Business intelligence en tiempo real, insights impulsados por IA y reportes completamente flexibles."
			},
			{
				title: "Fluacy — ML Demand Forecasting",
				description: "Predicción de demanda impulsada por machine learning y posicionamiento predictivo de stock. Put-away inteligente y planificación de demanda localizada para pre-posicionar inventario más cerca del consumidor."
			},
			{
				title: "Proximity Intelligence",
				description: "Enrutamiento inteligente basado en proximidad y selección óptima de nodos de fulfillment. Fulfillment optimizado por geolocalización asegurando la ruta más corta del warehouse a la puerta del cliente."
			},
			{
				title: "Edge AI — Procesamiento Local",
				description: "Modelos de IA desplegados localmente para procesamiento de datos cerca de la fuente. Escaneo de warehouse en tiempo real, edge computing de baja latencia y detección automatizada de anomalías."
			},
			{
				title: "Composable & Headless Platform",
				description: "Plataforma verdaderamente componible y headless. Accede a la capa de orquestación de IonFlow vía API limpia e intuitiva. SDK: @novacrest/sdk para integración desde cualquier aplicación."
			},
			{
				title: "ISO 27001 — Seguridad Certificada",
				description: "Estándar internacional de oro para gestión de seguridad de información. Mantenido activamente mediante testing de penetración continuo, gestión de vulnerabilidades y auditorías de compliance."
			}
		],
		"keyTakeaways": [
			"Un solo panel de cristal para todas las operaciones del ecosistema",
			"ML forecasting con Fluacy para demanda predictiva",
			"Edge AI para procesamiento de datos de baja latencia",
			"Plataforma headless con SDK (@novacrest/sdk)",
			"ISO 27001 certificado — seguridad de nivel enterprise",
			"<50ms de latencia promedio de API"
		],
		"relatedModules": [
			{
				name: "ION",
				slug: "ion",
				color: "#b497dd"
			},
			{
				name: "OMNIO",
				slug: "omnio",
				color: "#7db4e8"
			},
			{
				name: "CORE",
				slug: "core",
				color: "#4FC3F7"
			}
		]
	})}` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/ai.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/ai.astro";
// \0virtual:astro:page:src/pages/ai@_@astro
var page = () => ai_exports;
export { page };
