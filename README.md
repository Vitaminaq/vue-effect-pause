Patch the Vue 3 framework to effectively support pause and resume functions, in an attempt to optimize performance  
给vue 3框架打补丁，用于effect支持pause和resume功能，来尝试减少非必要的effect触发以及后续的计算，进行性能上的优化  

补丁来源于vue 3未合并pr：[rfcs](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md)相关

#### 例子/example
```javascript
const scope = getCurrentScope()

const options = {
  rootMargin: "0px",
  threshold: 0,
};

onMounted(() => {
    observer = new IntersectionObserver((events) => {
        const event = events[0];
        if (!event) return;
        if (event.isIntersecting) {
            scope.resume();
        } else {
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
```
  
或者可以直接使用directive：

##### v-show-plus
v-show的plus版本，条件为false时，停掉节点的effect以及更新。

##### v-snapshot
节点不在可视区时，保存节点快照，冻结effect，回到可视区再恢复以及同步最新状态。
