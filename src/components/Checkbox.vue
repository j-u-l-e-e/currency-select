<template>
    <label class="checkbox no-select">
        <input
                type="checkbox"
                v-model="checked"
        >
        <span class="checkmark"></span>
    </label>
</template>

<script>
    export default {
        name: "Checkbox",
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
            value: {
                handler(value) {
                    this.checked = value;
                },
                immediate: true
            },
            checked(value) {
                this.$emit("change", value);
            }
        }
    }
</script>

<style scoped>
    @import "~@/styles/util.css";

    .checkbox {
        position: relative;
        width: 1.1rem;
        height: 1.1rem;
        border: 2px solid #A3A3A3;
        border-radius: 4px;
        cursor: pointer;
    }

    .checkbox input {
        position: absolute;
        height: 0;
        width: 0;
        margin: 0;
    }

    .checkmark {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .checkbox .checkmark::after {
        display: none;
        content: "X";
        font-size: 0.8rem;
        color: red;
    }

    .checkbox input:checked + .checkmark::after {
        display: block;
    }
</style>
