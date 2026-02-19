<template>
	<section class="ourspecialists-section">
		<div class="crooked-card flex">
			<div class="img-block">
				<img src="../../assets/img/main/our-specialists.webp?url" alt="">
			</div>
			<div class="info-block">
				<h2 class="info-block__title">Наши специалисты</h2>
				<div class="line"></div>
				<div class="info-block__text flex flex-col gap-[15px] !mb-5">
					<p>Стремление к&nbsp;совершенству и&nbsp;желание реализовать свой многолетний опыт стали для нас движущей силой для создания НОВОГО салона, а&nbsp;точнее Центра Эстетической Косметологии &laquo;Жемчужина&raquo;</p>
					<p>Идейным вдохновителем и&nbsp;сердцем центра является Ольга Николаевна Коршунова. Именно она собрала нашу команду&nbsp;&mdash; команду творческих и&nbsp;влюбленных в&nbsp;свое дело профессионалов.</p>
					<p>Нас объединяет общее видение в&nbsp;сторону проверенных, безопасных методик, оказывающих не&nbsp;только эстетический, но&nbsp;и&nbsp;положительный оздоровительный эффект.</p>
				</div>
				<BtnLink href="#" class="inline-flex">О специалистах</BtnLink>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'OurSpecialists'
	}
</script>

<style lang="scss" scoped>
.img-block{
	@media (min-width: 1200px){
		img{
			min-height: 500px;
		}
	}
}
.info-block{
	position: relative;
	padding: 40px 50px;
	margin-right: -50px;
	margin-bottom: 50px;
	background-color: $light;
    width: 662px;
    right: 50px;
    top: 50px;
	&__title{
		text-transform: uppercase;
		font-size: 2.125rem;
		font-weight: 500;
		color: $primary;
	}
}

@media (max-width: 1200px){
	.crooked-card{
		flex-direction: column;
	}
	.img-block{
		display: flex;
		justify-content: center;
	}
	.info-block{
		margin: 0 auto;
		position: static;
		max-width: 588px;
		width: auto;
		padding: 20px;
	}
}

</style>