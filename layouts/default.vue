<template>
    <div class="flex min-h-screen flex-col items-center">
        <Header />

        <main
            class="flex max-w-[90rem] grow items-center px-4 pb-8 md:px-8 lg:px-24 lg:pb-8 xl:pb-12"
        >
            <slot />
        </main>
    </div>
</template>
