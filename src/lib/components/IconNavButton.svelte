<script lang="ts">
    import Fa from 'svelte-fa';

    export let href: string;
    export let icon: object;
    export let idx: number;
</script>

<a
    class="fin text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110"
    style="animation-delay:{0.2 + idx * 0.05}s;"
    {href}
    target="_blank"
    rel="noreferrer"
>
    <Fa {icon} size="lg" class="w-full min-w-fit" />
</a>
