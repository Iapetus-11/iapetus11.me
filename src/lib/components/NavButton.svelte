<script lang="ts">
    export let name: string;
    export let href: string;
    export let idx: number;
</script>

<a
    class="flex fin py-2 px-2 sm:px-4 hover:bg-aqua-dark border border-white
           hover:border-opacity-0 rounded-md h-8 sm:h-10 justify-center {$$props.class}"
    style="animation-delay:{0.2 + idx * 0.05}s;"
    {href}
>
    <span class="text-white self-center">{name}</span>
</a>
