import { defineMiddleware } from 'astro:middleware';

// IPs permitidas (tu VPN / oficina)
const ALLOWED_IPS = [
  '74.208.212.219',
];

export const onRequest = defineMiddleware(async ({ request, clientAddress }, next) => {
  // Obtener IP del cliente
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    clientAddress ||
    '';

  // Permitir acceso si la IP está en la lista
  if (ALLOWED_IPS.some((allowed) => ip.includes(allowed))) {
    return next();
  }

  // Devolver 404 genérico
  return new Response('404: This page could not be found.', {
    status: 404,
    headers: { 'Content-Type': 'text/plain' },
  });
});
