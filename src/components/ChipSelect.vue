<template>
    <div class="chip-select">
        <div class="selection">
            <chip v-for="(optionId) in selectedOptionIds"
                  :key="optionId"
                  closable
                  @close="deselectOption(optionId)"
            >
                {{options[optionId]}}
            </chip>
        </div>
        <div class="options">
            <toggle-chip
                    v-for="(optionState, index) in optionStates"
                    :key="index"
                    v-model="optionState.selected"
            >
                {{options[index]}}
            </toggle-chip>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    import Chip from "@/components/Chip";
    import ToggleChip from "@/components/ToggleChip";

    export default {
        name: "ChipSelect",
        components: {ToggleChip, Chip},
        props: {
            options: {
                type: Array,
                default: () => []
            },
            value: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                selectedOptions: [],
                selectedOptionIds: [],
                optionStates: this.options.map((option) => ({selected: this.value.includes(option)}))
            }
        },
        watch: {
            optionStates: {
                handler(value) {
                    this.selectedOptionIds = value.reduce((array, optionState, index) => {
                        if (optionState.selected) {
                            array.push(index);
                        }
                        return array;
                    }, []);

                    this.selectedOptions = value.reduce((array, optionState, index) => {
                        if (optionState.selected) {
                            array.push(this.options[index]);
                        }
                        return array;
                    }, []);

                    this.$emit("input", this.selectedOptions);
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            deselectOption(optionId) {
                Vue.set(this.optionStates[optionId], "selected", false);
            },
        },
    }
</script>

<style scoped>
    .chip-select {
        width: 100%;
        max-width: 32rem;
        padding: 15px;
        border: 1px solid #adadad;
        border-radius: 5px;
        box-shadow: 2px 2px 4px #adadad;
    }

    .chip-select > .selection, .chip-select > .options {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 576px) {
        .chip-select {
            padding: 5px;
        }
    }
</style>
