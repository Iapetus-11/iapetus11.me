/**
 * Nuxt does not let you have components alongside pages normally, it recoganizes them as routes. This plugin
 * removes all routes that contain 'components' in them, so we can have components alongside routes.
 */

export default defineNuxtPlugin(() => {
    const router = useRouter();
    router.options.routes.filter(r => r.path.includes('components')).forEach(r => router.removeRoute(r.name!));
});
