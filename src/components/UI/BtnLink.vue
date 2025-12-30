<template>
	<div class="btn">
		<a :href="href" class="btn-link">
			<slot></slot>
		</a>
	</div>

</template>

<script>
	export default {
		name: 'BtnLink',
		props: {
			href: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-link{
		color: white;
		background-color: $primary;
		padding: 13px 25px;
		text-transform: uppercase;
		font-size: 0.875rem;
		&:hover{
			background-color: darken($primary, 10%);
			transition: background-color .2s ease;
		}
	}
</style>