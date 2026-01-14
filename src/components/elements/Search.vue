<template>
	<form class="justify-center site-search flex gap-2.5" action="#" method="get">
		<div class="search-wrapper flex items-center">
			<span class="search-icon">
				<SvgIcon w="24px" h="24px" class="svg-social" icon="#search"/>
			</span>
			<input 
				type="text" 
				name="q" 
				placeholder="Поиск по сайту"
				aria-label="Поиск по сайту"
			>
		</div>
			<button class="btn cursor-pointer" type="submit">Найти</button>
	</form>
</template>

<script>
	export default {
		name: 'Search'
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 576px){
		.site-search{
			flex-wrap: wrap;
			.btn{
				width: 470px;
			}
		}
	}

	.search-wrapper{
		background-color: white;
		border-radius: 5px;
		max-width: 470px;
		width: 470px;
		.search-icon{
			padding: 15px 13px;
			color: $primary;
		}
		input{
			color: $text;
			width: 100%;
			padding: 13px;
			&:focus {
				outline: 2px solid $primary;
				outline-offset: 0;
				border-radius: 0 5px 5px 0;
			}
			&::placeholder {
				color: $text;
				opacity: 1;
			}
		}
	}
	.btn{
		color: white;
		background-color: $primary;
		padding: 13px 55px;
		border-radius: 5px;
		text-transform: uppercase;
		font-size: 0.875rem;
		&:hover{
			background-color: darken($primary, 10%);
			transition: background-color .2s ease;
		}
	}
</style>