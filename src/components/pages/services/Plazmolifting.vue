<template>
    <div class="container !mt-12 !px-3">
		<h2 class="section__title !mb-12">Плазмолифтинг</h2>
		<div class="text">
			Плазмолифтинг (процедура омоложения кожи собственной кровью) - это одна из самых распространенных anti-age процедур, которая не требует реабилитации и исключает проявления аллергии, а по эффекту не уступает срединным пилингам, ботулинотерапии и биоревитализации. Уникальная запатентованная технология Plasmolifting®, разработанная русским пластическим хирургом Ренатом Ахмеровым, использует скрытый потенциал нашей крови, запуская процесс естественного омоложения, который дает видимый лифтинг-эффект. Суть процедуры в инъекционном введении в кожу обогащенной тромбоцитами собственной плазмы крови пациента.
			-достаточно одного курса
			-безболезненна и совершенно безопасна
			-не требует реабилитации
			-эффект сохраняется в течение 6-12 месяцев
		</div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'

const images = [
	{
		src: new URL('../assets/img/License/license1.jpg', import.meta.url).href,
		caption: 'Лицензия'
	},
	{
		src: new URL('../assets/img/License/license2.jpg', import.meta.url).href,
		caption: 'Лицензия'
	},
	{
		src: new URL('../assets/img/License/license3.jpg', import.meta.url).href,
		caption: 'Лицензия'
	},
]

const imagesSan = [
	{
		src: new URL('../assets/img/License/license4.jpg', import.meta.url).href,
		caption: 'Санитарно-эпидеммилогическое заключение'
	},
	{
		src: new URL('../assets/img/License/license5.jpg', import.meta.url).href,
		caption: 'Санитарно-эпидеммилогическое заключение'
	},
]

export default {
	data() {
		return {
			images,
			imagesSan,
			imageAlt: 'Пример изображения'
		}
	},
	setup() {
		onMounted(() => {
			Fancybox.bind('[data-fancybox="gallery"]', {})
		})
	}
}
</script>