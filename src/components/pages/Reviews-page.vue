<template>
	<div class="container !mt-12">
		<h2 class="section__title !mb-12">Отзывы наших клиентов</h2>
		<ReviewsList/>
		<YandexReviews/>
	</div>
</template>

<script>
	import ReviewsList from '../elements/ReviewsList.vue';
	import YandexReviews from '../elements/YandexReviews.vue';

	export default {
		components: {
			YandexReviews,
			ReviewsList
		}
	}
</script>

<style lang="scss" scoped>

</style>