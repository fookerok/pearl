<template>
	<a :href="href" class="card-menu__item">
		<img :src="`/src/assets/img/cardsMenu/${nameImg}`" alt="">
		<div class="card-menu__name uppercase text-center w-100">
			<slot></slot>
		</div>
	</a>
</template>

<script>
	export default {
		name: 'CardInfo',
		props: {
			nameImg: {
				type: String,
				required: true
			},
			nameCard: {
				type: String,
				required: true
			},
			href:{
				type: String,
				required: true
			}
		}
	}
</script>
<style lang="scss" scoped>
.card-menu__item {
	position: relative;
	overflow: hidden;
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(255, 255, 255, 0.6);
		z-index: 1;
	}
	&:hover::after{
		background: rgba(255, 255, 255, 0);
		transition: background 0.2s ease;
	}
	.card-menu__name {
		position: absolute;
		z-index: 2;
		font-size: 1.625rem;
		font-weight: 500;
		color: black;
		line-height: 1.3;
		bottom: 18%;
		left: 50%;
		transform: translateX(-50%);
	}
	&:hover {
		.card-menu__name {
			-webkit-text-stroke: 1px lighten(black,  40%);
			transition: all 0.2s ease;
		}
	}
}


</style>