import { n as __exportAll, t as createAstro } from "./compiler_wKhjSY5J.mjs";
import { C as renderComponent, M as addAttribute, N as unescapeHTML, O as renderTemplate, k as maybeRenderHead } from "./sequence_ACz2z1Z8.mjs";
import { n as createComponent, t as $$BaseLayout } from "./BaseLayout_Ck1P7ZRb.mjs";
// src/components/ProductCard.astro
createAstro("https://astro.build");
var $$ProductCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductCard;
	const { name, slug, description, icon, logo, accentColor, tags, status } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/${slug}`, "href")} class="product-card"${addAttribute(`--card-accent: ${accentColor};`, "style")} data-astro-cid-4fhpls6h><div class="card-glow" data-astro-cid-4fhpls6h></div><div class="card-header" data-astro-cid-4fhpls6h>${logo ? renderTemplate`<img${addAttribute(logo, "src")}${addAttribute(name, "alt")} class="card-logo" data-astro-cid-4fhpls6h>` : renderTemplate`<div class="card-icon" data-astro-cid-4fhpls6h>${unescapeHTML(icon)}</div>`}${status !== "active" && renderTemplate`<span${addAttribute(`badge badge-${status}`, "class")} data-astro-cid-4fhpls6h>${status === "coming-soon" ? "Próximamente" : "Beta"}</span>`}</div><h3 class="card-title" data-astro-cid-4fhpls6h>${name}</h3><p class="card-description" data-astro-cid-4fhpls6h>${description}</p><div class="card-tags" data-astro-cid-4fhpls6h>${tags.map((tag) => renderTemplate`<span class="tag" data-astro-cid-4fhpls6h>${tag}</span>`)}</div><div class="card-arrow" data-astro-cid-4fhpls6h><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-4fhpls6h><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-4fhpls6h></path></svg></div></a>`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/components/ProductCard.astro", void 0);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const products = [
		{
			name: "CORE",
			slug: "core",
			description: "Full WMS para centros de distribución y 3PLs. Arquitectura multi-tenant con workflows específicos por cliente, automatización de facturación e integración robótica.",
			logo: "/logos/core.svg",
			accentColor: "#4FC3F7",
			tags: [
				"WMS",
				"3PL",
				"Multi-Tenant",
				"Robotics"
			],
			status: "active"
		},
		{
			name: "OMNIO",
			slug: "omnio",
			description: "Gestión distribuida de órdenes con sincronización de inventario en tiempo real y enrutamiento inteligente por proximidad. Precisión zero-error en todos los canales.",
			logo: "/logos/omnio.svg",
			accentColor: "#7db4e8",
			tags: [
				"OMS",
				"Proximity Routing",
				"Order Splitting",
				"Go + Dragonfly"
			],
			status: "active"
		},
		{
			name: "XENVIO",
			slug: "xenvio",
			description: "Rate shopping multi-carrier y generación de etiquetas — 50+ carriers. Rate shopping en tiempo real entre carriers regionales, internacionales y principales.",
			logo: "/logos/xenvio.svg",
			accentColor: "#ddb897",
			tags: [
				"Shipping",
				"Rate Shopping",
				"Labels",
				"50+ Carriers"
			],
			status: "active"
		},
		{
			name: "ION",
			slug: "ion",
			description: "La plataforma de integración AI-native que hace cada conexión inteligente, sin esfuerzo y siempre activa. Powered by ionMind + ionFlow + ionCLI.",
			logo: "/logos/ion.svg",
			accentColor: "#b497dd",
			tags: [
				"iPaaS",
				"Visual Flows",
				"Headless Daemon",
				"Auto-API"
			],
			status: "active"
		},
		{
			name: "EDGE",
			slug: "edge",
			description: "Ejecución de warehouse y manejo de materiales — armonía entre humanos y robots. Integración nativa con ASRS, AMR y sistemas de automatización.",
			logo: "/logos/edge.svg",
			accentColor: "#66BB6A",
			tags: [
				"Warehouse",
				"Execution",
				"Material Handling",
				"Labor Mgmt"
			],
			status: "active"
		},
		{
			name: "AI",
			slug: "ai",
			description: "Inteligencia centralizada del ecosistema. Dashboards unificados, business intelligence en tiempo real, insights con IA y reportes personalizados — todo en un solo lugar.",
			logo: "/logos/novacrest.svg",
			accentColor: "#97ddd2",
			tags: [
				"Intelligence",
				"Dashboards",
				"ML Forecasting",
				"Analytics"
			],
			status: "active"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Dashboard",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero" data-astro-cid-lcdefpme><div class="hero-badge" data-astro-cid-lcdefpme>ECOSISTEMA NOVACREST</div><h1 class="hero-title" data-astro-cid-lcdefpme>La Plataforma de<span class="hero-highlight" data-astro-cid-lcdefpme>Orquestación Logística Inteligente</span></h1><p class="hero-subtitle" data-astro-cid-lcdefpme>Explora los 6 pilares del ecosistema NOVACREST. Cada módulo cubre un producto clave del sistema nervioso centralizado para cadenas de suministro modernas.</p><div class="hero-stats" data-astro-cid-lcdefpme><div class="stat" data-astro-cid-lcdefpme><span class="stat-value" data-astro-cid-lcdefpme>10+</span><span class="stat-label" data-astro-cid-lcdefpme>Productos Integrados</span></div><div class="stat-divider" data-astro-cid-lcdefpme></div><div class="stat" data-astro-cid-lcdefpme><span class="stat-value" data-astro-cid-lcdefpme>$1.7B+</span><span class="stat-label" data-astro-cid-lcdefpme>GMV Procesado</span></div><div class="stat-divider" data-astro-cid-lcdefpme></div><div class="stat" data-astro-cid-lcdefpme><span class="stat-value" data-astro-cid-lcdefpme>100M+</span><span class="stat-label" data-astro-cid-lcdefpme>Labels Generadas</span></div></div></section><section class="grid" data-astro-cid-lcdefpme>${products.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, {
		...product,
		"data-astro-cid-lcdefpme": true
	})}`)}</section>` })}`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/index.astro", void 0);
var $$file = "/Users/shipedge/Projects/Cursos IA/harness_demo/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
