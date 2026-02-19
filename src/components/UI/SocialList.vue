<template>
	<div class="sosial__item flex flex-row gap-[10px]">
		<a class="flex icon__link items-center justify-center" href="https://vk.com/jemchujinakolomna">
			<SvgIcon w="10px" h="17px" class="svg-social" icon="#ok"/>
		</a>
		<a class="flex icon__link items-center justify-center" href="https://vk.com/jemchujinakolomna">
			<SvgIcon w="14px" h="12px" class="svg-social" icon="#tg"/>
		</a>
		<a class="flex icon__link items-center justify-center" href="https://vk.com/jemchujinakolomna">
			<SvgIcon w="18px" h="16px" class="svg-social" icon="#vk"/>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'SocialList',
	}
</script>

<style lang="scss" scoped>
	.icon__link{
		background-color: $primary;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		&:hover{
			background-color: darken($primary, 10%);
			transition: background-color .2s ease;
		}
	}
</style>