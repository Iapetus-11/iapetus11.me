export type LinkDefinition = {
    name: string;
    description: string;
    link: string;
};

export const PEOPLE_LINKS: LinkDefinition[] = [
    {
        name: 'Kevin Thomas',
        description:
            'A bright student who I have collaborated with in the past. Has a lot of cool projects on their portfolio site.',
        link: 'https://kevinjosethomas.com/',
    },
    {
        name: 'Gabby Simpson',
        description: 'My favorite Rust & mixology enthusiast. Inspired me to learn Rust.',
        link: 'https://dotunwrap.dev/',
    },
    {
        name: 'Trinity Angelica',
        description:
            "A portfolio site showcasing some of my girlfriend's art & photos. Not updated often enough!",
        link: 'https://art.devilsquares.me/',
    },
    {
        name: 'Rome Stoppiello',
        description:
            'A web developer, photographer, and artist. Check out their photos and online tools.',
        link: 'https://romestop.pages.dev/',
    },
    {
        name: 'Ryan Thomson',
        description: 'Very smart and very opinionated. I encourage you to check out his blog.',
        link: 'https://www.ryanthomson.net/',
    },
    {
        name: 'Patrick Smathers',
        description: 'A nice guy, helped develop the original fractal generator at CUHackit 2022',
        link: 'https://patricksmathers.com/',
    },
];

export const ONLINE_TOOL_LINKS: LinkDefinition[] = [
    {
        name: 'tree.nathanfriend.com',
        description: 'Easily generate text-based folder structure diagrams / trees',
        link: 'https://tree.nathanfriend.com/',
    },
    {
        name: 'cobalt.tools',
        description:
            'Download any video / audio from Youtube and almost any other social media (like Reddit, TikTok, Twitter, etc...)',
        link: 'https://cobalt.tools/',
    },
    {
        name: 'Hacker Neue',
        description: 'An improved read-only client for Hacker News (news.ycombinator.com)',
        link: 'https://www.hackerneue.com/',
    },
    {
        name: 'discussed.online',
        description: 'Find mentions of links in online forums / social media',
        link: 'https://discussed.online/',
    },
    {
        name: "Anna's Archive",
        description: 'A free online library with millions of books, papers, and more',
        link: 'https://annas-archive.org/',
    },
    {
        name: 'timeful.app',
        description: 'A very nice tool for coordinating meetups/meetings between people',
        link: 'https://timeful.app',
    },
    {
        name: 'Photopea',
        description:
            'An online photo editor, very easy to use, though not as good as [get]paint.net',
        link: 'https://www.photopea.com/',
    },
];

export const SOFTWARE_LINKS: LinkDefinition[] = [
    {
        name: 'Jellyfin',
        description:
            'A free & open-source media server for movies, audio, books, etc... I host my own instance at home.',
        link: 'https://jellyfin.org/',
    },
    {
        name: 'Kiwix',
        description:
            'An offline reader for various wikis, docs, and other resources including Wikipedia. I have an offline copy of Wikipedia just in case :)',
        link: 'https://kiwix.org/',
    },
];
