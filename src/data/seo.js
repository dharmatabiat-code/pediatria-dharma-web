import { company } from './company.js';

export const seo = {
  site: {
    name: company.name,
    url: company.siteUrl,
    locale: "es_PE",
    language: "es",
    alternateLocale: "en" // corregido: era languageAlternate
  },
  meta: {
    title: {
      default: `${company.name} | Pediatra en Ayacucho | Dra. Amalia Luque`,
      home: `${company.name} | Especialistas en Salud Infantil y Neonatología`,
      services: `Servicios Pediátricos Avanzados | CRED y Vacunas | ${company.name}`,
      contact: `Agenda tu Cita Pediátrica | ${company.name} - San Juan Bautista`
    },
    description: {
      default: `${company.description} Bajo la dirección de la Dra. Amalia Luque, ofrecemos cuidado integral con más de 10 años de experiencia.`,
      home: `Más de ${company.stats.patients} pacientes confían en ${company.name}. Especialistas en neonatología y crecimiento infantil en Huamanga. Atención de urgencias los domingos.`,
      services: "Atención especializada en control CRED, nutrición, vacunación y enfermedades agudas. Tecnología médica y calidez en San Juan Bautista, Ayacucho.",
      contact: `Visítanos en ${company.address.street}, San Juan Bautista. Llámanos al ${company.contact.phone} o agenda vía WhatsApp. Tu pediatra en Ayacucho.`
    },
    keywords: [
      company.name,
      "Pediatra en Ayacucho",
      "Dra. Amalia Luque Huancapaza",
      "Control CRED Ayacucho",
      "Pediatría San Juan Bautista",
      "Urgencias pediátricas Ayacucho",
      "Neonatología Huamanga",
      "Salud infantil Ayacucho",
      "Especialista en recién nacidos Perú",
      "Clínica pediátrica Dharma"
    ],
    author: `Dra. Amalia Luque - ${company.name}`,
    publisher: company.name,
    copyright: `© ${new Date().getFullYear()} ${company.name}. Todos los derechos reservados.`,
    additionalMeta: [
      { name: "medical-license", content: company.license },
      { name: "geo.region", content: "PE-AYA" },
      { name: "geo.placename", content: "Ayacucho" }
    ],
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false
    }
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: company.name,
    images: [
      {
        url: `${company.siteUrl}/og-image-dharma.jpg`,
        width: 1200,
        height: 630,
        alt: `Atención pediátrica en ${company.name}`
      }
    ]
  },
  schema: {
    organization: {
      "@type": "MedicalOrganization",
      name: company.name,
      url: company.siteUrl,
      logo: `${company.siteUrl}logo.png`,
      foundingDate: company.foundingYear,
      description: company.description,
      sameAs: Object.values(company.social)
    },
    medicalBusiness: {
      "@type": "Physician",
      name: `Dra. Amalia Luque - ${company.name}`,
      image: `${company.siteUrl}dra-amalia-luque.jpg`,
      telephone: company.contact.phone,
      email: company.contact.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        addressCountry: "PE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-13.1722199",
        longitude: "-74.2054192"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: company.hours.mondayToFriday.open,
          closes: company.hours.mondayToFriday.close
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: company.hours.saturday.open,
          closes: company.hours.saturday.close
        }
      ],
      // corregido: ahora es array para extensibilidad
      specialOpeningHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "00:00",
          closes: "23:59",
          description: company.hours.sunday.note
        }
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Licencia médica",
        identifier: company.license
      },
      // corregido: eliminado el bloque `link` inválido en JSON-LD;
      // la URL canónica se maneja en el <head> de la página, no aquí.
      medicalSpecialty: [
        "Pediatrics",
        "Neonatology"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120"
      }
    }
  }
};