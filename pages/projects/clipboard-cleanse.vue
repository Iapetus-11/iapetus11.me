<script setup lang="ts">
    definePageMeta({
        title: 'Clipboard Cleanse',
        titleClasses: '!text-5xl max-sm:!text-4xl',
    });

    defineRouteRules({
        prerender: true,
    });
</script>

<template>
    <div class="flex w-full flex-col md:mt-16">
        <p class="text-lg text-white md:text-xl">
            <img
                src="~/assets/images/projects/clipboard-cleanse.png"
                alt="Clipboard Cleanse Logo"
                width="320"
                class="animate-fade-in float-left -mt-5 h-fit max-lg:w-[256px] max-md:w-[100px] md:-ml-10"
            />

            <span class="animate-fade-in block" style="animation-delay: 50ms">
                Ever tired of the extra crap on the end of URLs you copy? Well it could be useless
                tracking data to help corporations spy on you and your friends... for example look
                at this Amazon link:
            </span>

            <code
                class="animate-fade-in my-2 block overflow-hidden break-all rounded-lg bg-dark-dark p-3 text-xs text-slate-300 md:text-base"
                style="animation-delay: 100ms"
            >
                <a
                    href="https://www.amazon.com/Inflatable-Costume-Halloween-Spacesuit-Astronaut/dp/B09BJS9BBJ?crid=11KHII13JFHSH&dib=eyJ2IjoiMSJ9.nqrP3iAjR9VsVRLmEpoJxBYxL2H53Zh_vi7fD3WLEc6FHQzxqQmlxkz-wrjBRDODNMVohaEB4LRuIWfih8XwD3xp7c-BS_ee-3hftiEMQprYJqYXYRkymkKjje28V8EDwjnQMNmDHIN3tFJUy8udIy9gWy5khyOXi_uMKVoBjqj4V5cnXAMwny9OTVr5BK2_msWm915igcvUfms6fgoQIMaIfRZlFsAX_ATpjjLUeNGLnEktxuXqogPryHsIo5o_jsbIKSyF38lJ1iDiSB13XvvAusjmkXbC0EDNT7m9n7k.WfS1pc4D_HZbaEYBi9kLOLyhRDWMoInlulOcI-kxUMc&dib_tag=se&keywords=among%2Bus&qid=1730694134&sprefix=among%2Bu%2Caps%2C118&sr=8-40&th=1"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://www.amazon.com/Inflatable-Costume-Halloween-Spacesuit-Astronaut/dp/B09BJS9BBJ?crid=11KHII13JFHSH&dib=eyJ2IjoiMSJ9.nqrP3iAjR9VsVRLmEpoJxBYxL2H53Zh_vi7fD3WLEc6FHQzxqQmlxkz-wrjBRDODNMVohaEB4LRuIWfih8XwD3xp7c-BS_ee-3hftiEMQprYJqYXYRkymkKjje28V8EDwjnQMNmDHIN3tFJUy8udIy9gWy5khyOXi_uMKVoBjqj4V5cnXAMwny9OTVr5BK2_msWm915igcvUfms6fgoQIMaIfRZlFsAX_ATpjjLUeNGLnEktxuXqogPryHsIo5o_jsbIKSyF38lJ1iDiSB13XvvAusjmkXbC0EDNT7m9n7k.WfS1pc4D_HZbaEYBi9kLOLyhRDWMoInlulOcI-kxUMc&dib_tag=se&keywords=among%2Bus&qid=1730694134&sprefix=among%2Bu%2Caps%2C118&sr=8-40&th=1
                </a>
            </code>

            <span class="animate-fade-in block" style="animation-delay: 150ms">
                With Clipboard Cleanse, that link would automatically be stripped down to:
            </span>

            <code
                class="animate-fade-in my-2 inline-block overflow-hidden break-all rounded-lg bg-dark-dark p-3 text-xs text-slate-300 md:text-base"
                style="animation-delay: 175ms"
            >
                <a
                    href="https://www.amazon.com/Inflatable-Costume-Halloween-Spacesuit-Astronaut/dp/B09BJS9BBJ"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://www.amazon.com/Inflatable-Costume-Halloween-Spacesuit-Astronaut/dp/B09BJS9BBJ
                </a>
            </code>

            <br />

            <span class="animate-fade-in block" style="animation-delay: 200ms">
                Currently Clipboard Cleanse is available for Windows and MacOS, but I plan to add
                support for iOS and Linux.
            </span>
        </p>

        <div class="mx-auto mt-6 flex w-full gap-4 max-sm:flex-col sm:min-w-[36rem] md:w-fit">
            <a
                href="https://github.com/Iapetus-11/clipboard-cleanse"
                target="_blank"
                rel="noreferrer"
                class="button animate-fade-in w-full whitespace-nowrap sm:w-1/3"
                style="animation-delay: 250ms"
            >
                View on GitHub
            </a>

            <a
                href="https://github.com/Iapetus-11/clipboard-cleanse/blob/master/MacOS.md#installation"
                target="_blank"
                rel="noreferrer"
                class="button animate-fade-in w-full whitespace-nowrap sm:w-1/3"
                style="animation-delay: 300ms"
            >
                MacOS Installation
            </a>

            <a
                href="https://github.com/Iapetus-11/clipboard-cleanse/blob/master/Windows.md#installation"
                target="_blank"
                rel="noreferrer"
                class="button animate-fade-in w-full whitespace-nowrap sm:w-1/3"
                style="animation-delay: 350ms"
            >
                Windows Installation
            </a>
        </div>
    </div>
</template>
