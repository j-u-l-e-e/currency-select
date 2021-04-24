<template>
    <div
            :class="['chip', 'toggle-chip', 'no-select', {'checked': checked}]"
            @click.prevent="toggle"
    >
        <checkbox
                ref="checkbox"
                type="checkbox"
                class="chip-checkbox"
                v-model="checked"
        />
        <div data-label><slot></slot></div>
    </div>
</template>

<script>
    import Checkbox from "@/components/Checkbox";
    export default {
        name: "ToggleChip",
        components: {Checkbox},
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
                this.$emit("input", value);
            }
        },
        methods: {
            toggle() {
                this.checked = !this.checked;
            }
        }
    }
</script>

<style scoped>
    @import "~@/styles/chip.css";
    @import "~@/styles/util.css";

    .toggle-chip {
        background: #ECECEC;
        border: 2px solid #A3A3A3;
        color: #1E436E;
        font-size: 1.3rem;
        font-family: Arial, sans-serif;
        line-height: 1;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
    }

    .toggle-chip:hover {
        background: #DCDCDC;
    }

    .toggle-chip.checked {
        background: #fff;
    }

    .chip-checkbox {
        margin: 0 8px;
    }
</style>
