<template>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="userContainer">
		<div class="userContainerWrapper">
			<h3 class="userContainerWrapper__heading text-gray-900">
				Example Tailwind.css using tailwind.classes
			</h3>
			<p class="userContainerWrapper__text userContainerWrapper__text--gray">
				Personal details and application.
			</p>
		</div>
	</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
	.userContainer {
		@apply shadow;
		@apply overflow-hidden;

		@screen sm {
			@apply rounded-lg;
		}

		@screen md {
			@apply bg-green-50;
		}
	}

	.userContainerWrapper {
		@apply px-4;
		@apply py-5;

		&__heading {
			@apply text-lg;
			@apply leading-6;
			@apply font-medium;
			@apply text-gray-900;
		}

		&__text {
			@apply mt-1;
			@apply max-w-2xl;
			@apply text-sm;

			&--gray {
				@apply text-gray-500;
			}
		}

		@screen sm {
			@apply px-6;
		}
	}
</style>
