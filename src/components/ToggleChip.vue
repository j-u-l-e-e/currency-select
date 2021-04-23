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
                v-on="$listeners"
        />
        <slot></slot>
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
