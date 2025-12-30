<template>
	<section class="appointment-section">
		<div class="container text-center">
			<div class="flex flex-col gap-2.5 !mb-[15px]">
				<h5 class="title">Запишитесь на первичный прием врача по телефону:</h5>
				<div class="number__list flex justify-center">
					<a href="tel:+74966164799" class="number__link">+7 496 616-47-99</a>
					<a href="tel:+79161193086" class="number__link">+7 916 119-30-86</a>
				</div>
				<div class="discr">или отправьте заявку и&nbsp;наш администратор свяжется с&nbsp;вами</div>
			</div>
			<BtnLink class="flex justify-center" href="#">Отправить заявку</BtnLink>
		</div>
	</section>
</template>

<script>
	export default {
		name:'Appointment'
	}
</script>

<style lang="scss" scoped>
.appointment-section{
	font-size: 1.125rem;
	font-weight: 500;
	.number__list {
		display: flex;
		justify-content: center;
		gap: 62px;
		align-items: center;
		position: relative;
		font-size: 2.1875rem;
		color: black;
	}
	.number__list::after {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: $primary;
		border-radius: 50%;
		top: 50%; 
	}
}
</style>