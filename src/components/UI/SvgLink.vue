<template>
	<a :href="href" class="flex gap-2 items-center svg-link">
		<SvgIcon :icon="icon" class="svg-social" :w="w" :h="h" />
		<span class="svg-link__name">
			<slot></slot>
		</span>
	</a>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
	name: 'SvgLink',
	components: {
		SvgIcon
	},
	props: {
		href: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
		w: {
			type: String,
			required: true
		},
		h: {
			type: String,
			required: true
		},
	}
}
</script>


<style lang="scss" scoped>
.svg-link{
	&__name{
		color: $primary;
		font-weight: 500;
	}
	&:hover {
		.svg-link__name {
			transition: color 0.2s ease;
			color: darken($primary, 10%);
		}

		.svg-social {
			transition: color 0.2s ease;
			color: darken(#292D32, 10%);
		}
	}
}

</style>