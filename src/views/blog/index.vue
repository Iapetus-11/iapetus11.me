<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import PostListItem from './PostListItem.vue';
</script>

<template>
    <PageLayout title="Blog / Dump">
        <div>
            <PostListItem
                title="Miata"
                description="Showing off my Miiaaaata"
                route-name="blog-miata"
            />
            <PostListItem title="Link Dump" description="link dump" route-name="blog-links" />
        </div>
    </PageLayout>
</template>
