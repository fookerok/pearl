<template>
	<Swiper
		:modules="[Navigation, Autoplay]"
		:slides-per-view="1"
		:loop="true"
		:autoplay="{ delay: 4000 }"
		:speed="500"
		navigation
		pagination
		class="hero-slider"
	>
		<SwiperSlide v-for="slide in slides" :key="slide.id">
		<a :href="slide.link" class="slide">
			<img :src="slide.img" />
			<div class="overlay"></div>
		</a>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue'
	import { Navigation, Pagination, Autoplay } from 'swiper/modules'

	import img1 from '/src/assets/img/carousel/1.webp'
	import img2 from '/src/assets/img/carousel/2.webp'

	import 'swiper/css'
	import 'swiper/css/navigation'
	import 'swiper/css/pagination'

	const slides = [
		{ id: 1, img: img1, link: '#' },
		{ id: 2, img: img2, link: '#' }
	]
</script>

<style lang="scss">
.hero-slider {
	overflow: hidden;
	max-height: 850px;
	.slide {
		width: 100%;
		position: relative;
		
	}
	img {
		width: 100%;
		height: 100%;
		min-height: 400px;
		object-fit: cover;
	}
}
	.swiper{
		.swiper-button-next, .swiper-button-prev{
			background-color: white !important;
			border-radius: 50% !important;
			color: black !important;
			width: 60px;
			height: 60px;
			margin: 0 42px !important;
			svg{
				width: 11.58px;
				height: 25.84px;
			}
		}
		@media (max-width:768px){
			.swiper-button-next, .swiper-button-prev{
				width: 30px;
				height: 30px;
				margin: 0 21px !important;
				svg{
					width: 5.79px;
					height: 12.92px; 
				}
			}
		}
	}
</style>