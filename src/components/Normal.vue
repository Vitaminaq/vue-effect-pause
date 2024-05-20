<script lang="ts" setup>
import { watch } from "vue";
import { count } from "../store";

watch(count, (val) => {
    console.log("[Normal]: ", val);
});
</script>
<template>
    <div class="normal-contain">
        normal {{ count }}
    </div>
</template>
<style>
.normal-contain {
    height: 100px;
    width: 100%;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
