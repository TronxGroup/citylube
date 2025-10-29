# CityLube — Landing estática

Landing estática y moderna para **CityLube (Peñaflor)**. Lista para subir a un repositorio y desplegar en **Vercel** (o cualquier hosting estático).

## Estructura
- `index.html` — Página principal (incluye SEO, OpenGraph y JSON-LD de `AutoRepair`).
- `styles.css` — Estilos modernos (dark, gradientes, responsive).
- `script.js` — Manejo básico del formulario con Fetch.
- `assets/hero.svg`, `assets/foto1.svg`, `assets/foto2.svg`, `assets/foto3.svg` — Marcadores de posición (reemplazar por fotos reales).

## Personalización rápida
1. Reemplaza las 4 imágenes de `assets/` por tus fotografías reales. Mantén los nombres de archivo.
2. Edita el `action` del formulario en `index.html`:
   - Crea un formulario gratuito en **Formspree** y reemplaza `https://formspree.io/f/XXXXXXXX` por tu endpoint real.
   - Alternativa: usa `mailto:contacto@citylube.cl` como `action` (menos confiable).
3. Cambia `og:url` y URLs del JSON-LD por el dominio final.
4. (Opcional) Cambia `contacto@citylube.cl` por tu correo real.

## Deploy en Vercel (recomendado)
1. Sube esta carpeta a **GitHub** como `citylube-landing`.
2. En **Vercel** → *New Project* → importa tu repo.
3. Framework: **Other** (estático). *Build Command*: `None` — *Output*: raíz del repo.
4. Deploy y listo.

## Datos de negocio (incluidos en la página)
- Nombre: CityLube
- Dirección: Francisco Bilbao 75, Peñaflor, Santiago, Chile
- Teléfono / WhatsApp: +56 9 6649 9091
- Horario: L–V 09:00–18:30, Sáb 09:00–14:00
- Año de inicio: 2011

## Nota
Este sitio es estático y no requiere backend. Puedes convertirlo a Next.js en el futuro sin cambiar el contenido.

Actualizado: 2025-10-29.
