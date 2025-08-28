<script setup lang="ts">
    import { ref } from 'vue';
    import SectionNavLink from './SectionNavLink.vue';
    import SectionNavMoreButton from './SectionNavMoreButton.vue';
    import NavLink from './NavLink.vue';

    const showingMore = ref(false);
</script>

<style scoped>
    @reference '@/assets/main.css';

    .nav-column {
        @apply flex flex-col gap-2 2xl:gap-3;
    }

    .slide-in-enter-active,
    .slide-in-leave-active {
        @apply transition duration-100 ease-in-out;
    }
    .slide-in-enter-from {
        @apply -translate-y-full opacity-0;
    }
    .slide-in-leave-to {
        @apply translate-y-full opacity-0;
    }

    .slide-out-enter-active,
    .slide-out-leave-active {
        @apply transition duration-100 ease-in-out;
    }
    .slide-out-enter-from {
        @apply translate-y-full opacity-0;
    }
    .slide-out-leave-to {
        @apply -translate-y-full opacity-0;
    }
</style>

<template>
    <div class="nav-column overflow-y-clip py-10">
        <Transition mode="out-in" :name="showingMore ? 'slide-out' : 'slide-in'" :duration="100">
            <div v-if="!showingMore" class="nav-column">
                <SectionNavLink sttf-id="pictures" icon="icon-[hugeicons--image-02]">
                    Pictures
                </SectionNavLink>
                <SectionNavLink sttf-id="projects" icon="icon-[hugeicons--test-tube-01]">
                    Projects
                </SectionNavLink>
                <SectionNavLink sttf-id="resume" icon="icon-[hugeicons--ai-content-generator-01]">
                    Experience
                </SectionNavLink>
                <SectionNavMoreButton v-model:showing-more="showingMore" />
            </div>
            <div v-else class="nav-column">
                <SectionNavMoreButton v-model:showing-more="showingMore" />
                <NavLink :to="{ name: 'links' }" icon="icon-[hugeicons--link-03]">
                    Link Dump
                </NavLink>
                <NavLink :to="{ name: 'miata' }" icon="icon-[hugeicons--car-02]">
                    Miata
                </NavLink>
            </div>
        </Transition>
    </div>
</template>
