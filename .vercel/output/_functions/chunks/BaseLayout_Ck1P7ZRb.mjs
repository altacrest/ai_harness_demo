import { t as createAstro } from "./compiler_wKhjSY5J.mjs";
import { A as renderHead, At as InvalidComponentArgs, M as addAttribute, O as renderTemplate, T as renderSlot, Xt as AstroError } from "./sequence_ACz2z1Z8.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
// src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description = "Plataforma de aprendizaje sobre harnesses, skills y fábricas de software con IA" } = Astro.props;
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} — NOVACREST</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">${renderHead($$result)}</head><body><nav class="topbar"><a href="/" class="logo"><img src="/logos/novacrest.svg" alt="NOVACREST" class="logo-img"></a><div class="nav-links"><a href="/" class="nav-link">Dashboard</a><a href="/about" class="nav-link">Acerca</a></div></nav><main>${renderSlot($$result, $$slots["default"])}</main><footer><div class="footer-inner"><p>NOVACREST — Agentes IA & Fábricas de Software · 2026</p><p class="footer-sub">Plataforma educativa · Construido con Astro</p></div></footer></body></html>`;
}, "/Users/shipedge/Projects/Cursos IA/harness_demo/src/layouts/BaseLayout.astro", void 0);
export { createComponent as n, $$BaseLayout as t };
