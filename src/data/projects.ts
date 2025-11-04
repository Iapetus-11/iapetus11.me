import asciiMeWebp from '@/assets/images/projects/ascii-me.webp';
import butterflymx444Webp from '@/assets/images/projects/butterflymx-444.webp';
import clipboardCleanseWebp from '@/assets/images/projects/clipboard-cleanse.webp';
import emojiLeaderboardExampleWebp from '@/assets/images/projects/emoji-leaderboard-example.webp';
import fractalColoredIterative1Webp from '@/assets/images/projects/fractal_colored_iterative_1.webp';
import minecraftGlobalPaddedWebp from '@/assets/images/projects/minecraft-global-padded.webp';
import petusWebp from '@/assets/images/petus.webp';
import pillagerBotWebp from '@/assets/images/projects/pillager-bot.webp';
import quake3BotWebp from '@/assets/images/projects/quake-3-bot.webp';
import tacoTapperLogoWebp from '@/assets/images/projects/taco-tapper-logo.webp';
import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';

export type ProjectDefinition = {
    link: string;
    image: string;
    name: string;
    description: string;
    points: string[];
};

export const PROJECTS: ProjectDefinition[] = [
    {
        name: 'Villager Bot',
        description:
            'A Minecraft-themed utility, moderation, and economy Discord bot used by tens of thousands.',
        image: villagerBotWebp,
        link: 'https://villagerbot.com',
        points: ['100,000+ Users', 'Python', 'Cython', 'Websockets', 'Discord.py', 'Docker'],
    },
    {
        name: 'Fractals',
        description:
            'Flame fractal generation from adjustable parameters, originally created during CUHackit 2022 but since remade.',
        image: fractalColoredIterative1Webp,
        link: '/fractals',
        points: ['C#', 'ASP.NET', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
        name: 'minecraft\u200B.global',
        description:
            'A Minecraft server list originally created with the help of a friend. Home to many Minecraft Java Edition & Bedrock Edition servers.',
        image: minecraftGlobalPaddedWebp,
        link: 'https://minecraft.global',
        points: [
            '10,000+ Monthly Visitors',
            'C#',
            'ASP.NET',
            'Entity Framework',
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
        image: asciiMeWebp,
        link: 'https://github.com/Iapetus-11/To-ASCII',
        points: ['Python', 'Nim', 'OpenCV', 'Numpy'],
    },
    {
        name: 'Clipboard Cleanse',
        description:
            'A cross-platform (Mac & Windows) toolbar/system tray app which automatically removes tracking information and other crap from copied URLs.',
        image: clipboardCleanseWebp,
        link: 'https://github.com/Iapetus-11/clipboard-cleanse',
        points: ['Rust', 'Objective-C', 'AppKit', 'Win32'],
    },
    {
        name: 'Taco Tapper',
        description:
            'An unfinished knockoff cookie clicker but with tacos instead. Written in Vue, all art done by my girlfriend.',
        image: tacoTapperLogoWebp,
        link: 'https://tacos.iapetus11.me/',
        points: ['Vue', 'TypeScript', 'Cloudflare Pages'],
    },
    {
        name: 'Emoji Leaderboard',
        description:
            'A Slack bot which tracks emoji use and displays a leaderboard of the most used emojis. Also has functionality to sync emojis from Slack to Discord.',
        image: emojiLeaderboardExampleWebp,
        link: 'https://github.com/Iapetus-11/slack-emoji-leaderboard',
        points: ['Python', 'JavaScript', 'SvelteKit', 'FastAPI'],
    },
    {
        name: 'Quake III Bot',
        description: 'A Discord bot to facilitate the management of Quake III servers via RCON.',
        image: quake3BotWebp,
        link: 'https://github.com/Iapetus-11/quake3-bot',
        points: ['Python', 'Discord.py', 'Quake III RCON Protocol'],
    },
    {
        name: 'api.iapetus11.me',
        description:
            'A multi-purpose API used by my projects (Villager Bot, iapetus11.me, Fractals) and several other people.',
        image: petusWebp,
        link: 'https://github.com/Iapetus-11/api.iapetus11.me',
        points: ['C#', 'ASP.NET', 'Docker'],
    },
    {
        name: 'ButterflyMX 444',
        description:
            'A web app which allows users to open their apartment with ButterflyMX, using a reverse engineered API wrapper.',
        image: butterflymx444Webp,
        link: 'https://github.com/Iapetus-11/ButterflyMX-444',
        points: ['Python', 'FastAPI', 'Jinja', 'Docker'],
    },
    {
        name: 'Pillager Bot',
        description:
            'A small Discord bot for moderating my personal Discord servers. Includes anti-scammer functionality.',
        image: pillagerBotWebp,
        link: 'https://github.com/Iapetus-11/Pillager-Bot/',
        points: ['Rust', 'Diesel'],
    },
];
