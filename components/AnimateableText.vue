<script lang="ts">
    import type { VNode } from 'vue';

    export default {
        props: {
            as: { type: String, default: 'span' },
        },
        setup(props, { slots }) {
            const content = slots.default!()
                .map((el) => el.children)
                .join('');

            const children: VNode[] = content.split(' ').map((word) =>
                h(
                    'span',
                    null,
                    (word + ' ').split('').map((c) => h('span', null, c))
                )
            );

            return () => h(props.as, { class: '*:whitespace-pre-wrap *:inline-block' }, children);
        },
    };
</script>
