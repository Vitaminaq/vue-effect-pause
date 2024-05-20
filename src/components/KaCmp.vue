<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount, getCurrentScope } from "vue";
import { count } from "../store";

const scope = getCurrentScope() as any;

const options = {
  rootMargin: "0px",
  threshold: 0,
};

const localCount = ref(count.value)

watch(count, () => {
    let start = performance.now();
    for (let i = 0; i < 1000000000; i++) {
        //
    }
    console.log(`耗时 ${performance.now() - start} ms`);

    localCount.value = count.value;
})
let observer: IntersectionObserver;

onMounted(() => {
    observer = new IntersectionObserver((events) => {
        const event = events[0];
        if (!event) return;
        if (event.isIntersecting) {
            console.log("进入视口");
            scope.resume();
        } else {
            console.log("离开视口");
            scope.pause();
        }
    }, options);

    const dom = document.querySelector(".ka-cmp");

    if (!dom) return;
    observer.observe(dom);
});

onBeforeUnmount(() => {
    observer.disconnect();
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
