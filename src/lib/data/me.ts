import {
    faPython,
    faJs,
    faJava,
    faGithub,
    faReact,
    faAws,
    faUbuntu,
    faStripeS,
    faDocker,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
    faHashtag,
    faDatabase,
    faCrown,
    faCodeBranch,
    faBolt,
    faDiagramProject,
    faTableColumns,
    faTerminal,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

import svelteIconSvg from '$lib/images/svelte-icon.svg';
import djangoIconSvg from '$lib/images/django-icon.svg';
import petusPng from '$lib/images/petus.png';

export const aboutMe =
    "Hey! I'm Milo, a 19 year-old full-stack developer who's been programming for 6+ years and loves to learn new " +
    'things!';

const languages = [
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
        name: 'Nim',
        icon: faCrown,
    },
    {
        name: 'Java',
        icon: faJava,
    },
];

const other = [
    {
        name: 'GitHub',
        icon: faGithub,
    },
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
        customIcon: djangoIconSvg,
    },
    {
        name: 'Asp.Net',
        icon: faDiagramProject,
    },
    {
        name: 'Next.js',
        icon: faReact,
    },
    {
        name: 'Vue',
        icon: faVuejs,
    },
    {
        name: 'Svelte',
        customIcon: svelteIconSvg,
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
        name: 'AWS',
        icon: faAws,
    },
    {
        name: 'SSH',
        icon: faTerminal,
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
];

export const skills = {
    languages: languages,
    other: other,
};

export const projects = [
    {
        name: 'Villager Bot',
        description:
            'A Minecraft-themed utility, moderation, and economy Discord bot used by tens of thousands.',
        image: '/images/villager-bot.png',
        href: 'https://villagerbot.com/',
    },
    {
        name: 'api.iapetus11.me',
        description:
            'An API written in C# utilizing Asp.Net and Entity Framework, used by Villager Bot and other projects.',
        image: petusPng,
        href: 'https://github.com/Iapetus-11/api.iapetus11.me/',
    },
    {
        name: 'fractals',
        description:
            'A website that generates fractals adjustable by the user, created during CUHackit 2022 with my group.',
        image: '/images/fractal_colored_iterative_1.png',
        href: 'https://fractals.iapetus11.me/',
    },
    {
        name: 'To-ASCII',
        description:
            'A Python library and command line tool which can convert images, gifs, videos, and even live video from to ASCII art.',
        image: '/images/ascii-me.png',
        href: 'https://github.com/Iapetus-11/To-ASCII/',
    },
    {
        name: 'Snake',
        description: 'The snake game written in Nim using a wrapper for the SFML graphics library.',
        image: '/images/nimsnake.png',
        href: 'https://github.com/Iapetus-11/snake/',
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'An advanced Minecraft server list created with Next.js, TailwindCSS, Asp.Net, and TypeScript.',
        image: '/images/minecraft-global-bordered.png',
        href: 'https://minecraft.global/',
    },
];
