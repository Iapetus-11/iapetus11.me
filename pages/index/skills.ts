import {
    faBolt,
    faCodeBranch,
    faCrown,
    faDatabase,
    faDiagramProject,
    faDroplet,
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
    faRust,
    faStripeS,
    faUbuntu,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import djangoSvg from '~/assets/images/skill-icons/django.svg';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import svelteSvg from '~/assets/images/skill-icons/svelte.svg';
import typescriptSvg from '~/assets/images/skill-icons/typescript.svg';

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
        name: 'JavaScript',
        icon: faJs,
    },
    {
        name: 'TypeScript',
        customIcon: typescriptSvg,
        customScale: 0.8,
    },
    {
        name: 'Rust',
        icon: faRust,
    },
    {
        name: 'SQL',
        icon: faDatabase,
    },
    {
        name: 'C#',
        icon: faHashtag,
    },
    {
        name: 'Elixir',
        icon: faDroplet,
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
        customIcon: djangoSvg,
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
        customIcon: svelteSvg,
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
