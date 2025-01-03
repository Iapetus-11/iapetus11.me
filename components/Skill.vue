<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import type { SkillDefinition } from '~/data/skills';

    defineProps<SkillDefinition>();
</script>

<template>
    <div class="flex flex-row items-center space-x-1.5 rounded-md bg-dark-super px-2.5 py-2">
        <FontAwesomeIcon v-if="icon" :icon="icon" class="text-aqua-normal" />
        <img
            v-else
            :src="customIcon"
            :alt="name"
            class="max-h-5 w-5"
            :style="{ transform: `scale(${customScale ?? 1})` }"
        />

        <span class="text-gray-100">{{ name }}</span>
    </div>
</template>
