<template>
	<swiper
		:modules="[Navigation, Pagination, Autoplay]"
		navigation
		pagination
		:autoplay="{ delay: 3000, disableOnInteraction: false }"
		loop
		class="mySwiper">
		<swiper-slide v-for="(slide, index) in slides" :key="index" class="hero-slider">
			<img :src="slide.image" alt="Слайд" />
			<div class="flex slide-content">
				<h2>{{ slide.title }}</h2>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img4 from '../../assets/img/carousel/4.webp?url';
import img1 from '../../assets/img/carousel/1.webp?url';
import img2 from '../../assets/img/carousel/2.webp?url';
import img3 from '../../assets/img/carousel/3.webp?url';
import img5 from '../../assets/img/carousel/5.webp?url';

const slides = [
	{
		image: img4,
		title: "Эстетическая косметология «Жемчужина»",
		link: "/catalog"
	},
	{
		image: img2,
		title: "Премиальный уход за лицом",
		link: "/shop"
	},
	{
		image: img3,
		title: "Нитевой лифтинг aptos",
		link: "/about"
	},
	{
		image: img5,
		title: "Карбокситерапия",
		link: "/about"
	},
];
</script>

<style lang="scss">
.hero-slider {
	overflow: hidden;
	aspect-ratio: 16 / 9;
	max-height: 700px;
	min-height: 500px;
	&::after {
		content: "";
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.2);
		z-index: 1;
		pointer-events: none;
	}
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
	.slide-content {
		position: absolute;
		top: 50%;
		left: 20%;
		transform: translateY(-50%);
		z-index: 2;
		color: #ffffff;
		max-width: 500px;
		h2 {
			font-size: 3rem;
			-webkit-text-stroke: 1% #000000;
			text-transform: uppercase;
			font-weight: 600;
				text-shadow:
		2px 2px 6px rgba(0, 0, 0, 0.6);
		}
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
		.hero-slider {
			.slide-content {
				top: 20%;
				left: 40%;
				transform: translateX(-50%);
				h2{
					font-size: 2rem;
				}
			}
		}
	}
}
</style>