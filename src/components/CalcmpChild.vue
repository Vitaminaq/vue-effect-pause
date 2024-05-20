<script lang="ts" setup>
import { watch } from "vue";
import { count } from "../store";

watch(count, (val) => {
    console.log("[CalcmpChild]: ", val);
})
</script>
<template>
    <div>测试子组件 {{ count }}</div>
</template>