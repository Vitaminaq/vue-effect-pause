<script setup lang="ts">
import { ref } from "vue";
import Calcmp from "./components/Calcmp.vue";
import Normal from "./components/Normal.vue";
import VifCmp from "./components/VifCmp.vue";
import KaCmp from "./components/KaCmp.vue";
import { count } from "./store";

const currentTab = ref("normal");
// const originTab = ref("normal");

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
    <div class="demo-contain">
      <h1>effect 暂停/恢复</h1>
      <div class="tab-contain">
        <div
          :class="{ 'tab-active': currentTab === 'normal' }"
          @click="currentTab = 'normal'"
        >
          normal
        </div>
        <div
          :class="{ 'tab-active': currentTab === 'calcmp' }"
          @click="currentTab = 'calcmp'"
        >
          calcmp
        </div>
        <div
          :class="{ 'tab-active': currentTab === 'vifcmp' }"
          @click="currentTab = 'vifcmp'"
        >
          vifcmp
        </div>
        <div
          :class="{ 'tab-active': currentTab === 'kacmp' }"
          @click="currentTab = 'kacmp'"
        >
          kacmp
        </div>
      </div>
      <Normal v-show-plus="currentTab === 'normal'" />
      <Calcmp v-show-plus="currentTab === 'calcmp'" />
      <VifCmp v-if="currentTab === 'vifcmp'" />
      <KeepAlive freeze :delay="1">
        <KaCmp v-if="currentTab === 'kacmp'" />
      </KeepAlive>
    </div>
<!-- 
    <div class="demo-contain">
      <h1>原始 vue</h1>
      <div class="tab-contain">
        <div
          :class="{ 'tab-active': originTab === 'normal' }"
          @click="originTab = 'normal'"
        >
          normal
        </div>
        <div
          :class="{ 'tab-active': originTab === 'calcmp' }"
          @click="originTab = 'calcmp'"
        >
          calcmp
        </div>
        <div
          :class="{ 'tab-active': originTab === 'vifcmp' }"
          @click="originTab = 'vifcmp'"
        >
          vifcmp
        </div>
        <div
          :class="{ 'tab-active': originTab === 'kacmp' }"
          @click="originTab = 'kacmp'"
        >
          kacmp
        </div>
      </div>
      <Normal v-show="originTab === 'normal'" :isOrigin="true" />
      <Calcmp v-show="originTab === 'calcmp'" :isOrigin="true" />
      <VifCmp v-if="originTab === 'vifcmp'" :isOrigin="true" />
      <KeepAlive>
        <KaCmp v-if="originTab === 'kacmp'" :isOrigin="true" />
      </KeepAlive>
    </div> -->
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
.demo-contain {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom {
  height: 2000px;
  background-color: #f0f0f0;
}

.tab-active {
  background-color: aquamarine;
}
</style>
