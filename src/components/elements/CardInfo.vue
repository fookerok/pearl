<template>
	<a :href="href" :class="['grid grid-rows-[auto_auto_1fr_auto] gap-2.5 h-full', className]">
		<div class="card__img">
			<img :src="imageUrl" alt="">
		</div>
		<div class="card__type">{{typeName}}</div>
		<div class="card__name">{{ cardName }}</div>
		<div class="card__date">{{ cardDate }}</div>
		<div class="cursor-pointer card__link flex items-center gap-2.5">
			Подробнее
			<SvgIcon w="8px" h="10px" class="svg-social svg-link" icon="#link"/>
		</div>
	</a>
</template>

<script>

	export default {
		name: 'CardInfo',
		props: {
			imageUrl: {
				type: String,
				required: true
			},
			typeName: {
				type: String,
				required: true
			},
			cardName: {
				type: String,
				required: true
			},
			cardDate: {
				type: String,
				required: true
			},
			href: {
				type: String,
				required: true
			},
			className: {
				type: String,
				required: false,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>

.card__name{
	font-weight: 600;
	font-size: 1.1875rem;
	line-height: 1.3;
	color: black;
}
.card__link {
	color: $primary;
	font-weight: 500;

	.svg-link {
		color: $primary;
	}

	&:hover {
		transition: color 0.2s ease;
		color: darken($primary, 10%);
		.svg-link {
			transition: color 0.2s ease;
			color: darken($primary, 10%);
		}
	}
}
</style>