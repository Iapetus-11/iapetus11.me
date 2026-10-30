<script setup lang="ts">
    import ScrollButton from './ScrollButton.vue';
    import LinkButton from './LinkButton.vue';
</script>

<template>
    <div class="flex flex-col gap-2 2xl:gap-3">
        <ScrollButton sttf-id="pictures" icon="icon-[hugeicons--image-02]"> Pictures </ScrollButton>
        <ScrollButton sttf-id="projects" icon="icon-[hugeicons--test-tube-01]">
            Projects
        </ScrollButton>
        <ScrollButton sttf-id="resume" icon="icon-[hugeicons--ai-content-generator-01]">
            Experience
        </ScrollButton>
        <LinkButton :to="{ name: 'blog' }" icon="icon-[hugeicons--notebook-pen]"> Blog </LinkButton>
    </div>
</template>
