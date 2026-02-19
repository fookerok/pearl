<template>
	<section class="weareinmedia-section">
		<div class="flex flex-col gap-7.5"> 
			<div class="text-center">
				<TitleSection title="Мы в СМИ">
					Нас регулярно приглашают в&nbsp;качестве экспертов для подготовки публикаций в&nbsp;печатных и&nbsp;электронных изданиях, а&nbsp;также съемок различных телепроектов и&nbsp;документальных фильмов.
				</TitleSection>
			</div>
			<SvgLink class="justify-end" w="22px" h="19px" icon="#sms" href="#">Подписаться на рассылку</SvgLink>
			<NewsList class="card__list" :limit="3" isHome/>
			<SvgLink class="justify-end" w="24px" h="24px" icon="#doc" href="#">Все публикации</SvgLink>
		</div>
	</section>
</template>

<script setup>
	import NewsList from '../elements/NewsList.vue'
</script>

<style lang="scss" scoped>

</style>