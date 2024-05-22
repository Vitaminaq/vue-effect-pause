<script lang="ts" setup>
import { ref, watch, onUpdated } from "vue";
import { count } from "../store";
import { longTask } from "../utils";

const localCount = ref(count.value)

watch(count, () => {
    longTask(10);

    localCount.value = count.value;
})

onUpdated(() => {
    console.log('KaCmp updated');
});
</script>
<template>
    <div class="ka-cmp">KaCmp: {{ localCount }}</div>
</template>
<style scoped>
.ka-cmp {
    height: 100px;
    width: 100%;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
