<template>
	<section class="services-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Услуги">
					Виды процедур, продолжительность курсов, необходимость коррекции&nbsp;&mdash; подбираются индивидуально для каждого пациента.
				</TitleSection>
			</div>
			<div class="grid grid-cols-3 gap-4 gap-y-[50px]">
				<CardMenu href="#" nameImg="1-card-menu.webp">Косметология <br>по телу</CardMenu>
				<CardMenu href="#" nameImg="2-card-menu.webp">Косметология <br>для подростков</CardMenu>
				<CardMenu href="#" nameImg="3-card-menu.webp">Косметология <br>для мужчин</CardMenu>
				<CardMenu href="#" nameImg="4-card-menu.webp">Подарочные <br>сертификаты</CardMenu>
				<CardMenu href="#" nameImg="5-card-menu.webp">Косметология <br>по лицу</CardMenu>
			</div>
			<BtnLink class="flex justify-center" href="#">Записаться на прием</BtnLink>
		</div>
	</section>

</template>

<script>
	import CardMenu from '../elements/CardMenu.vue';

	export default {
		name: 'Services',
		components: {
			CardMenu
		}
	}
</script>

<style lang="scss" scoped>

</style>