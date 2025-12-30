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
    max-height: 850px;
    width: 100%;
    overflow: hidden;
}

.slide {
    display: block;
    width: 100%;
    height: 850px;
    overflow: hidden;
    position: relative;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;     
    object-position: center;
    display: block;
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
}
</style>