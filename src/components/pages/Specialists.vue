<template>
	<div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Наши специалисты</h2>
		<div class="section__subtitle text-rewiews !mx-auto !mb-12 text-lg text-center"> 
			Стремление к совершенству и желание реализовать свой многолетний опыт стали для нас движущей силой для создания НОВОГО салона, а точнее Центра Эстетической Косметологии «Жемчужина»
		</div>
		<SpecialistList/>
	</div>

</template>

<script>
	import SpecialistList from '../elements/SpecialistList.vue'
	export default {
		components: {
			SpecialistList
		}
	}
</script>

<style lang="scss" scoped>

</style>
