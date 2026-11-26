# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clientes actuales y partners (integradores) de NOVACREST. Lo consultan para entender qué cubre cada producto del ecosistema y cómo encajan los módulos entre sí.

## Product Purpose

Sitio explicativo del ecosistema NOVACREST: presenta sus 6 módulos (CORE, OMNIO, XENVIO, ION, EDGE, AI) con una ficha y una página de detalle por módulo (conceptos clave y conclusiones), más una página "Acerca" con la visión y las métricas del ecosistema. El footer lo define como "Plataforma educativa".

Métrica de éxito (confirmada): el visitante entiende qué hace cada módulo.

## Positioning

Confirmado: NOVACREST es **la plataforma inteligente de orquestación logística**. Lo diferencial es el ecosistema integrado (WMS, OMS, shipping, integración, ejecución de warehouse e inteligencia) frente a productos aislados.

## Operating Context

- Lo navegan clientes y partners que ya trabajan en logística (3PL, centros de distribución, e-commerce multicanal) y conocen la jerga del sector.
- Recorrido: dashboard con las 6 fichas, página de detalle de un módulo y "Acerca".
- Lo mantiene un equipo que documenta y trabaja en conjunto (ver `02-DOCS/wiki/harness/user-profile.md`).

## Capabilities and Constraints

- Astro 7, sitio estático, sin datos en vivo ni login. Se despliega en Vercel (según el historial de commits).
- Rutas: `/`, `/about`, `/core`, `/omnio`, `/xenvio`, `/ion`, `/edge`, `/ai`.
- Idioma: **solo español** (`lang="es"`). La terminología técnica del sector se queda en inglés (WMS, 3PL, rate shopping, labels, iPaaS, ASRS, AMR). No hay i18n planificado.
- Módulos y marcas asociadas (nombres que se deben respetar):
  - CORE (Shipedge): WMS full para centros de distribución y 3PLs.
  - OMNIO (OmniOrders): gestión distribuida de órdenes.
  - XENVIO: rate shopping multi-carrier y labels.
  - ION (iond.ai): integración AI-native, con ionMind, ionFlow e ionCLI.
  - EDGE (BinLogic): ejecución de warehouse y manejo de materiales.
  - AI (Novacrest Intelligence): BI, ML forecasting y Edge AI.
- Sin CTA comercial por ahora (decisión confirmada): el sitio informa, no capta leads.

## Brand Commitments

- Nombre: NOVACREST, en mayúsculas. Los módulos también van en mayúsculas (CORE, OMNIO…).
- Logos oficiales en `public/logos/` (novacrest, core, omnio, xenvio, ion, edge y otros del ecosistema: shelfter, templatemakr, endzone, omnivende, fluacy, proximity).
- Voz: técnica y segura, en español, con la jerga logística en inglés.

## Evidence on Hand

Métricas **confirmadas** por el usuario (2026-11-26), que se pueden mostrar tal cual:
- $1.7B+ de GMV procesado al año
- 100M+ shipping labels generadas
- 10+ productos integrados
- <50ms de latencia media de API
- 50+ carriers (XENVIO)
- 99.97% de entregas a tiempo
- ISO 27001 (Novacrest Intelligence)

No hay testimonios, casos de cliente, logos de clientes, precios ni prensa. Ningún trabajo futuro debe inventarlos.

## Product Principles

1. Claridad antes que persuasión: el lector ya es cliente o partner, así que explica, no vende.
2. El ecosistema por encima del módulo: cada página muestra cómo encaja su módulo con los demás.
3. Solo datos verificados: las métricas confirmadas se usan tal cual y no se añade ninguna cifra sin fuente.
4. Español claro, con la terminología técnica del sector en su forma original en inglés.
