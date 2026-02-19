<template>
	<swiper
		:modules="[Navigation, Pagination, Autoplay]"
		navigation
		pagination
		:autoplay="{ delay: 3000, disableOnInteraction: false }"
		loop
		class="mySwiper"
	>
		<swiper-slide
			v-for="(slide, index) in slides"
			:key="index"
			class="hero-slider"
		>
			<img :src="slide" alt="Слайд" />
		</swiper-slide>
	</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/img/carousel/1.webp?url';
import img2 from '../../assets/img/carousel/2.webp?url';

const slides = [img1, img2];
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

	.swiper-pagination-bullet-active{
		background: $primary !important;
	}
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