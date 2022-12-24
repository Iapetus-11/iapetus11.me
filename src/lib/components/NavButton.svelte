<script lang="ts">
    export let name: string;
    export let href: string;
    export let idx: number;
</script>

<a
    class="flex fin py-2 px-2 sm:px-4 hover:bg-aqua-dark transform duration-100 sm:hover:scale-110 border
           hover:border-opacity-0 border-white rounded-md h-8 sm:h-10 justify-center"
    style="animation-delay:{0.2 + idx * 0.05}s;"
    {href}
>
    <span class="text-white self-center">{name}</span>
</a>
