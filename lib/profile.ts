export const profile = {
  firstName: "Harison",
  lastName: "Rahajandraibe",
  fullName: "Harison Rahajandraibe",
  title: {
    fr: "Senior Full Stack TypeScript",
    en: "Senior Full Stack TypeScript",
  },
  tagline: {
    fr: "Du MVP à la production — pour les startups qui veulent avancer vite, sans compromettre la qualité.",
    en: "From MVP to production — for startups that need to move fast without compromising quality.",
  },
  headline: {
    fr: "Le senior qui transforme votre idée en produit prêt à scaler.",
    en: "The senior who turns your idea into a production-ready product.",
  },
  yearsExperience: 6,
  rateEurPerDay: 225,
  availability: {
    fr: "Disponible en freelance, surtout pour les startups",
    en: "Available for freelance, especially startups",
  },
  location: "Antananarivo, Madagascar · Remote",
  email: "harison.rhj@gmail.com",
  whatsapp: "+261346180198",
  whatsappDisplay: "+261 34 61 801 98",
  linkedin:
    "https://www.linkedin.com/in/harison-rahajandraibe-5387311ba/",
  photo: "/photo.jpg",
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      url: "https://www.linkedin.com/in/harison-rahajandraibe-5387311ba/overlay/Certifications/1609782290/treasury/?profileId=ACoAADMCcLwBRlxP22opdqND7irqIFFnCGyc21g",
    },
  ],
  strengths: {
    fr: [
      "Lead & senior sur Fintech, HealthTech, GreenTech",
      "Architecture serverless AWS, microservices, GraphQL",
      "Communication claire fondateur ↔ tech",
    ],
    en: [
      "Lead & senior on Fintech, HealthTech, GreenTech",
      "AWS serverless, microservices, GraphQL architectures",
      "Clear founder ↔ engineering communication",
    ],
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
