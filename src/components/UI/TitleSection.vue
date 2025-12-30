<template>
	<h2 class="section__title !mb-[5px]">{{ title }}</h2>
	<div class="section__subtitle"> 
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'TitleSection',
		props: {
			title: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
.section__title{
	font-size: 2.125rem;
	text-transform: uppercase;
	font-weight: 500;
	color: $primary;
}

.section__subtitle{
	max-width: 588px;
	margin: 0 auto;
}

</style>