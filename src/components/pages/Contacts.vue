<template>
	<div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Контакты</h2>
		<section class="gap-4 flex justify-between xl:justify-center xl:flex-row flex-col !p-0">
			<div class="xl:grid xl:grid-cols-2 flex justify-between flex-wrap xl:gap-10 gap-4">
				<div class="text-start">
					<div class="text-lg time">10:00 — 20:00</div>
					<div class="days">понедельник - воскресенье</div>
				</div>
				<div class="text-start">
					<div class="font-semibold">Контакты</div>
					<a class="block mt-2" href="tel:+74966164799">+7 496 616-47-99</a>
					<a class="block mt-1" href="tel:+79161193086">+7 916 119-30-86</a>
					<a class="block mt-1" href="mailto:olga.jemchujina@yandex.ru">olga.jemchujina@yandex.ru</a>
				</div>
				<div class="text-start">
					<h3 class="font-bold">Адрес</h3>
					<div class="adress">
						г. Коломна, ул. Гражданская 10 <br>	 (здание «Порт Коломна»), 2 этаж
					</div>
				</div>
			</div>
			<div style="position:relative;overflow:hidden;">
				<a href="https://yandex.ru/maps/org/zhemchuzhina/1304418304/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Жемчужина</a>
				<a href="https://yandex.ru/maps/10734/kolomna/category/cosmetology/892508964/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Косметология в Коломне</a>
				<iframe src="https://yandex.ru/map-widget/v1/?ll=38.760166%2C55.096559&mode=search&oid=1304418304&ol=biz&z=17" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
			</div>
		</section>
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
	.time{
		color: $primary;
		font-size: 32px;
		font-weight: 600;
	}
</style>