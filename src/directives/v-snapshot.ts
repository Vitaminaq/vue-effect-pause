import { type Directive, type App } from "vue";

const vSnapshotMark = Symbol("_vSnapshot");

export interface VSnapshotElement extends HTMLElement {
    [vSnapshotMark]: IntersectionObserver;
}

const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0,
};

export const vSnapshot: Directive<VSnapshotElement, IntersectionObserverInit | undefined> = {
  mounted(el, { value = {} }, { ctx }: any) {
    const observer = new IntersectionObserver((events) => {
        const event = events[0];
        if (!event) return;
        if (event.isIntersecting) {
            ctx.scope.resume();
        } else {
            ctx.scope.pause();
        }
    }, value || options);
    observer.observe(el);
    el[vSnapshotMark] = observer;
  },
  beforeUnmount(el) {
    el[vSnapshotMark].disconnect();
  },
};

export default {
    install: (_vue: App) => {
		_vue.directive("snapshot", vSnapshot);
	},
}
