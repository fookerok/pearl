<template>
	<section class="news-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Новости и акции">
					Читайте в нашем блоге или подпишитесь на рассылку
				</TitleSection>
			</div>
			<SvgLink class="justify-end" w="22px" h="19px" icon="#sms" href="#">Подписаться на рассылку</SvgLink>
			<NewsList class="card__list" :limit="6" isHome/>
			<SvgLink class="justify-end" w="24px" h="24px" icon="#doc" href="/">Все публикации</SvgLink>
		</div>
	</section>
</template>

<script setup>
	import NewsList from '../elements/NewsList.vue'
</script>

<style lang="scss" scoped>

</style>