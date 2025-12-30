<template>
	<section class="reviews-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Отзывы">
					Мы&nbsp;регулярно получаем отзывы от&nbsp;наших благодарных клиентов
				</TitleSection>
			</div>
			<YandexReviews></YandexReviews>
		</div>
	</section>
</template>

<script>
	import YandexReviews from '../elements/YandexReviews.vue';
	export default {
		name: 'Reviews',
		components: {
			YandexReviews
		}
	}
</script>

<style lang="scss" scoped>

</style>