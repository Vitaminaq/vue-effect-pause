import { type Directive, type App } from "vue";
import { vShowOriginalDisplay, vShowHidden, VShowElement } from "@vue/runtime-dom";

function setDisplay(el: VShowElement, value: boolean, scope?: any) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;

  if (!scope) return;
  value
    ? requestIdleCallback(() => {
        scope.resume();
      })
    : scope.pause();
}

export const vShowPlus: Directive = {
  beforeMount(el, { value }, { transition, ctx }: any) {
    el[vShowOriginalDisplay] =
      el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value, ctx.scope);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition, ctx }: any) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true, ctx.scope);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false, ctx.scope);
        });
      }
    } else {
      setDisplay(el, value, ctx.scope);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  },
  getSSRProps({ value }) {
    if (!value) {
      return { style: { display: "none" } };
    }
  }
};

export default {
    install: (_vue: App) => {
		_vue.directive("show-plus", vShowPlus);
	},
}
