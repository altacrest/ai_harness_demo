import { defineMiddleware } from 'astro:middleware';

// IPs permitidas desde variable de entorno
const ALLOWED_IPS = (process.env.ALLOWED_IPS || '')
  .split(',')
  .map((ip) => ip.trim())
  .filter(Boolean);

export const onRequest = defineMiddleware(async (context, next) => {
  // Si no hay IPs configuradas, permitir todo (dev mode)
  if (ALLOWED_IPS.length === 0) {
    return next();
  }

  // Obtener IP del cliente de los headers de Vercel
  let ip = '';
  try {
    ip =
      context.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      context.request.headers.get('x-real-ip') ||
      context.clientAddress ||
      '';
  } catch {
    // clientAddress puede no estar disponible
    ip =
      context.request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      context.request.headers.get('x-real-ip') ||
      '';
  }

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
