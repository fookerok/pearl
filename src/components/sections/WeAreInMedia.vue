<template>
	<section class="weareinmedia-section"></section>
	<div class="flex flex-col gap-7.5"> 
		<div class="text-center">
			<TitleSection title="Мы в СМИ">
				Нас регулярно приглашают в&nbsp;качестве экспертов для подготовки публикаций в&nbsp;печатных и&nbsp;электронных изданиях, а&nbsp;также съемок различных телепроектов и&nbsp;документальных фильмов.
			</TitleSection>
		</div>
		<SvgLink class="justify-end" w="22px" h="19px" icon="#sms" href="#">Подписаться на рассылку</SvgLink>
		<div class="grid grid-cols-3 gap-4 gap-y-[50px]">
			<CardInfo typeName="Акции" nameImg="1-card.webp" cardName="Как вернуть и сохранить молодость кожи рук?" cardDate="21 августа 2025 г."/>
			<CardInfo typeName="Новости" nameImg="2-card.webp" cardName="Пилинги" cardDate="18 августа 2025 г."/>
			<CardInfo typeName="Акции" nameImg="3-card.webp" cardName="Гель PRX-T33" cardDate="13 августа 2025 г."/>
		</div>
		<SvgLink class="justify-end" w="24px" h="24px" icon="#doc" href="#">Все публикации</SvgLink>
	</div>
</template>

<script>
	import CardInfo from '../elements/CardInfo.vue';

	export default {
		name: 'WeAreInMedia',
		components: {
			CardInfo
		}
	}
</script>

<style lang="scss" scoped>

</style>