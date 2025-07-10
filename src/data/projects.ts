import asciiMePng from '@/assets/images/projects/ascii-me.png';
import butterflymx444Png from '@/assets/images/projects/butterflymx-444.png';
import clipboardCleansePng from '@/assets/images/projects/clipboard-cleanse.png';
import emojiLeaderboardExamplePng from '@/assets/images/projects/emoji-leaderboard-example.png';
import fractalColoredIterative1Png from '@/assets/images/projects/fractal_colored_iterative_1.png';
import minecraftGlobalPaddedPng from '@/assets/images/projects/minecraft-global-padded.png';
import minecraftSkinsApiPng from '@/assets/images/projects/minecraft-skins-api.png';
import petusPng from '@/assets/images/petus.png';
import pillagerBotWebp from '@/assets/images/projects/pillager-bot.webp';
import quake3BotWebp from '@/assets/images/projects/quake-3-bot.webp';
import tacoTapperLogoPng from '@/assets/images/projects/taco-tapper-logo.png';
import villagerBotPng from '@/assets/images/projects/villager-bot.png';

export interface ProjectDefinition {
    link: string;
    image: string;
    name: string;
    description: string;
    skills: string[];
}

export const PROJECTS: ProjectDefinition[] = [
    {
        name: 'Villager Bot',
        description:
            'A Minecraft-themed utility, moderation, and economy Discord bot used by tens of thousands.',
        image: villagerBotPng,
        link: 'https://villagerbot.com',
        skills: ['Python', 'Cython', 'Websockets', 'Discord.py'],
    },
    {
        name: 'Fractals',
        description:
            'Flame fractal generation from adjustable parameters, originally created during CUHackit 2022 but since remade.',
        image: fractalColoredIterative1Png,
        link: '/fractals',
        skills: ['C#', 'ASP.NET', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'A Minecraft server list originally created with the help of a friend. Home to many Minecraft Java Edition & Bedrock Edition servers.',
        image: minecraftGlobalPaddedPng,
        link: 'https://minecraft.global',
        skills: [
            'C#',
            'ASP.NET',
            'Entity Frameork',
            'Razor',
            'SvelteKit',
            'TypeScript',
            'Tailwind CSS',
            'PostgreSQL',
        ],
    },
    {
        name: 'To-ASCII',
        description:
            'A Python library and command line tool which can convert images, gifs, videos, and even live video to ASCII art.',
        image: asciiMePng,
        link: 'https://github.com/Iapetus-11/To-ASCII',
        skills: ['Python', 'Nim', 'OpenCV', 'Numpy'],
    },
    {
        name: 'Clipboard Cleanse',
        description:
            'A cross-platform (Mac & Windows) toolbar/system tray app which automatically removes tracking information and other crap from copied URLs.',
        image: clipboardCleansePng,
        link: '/projects/clipboard-cleanse',
        skills: ['Rust', 'Objective-C', 'AppKit', 'Win32'],
    },
    {
        name: 'Taco Tapper',
        description:
            'An unfinished knockoff cookie clicker but with tacos instead. Written in Vue, all art done by my girlfriend.',
        image: tacoTapperLogoPng,
        link: 'https://tacos.iapetus11.me/',
        skills: ['Vue', 'TypeScript', 'Cloudflare Pages'],
    },
    {
        name: 'Emoji Leaderboard',
        description:
            'A Slack bot which tracks emoji use and displays a leaderboard of the most used emojis. Also has functionality to sync emojis from Slack to Discord.',
        image: emojiLeaderboardExamplePng,
        link: 'https://github.com/Iapetus-11/slack-emoji-leaderboard',
        skills: ['Python', 'JavaScript', 'SvelteKit', 'FastAPI'],
    },
    {
        name: 'Quake III Bot',
        description: 'A Discord bot to faciliate the management of Quake III servers via RCON.',
        image: quake3BotWebp,
        link: 'https://github.com/Iapetus-11/quake3-bot',
        skills: ['Python', 'Discord.py', 'Quake III RCON Protocol'],
    },
    {
        name: 'api.iapetus11.me',
        description:
            'A multi-purpose API used by my projects (Villager Bot, iapetus11.me, Fractals) and several other people.',
        image: petusPng,
        link: 'https://github.com/Iapetus-11/api.iapetus11.me',
        skills: ['C#', 'ASP.NET'],
    },
    {
        name: 'ButterflyMX 444',
        description:
            'A web app which allows users to open their apartment using ButterflyMX using a reverse engineered API wrapper.',
        image: butterflymx444Png,
        link: 'https://github.com/Iapetus-11/ButterflyMX-444',
        skills: ['Python', 'FastAPI', 'Jinja', 'Docker'],
    },
    {
        name: 'Pillager Bot',
        description:
            'A small Discord bot for moderating my personal Discord servers. Includes anti-scammer functionality.',
        image: pillagerBotWebp,
        link: 'https://github.com/Iapetus-11/Pillager-Bot/',
        skills: ['Rust', 'Diesel'],
    },
    {
        name: 'Skin Renderer',
        description:
            "A microservice for rendering player's Minecraft skins (currently just renders heads).",
        image: minecraftSkinsApiPng,
        link: 'https://github.com/Iapetus-11/minecraft-skins',
        skills: ['Elixir', 'Phoenix'],
    },
];
