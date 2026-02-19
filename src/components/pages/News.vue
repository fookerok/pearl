<template>
	<div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Новости и акции</h2>
		<div class="flex gap-4 filters-list !mb-6">
			<Button @click="selectedType = 'Новости'" :class="{'font-bold text-primary': selectedType === 'Новости'}">
				Новости
			</Button>
			<Button @click="selectedType = 'Акции'" :class="{'font-bold text-primary': selectedType === 'Акции'}">
				Акции
			</Button>
			<Button @click="selectedType = ''" :class="{'font-bold text-primary': selectedType === ''}">
				Показать всё
			</Button>
		</div>
		<NewsList :typeFilter="selectedType" />
	</div>
</template>

<script>
import NewsList from '../elements/NewsList.vue';

export default {
	components: {
		NewsList
	},
	data(){
		return {
			selectedType: ''
		}
	}
}
</script>

<style lang="scss" scoped>

</style>