<script lang="ts">
    import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faDonate } from '@fortawesome/free-solid-svg-icons';

    import IconNavButton from './IconNavButton.svelte';
    import NavButton from './NavButton.svelte';
    import { page } from '$app/stores';

    export let fill: boolean = false;
    export let mobile: boolean | undefined = undefined;

    const navPages = [
        { href: '/', name: 'Home' },
        { href: '/projects', name: 'Projects' },
        { href: '/friends', name: 'Friends' },
    ];
</script>

<div
    class={`p-4 items-center ${$$props.class}
           ${fill ? 'justify-between' : 'gap-6'}
           ${
               mobile === undefined
                   ? 'flex'
                   : !mobile
                   ? 'hidden sm:flex'
                   : 'grid grid-cols-7 sm:flex'
           }`}
>
    <div
        class="{mobile === undefined
            ? 'flex'
            : mobile
            ? 'grid grid-cols-2 mx-auto w-20  sm:hidden col-span-2'
            : 'hidden sm:flex'}
        gap-4"
    >
        <IconNavButton href="https://github.com/Iapetus-11" icon={faGithub} idx={0} />
        <IconNavButton
            href="https://www.linkedin.com/in/milo-weinberg/"
            icon={faLinkedin}
            idx={1}
        />
        <IconNavButton href="https://dsc.bio/iapetus11/" icon={faDiscord} idx={2} />
        <IconNavButton href="https://www.venmo.com/u/Iapetus11/" icon={faDonate} idx={3} />
    </div>

    <slot />

    <div
        class={`${
            mobile === undefined
                ? 'flex'
                : mobile
                ? 'flex flex-col mx-auto sm:hidden w-20 col-span-2'
                : 'hidden sm:flex'
        } gap-4`}
    >
        {#each navPages.filter((p) => p.href !== $page.route.id) as navPage, idx (navPage)}
            <NavButton {...navPage} {idx} />
        {/each}
    </div>
</div>
