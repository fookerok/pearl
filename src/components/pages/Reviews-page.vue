<template>
	<div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Отзывы</h2>
		<div class="text-rewiews !mx-auto !mb-12 text-lg text-center">
			Мы регулярно получаем отзывы от наших <br> благодарных клиентов
		</div>
		<YandexReviews/>
	</div>

</template>

<script>
	import YandexReviews from '../elements/YandexReviews.vue';

	export default {
		components: {
			YandexReviews
		}
	}
</script>

<style lang="scss" scoped>
.text-rewiews{
	width: 760px;
}
</style>