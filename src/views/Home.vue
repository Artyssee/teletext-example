<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
		<!-- <CardExample /> -->
		<CardExampleBEM />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import CardExample from '@/components/CardExample.vue';
import CardExampleBEM from '@/components/CardExampleBEM.vue';

export default defineComponent({
	name: 'Home',
	components: {
		// HelloWorld,
		// CardExample,
		CardExampleBEM,
	},
});
</script>
