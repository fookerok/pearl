<template>
	<svg class="icon" :width="w" :height="h">
		<use :href="icon" />
	</svg>
</template>

<script>
	export default {
		name: 'SvgIcon',
		props: {
			icon: {
				type: String,
				required: true
			},

			w:{
				type: String,
				required: true
			},
			
			h:{
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>