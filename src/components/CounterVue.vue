<template>
	<p>{{ name }}のコンポーネント</p>
	<button @click="decreaseCounter">-</button>
	<pre>{{ count }}</pre>
	<button @click="increaseCounter">+</button>
</template>

<script setup lang="ts">
	import { useStore } from '@nanostores/vue';
	import { counter, increaseCounter, decreaseCounter } from '../stores/counter';
	const count = useStore(counter);
	const name = 'Vue';
</script>
