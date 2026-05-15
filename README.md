# 🏥 Pediatría Dharma - Sitio Web

Este repositorio contiene el sitio web corporativo de **Pediatría Dharma**, una clínica pediátrica ubicada en Huamanga, Ayacucho. El proyecto está construido con **Astro** y **Tailwind CSS**, y está preparado para desplegarse en **Vercel**.

## 📋 Descripción

El sitio presenta información institucional, servicios pediátricos, equipo médico, blog, contacto directo por WhatsApp y una experiencia de navegación optimizada para dispositivos móviles.

## 🚀 Tecnologías

- Astro 5.17.1
- Tailwind CSS 4.1.18
- React 19 (integrado con `@astrojs/react`)
- `@astrojs/sitemap` para sitemap automático
- `@astrojs/vercel` para despliegue en Vercel
- `@tailwindcss/vite`
- `gsap` y `aos` para animaciones
- `lucide-react` para iconos

## 🧩 Configuración de proyecto

- `astro.config.mjs`: configura el dominio principal `https://pediatria.dharmatabiat.com`
- `output: 'server'`
- `adapter: vercel()` con `webAnalytics` habilitado
- `tailwind.config.mjs`: escanea contenido en `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`

## 📁 Estructura del proyecto

```
.
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── dhar/
│   ├── images/
│   └── img/
└── src/
    ├── assets/
    ├── components/
    │   ├── about/
    │   │   ├── HistorySection.astro
    │   │   ├── TitleSection.astro
    │   │   ├── ValuesSection.astro
    │   │   └── Vision-MissionSection.astro
    │   ├── blogs/
    │   │   ├── BlogGrid.astro
    │   │   ├── CategoriesFilter.astro
    │   │   ├── CTASection.astro
    │   │   ├── FeaturedPost.astro
    │   │   ├── NewsletterSection.astro
    │   │   ├── TagsCloud.astro
    │   │   ├── TitleSection.astro
    │   │   └── slugs/
    │   ├── contacto/
    │   │   ├── ContactEmergencyCard.astro
    │   │   ├── ContactMapCard.astro
    │   │   ├── ContactServicesCard.astro
    │   │   ├── ContactSidebar.astro
    │   │   ├── CtaSection.astro
    │   │   └── TitleSection.astro
    │   ├── equipo/
    │   │   ├── LeadDoctorHero.astro
    │   │   ├── SpecialistsGrid.astro
    │   │   ├── TeamValues.astro
    │   │   └── TitleSection.astro
    │   ├── header/
    │   │   ├── DesktopNav.astro
    │   │   ├── MobileHeader.astro
    │   │   ├── MobileMenu.astro
    │   │   ├── NavDropdown.astro
    │   │   ├── NavLink.astro
    │   │   └── TopBar.astro
    │   ├── index/
    │   │   ├── AboutSection.astro
    │   │   ├── CtaSection.astro
    │   │   ├── CtaSection1.astro
    │   │   ├── FaqSection.astro
    │   │   ├── HeroSection.astro
    │   │   ├── InfrastructureSecion.astro
    │   │   ├── QuickServicesSection.astro
    │   │   ├── Quote2Section.astro
    │   │   ├── QuoteSection.astro
    │   │   ├── TeamSection.astro
    │   │   └── TestimonialsSection.astro
    │   ├── legales/
    │   │   └── Footer.astro
    │   ├── reserva/
    │   ├── servics/
    │   ├── ContactForm.jsx
    │   ├── ContactFormLegal.jsx
    │   ├── CookiesBanner.astro
    │   ├── FloatingStatsBar.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── pp.jsx
    │   ├── prubas.astro
    │   ├── Search.astro
    │   ├── SearchFilters.jsx
    │   ├── SearchSuggestions.jsx
    │   ├── SpeedDial.astro
    │   ├── TestimonialsCarousel.jsx
    │   ├── VoiceSearch.jsx
    │   └── Welcome.astro
    ├── data/
    │   ├── blogPosts.js
    │   ├── company.js
    │   ├── doctors.js
    │   ├── doctors.ts
    │   ├── faqs.js
    │   ├── infrastructureFeatures.js
    │   ├── quickServices.js
    │   ├── searchData.js
    │   ├── seo.js
    │   └── services.js
    ├── layouts/
    │   ├── Layout.astro
    │   └── Layout_legales.astro
    ├── pages/
    │   ├── blog/
    │   ├── blogs.astro
    │   ├── busqueda.astro
    │   ├── contacto.astro
    │   ├── equipo.astro
    │   ├── galeria.astro
    │   ├── index.astro
    │   ├── legales/
    │   ├── nosotros.astro
    │   ├── reserva-para-apy.astro
    │   ├── reserva.astro
    │   ├── servicios/
    │   └── servicios.astro
    ├── scripts/
    │   ├── blogFilter.ts
    │   ├── doctor.ts
    │   ├── header-legales.ts
    │   └── header.ts
    └── styles/
        ├── dr-quote.css
        └── global.css
```

## 🌐 Rutas principales

| Página | Ruta | Descripción |
|---|---|---|
| Inicio | `/` | Página principal con hero, servicios y CTA |
| Nosotros | `/nosotros` | Información de la clínica, misión y valores |
| Servicios | `/servicios` | Catálogo de servicios pediátricos |
| Detalle de servicio | `/servicios/[slug]` | Página dinámica de servicio |
| Equipo | `/equipo` | Presentación de especialistas |
| Blogs | `/blogs` | Listado de artículos informativos |
| Detalle de blog | `/blog/[slug]` | Página dinámica de artículo |
| Contacto | `/contacto` | Datos de contacto, mapa y WhatsApp |
| Búsqueda | `/busqueda` | Búsqueda interna del sitio |
| Galería | `/galeria` | Página de galería de imágenes |
| Reserva | `/reserva` | Página de reservas generales |
| Reserva APY | `/reserva-para-apy` | Página de reserva específica |
| Legales | `/legales/*` | Páginas legales (aviso, privacidad, términos) |

## 📌 Datos reales del sitio

Los valores de configuración más importantes están definidos en `src/data/company.js`.

- Nombre: **Pediatría Dharma**
- URL: `https://pediatria.dharmatabiat.com/`
- WhatsApp: `+51 997 307 782`
- Teléfono: `+51 997 307 782`
- Email: `dharmatabiat@gmail.com`
- Dirección: `Av. Los Jardines, Cuadra - 3, San Juan Bautista, Huamanga, Ayacucho, Perú`
- Google Maps: `https://maps.app.goo.gl/iS3R6LaLrdkSKqWw9`

### Horario de atención

- Lunes a viernes: `08:00 - 19:00`
- Sábados: `09:00 - 14:00`
- Domingos: Atención de urgencias pediátricas

### Redes sociales

- Facebook: `https://facebook.com/dharmapediatria`
- Instagram: `https://instagram.com/dharmapediatria`
- Twitter: `https://twitter.com/dharmaped`
- TikTok: `https://tiktok.com/@dharmapediatria`
- YouTube: `https://youtube.com/dharmapediatria`
- LinkedIn: `https://linkedin.com/company/dharmapediatria`

## 🩺 Contenido del sitio

- `src/data/services.js` contiene los servicios médicos disponibles.
- `src/data/blogPosts.js` contiene los artículos y metadata del blog.
- `src/data/doctors.js` / `src/data/doctors.ts` contienen la información del equipo médico.
- `src/data/searchData.js` soporta la búsqueda interna y filtros.
- `src/data/company.js` es la fuente de datos principal para contacto, horarios, dirección, redes y métricas.

## 📊 Estado actual

- El sitio está configurado con rutas en español y páginas funcionales.
- La configuración real de la clínica está en `src/data/company.js`.
- El proyecto puede correr en local con `npm run dev` y construirse con `npm run build`.
- El adaptador de Vercel está listo para despliegue.

## ⚙️ Comandos útiles

- `npm install` — instalar dependencias
- `npm run dev` — iniciar servidor de desarrollo
- `npm run build` — generar build de producción
- `npm run preview` — vista previa local del build
- `npm run astro` — ejecutar comandos de Astro CLI

## 🛠️ Recomendaciones para mantenimiento

1. Mantener los datos de empresa y contacto en `src/data/company.js`.
2. Actualizar las URLs de redes sociales si cambian.
3. Añadir servicios nuevos en `src/data/services.js`.
4. Añadir artículos nuevos en `src/data/blogPosts.js`.
5. Validar el dominio en `astro.config.mjs` cuando se despliegue en producción.

## 💡 Cómo contribuir

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Crear una rama nueva (`git checkout -b feature/<nombre>`)
4. Probar los cambios con `npm run dev`
5. Hacer commit y push
6. Enviar un pull request para revisión

## 💡 Cómo contribuir

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Crear una rama con `git checkout -b feature/<nombre>`
4. Probar los cambios con `npm run dev`
5. Hacer commit y enviar pull request
