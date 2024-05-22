<script setup lang="ts">
import { watch, ref } from "vue";
import { count } from "../store";
import CalcmpChild from "./CalcmpChild.vue";
import { longTask } from "../utils";

const localCount = ref(count.value)

watch(count, () => {
    longTask();

    localCount.value = count.value;
})
</script>
<template>
    <div class="cal-cmp">
        我是测试组件{{ localCount }}
        <CalcmpChild />
    </div>
</template>
<style scoped>
.cal-cmp {
    height: 100px;
    width: 100%;
    background-color: red;
}
</style>
