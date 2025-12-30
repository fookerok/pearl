<template>
	<section class="news-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Новости и акции">
					Читайте в нашем блоге или подпишитесь на рассылку
				</TitleSection>
			</div>
			<SvgLink class="justify-end" w="22px" h="19px" icon="#sms" href="#">Подписаться на рассылку</SvgLink>
			<div class="grid grid-cols-3 gap-4 gap-y-[50px]">
				<CardInfo href="#" typeName="Акции" imageUrl="cards/1-card.webp" cardName="Как вернуть и сохранить молодость кожи рук?" cardDate="21 августа 2025 г."/>
				<CardInfo href="#" typeName="Новости" imageUrl="cards/2-card.webp" cardName="Пилинги" cardDate="18 августа 2025 г."/>
				<CardInfo href="#" typeName="Акции" imageUrl="cards/3-card.webp" cardName="Гель PRX-T33" cardDate="13 августа 2025 г."/>
				<CardInfo href="#" typeName="Акции" imageUrl="cards/4-card.webp" cardName="ЛИПОЛИТИКИ. ТРИАДА. РАБОТАЕТ! 100&nbsp;%" cardDate="13 августа 2025 г."/>
				<CardInfo href="#" typeName="Акции" imageUrl="cards/5-card.webp" cardName="Борьба с возрастными изменениями." cardDate="21 августа 2025 г."/>
				<CardInfo href="#" typeName="Акции" imageUrl="cards/6-card.webp" cardName="Что такое нитевой лифтинг?" cardDate="18 августа 2025 г."/>
			</div>
			<SvgLink class="justify-end" w="24px" h="24px" icon="#doc" href="/">Все публикации</SvgLink>
		</div>
	</section>
</template>

<script>
	import CardInfo from '../elements/CardInfo.vue';

	export default {
		name: 'News',
		components: {
			CardInfo
		}
	}
</script>

<style lang="scss" scoped>

</style>