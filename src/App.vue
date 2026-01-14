
<template>
	<ElHeader/>
	<Carousel/>
	<div class="container">
		<News/>
		<Services/>
		<OurSpecialists/>
		<WeAreInMedia/>
		<About/>
		<Reviews/>
	</div>
	<Discription/>
	<Appointment/>
	<ElFooter/>
</template>

<script>
	import ElHeader from './components/elements/ElHeader.vue';
	import ElFooter from './components/elements/ElFooter.vue';
	import Carousel from './components/elements/Carousel.vue';

	import Discription from './components/sections/Discription.vue';
	import Appointment from './components/sections/Appointment.vue';
	import News from './components/sections/News.vue';
	import Services from './components/sections/services.vue';
	import WeAreInMedia from './components/sections/WeAreInMedia.vue';
	import Reviews from './components/sections/Reviews.vue';
	import About from './components/sections/About.vue';
	import OurSpecialists from './components/sections/OurSpecialists.vue';

	export default {
		components: {
			ElHeader,
			ElFooter,
			Carousel,
			Discription,
			Appointment,
			News,
			Services,
			WeAreInMedia,
			Reviews,
			About,
			OurSpecialists
		}
	}
</script>

<style lang="scss">

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
		list-style: none;
	}

	body {
		font-family: 'Open Sans';
		color: $text;
	}
	
	.container{
		max-width: 1200px;
		margin: 0 auto;
	}

	section{
		margin-top: 50px;
		padding: 0 20px;
	}

	.line{
		width: 150px;
		background-color: $primary;
		margin: 20px 0;
		height: 2px;
	}

	@media (max-width: 991px) {
		.card__list {
			display: flex;
			overflow-x: auto;
			-ms-overflow-style: none; 
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;         
			}
		}
		.card__item{
			width: 350px;
			flex: 0 0 auto; 
			.card__name{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				text-overflow: ellipsis;
				height: 50px;
			}
		}
	}

	@media (max-width: 576px){
		.card__item{
			width: 200px;
		}
		.card-menu__list{
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
	}
</style>
