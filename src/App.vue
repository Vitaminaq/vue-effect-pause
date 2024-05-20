<script setup lang="ts">
import { ref } from "vue";
import Calcmp from "./components/Calcmp.vue";
import Normal from "./components/Normal.vue";
import VifCmp from "./components/VifCmp.vue";
import KaCmp from "./components/KaCmp.vue";
import { count } from "./store";

const currentTab = ref("normal");

const add = () => {
  count.value++;
};
</script>

<template>
  <div class="page">
    <div class="count-contain">
      <div>{{ count }}</div>
      <button @click="add">add</button>
    </div>
    <div class="top"></div>
    <div class="tab-contain">
      <div @click="currentTab = 'normal'">normal</div>
      <div @click="currentTab = 'calcmp'">calcmp</div>
      <div @click="currentTab = 'vifcmp'">vifcmp</div>
      <div @click="currentTab = 'kacmp'">kacmp</div>
    </div>
    <Normal v-show="currentTab === 'normal'" />
    <Calcmp v-show="currentTab === 'calcmp'" />
    <VifCmp v-if="currentTab === 'vifcmp'" />
    <KeepAlive>
      <KaCmp v-if="currentTab === 'kacmp'" />
    </KeepAlive>
    <div class="bottom"></div>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  width: 100%;
  overflow: auto;
}
.count-contain {
  position: fixed;
  top: 20px;
  right: 20px;
}
.top {
  height: 500px;
  width: 100%;
}
.tab-contain {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-contain div {
  width: 100px;
  cursor: pointer;
}
.bottom {
  height: 2000px;
  background-color: #f0f0f0;
}
</style>
