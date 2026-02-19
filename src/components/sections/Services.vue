<template>
	<section class="services-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Услуги">
					Виды процедур, продолжительность курсов, необходимость коррекции&nbsp;&mdash; подбираются индивидуально для каждого пациента.
				</TitleSection>
			</div>
			<div class="card-menu__list grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-12.5 gap-y-4">
				<CardMenu href="#" :nameImg=cardsMenu1>Косметология <br>по телу</CardMenu>
				<CardMenu href="#" :nameImg=cardsMenu2>Косметология <br>для подростков</CardMenu>
				<CardMenu href="#" :nameImg=cardsMenu3>Косметология <br>для мужчин</CardMenu>
				<CardMenu href="#" :nameImg=cardsMenu4>Подарочные <br>сертификаты</CardMenu>
				<CardMenu href="#" :nameImg=cardsMenu5>Косметология <br>по лицу</CardMenu>
			</div>
			<BtnLink class="flex justify-center" href="#">Записаться на прием</BtnLink>
		</div>
	</section>
</template>

<script setup>
	import CardMenu from '../elements/CardMenu.vue';

	import cardsMenu1 from '../../assets/img/cardsMenu/1-card-menu.webp?url'
	import cardsMenu2 from '../../assets/img/cardsMenu/2-card-menu.webp?url'
	import cardsMenu3 from '../../assets/img/cardsMenu/3-card-menu.webp?url'
	import cardsMenu4 from '../../assets/img/cardsMenu/4-card-menu.webp?url'
	import cardsMenu5 from '../../assets/img/cardsMenu/5-card-menu.webp?url'

</script>

<style lang="scss" scoped>

</style>