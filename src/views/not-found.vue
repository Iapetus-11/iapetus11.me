<template>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center fade-in">
        <h1 class="text-6xl font-bold font-mono">404</h1>
        <h2 class="text-3xl font-mono whitespace-nowrap">page not found</h2>
        
        <RouterLink :to="{ name: 'home' }" class="group outlined-actionable p-2 md:p-3 rounded-xl font-medium flex items-center mt-4">
            <span
                class="icon-[hugeicons--arrow-left-01] mr-0.5 -ml-1.5 text-2xl transition-[margin] group-hover:mr-1"
            ></span>
            Go Back Home
        </RouterLink>
    </div>
</template>