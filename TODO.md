# TODO: Integrar y Mejorar Layout Principal

## Pasos Completados
- [x] Analizar layout actual vs propuesto
- [x] Identificar problemas críticos y mejoras
- [x] Verificar dependencias (seo.js, company.js, Astro.site)
- [x] Confirmar que Material Icons no se usan en componentes
- [x] Crear plan de integración

## Pasos Completados (continuación)
- [x] Crear layout integrado y mejorado en `src/layouts/Layout.astro`
  - [x] Usar estructura del layout propuesto como base
  - [x] Agregar `<style is:global>` completo del layout actual
  - [x] Corregir ruta de imagen a `/images/og-image.jpg`
  - [x] Eliminar import `company` sin usar
  - [x] Eliminar Material Icons (no usados)
  - [x] Mantener dns-prefetch para performance
  - [x] Asegurar todos los metadatos SEO estén presentes

## Pasos Pendientes
- [ ] Verificar build con `npm run build`
