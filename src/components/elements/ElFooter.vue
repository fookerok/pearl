<template>
<footer class="footer">
	<div class="container">
		<h5 class="footer__title text-center">
			ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, ПРОКОНСУЛЬТИРУЙТЕСЬ СО&nbsp;СПЕЦИАЛИСТОМ
		</h5>
		<Search></Search>
		<div class="footer__info !my-12.5 flex justify-between">
			<div class="footer__menu-item flex flex-col gap-5">
				<h6 class="menu-item__title uppercase">Услуги центра</h6>
				<ul class="menu-item__list-link flex flex-col gap-2.5">
					<li class="list-link__item">
						<a href="#">Косметология по телу</a>
					</li>
					<li class="list-link__item">
						<a href="#">Косметология для подростков</a>
					</li>
					<li class="list-link__item">
						<a href="#">Косметология для мужчин</a>
					</li>
					<li class="list-link__item">
						<a href="#">Подарочные сертификаты</a>
					</li>
					<li class="list-link__item">
						<a href="#">Косметология по лицу</a>
					</li>
					<li class="list-link__item">
						<a href="#">Записаться на приём</a>
					</li>
				</ul>
			</div>
			<div class="footer__menu-item flex flex-col gap-5">
				<h6 class="menu-item__title uppercase">Информация</h6>
				<ul class="menu-item__list-link flex flex-col gap-2.5">
					<li class="list-link__item">
						<a href="#">Главная</a>
					</li>
					<li class="list-link__item">
						<a href="#">Наши специалисты</a>
					</li>
					<li class="list-link__item">
						<a href="#">Услуги</a>
					</li>
					<li class="list-link__item">
						<a href="#">Новости и акции</a>
					</li>
					<li class="list-link__item">
						<a href="#">Отзывы</a>
					</li>
					<li class="list-link__item">
						<a href="#">Фотогалерея</a>
					</li>
					<li class="list-link__item">
						<a href="#">Контакты</a>
					</li>
					<li class="list-link__item">
						<a href="#">Лицензия</a>
					</li>
				</ul>
			</div>
			<div class="footer__menu-item flex flex-col gap-5">
				<h6 class="menu-item__title uppercase">Контакты</h6>
				<div class="menu-item__list-link flex flex-col gap-2.5 menu-item__list-link">
					<a class="number-footer list-link__item" href="tel:+79161193086">+7 496 616-47-99</a>
					<a class="number-footer list-link__item" href="tel:+79161193086">+7 916 119-30-86</a>
					<a class="!mt-5 email-footer list-link__item" href="mailto:olga.jemchujina@yandex.ru">olga.jemchujina@yandex.ru</a>
				</div>
			</div>
			<div class="footer__menu-item flex flex-col gap-5">
				<h6 class="menu-item__title uppercase">Адрес</h6>
				<a href="https://yandex.ru/maps/-/CLTMAMnx" target="_blank" class="menu-adress flex flex-col gap-2.5">
					г. Коломна, <br>ул. Гражданская&nbsp;10 (здание &laquo;Порт Коломна&raquo;), <br>2&nbsp;этаж
				</a>
				<SocialList/>
			</div>
		</div>
		<div class="footer__discr !pt-12.5">
			Данное предложение не является публичной офертой.
		</div>
	</div>
</footer>
</template>

<script>
import Search from './Search.vue';
	export default {
		name: 'ElFooter',
		components: {
			Search
		}
	}
</script>

<style lang="scss" scoped>
.footer{
	margin-top: 50px;
	color: white;
	background-color: $footer;
	padding: 70px 0;
	&__title{
		font-size: 1.125rem;
		color: white;
		margin-bottom: 30px;
		line-height: 24px;
	}
	&__info{
		font-weight: 500;
		.menu-item__title{
			font-weight: 600;
		}
	}
	.menu-item__list-link{
		line-height: 25px;
		.list-link__item{
			color: $primary;
			&:hover{
				color: darken($primary, 10%);
				transition: color .2s ease;
			}
		}
	}
	&__discr{
		font-size: 0.9375rem;
		border-top: 1px solid rgba(white, 0.5);
	}
}

.menu-adress:hover {
	transition: color 0.2s ease;
	color: darken(white, 40%);
}


.number-footer{
	font-size: 1.1875rem;
}

</style>