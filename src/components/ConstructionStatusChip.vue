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
	import { ConstructionStatus } from '../enum';
	interface Props {
		statusCode?: number;
	}
	withDefaults(defineProps<Props>(), { statusCode: 1 });
	const getStatusColor = (status_code: number) => {
		switch (status_code) {
			case ConstructionStatus.unApplicated:
			case ConstructionStatus.applicated:
				return 'default';
			case ConstructionStatus.approved:
				return 'positive';
			case ConstructionStatus.repudiated:
				return 'negative';
			case ConstructionStatus.systemError:
				return 'warning';
		}
	};
	const isOutlinedStatus = (status_code: number) => {
		switch (status_code) {
			case ConstructionStatus.unApplicated:
			case ConstructionStatus.applicated:
				return true;
			default:
				return false;
		}
	};
	const getStatusFontColor = (status_code: number) => {
		switch (status_code) {
			case ConstructionStatus.unApplicated:
			case ConstructionStatus.applicated:
			case ConstructionStatus.systemError:
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

	$color_main: #d71718;
	$color_positive: #0adc5a;
	$color_negative: #ff0000;
	$color_warning: #ffff00;
	$color_info: #3f51b5;
	$color_btn_positive: #00c4b4;
	$color_btn_default: #a6a6a6;
	$color_btn_negative: #4c4c4c;
	$color_bg_side_menu: #2b94e5;
</style>
