<template>
    <div class="flex min-h-screen flex-col items-center">
        <header class="flex w-full">
            <h1 v-if="$route.meta.title">{{ $route.meta.title }}</h1>

            <nav class="ml-auto flex gap-2"><NavigationPages /></nav>
        </header>

        <main class="mx-auto flex max-w-[90rem] grow items-center px-4 md:px-8 lg:px-24">
            <slot />
        </main>
    </div>
</template>
