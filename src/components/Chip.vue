<template>
    <div class="chip no-select">
        <div
                v-if="closable"
                class="close-btn"
                @click="close"
        >
            <span>X</span>
        </div>
        <div data-label><slot></slot></div>
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
    @import "~@/styles/chip.css";
    @import "~@/styles/util.css";

    .chip {
        position: relative;
        background: #E5E5E5;
        color: #000;
        font-family: Arial, sans-serif;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
    }

    .close-btn {
        background: #000;
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
        position: absolute;
        top: -0.65rem;
        right: -0.65rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 0.7rem;
    }

    .close-btn:hover {
        filter: invert(100%);
    }


</style>
