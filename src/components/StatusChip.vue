<template>
	<v-chip
		class="status-chip"
		:color="getStatusColor(statusCode)"
		:outlined="isOutlinedStatus(statusCode)"
		:text-color="getStatusFontColor(statusCode)"
	>
		<slot></slot>
	</v-chip>
</template>

<script lang="ts" setup>
	import { Status } from '../enum';
	interface Props {
		statusCode?: number;
	}
	withDefaults(defineProps<Props>(), { statusCode: 0 });
	const getStatusColor = (status_code: number) => {
		switch (status_code) {
			case Status.unApplicated:
			case Status.applicated:
				return 'default';
			case Status.approved:
				return 'positive';
			case Status.repudiated:
				return 'negative';
			case Status.systemError:
				return 'warning';
		}
	};
	const isOutlinedStatus = (status_code: number) => {
		switch (status_code) {
			case Status.unApplicated:
			case Status.applicated:
				return true;
			default:
				return false;
		}
	};
	const getStatusFontColor = (status_code: number) => {
		switch (status_code) {
			case Status.unApplicated:
			case Status.applicated:
			case Status.systemError:
				return 'default';
			default:
				return 'white';
		}
	};
</script>

<style lang="scss" scoped>
	.status-chip {
		font-size: 0.6rem !important;
		height: 24px !important;
		width: 5.5rem;
		display: flex;
		justify-content: center;
	}
</style>
