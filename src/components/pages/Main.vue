
<template>
	<div class="container mt-0">
		<News/>
		<Services/>
		<OurSpecialists/>
		<WeAreInMedia/>
		<About/>
		<Reviews/>
	</div>
	<Discription/>
	<Appointment/>
</template>

<script>
	import Carousel from '../elements/Carousel.vue';
	import Discription from '../sections/Discription.vue';
	import Appointment from '../sections/Appointment.vue';
	import News from '../sections/News.vue';
	import Services from '../sections/Services.vue';
	import WeAreInMedia from '../sections/WeAreInMedia.vue';
	import Reviews from '../sections/Reviews.vue';
	import About from '../sections/About.vue';
	import OurSpecialists from '../sections/OurSpecialists.vue';

	export default {
		components: {
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

</style>
