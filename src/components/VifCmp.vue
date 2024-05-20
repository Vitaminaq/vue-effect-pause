<script lang="ts" setup>
import { watch } from "vue";
import { count } from "../store";

watch(count, (val) => {
    console.log("[VifCmp]: ", val);
});
</script>
<template>
    <div class="vif-cmp">VifCmp: {{ count }}</div>
</template>
<style scoped>
.vif-cmp {
    height: 100px;
    width: 100%;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
