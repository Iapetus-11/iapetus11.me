import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

export const pages = [
    { href: '/', name: 'Home' },
    { href: '/projects', name: 'Projects' },
    { href: '/friends', name: 'Friends' },
];

export const externalPages = [
    { href: 'https://github.com/Iapetus-11', icon: faGithub },
    { href: 'https://www.linkedin.com/in/milo-weinberg', icon: faLinkedin },
    { href: 'https://dsc.bio/iapetus11', icon: faDiscord },
    { href: 'https://www.venmo.com/u/Iapetus11', icon: faDonate },
];
