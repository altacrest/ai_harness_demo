---
name: NOVACREST
description: La plataforma inteligente de orquestación logística, explicada módulo a módulo.
colors:
  night-deck: "#0a0a0f"
  panel-slate: "#16161f"
  panel-slate-hover: "#1c1c28"
  hairline: "#2a2a35"
  console-ink: "#e8e6e1"
  console-ink-secondary: "#9c9a94"
  console-ink-muted: "#6b6860"
  signal-lime: "#c5dd97"
  signal-cyan: "#97ddd2"
  module-core: "#4FC3F7"
  module-omnio: "#7db4e8"
  module-xenvio: "#ddb897"
  module-ion: "#b497dd"
  module-edge: "#66BB6A"
  module-ai: "#97ddd2"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    letterSpacing: "0.08em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    letterSpacing: "0.05em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  data:
    fontFamily: "JetBrains Mono, SF Mono, monospace"
    fontSize: "2rem"
    fontWeight: 800
  tag:
    fontFamily: "JetBrains Mono, SF Mono, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "8px"
  md: "16px"
  pill: "20px"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.75rem"
  xl: "3rem"
components:
  product-card:
    backgroundColor: "{colors.panel-slate}"
    textColor: "{colors.console-ink}"
    rounded: "{rounded.md}"
    padding: "1.75rem"
  product-card-hover:
    backgroundColor: "{colors.panel-slate-hover}"
  concept-card:
    backgroundColor: "{colors.panel-slate}"
    textColor: "{colors.console-ink-secondary}"
    rounded: "{rounded.sm}"
    padding: "1.25rem 1.5rem"
  tag:
    textColor: "{colors.console-ink-muted}"
    typography: "{typography.tag}"
    rounded: "{rounded.xs}"
    padding: "0.15rem 0.5rem"
  hero-badge:
    textColor: "{colors.signal-lime}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 1rem"
  related-link:
    textColor: "{colors.console-ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  nav-link:
    textColor: "{colors.console-ink-secondary}"
  nav-link-hover:
    textColor: "{colors.signal-lime}"
---

# Design System: NOVACREST

## Overview

**Creative North Star: "The Control Tower"**

NOVACREST se ve como la sala de control nocturna de una operación logística. Fondo casi negro, paneles de pizarra apenas más claros, texto cálido de consola y señales de color que se encienden donde hay actividad. Las cifras se leen como en un panel de instrumentos, en monoespaciada y grandes. Todo lo demás guarda silencio para que la señal destaque.

La densidad es media: fichas amplias con aire interno (1.75rem) sobre una retícula que se adapta sola. El sistema es oscuro por diseño, sin tema claro. Los componentes son táctiles y vivos: al pasar el ratón se elevan, se iluminan con el color de su módulo y muestran una flecha que invita a entrar.

**Key Characteristics:**
- Tema oscuro único, con capas tonales (Night Deck, Panel Slate) en lugar de bordes gruesos.
- Signal Lime como voz del sistema; seis colores de módulo libres para identidad y decoración.
- Métricas y tags en JetBrains Mono: el dato se reconoce por su tipografía.
- Interacción con energía: elevación, resplandor de acento y línea de luz superior en hover.
- Firma visual: titular con degradado lima a turquesa y resplandor de color en las fichas.

## Colors

Una noche neutra y cálida, con señales pastel saturadas que se encienden sobre ella.

### Primary
- **Signal Lime** (`signal-lime`): la voz del sistema. Badge del hero, cifras del hero, hover de la navegación y arranque del degradado del titular. Contraste 13.3:1 sobre Night Deck.

### Secondary
- **Signal Cyan** (`signal-cyan`): pareja de Signal Lime en el degradado del titular. Coincide con el color del módulo AI.

### Tertiary
Los seis colores de módulo, decorativos y libres. Se pueden combinar en cualquier superficie:
- **Sky Relay** (`module-core`): CORE.
- **Route Blue** (`module-omnio`): OMNIO.
- **Parcel Sand** (`module-xenvio`): XENVIO.
- **Circuit Lavender** (`module-ion`): ION.
- **Floor Green** (`module-edge`): EDGE.
- **Insight Teal** (`module-ai`): AI.

Cada ficha y cada página reciben su color por la variable `--card-accent` / `--page-accent`, y lo aplican al borde, la flecha, el resplandor, la numeración de conceptos y los checks de conclusiones.

### Neutral
- **Night Deck** (`night-deck`): fondo de página y de la barra superior (al 85% con blur).
- **Panel Slate** (`panel-slate`): fichas de producto y de concepto.
- **Panel Slate Hover** (`panel-slate-hover`): ficha de producto en hover.
- **Hairline** (`hairline`): bordes de fichas, separadores, borde de la barra superior y del footer.
- **Console Ink** (`console-ink`): títulos y texto principal (15.8:1).
- **Console Ink Secondary** (`console-ink-secondary`): descripciones, subtítulos y enlaces de navegación (7.0:1).
- **Console Ink Muted** (`console-ink-muted`): tags, etiquetas de métricas, footer y enlace "volver" (3.55:1 sobre Night Deck, 3.23:1 sobre Panel Slate).

### Named Rules
**The Night Shift Rule.** Solo existe el tema oscuro. Una superficie nueva parte de Night Deck y sube por capas tonales (Panel Slate, luego Panel Slate Hover); nunca introduce un fondo claro.

**The Free Signal Rule.** Los colores de módulo son decorativos y se pueden combinar libremente. Signal Lime sigue siendo la voz del sistema en la navegación y en el hero.

## Typography

**Display Font:** Inter (con system-ui, -apple-system, sans-serif)
**Body Font:** Inter
**Label/Mono Font:** JetBrains Mono (con SF Mono, monospace)

**Character:** Inter muy pesado (800) y con tracking abierto en los nombres de módulo, como rótulos de terminal. JetBrains Mono marca todo lo que es dato.

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 3.5rem), 1.1): titular del hero, una vez por página.
- **Headline** (800, 2.5rem, tracking 0.08em): nombre del módulo en su página de detalle.
- **Title** (700, 1.35rem, tracking 0.05em): nombre del módulo en la ficha. Los encabezados de sección van a 1.2rem/700 con línea Hairline debajo.
- **Body** (400, 0.875rem, 1.6): descripciones de fichas y conceptos. Los subtítulos de página suben a 1.05–1.1rem con un máximo de 600–640px de ancho.
- **Label** (600, 0.7rem, tracking 0.2em, MAYÚSCULAS): badge del hero ("ECOSISTEMA NOVACREST") y etiquetas de métricas (0.75rem, tracking 0.1em).
- **Data** (JetBrains Mono 800, 2rem): cifras del hero y métricas.
- **Tag** (JetBrains Mono 500, 0.7rem): chips de tecnología.

### Named Rules
**The Instrument Readout Rule.** Toda cifra (GMV, labels, latencia, porcentajes) va en JetBrains Mono. Una cifra en Inter es un error.

**The Caps Name Rule.** Los nombres de producto (NOVACREST, CORE, OMNIO…) van en mayúsculas y con tracking abierto (0.05–0.08em).

## Layout

Contenedor principal de 1280px máximo, con 2rem/1.5rem de padding. Las páginas de lectura se estrechan: 900px en el detalle de módulo y 760px en "Acerca". El dashboard usa una retícula `auto-fill` con columnas de 340px mínimo y 1.25rem de separación. Por debajo de 768px pasa a una columna y las métricas del hero se apilan, con el divisor vertical convertido en horizontal.

Ritmo vertical: 3rem entre bloques mayores, 1.25–2rem dentro de cada bloque, 0.75rem entre fichas de concepto. La barra superior es sticky, con `backdrop-filter: blur(16px)`.

## Elevation & Depth

Híbrido. En reposo la profundidad es tonal: Panel Slate sobre Night Deck, separados por Hairline, sin sombras. En hover la ficha de producto sube 4px y gana una sombra doble: una oscura y difusa más un halo del color de su módulo.

### Shadow Vocabulary
- **Lift + Accent Halo** (`box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 60px color-mix(in srgb, var(--card-accent) 10%, transparent)`): solo en el hover de la ficha de producto.

### Named Rules
**The Flat-At-Rest Rule.** Nada proyecta sombra en reposo. La sombra es la respuesta a la interacción.

## Shapes

Esquinas suaves y consistentes: 16px en las fichas de producto, 8px en las fichas de concepto, 4px en tags y badges, y forma de píldora (20px) para el badge del hero y los enlaces a módulos relacionados. Bordes de 1px en Hairline. Los puntos de color de los enlaces relacionados son círculos de 8px.

## Components

### Product Card (signature)
Táctil y viva: es la puerta de entrada a cada módulo.
- **Corner Style:** 16px.
- **Background:** Panel Slate, que pasa a Panel Slate Hover.
- **Border:** 1px Hairline, que pasa al color del módulo en hover.
- **Internal Padding:** 1.75rem, con 0.75rem entre elementos.
- **Hover:** sube 4px, Lift + Accent Halo, línea de luz superior de 2px (degradado transparente, acento, transparente), el logo se ilumina (brightness de 0.95 a 1.1) y aparece la flecha de abajo a la derecha (opacidad de 0 a 0.7, desplazamiento de -8px a 0). Transición de 0.35s `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Status badges:** "Próximamente" (Parcel Sand) y "Beta" (Circuit Lavender), con fondo de su color al 15% y borde al 30%.

### Concept Card
- **Corner Style:** 8px. **Background:** Panel Slate. **Border:** Hairline, que pasa al acento del módulo en hover (0.2s).
- Numeración en mono, arriba a la derecha, en el acento al 40% de opacidad.

### Chips (tags)
- **Style:** JetBrains Mono 0.7rem, fondo blanco al 5%, borde blanco al 8%, texto Console Ink Muted, radio de 4px.

### Navigation
- Barra superior sticky, con Night Deck al 85% y blur de 16px, y borde inferior Hairline. Logo NOVACREST de 28px de alto.
- Enlaces en Inter 500 de 0.875rem, en Console Ink Secondary, que pasan a Signal Lime en hover (0.2s).

### Related Module Link
- Píldora de 20px de radio con borde Hairline, punto de 8px del color del módulo y texto Console Ink Secondary. En hover, el borde y el texto toman el color del módulo.

### Hero Metrics
- Cifra en Data (Signal Lime) sobre etiqueta Label (Console Ink Muted), separadas por divisores Hairline de 1px y 40px de alto.

## Do's and Don'ts

### Do:
- **Do** dar a cada ficha y página de módulo su color mediante `--card-accent` / `--page-accent`.
- **Do** mantener el titular del hero con degradado de Signal Lime a Signal Cyan y el resplandor de color de las fichas. Son la firma del sistema.
- **Do** poner toda cifra en JetBrains Mono (The Instrument Readout Rule).
- **Do** subir la profundidad por capas tonales y reservar la sombra para el hover (The Flat-At-Rest Rule).
- **Do** usar los logos oficiales de `public/logos/` para identificar cada módulo.

### Don't:
- **Don't** introducir un tema claro ni fondos claros (The Night Shift Rule).
- **Don't** usar Console Ink Muted para texto que haya que leer: a 0.7–0.8rem no llega al AA (3.55:1). Es deuda conocida en tags, etiquetas de métricas y footer, pendiente de un pulido.
- **Don't** añadir sombras en reposo ni bordes de más de 1px.
- **Don't** escribir nombres de producto en minúsculas.
