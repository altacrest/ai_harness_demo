import { gt as defineMiddleware, t as sequence } from "./chunks/sequence_ACz2z1Z8.mjs";
// src/middleware.ts
var ALLOWED_IPS = ["74.208.212.219"];
var onRequest$1 = defineMiddleware(async ({ request, clientAddress }, next) => {
	const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || clientAddress || "";
	if (ALLOWED_IPS.some((allowed) => ip.includes(allowed))) return next();
	return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceso Restringido</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0A0A0A;
      color: #E8E4DD;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    .lock { font-size: 4rem; margin-bottom: 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
    p { color: #888; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="lock">🔒</div>
    <h1>Acceso Restringido</h1>
    <p>Este dashboard solo es accesible desde la red corporativa.</p>
    <p style="margin-top: 1rem; font-size: 0.75rem; color: #555;">Conéctate a la VPN e intenta de nuevo.</p>
  </div>
</body>
</html>`, {
		status: 403,
		headers: { "Content-Type": "text/html; charset=utf-8" }
	});
});
// \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
export { onRequest };
