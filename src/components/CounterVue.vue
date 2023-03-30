<template>
	<button @click="decreaseCounter">-</button>
	<pre>{{ count.value }}</pre>
	<button @click="increaseCounter">+</button>
	<p>I'm a {{ name }} component</p>
</template>

<script setup lang="ts">
	import { useStore } from '@nanostores/vue';
	import { counter, increaseCounter, decreaseCounter } from '../stores/counter';
	const count = useStore(counter);
	const name = 'Vue';
</script>
