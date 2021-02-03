<template>
	<div class="flex flex-wrap justify-center my-4">
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
					src=""
				/>
				<p class="truncate w-40 text-gray-50">
					{{ series.name || series.show.name }}
				</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

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
});
</script>
