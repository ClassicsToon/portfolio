export type SkillGroup = {
  id: string;
  label: { fr: string; en: string };
  items: string[];
};

/** Stack highlighted at the top of the skills section */
export const featuredSkills = [
  "TypeScript",
  "Next.js",
  "NestJS + GraphQL",
  "AWS",
  "Docker",
] as const;

/** Item labels (or prefixes) rendered with emphasis inside skill groups */
export const emphasizedSkillItems = new Set([
  "TypeScript",
  "Next.js",
  "NestJS",
  "GraphQL",
  "Docker",
]);

export function isEmphasizedSkill(item: string) {
  if (emphasizedSkillItems.has(item)) return true;
  return item.startsWith("AWS");
}

export const skillGroups: SkillGroup[] = [
  {
    id: "architecture",
    label: { fr: "Architecture", en: "Architecture" },
    items: ["Monolithe", "Microservices", "Serverless", "Event-driven"],
  },
  {
    id: "languages",
    label: { fr: "Langages", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Rust", "PHP"],
  },
  {
    id: "frontend",
    label: { fr: "Front-end", en: "Front-end" },
    items: ["React", "Next.js", "Redux", "Material UI", "React Native", "Storybook"],
  },
  {
    id: "backend",
    label: { fr: "Back-end", en: "Back-end" },
    items: ["Node.js", "NestJS", "Express", "Fastify", "GraphQL", "REST", "Apollo Server"],
  },
  {
    id: "data",
    label: { fr: "Données", en: "Data" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "TypeORM", "Redis", "Elasticsearch"],
  },
  {
    id: "cloud",
    label: { fr: "Cloud & DevOps", en: "Cloud & DevOps" },
    items: [
      "AWS (Amplify, S3, CloudFront, AppSync, Cognito, DynamoDB, EC2, SES)",
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "Vercel",
    ],
  },
  {
    id: "messaging",
    label: { fr: "Messaging & observabilité", en: "Messaging & observability" },
    items: ["NATS", "RabbitMQ", "gRPC", "Socket.io", "Jaeger"],
  },
  {
    id: "communication",
    label: { fr: "Communication", en: "Communication" },
    items: ["Slack", "Discord", "Telegram"],
  },
  {
    id: "collaboration",
    label: {
      fr: "Gestion de projet & IA",
      en: "Project & AI tools",
    },
    items: [
      "Jira",
      "Cursor",
      "Claude Code",
      "AI agents",
      "Hermes (agent autonome)",
    ],
  },
  {
    id: "design",
    label: { fr: "Design & UI", en: "Design & UI" },
    items: ["Figma", "Miro"],
  },
];
