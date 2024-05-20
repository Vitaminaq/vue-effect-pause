<script setup lang="ts">
import { onMounted, onBeforeUnmount, getCurrentScope, watch, ref } from "vue";
import { count } from "../store";
import CalcmpChild from "./CalcmpChild.vue";

const options = {
  rootMargin: "0px",
  threshold: 0,
};

const localCount = ref(count.value)

const scope = getCurrentScope() as any;

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

    const dom = document.querySelector(".cal-cmp");

    if (!dom) return;
    observer.observe(dom);
});

onBeforeUnmount(() => {
    observer.disconnect();
});
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
