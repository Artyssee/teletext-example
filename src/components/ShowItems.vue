<template>
	<div v-if="data.length" class="flex flex-wrap justify-center my-4">
		<div
			v-for="series in data"
			:key="series.id"
			class="flex-initial mx-4 my-4 cursor-pointer"
		>
			<router-link class="text-left" :to="{ name: 'Series', params: { id: series.id || series.show.id } }">
				<img
					v-if="series.image"
					class="rounded"
					:src="series.image.medium"
				/>
				<img
					v-else-if="series.show.image"
					class="rounded"
					:src="series.show.image.medium"
				/>
				<img
					v-else
					class="rounded"
					src="../assets/series-placholder.jpg"
				/>
				<p class="truncate w-40 text-gray-50">
					{{ series.name || series.show.name }}
				</p>
			</router-link>
		</div>
	</div>
	<div v-else class="flex flex-wrap justify-center my-4">
		<div
			v-for="index in state.placeHolder"
			:key="index"
			class="flex-initial mx-4 my-4 cursor-pointer animate-pulse"
		>
			<div class="text-left">
				<img
					class="rounded"
					src="../assets/series-placholder.jpg"
				/>
				<p class="truncate w-40 text-gray-50">
					Loading...
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
	name: 'ShowItems',
	props: {
		data: {
			type: Array,
			default() {
				return [];
			},
		},
		type: {
			type: String,
			default: '',
		},
	},
	setup() {
		const state = reactive({
			placeHolder: 12,
		});

		return { state };
	},
});
</script>
