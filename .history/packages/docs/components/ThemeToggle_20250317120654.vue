<template>
	<button @click="toggleTheme" class="theme-toggle">切换主题</button>
</template>

<script setup>
import { ref } from 'vue';

const isDark = ref(false);

const toggleTheme = e => {
	if (!document.startViewTransition) {
		document.documentElement.classList.toggle('dark');
		return;
	}

	const transition = document.startViewTransition(() => {
		document.documentElement.classList.toggle('dark');
	});

	transition.ready.then(() => {
		const { clientX: x, clientY: y } = e;
		const radius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y)
		);

		const clipPath = [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`];

		document.documentElement.animate(
			{
				clipPath: isDark.value ? clipPath.reverse() : clipPath,
			},
			{
				duration: 500,
				easing: 'ease-in',
				pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
			}
		);
	});
};
</script>

<style scoped>
.theme-toggle {
	padding: 8px 16px;
	font-size: 14px;
	cursor: pointer;
}
</style>
