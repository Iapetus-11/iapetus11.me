<script lang="ts">
    export default {
        props: {
            as: { type: String, default: 'span' },
            splitBy: { type: String, default: '' },
        },
        setup(props, { slots }) {
            const content = slots.default!()
                .map((el) => el.children)
                .join('');
            return () =>
                h(
                    props.as,
                    null,
                    content.split(props.splitBy).map((c) => h('span', null, c + props.splitBy))
                );
        },
    };
</script>
