import asciiMePng from '~/assets/images/projects/ascii-me.png';
import butterflymx444Png from '~/assets/images/projects/butterflymx-444.png';
import emojiLeaderboardExamplePng from '~/assets/images/projects/emoji-leaderboard-example.png';
import fractalColoredIterative1Png from '~/assets/images/projects/fractal_colored_iterative_1.png';
import minecraftGlobalPaddedPng from '~/assets/images/projects/minecraft-global-padded.png';
import minecraftSkinsApiPng from '~/assets/images/projects/minecraft-skins-api.png';
import petusPng from '~/assets/images/petus.png';
import quake3BotWebp from '~/assets/images/projects/quake-3-bot.webp';
import tacoTapperLogoPng from '~/assets/images/projects/taco-tapper-logo.png';
import villagerBotPng from '~/assets/images/projects/villager-bot.png';

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
        image: villagerBotPng,
        link: 'https://villagerbot.com',
    },
    {
        name: 'To-ASCII',
        description:
            'A Python library and command line tool which can convert images, gifs, videos, and even live video to ASCII art.',
        image: asciiMePng,
        link: 'https://github.com/Iapetus-11/To-ASCII',
    },
    {
        name: 'Fractals',
        description:
            'Fractal generation from adjustable parameters, originally created during CUHackit 2022 but since redone.',
        image: fractalColoredIterative1Png,
        link: '/fractals',
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'An advanced Minecraft server list created with SvelteKit + TailwindCSS + TypeScript and C# + Asp.Net.',
        image: minecraftGlobalPaddedPng,
        link: 'https://minecraft.global',
    },
    {
        name: 'api.iapetus11.me',
        description:
            'An API written in C# utilizing Asp.Net and Entity Framework, used by Villager Bot and other projects.',
        image: petusPng,
        link: 'https://github.com/Iapetus-11/api.iapetus11.me',
    },
    {
        name: 'Taco Tapper',
        description: 'An unfinished knockoff cookie clicker but with tacos instead. Written in Vue, all art done by my girlfriend.',
        image: tacoTapperLogoPng,
        link: 'https://tacos.iapetus11.me/',
    },
    {
        name: 'Emoji Leaderboard',
        description:
            'A Slack bot which tracks emoji use and displays it on a frontend built with SvelteKit.',
        image: emojiLeaderboardExamplePng,
        link: 'https://github.com/Iapetus-11/slack-emoji-leaderboard',
    },
    {
        name: 'Quake III Bot',
        description: 'A Discord bot which facilitates the management of Quake III servers via RCON',
        image: quake3BotWebp,
        link: 'https://github.com/Iapetus-11/quake3-bot',
    },
    {
        name: 'ButterflyMX 444',
        description:
            'A web app which allows users to open apartments using ButterflyMX using a reverse engineered API wrapper',
        image: butterflymx444Png,
        link: 'https://github.com/Iapetus-11/ButterflyMX-444',
    },
    {
        name: 'Skin Renderer',
        description:
            'A microservice written in Elixir + Phoenix to render Minecraft skins (currently just renders heads)',
        image: minecraftSkinsApiPng,
        link: 'https://github.com/Iapetus-11/minecraft-skins',
    },
];
