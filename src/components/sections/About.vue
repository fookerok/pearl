<template>
	<section class="about-section">
		<div class="flex crooked-card">
			<div class="info-block">
				<h2 class="info-block__title">О клинике</h2>
				<div class="line"></div>
				<div class="info-block__text flex flex-col gap-[15px] !mb-5">
					<p>Песчинка, попадая в&nbsp;морскую раковину, превращается в&nbsp;переливающийся перламутром жемчуг, так и&nbsp;наши клиенты после процедур приобретают особое очарование, ухоженный вид и&nbsp;уверенность в&nbsp;себе.</p>
					<p>В&nbsp;нашем центре эстетической косметологии работают высококвалифицированные, опытные специалисты, применяются новейшие технологии и&nbsp;оборудование ведущих мировых производителей, используются только проверенные косметические линии. Все это позволяет выполнять процедуры максимально эффективно и&nbsp;комфортно.</p>
				</div>
				<BtnLink href="#" class="inline-flex">Подробнее</BtnLink>
			</div>
			<div class="img-block">
				<img src="../../assets/img/main/about.webp?url" alt="">
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'About'
	}
</script>

<style lang="scss" scoped>
.img-block{
	z-index: 2;
	@media (min-width: 1200px){
		img{
			min-height: 500px;
		}
	}
}
.info-block{
	position: relative;
	padding: 40px 100px 50px 50px;
	margin-right: -50px;
	margin-bottom: 50px;
	background-color: $light;
	z-index: 1;
    width: 662px;
    top: 50px;
	&__title{
		text-transform: uppercase;
		font-size: 2.125rem;
		color: $primary;
		font-weight: 500;
	}
}

@media (max-width: 1200px){
	.crooked-card{
		flex-direction: column;
	}
	.img-block{
		display: flex;
		justify-content: center;
		margin: 0;
	}
	.info-block{
		order: 2;
		margin: 0 auto;
		position: static;
		max-width: 588px;
		width: auto;
		padding: 20px;
	}
}
</style>