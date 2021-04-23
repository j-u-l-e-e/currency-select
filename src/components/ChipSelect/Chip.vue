<template>
    <div class="chip">
        <div
                v-if="closable"
                @click="close"
                class="close-button"
        >
            X
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Chip",
        props: {
            closable: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            closed: false
        }),
        methods: {
            close() {
                this.closed = true;
                this.$emit("close");
            }
        }
    }
</script>

<style scoped>
    .close-btn {
        background: #000;
        color: #fff;
        border-color: #fff;
        border-radius: 50%;
    }
</style>
