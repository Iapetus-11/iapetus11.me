export type ProjectDefinition = {
    link: string;
    image: string;
    name: string;
    description: string;
};

export const PROJECTS: ProjectDefinition[] = [
    {
        name: 'Villager Bot',
        description:
            'A Minecraft-themed utility, moderation, and economy Discord bot used by tens of thousands.',
        image: 'projects/villager-bot.png',
        link: 'https://villagerbot.com',
    },
    {
        name: 'To-ASCII',
        description:
            'A Python library and command line tool which can convert images, gifs, videos, and even live video to ASCII art.',
        image: 'projects/ascii-me.png',
        link: 'https://github.com/Iapetus-11/To-ASCII',
    },
    {
        name: 'Fractals',
        description:
            'Fractal generation from adjustable parameters, originally created during CUHackit 2022 but since redone.',
        image: 'projects/fractal_colored_iterative_1.png',
        link: '/fractals',
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'An advanced Minecraft server list created with SvelteKit + TailwindCSS + TypeScript and C# + Asp.Net.',
        image: 'projects/minecraft-global-padded.png',
        link: 'https://minecraft.global',
    },
    {
        name: 'api.iapetus11.me',
        description:
            'An API written in C# utilizing Asp.Net and Entity Framework, used by Villager Bot and other projects.',
        image: 'petus.png',
        link: 'https://github.com/Iapetus-11/api.iapetus11.me',
    },
    {
        name: 'Snake',
        description: 'The snake game written in Nim using a wrapper for the SFML graphics library.',
        image: 'projects/nimsnake.png',
        link: 'https://github.com/Iapetus-11/snake',
    },
    {
        name: 'Emoji Leaderboard',
        description:
            'A Slack bot which tracks emoji use and displays it on a frontend built with SvelteKit.',
        image: 'projects/emoji-leaderboard-example.png',
        link: 'https://github.com/Iapetus-11/slack-emoji-leaderboard',
    },
    {
        name: 'Quake III Bot',
        description: 'A Discord bot which facilitates the management of Quake III servers via RCON',
        image: 'projects/quake-3-bot.webp',
        link: 'https://github.com/Iapetus-11/quake3-bot',
    },
    {
        name: 'ButterflyMX 444',
        description:
            'A web app which allows users to open apartments using ButterflyMX using a reverse engineered API wrapper',
        image: 'projects/butterflymx-444.png',
        link: 'https://github.com/Iapetus-11/ButterflyMX-444',
    },
    {
        name: 'Skin Renderer',
        description:
            'A microservice written in Elixir + Phoenix to render Minecraft skins (currently just renders heads)',
        image: 'projects/minecraft-skins-api.png',
        link: 'https://github.com/Iapetus-11/minecraft-skins',
    },
];
