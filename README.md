# 🏥 Pediátria Dharma - Sitio Web Oficial

Sitio web de la **Pediátria Dharma** especializada en la salud y bienestar de niños en Ayacucho, Perú.

## 📋 Descripción

Página web moderna construida con **Astro** y **Tailwind CSS**, diseñada para informar y educar a los padres sobre los servicios de salud pediátrica disponibles en la región de Ayacucho.

Características principales:
- Información detallada sobre servicios de la clínica
- Presentación del equipo médico especializado
- Datos de contacto y ubicación con Google Maps
- Agendamiento de citas vía WhatsApp
- Blog con artículos de interés sobre salud infantil
- Información corporativa y historia de la clínica
- Sección de equipo médico

## 🚀 Tecnologías

- **Astro 5.17.1** - Framework web moderno de alto rendimiento
- **Tailwind CSS 4.1.18** - Framework de estilos responsivos
- **@astrojs/sitemap 3.7.0** - Generación automática de sitemap

## 📱 Funcionalidades

✅ Sitio completamente responsivo (móvil, tablet, desktop)  
✅ Integración con WhatsApp para agendamiento de citas  
✅ Mapa de ubicación interactivo (Google Maps)  
✅ SEO optimizado con meta tags y Open Graph  
✅ Emergencias disponibles 24/7  
✅ Blog con artículos y categorías  
✅ Animaciones de entrada suaves  
✅ Menú móvil interactivo  
✅ Accesibilidad (skip links, aria labels)  
✅ Integración con Lucide Icons  

## 🚀 Comandos Principales

| Comando          | Acción                                  |
|:-----------------|:----------------------------------------|
| `npm install`    | Instala las dependencias del proyecto  |
| `npm run dev`    | Inicia el servidor de desarrollo en localhost:4321 |
| `npm run build`  | Compila el proyecto para producción    |
| `npm run preview`| Vista previa del build de producción  |
| `npm run astro`  | Ejecuta comandos de Astro CLI          |

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables de Astro
│   ├── Header.astro      # Navegación principal con menú móvil
│   ├── Footer.astro     # Pie de página con información de contacto
│   ├── Hero.astro       # Sección hero de la página de inicio
│   ├── Welcome.astro    # Componente de bienvenida
│   └── prubas.astro     # Componente de pruebas
├── data/                # Datos centralizados del sitio
│   ├── siteConfig.js    # Configuración global (contacto, redes, SEO)
│   ├── services.js      # Datos de los servicios médicos
│   └── blogPosts.js     # Artículos del blog
├── layouts/             # Layouts principales
│   └── Layout.astro     # Layout base con meta tags
├── pages/               # Páginas del sitio
│   ├── index.astro           # Página de inicio
│   ├── nosotros.astro       # Página sobre nosotros
│   ├── servicios.astro      # Lista de servicios
│   ├── servicios/
│   │   └── [slug].astro     # Página de detalle de servicio
│   ├── equipo.astro         # Equipo médico
│   ├── blogs.astro          # Lista de artículos del blog
│   ├── blog/
│   │   └── [slug].astro     # Página de detalle de artículo
│   └── contacto.astro       # Página de contacto
├── styles/              # Estilos globales
│   ├── global.css       # Estilos globales y utilidades
│   └── index.css        # Estilos principales
├── assets/              # Recursos estáticos (imágenes, SVGs)
└── js/                  # Scripts de JavaScript
```

## 🏥 Servicios Médicos (6 servicios disponibles)

La clínica ofrece los siguientes servicios especializados:

1. **Control de Crecimiento** - Evaluaciones integrales del desarrollo psicomotor
2. **Vacunación Integral** - Esquemas de vacunación nacionales e internacionales
3. **Nutrición Infantil** - Asesoría en lactancia y alimentación complementaria
4. **Atención de Recién Nacidos** - Cuidado experto para los primeros días de vida
5. **Psicología Infantil** - Apoyo emocional y desarrollo conductual
6. **Nebulizaciones** - Tratamiento de cuadros respiratorios

Cada servicio incluye:
- Descripción completa
- Características y beneficios
- Proceso de atención
- Preguntas frecuentes (FAQ)
- Información de precio y duración
- Profesional asignado

## 📝 Blog (7 artículos disponibles)

Artículos publicados sobre salud infantil:

1. La Importancia de la Vacunación Infantil
2. Guía de Alimentación Complementaria
3. Hitos del Desarrollo Psicomotor
4. Cuidados Esenciales del Recién Nacido
5. Salud Emocional en la Infancia
6. Prevención de Infecciones Respiratorias
7. Guía Completa sobre Alergias en Niños

Categorías: Vacunación, Nutrición, Desarrollo, Recién Nacidos, Psicología, Respiratorio, Alergias

## 🧭 Navegación del Sitio

| Página           | Ruta              | Descripción                    |
|:-----------------|:------------------|:-------------------------------|
| Inicio           | `/`               | Página principal              |
| Nosotros         | `/nosotros`       | Información de la clínica     |
| Servicios        | `/servicios`      | Lista de servicios médicos    |
| Detalle Servicio | `/servicios/[slug]`| Página de servicio específico|
| Equipo           | `/equipo`         | Equipo médico                 |
| Blogs            | `/blogs`          | Artículos de interés          |
| Detalle Blog     | `/blog/[slug]`    | Artículo específico           |
| Contacto         | `/contacto`       | Información de contacto       |
| Búsqueda         | `/busqueda`       | Búsqueda inteligente del sitio|


## 📞 Información de Contacto

- **WhatsApp**: +51 900 000 000
- **Teléfono**: (066) 234 567
- **Email**: informes@clinicapediatrica.com
- **Dirección**: Av. Arenales 123, San Juan Bautista, Huamanga, Ayacucho
- **Google Maps**: https://maps.app.goo.gl/3wAAb2H3X8Y2H7r79

## ⏰ Horarios de Atención

- **Lunes a Viernes**: 08:00 AM - 08:00 PM
- **Sábados**: 09:00 AM - 02:00 PM
- **Domingos**: Cerrado
- **Emergencias**: 24 Horas

## 🌐 Redes Sociales

- Facebook: https://facebook.com/clinica
- Instagram: https://instagram.com/clinica
- TikTok: https://tiktok.com/@clinica
- LinkedIn: https://linkedin.com/company/clinica

## 🔧 Contribuir

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar dependencias
3. Crear una rama para nuevas funcionalidades (`git checkout -b feature/nueva-funcionalidad`)
4. Hacer commit de los cambios
5. Enviar pull request

## 📝 Notas de Desarrollo

### Actualizaciones Recientes (2025)

Se han realizado las siguientes correcciones y mejoras en el proyecto:

#### Correcciones de Clases Tailwind CSS

Se han corregido las clases de gradiente de fondo en varios archivos para compatibilidad con la configuración de Tailwind del proyecto:

- **index.astro**: Actualizado `bg-gradient-to-t` → `bg-linear-to-t`, `bg-gradient-to-br` → `bg-linear-to-br`
- **servicios.astro**: Actualizado `bg-gradient-to-r` → `bg-linear-to-r`, `bg-gradient-to-br` → `bg-linear-to-br`
- **servicios/[slug].astro**: Actualizado `bg-gradient-to-t` → `bg-linear-to-t`, `bg-gradient-to-br` → `bg-linear-to-br`
- **equipo.astro**: Actualizado `bg-gradient-to-t` → `bg-linear-to-t`

#### Mejoras en Colores

- **nosotros.astro**: Mejora en la configuración de clases de colores para los valores de la clínica, asegurando que los colores (blue, pink, green, purple) se muestren correctamente en los gradientes deoverlay

### Animaciones de Entrada

El sitio utiliza clases de animación CSS personalizadas que se activan mediante Intersection Observer:

- `.reveal` - Animación de aparición desde abajo
- `.reveal-left` - Animación desde la izquierda
- `.reveal-right` - Animación desde la derecha
- `.reveal-scale` - Animación de escala

### Rutas Dinámicas

- **Blog**: `/blogs` lista artículos, `/blog/[slug]` muestra detalle
- **Servicios**: `/servicios` lista servicios, `/servicios/[slug]` muestra detalle

### Accesibilidad

El sitio incluye:
- Skip links para navegación por teclado
- Labels ARIA en elementos interactivos
- Contraste de colores adecuado
- Navegación por teclado completa

### Integraciones

- **Lucide Icons**: Iconos vectoriales
- **Google Maps**: Embed de ubicación
- **WhatsApp**: Enlaces para agendamiento directo

## 🔍 Sistema de Búsqueda Inteligente

El sitio implementa un sistema de búsqueda avanzado con algoritmos de matching inteligente, filtros dinámicos y experiencia de usuario optimizada.

### 🎯 Características Principales

| Característica | Descripción |
|:---------------|:------------|
| **Búsqueda Fuzzy** | Algoritmo de distancia de Levenshtein para tolerancia a errores tipográficos |
| **Matching Inteligente** | Búsqueda en títulos, descripciones, categorías y etiquetas |
| **Puntuación de Relevancia** | Sistema de scoring ponderado por tipo y coincidencias |
| **Filtros Dinámicos** | Filtrado por tipo (servicio/blog/página), categoría y ordenamiento |
| **Sugerencias en Tiempo Real** | Autocompletado basado en contenido popular |
| **Resaltado de Términos** | Highlight visual de términos de búsqueda en resultados |
| **Búsquedas Populares** | Sugerencias predefinidas para descubrimiento de contenido |

### 📊 Algoritmo de Búsqueda

#### 1. **Fuzzy Matching con Distancia de Levenshtein**
```javascript
// Tolerancia del 30% para errores tipográficos
fuzzyMatch(text, query, threshold = 0.3)
```
- Calcula distancia de edición entre términos
- Permite búsquedas con errores de escritura
- Umbral configurable (default: 30% de diferencia máxima)

#### 2. **Sistema de Puntuación de Relevancia**
```javascript
calculateRelevance(item, searchTerms)
```

**Factores de Puntuación:**
| Factor | Peso | Descripción |
|:-------|:-----|:------------|
| Coincidencia exacta en título | +10 | Término completo en título |
| Coincidencia parcial en título | +5 | Palabra del término en título |
| Coincidencia en descripción | +3 | Término en descripción |
| Coincidencia en categoría | +4 | Match en categoría |
| Coincidencia en etiquetas | +3 | Match en tags |
| Prioridad por tipo | +5/+3/+0 | Servicios > Blog > Páginas |

#### 3. **Opciones de Búsqueda**
```javascript
searchContent(query, {
  limit: 20,           // Máximo de resultados
  fuzzy: true,         // Activar fuzzy matching
  sortBy: 'relevance', // 'relevance' | 'date' | 'title'
  filters: {
    type: 'service',   // 'service' | 'blog' | 'page'
    category: 'Vacunación'
  }
})
```

### 🧩 Componentes del Sistema de Búsqueda

#### Componentes React
| Componente | Props | Descripción |
|:-----------|:------|:------------|
| `SearchFilters.jsx` | `currentType`, `currentCategory`, `currentSort`, `availableCategories`, `totalResults` | Panel de filtros dinámicos con actualización en tiempo real |
| `SearchSuggestions.jsx` | - | Dropdown de sugerencias con navegación por teclado |

#### Componentes Astro
| Componente | Descripción |
|:-------------|:------------|
| `SearchSuggestions.astro` | Versión estática para SSR de sugerencias |
| `SearchFilters.astro` | Wrapper Astro para hidratación selectiva |

### 📁 Estructura de Datos de Búsqueda

El sistema agrega datos de múltiples fuentes:

```javascript
searchData = [
  ...pages,      // 6 páginas principales
  ...services,   // 6 servicios médicos
  ...blogPosts   // 7 artículos del blog
]
// Total: 19 items indexados
```

#### Campos Indexados por Item
```javascript
{
  title: string,           // Título completo
  description: string,     // Descripción para SEO
  category: string,        // Categoría específica
  tags: string[],          // Array de etiquetas
  type: 'page'|'service'|'blog',
  url: string,             // URL relativa
  slug: string,            // Identificador único
  relevanceScore: number   // Calculado dinámicamente
}
```

### 🎨 Experiencia de Usuario

#### Página de Búsqueda (`/busqueda?q=query`)

**Estados de la Interfaz:**

1. **Estado Inicial** (sin query)
   - Formulario de búsqueda prominente
   - Términos populares sugeridos
   - Accesos directos a secciones principales

2. **Con Resultados**
   - Lista de resultados con tarjetas enriquecidas
   - Imágenes representativas por tipo
   - Badges de categoría con colores
   - Indicador de relevancia (% match)
   - Animaciones de entrada escalonadas

3. **Sin Resultados**
   - Mensaje amigable con término resaltado
   - Sugerencias alternativas
   - Búsquedas populares recomendadas

#### Filtros Disponibles
| Filtro | Opciones | Descripción |
|:-------|:---------|:------------|
| **Tipo** | Todos, Servicios, Artículos, Páginas | Filtra por tipo de contenido |
| **Categoría** | Dinámico según resultados | Filtra por categoría específica |
| **Ordenar** | Relevancia, Fecha, Título | Ordenamiento de resultados |

### 🔧 Funciones de la API de Búsqueda

| Función | Parámetros | Retorno | Descripción |
|:--------|:-----------|:--------|:------------|
| `searchContent(query, options)` | `query: string`, `options: object` | `SearchResult[]` | Búsqueda principal con filtros y ordenamiento |
| `getSearchSuggestions(query, limit)` | `query: string`, `limit: number` | `string[]` | Sugerencias basadas en coincidencias parciales |
| `getSearchCategories()` | - | `string[]` | Categorías únicas disponibles |
| `highlightText(text, query)` | `text: string`, `query: string` | `string` | HTML con términos resaltados (`<mark>`) |
| `calculateRelevance(item, terms)` | `item: object`, `terms: string[]` | `number` | Score numérico de relevancia |
| `fuzzyMatch(text, query, threshold)` | `text: string`, `query: string`, `threshold: number` | `boolean` | Verificación de coincidencia aproximada |
| `levenshteinDistance(str1, str2)` | `str1: string`, `str2: string` | `number` | Distancia de edición entre strings |

### 🚀 Optimizaciones de Rendimiento

- **Indexación en Memoria**: Datos precargados en build time
- **Búsqueda Cliente**: Filtros dinámicos sin recarga de página
- **SSR para SEO**: Página de búsqueda renderizada en servidor
- **Lazy Loading**: Imágenes de resultados con carga diferida
- **Debounce**: Sugerencias con delay de 150ms para evitar spam

### 📱 Responsive Design

- **Desktop**: Layout de 2 columnas con filtros laterales
- **Tablet**: Layout adaptativo con tarjetas compactas
- **Móvil**: Stack vertical con filtros colapsables


## ⚛️ Componentes React Interactivos

### ContactForm.jsx
Formulario de contacto con validación en tiempo real:
- Validación de campos (nombre, email, teléfono, mensaje)
- Envío vía WhatsApp y Email
- Estados de carga y éxito
- Diseño accesible con labels ARIA

### TestimonialsCarousel.jsx
Carrusel de testimonios con:
- Navegación automática y manual
- Indicadores de posición
- Animaciones suaves
- Soporte para gestos táctiles

## 🛠️ Funciones Helper de Datos

### services.js
| Función | Descripción |
|:--------|:------------|
| `getServiceBySlug(slug)` | Obtiene un servicio por su slug |
| `getAllServiceSlugs()` | Retorna todos los slugs para generación de rutas estáticas |
| `getRelatedServices(currentSlug, count)` | Obtiene servicios relacionados |
| `getServicesByColor(color)` | Filtra servicios por categoría de color |

### blogPosts.js
| Función | Descripción |
|:--------|:------------|
| `getPostBySlug(slug)` | Obtiene un artículo por su slug |
| `getPostsByCategory(category)` | Filtra artículos por categoría |
| `getRecentPosts(count)` | Obtiene los artículos más recientes |
| `getRelatedPosts(currentSlug, count)` | Obtiene artículos relacionados |
| `getAllCategories()` | Retorna todas las categorías únicas |
| `getAllTags()` | Retorna todas las etiquetas únicas |

## 🎨 Sistema de Colores

El sitio utiliza un sistema de colores consistente:

| Color | Uso |
|:------|:----|
| **Pink** (`pink-500`, `pink-600`) | Acentos principales, CTAs, hover states |
| **Green** (`green-500`, `green-600`) | Servicios, éxito, confirmaciones |
| **Blue** (`blue-500`, `blue-600`) | Páginas informativas, enlaces |
| **Purple** (`purple-500`, `purple-600`) | Artículos del blog, contenido educativo |
| **Red** (`red-500`, `red-600`) | Emergencias, alertas importantes |

## 📱 Características de Accesibilidad

- Skip links para navegación por teclado
- Labels ARIA en todos los elementos interactivos
- Contraste de colores WCAG 2.1 AA
- Navegación completa por teclado
- Estados focus visibles
- Textos alternativos en imágenes
- Semántica HTML5 correcta

**Última actualización**: 8 de febrero de 2026
