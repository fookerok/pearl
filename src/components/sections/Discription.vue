<template>
<section class="discription__section">
	<div class="discr-container">
		Виды процедур, продолжительность курсов, необходимость коррекции&nbsp;&mdash; подбираются индивидуально для каждого пациента. <br>
		Поэтому необходим первичный прием врача, на&nbsp;котором он&nbsp;проведет оценку вашего состояния, предложит на&nbsp;выбор самые подходящие методики, согласно предпочтениям пациента, расскажет о&nbsp;необходимом количестве процедур, использовании комплексного подхода и&nbsp;сочетанных протоколов, сориентирует по&nbsp;цене, длительности курса и&nbsp;возможной реабилитации, а&nbsp;также ответит на&nbsp;все интересующие вопросы.
	</div>
</section>
</template>

<script>
	export default {
		name: 'Discription'
	}
</script>

<style lang="scss" scoped>
.discription__section{
	background-color: $primary;
	padding: 70px 0;
	.discr-container{
		max-width: 792px;
		margin: 0 auto;
		font-size: 1.125rem;
		line-height: 1.6;
		font-weight: 500;
		color: white;
		padding-left: 50px;
		border-left: 3px solid white;
	}
}
</style>