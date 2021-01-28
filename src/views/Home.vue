<template>
	<div class="home">
		<div class="bg-gray-50 w-full h-screen flex flex-col">
			<div class="overflow-auto bg-gray-800 h-full">
				<!-- TODO: review ParentNode issue and check how to individual modal -->
				<ShowItems
					:data="state.filteredSeries.length ? state.filteredSeries : state.allSeries"
					:type="state.filteredSeries.length ? 'filtered' : 'unfiltered'"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import ShowItems from '@/components/ShowItems.vue';

export default defineComponent({
	name: 'Home',
	components: {
		ShowItems,
	},
	setup() {
		const state = reactive({
			allSeries: [],
			filteredSeries: [],
		});

		async function fetchAllSeries() {
			const fetchSeries = await fetch('http://api.tvmaze.com/shows?page=1');
			const jsonResponse = await fetchSeries.json();

			state.allSeries = jsonResponse;
		}

		onMounted(() => {
			fetchAllSeries();
		});

		return {
			state,
		};
	},
});
</script>
