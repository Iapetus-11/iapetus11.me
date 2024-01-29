<script setup lang="ts">
    import { marked } from 'marked';
    import sanitize from 'xss';

    type ElementProcessor = {
        events?: { event: string; handler(ev: Event): void }[];
        process?(el: Element): void;
    };

    const ELEMENT_PROCESSORS: Record<string, ElementProcessor> = {
        A: {
            events: [
                {
                    event: 'click',
                    handler(ev: Event) {
                        ev.stopPropagation();
                    },
                },
            ],
            process(el: HTMLAnchorElement) {
                el.classList.add('text-link');
                el.setAttribute('target', '_blank');
                el.setAttribute('rel', 'noreferrer');
            },
        },
    };

    const props = defineProps<{
        content: string;
    }>();

    const container = ref<HTMLElement>();

    /**
     * Sanitize and render markdown to html
     */
    function preProcessContent(c: string) {
        // We first sanitize the passed-in content to remove HTML tags which aren't desired
        // We then pass it through Marked which renders any markdown to HTML, it's recommended to
        // sanitize the output of Marked again, so we do.
        c = sanitize(c, {
            whiteList: { a: ['href', 'title'], br: [], strong: [], em: [], ul: [], ol: [], li: [] },
        });
        c = sanitize(marked(c) as string);

        return c;
    }

    /**
     * Process content after it's rendered and setup any event listeners
     */
    function postProcessNodes(el: Element) {
        if (el.nodeName in ELEMENT_PROCESSORS) {
            const config = ELEMENT_PROCESSORS[el.nodeName];
            config?.process?.(el);
            config?.events?.forEach?.(({ event, handler }) => {
                el.addEventListener(event, handler);
            });
        }

        [...el.children].forEach(postProcessNodes);
    }

    /**
     * Cleanup (event listeners) before being unmounted
     */
    function destructNodes(el: Element) {
        if (el.nodeName in ELEMENT_PROCESSORS) {
            const config = ELEMENT_PROCESSORS[el.nodeName];
            config?.events?.forEach(({ event, handler }) => {
                el.removeEventListener(event, handler);
            });
        }
    }

    watch(
        [container, () => props.content],
        () => {
            if (container.value) {
                postProcessNodes(container.value);
            }
        },
        { immediate: true },
    );

    onBeforeUnmount(() => destructNodes(container.value!));
</script>

<template>
    <!-- eslint-disable vue/no-v-text-v-html-on-component, vue/no-v-html -->
    <span ref="container" v-html="preProcessContent(content)" />
</template>
