<script setup lang="ts">
    import SectionNavLink from './SectionNavLink.vue';
</script>

<template>
    <div class="flex flex-col gap-2 2xl:gap-3">
        <SectionNavLink sttf-id="pictures" icon="icon-[hugeicons--image-02]">
            Pictures
        </SectionNavLink>
        <SectionNavLink sttf-id="projects" icon="icon-[hugeicons--test-tube-01]">
            Projects
        </SectionNavLink>
        <SectionNavLink sttf-id="resume" icon="icon-[hugeicons--ai-content-generator-01]">
            Experience
        </SectionNavLink>
    </div>
</template>
