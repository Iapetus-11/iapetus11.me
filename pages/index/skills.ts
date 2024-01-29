import {
    faBolt,
    faCodeBranch,
    faCrown,
    faDatabase,
    faDiagramProject,
    faFileLines,
    faHashtag,
    faLayerGroup,
    faTableColumns,
} from '@fortawesome/free-solid-svg-icons';
import {
    faDocker,
    faJava,
    faJs,
    faPython,
    faStripeS,
    faUbuntu,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type SkillDefinition = {
    name: string;
    icon?: IconDefinition;
    customIcon?: string;
    customScale?: number;
};

const PROGRAMMING_LANGUAGES: SkillDefinition[] = [
    {
        name: 'Python',
        icon: faPython,
    },
    {
        name: 'C#',
        icon: faHashtag,
    },
    {
        name: 'SQL',
        icon: faDatabase,
    },
    {
        name: 'JavaScript',
        icon: faJs,
    },
    {
        name: 'TypeScript',
        customIcon: 'skill-icons/typescript.svg',
        customScale: 0.8,
    },
    {
        name: 'Nim',
        icon: faCrown,
    },
    {
        name: 'Java',
        icon: faJava,
    },
];

const TECHNOLOGIES_AND_TOOLS: SkillDefinition[] = [
    {
        name: 'Git',
        icon: faCodeBranch,
    },
    {
        name: 'FastAPI',
        icon: faBolt,
    },
    {
        name: 'Django',
        customIcon: 'skill-icons/django.svg',
    },
    {
        name: 'Asp.Net',
        icon: faDiagramProject,
    },
    {
        name: 'Vue',
        icon: faVuejs,
    },
    {
        name: 'Svelte',
        customIcon: 'skill-icons/svelte.svg',
    },
    {
        name: 'PostgreSQL',
        icon: faDatabase,
    },
    {
        name: 'Entity Framework',
        icon: faTableColumns,
    },
    {
        name: 'NGINX',
        icon: faLayerGroup,
    },
    {
        name: 'Ubuntu',
        icon: faUbuntu,
    },
    {
        name: 'Stripe',
        icon: faStripeS,
    },
    {
        name: 'Docker',
        icon: faDocker,
    },
    {
        name: 'Sentry',
        icon: faFileLines,
    },
];

export const SKILLS = [
    { title: 'Programming Languages', items: PROGRAMMING_LANGUAGES },
    { title: 'Technologies / Tools', items: TECHNOLOGIES_AND_TOOLS },
];
