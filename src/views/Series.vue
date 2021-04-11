<template>
	<div class="series">
		<div v-if="state.indivudalSeries.name" class="fixed z-50 inset-0 flex justify-center align-center modal-backdrop">
			<div class="bg-gray-50 w-full overflow-x-auto flex flex-col modal">
				<div class="p-4 flex flex-initial flex-row border-grey-800 justify-between modal-header">
					<h2>Viewing series: {{ state.indivudalSeries.name }}</h2>
					<button class="border-none text-lg pointer hover:text-red-600 focus:outline-none" @click="$router.go(-1)">
						Close
					</button>
				</div>

				<div class="relative flex-auto bg-gray-50 justify-end modal-body">
					<div class="flex flex-col">
						<div class="flex items-center flex-col bg-gray-800 text-center">
							<div class="text-gray-50 flex flex-col items-center">
								<img
									v-if="state.indivudalSeries.image"
									class="pt-16 w-80 h-full rounded"
									:src="state.indivudalSeries.image.original"
								/>
								<img
									v-else
									class="pt-16 w-80 h-full rounded"
									src=""
								/>
								<h2 class="text-4xl mt-4">
									{{ state.indivudalSeries.name }}
								</h2>
								<!-- Empty object returns null as value. If Done in 1 if logic would be too long -->
								<p v-if="state.indivudalSeries.rating && state.indivudalSeries.rating.average">
									Rating: {{ state.indivudalSeries.rating.average }} / 10
								</p>
								<p v-else></p>
							</div>
							<div class="py-12 flex w-full flex-col items-center text-center md:flex-row justify-around text-gray-50">
								<div class="flex-col py-4 md:py-0">
									<h4 class="text-2xl">
										Genres
									</h4>
									<ul v-if="state.indivudalSeries.genres && (state.indivudalSeries.genres.length > 0)" class="flex flex-col md:flex-row w-42">
										<li v-for="(genre, index) in state.indivudalSeries.genres" :key="index">
											<a v-if="index !== (state.indivudalSeries.genres.length -1)">
												{{ `${genre},\&nbsp;` }}
											</a>
											<a v-else>
												{{ genre }}
											</a>
										</li>
									</ul>
									<p v-else>
										To Be Determined
									</p>
								</div>
								<div class="flex-col py-4 md:py-0">
									<h4 class="text-2xl">
										Episodes
									</h4>
									<p v-if="state.indivudalSeries.runtime" class="text-xl">
										{{ state.indivudalSeries.runtime }}
									</p>
									<p v-else class="text-xl">
										To Be Determined
									</p>
								</div>
								<div class="flex-col py-4 md:py-0">
									<h4 class="text-2xl">
										Status
									</h4>
									<p class="text-xl">
										{{ state.indivudalSeries.status }}
									</p>
								</div>
								<div class="flex-col py-4 md:py-0">
									<h4 class="text-2xl">
										Language
									</h4>
									<p v-if="state.indivudalSeries.language">
										{{ state.indivudalSeries.language }}
									</p>
									<p v-else>
										To Be Determined
									</p>
								</div>
							</div>
						</div>
						<div class="px-6 flex-auto h-full py-6 bg-gray-50">
							<h3 class="text-2xl pb-2">
								Summary
							</h3>
							<article>
								<!-- eslint-disable -->
								<!-- Vue is against this because of xss attacks(vue docs) possible to filter out with regex -->
								<p v-html="state.indivudalSeries.summary" />
								<!-- eslint-enable -->
							</article>
							<div v-if="state.indivudalSeries.network" class="flex flex-col w-full items-start mt-8">
								<h3 class="text-2xl pb-2">
									Seen on
								</h3>
								<article>
									<p v-if="state.indivudalSeries.network.name">
										{{ state.indivudalSeries.network.name }}
									</p>
									<p v-else>
										Unknown
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<h1>Loading</h1>
		</div>
	</div>
</template>

<script>
import { reactive, onBeforeMount, onMounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

export default {
	name: 'Series',
	props: ['id'],
	setup(props) {
		const state = reactive({
			indivudalSeries: {},
		});

		function fetchSingleSeries() {
			fetch(`http://api.tvmaze.com/shows/${props.id}`)
				.then((res) => res.json())
				.then((res) => {
					state.indivudalSeries = res;
				});
		}

		onBeforeRouteUpdate((to, from, next) => {
			this.$route.params.id = to.props.id;
			fetchSingleSeries();
			next();
		});

		onBeforeMount(() => {
			fetchSingleSeries();
			console.log('series', state.indivudalSeries);
		});

		onMounted(() => {
			console.log('series', state.indivudalSeries);
		});

		return {
			state,
		};
	},
};
</script>
