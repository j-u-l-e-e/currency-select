<template>
    <div>
        <input
                type="checkbox"
                v-model="checked"
        >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ToggleChip",
        props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                checked: this.value
            }
        },
        watch: {
            checked(value) {
                this.$emit("change", value);
            }
        }
    }
</script>

<style scoped>

</style>
