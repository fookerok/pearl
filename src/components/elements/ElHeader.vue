<template>
	<header class="flex header justify-between items-center">
		<div class="left__header">
			<h1 class="title !mb-2 text-center">
				Центр эстетической <br>косметологии «Жемчужина»
			</h1>
			<SocialList class="justify-center"/>
		</div>
		<div class="middle__header">
			<a :href="baseUrl">
				<img src="../../assets/img/main/logo.webp?url" alt="логотип">
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
		<button class="burger" @click="toggleMenu">
			<SvgIcon v-if="!menuOpen" w="32px" h="32px" class="svg-burger open" icon="#open"/>
			<SvgIcon v-else w="32px" h="32px" class="svg-burger close" icon="#close"/>
		</button>
	</header>
	<nav :class="['nav', { 'nav--fixed': isFixed }]">
		<ul class="nav__list flex justify-between container">
			<li v-for="item in menu" :key="item.link">
				<a :href="baseUrl + item.link" class="nav__link">
					{{ item.item }}
				</a>
			</li>
		</ul>
	</nav>
	<div v-if="menuOpen" class="overlay" @click="closeMenu"></div>
	<transition name="slide">
		<div v-if="menuOpen" class="mobile-menu flex flex-col">
			<ul class="mobile-nav">
				<li class="mobile-nav__item" v-for="item in menu" :key="item.link">
					<a :href="baseUrl + item.link" class="nav__link">
						{{ item.item }}
					</a>
				</li>
			</ul>
			<div class="mobile-contacts">
				<SocialList />
				<div class="flex flex-col !mb-4">
					<a class="font-bold" href="tel:+74966164799">+7 496 616-47-99</a>
					<a class="font-bold" href="tel:+79161193086">+7 916 119-30-86</a>
					<p>г. Коломна, ул. Гражданская 10</p>
				</div> 
				<BtnLink href="/">Записаться</BtnLink>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'ElHeader',
	data() {
		return {
			menuOpen: false,
			baseUrl: import.meta.env.BASE_URL,
			menu: [
				{ 
					item: 'Наши специалисты', 
					link: 'specialists' 
				},
				{ 
					item: 'Услуги', 
					link: 'services' 
				},
				{ 
					item: 'Новости и акции', 
					link: 'news' 
				},
				{ 
					item: 'Отзывы', 
					link: 'reviews' 
				},
				{ 
					item: 'Фотогалерея', 
					link: 'gallery' 
				},
				{ 
					item: 'Контакты', 
					link: 'contacts' 
				},
				{ 
					item: 'Лицензия', 
					link: 'license' 
				}
			],
			isFixed: false
		}
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen
			document.body.style.overflow = this.menuOpen ? 'hidden' : ''
		},
		closeMenu() {
			this.menuOpen = false
			document.body.style.overflow = ''
		},
		handleScroll() {
			const scrollPosition = window.scrollY
			this.isFixed = scrollPosition >= 100
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},

	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="scss" scoped>
	.header{
	height: 100px;
	max-width: 1720px;
	padding: 0 20px 10px 20px;
	margin: 0 auto;
	position: relative;
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
	padding: 20px;
	text-transform: uppercase;
	font-size: 0.875rem;
	color: black;

	ul li:hover{
		color: lighten(black, 70%);
		transition: color .2s ease;
	}
}

.desktop-only {
	display: block;
}

.burger {
	display: none;
	flex-direction: column;
	gap: 5px;
	background: none;
	border: none;
	cursor: pointer;
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1002;
}

.overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: 1000;
}

.mobile-menu {
	position: fixed;
	top: 0;
	right: 0;
	width: 85vw;
	max-width: 320px;
	height: 100vh;
	background: #fff;
	z-index: 1001;
	padding: 25px;
	overflow-y: auto;
}

.mobile-nav {
	display: flex;
	flex-direction: column;
	margin: 25px 0;
	&__item{
		padding: 12px 0;
		border-bottom: 1px solid #eee;
		text-transform: uppercase;
		font-size: 0.875rem;
	}
}

.mobile-contacts {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 0.875rem;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}

@media (max-width: 981px) {
	.left__header,
	.right__header,
	.nav {
		display: none !important;
	}

	.middle__header img {
		max-height: 70px;
	}

	.burger {
		display: flex;
	}
}

.svg-burger{
	stroke: $primary;
	stroke-width: 1.5;
}

.nav {
	transition: all 0.7s ease;
}

.nav--fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	background: white;
	box-shadow: 0 10px 12px rgba(0,0,0,0.08);
}
</style>