<template>
	<div class="w-full h-56 bg-indigo-900">
		<div class="w-full flex flex-col items-center pt-2 pb-2">
			<h1 class="text-3xl text-center sm:text-4xl text-gray-50">
				Look for your favorite series here
			</h1>
			<input
				v-model="state.searchQuery"
				class="rounded-md border-2 p-3 mt-4 mb-4 focus:outline-none w-5/6 sm:w-3/5 lg:w-3/6 border-gray-800"
				:class="checkBorderStatus()"
				type="text"
				placeholder="search series"
				@keyup="filterData"
			/>
			<p class="h-16 pb-2 text-center w-5/6 sm:w-3/5 lg:w-3/6 text-gray-50">
				{{ state.statusMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	name: 'SearchBar',
	props: {
		data: {
			type: Array,
			default() {
				return [];
			},
		},
		api: {
			type: String,
			default: '',
		},
	},
	setup(props, context) {
		const state = reactive({
			searchQuery: '',
			statusMessage: '',
			foundResults: [],
			searchStatus: '',
		});

		const handleSearchResults = (searchedResults) => {
			state.foundResults = searchedResults;
			state.statusMessage = '';
			console.log('checking out', state.foundResults);

			if (state.foundResults.length === 0 && state.searchQuery.length !== 0) {
				state.statusMessage = "We couldn't find anything. Check your grammar or try another search term";
				state.searchStatus = 'no_results';
				return;
			}

			if (state.searchQuery.length === 0) {
				state.statusMessage = '';
				context.emit('filtered-data', state.foundResults);
				state.searchStatus = '';
				return;
			}

			if (state.foundResults.length > 30) {
				state.statusMessage = `You have at least ${state.foundResults.length} results. Please refine your query`;
				state.searchStatus = 'over_50_results';
				return;
			}

			state.statusMessage = `${state.foundResults.length} results found for "${state.searchQuery}"`;
			state.searchStatus = 'results_found';

			if (state.searchQuery === '') {
				state.foundResults = [];
				state.statusMessage = '';
			}

			context.emit('filtered-data', state.foundResults);
		};

		const filterData = () => {
			setTimeout(() => {
				fetch(`${props.api}${state.searchQuery}`)
					.then((response) => response.json())
					.then((data) => handleSearchResults(data));
			}, 1200);
		};

		const checkBorderStatus = () => {
			if (state.searchStatus === 'no_results') {
				return 'border-red-600';
			}

			if (state.searchStatus === 'results_found') {
				return 'border-gray-800';
			}

			if (state.searchStatus === 'over_50_results') {
				return 'border-yellow-300';
			}

			return 'border-gray-800';
		};

		return {
			state,
			handleSearchResults,
			checkBorderStatus,
			filterData,
		};
	},
};
</script>
