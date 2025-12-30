<template>
<header class="flex header justify-between items-center">
	<div class="left__header">
		<h1 class="title !mb-2 text-center">
			Центр эстетической <br>косметологии «Жемчужина»
		</h1>
		<SocialList class="justify-center"/>
	</div>
	<div class="middle__header">
		<a href="/">
			<img src="/src/assets/img/logo.webp" alt="логотип">
		</a>
	</div>
	<div class="right__header items-center flex gap-[30px]">
		<div class="flex flex-col text-center">
			<a class="number-link" href="tel:+74966164799">+7 496 616-47-99</a>
			<a class="number-link" href="tel:+79161193086">+7 916 119-30-86</a>
			г. Коломна, ул. Гражданская 10
		</div>
		<div class="block">
			<BtnLink href="/">Записаться</BtnLink>
		</div>
	</div>
</header>
<nav class="nav">
	<ul class="nav__list flex flex-row justify-between container">
		<li class="nav__item">
			<a href="#" class="nav__link">Наши специалисты</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Услуги</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Новости и акции</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Отзывы</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Фотогалерея</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Контакты</a>
		</li>
		<li class="nav__item">
			<a href="#" class="nav__link">Лицензия</a>
		</li>
	</ul>
</nav>

</template>

<script>
	export default {
		name: 'ElHeader'
	}
</script>

<style lang="scss" scoped>
	.header{
		height: 100px;
		padding: 0 100px 10px 100px;
		.title{
			font-size: 0.8125rem;
			line-height: 1.2;
		}
	}
	.number-link{
		font-weight: 500;
	}
	.right__header{
		font-size: 0.875rem;
	}
	.nav{
		gap: 60px;
		border-top: 1px solid $border;
		padding: 20px 0;
		text-transform: uppercase;
		font-size: 0.875rem;
		color: black;
		ul li:hover{
			color: lighten(black, 70%);
			transition: color .2s ease;
		}
	}
</style>