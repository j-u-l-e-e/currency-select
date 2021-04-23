<template>
    <div class="chip-select">
        <div class="selection">
            <chip v-for="(optionId) in selectedOptionIds"
                  :key="optionId"
                  @close="deselectOption(optionId)"
                  closable
            >
                {{options[optionId]}}
            </chip>
        </div>
        <div class="options">
            <toggle-chip
                    v-for="(option, index) in options"
                    :key="index"
                    @change="toggleOption(index)"
            >
                {{option}}
            </toggle-chip>
        </div>
    </div>
</template>

<script>
    import Chip from "@/components/ChipSelect/Chip";
    import ToggleChip from "@/components/ToggleChip";
    export default {
        name: "ChipSelect",
        components: {ToggleChip, Chip},
        props: {
            options: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                selectedOptionIds: []
            }
        },
        methods: {
            deselectOption(optionId) {
                this.selectedOptionIds.splice(this.selectedOptionIds.indexOf(optionId), 1);
            },
            selectOption(optionId) {
                this.selectedOptionIds.push(optionId);
            },
            toggleOption(optionId) {
                if (this.selectedOptionIds.includes(optionId)) {
                    this.deselectOption(optionId);
                } else {
                    this.selectOption(optionId);
                }
            }
        }
    }
</script>

<style scoped>
    .chip-select {
        width: 32rem;
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


</style>
