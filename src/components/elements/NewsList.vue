<template>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-[50px]">
	<CardInfo
		v-for="item in displayedNews"
		:key="item.id"
		v-bind="item"
		:className="isHome ? 'card__item' : ''"
	/>
</div>
</template>

<script setup>
import { computed } from 'vue';
import CardInfo from './CardInfo.vue';

const props = defineProps({
	limit: {
		type: Number,
		default: 0
	},
	typeFilter: {
		type: String,
		default: ''
	},
	isHome: {
		type: Boolean,
		default: false
	}
});

const cardImages = Object.values(
	import.meta.glob('../../assets/img/cards/*-card.webp', { eager: true, query: '?url' })
).map(m => m.default);

const newsList = [
	{
		id: 1,
		href: '#',
		typeName: 'Акции',
		imageUrl: cardImages[0],
		cardName: 'Как вернуть и сохранить молодость кожи рук?',
		cardDate: '21 августа 2025 г.'
	},
	{
		id: 2,
		href: '#',
		typeName: 'Новости',
		imageUrl: cardImages[1],
		cardName: 'Пилинги',
		cardDate: '18 августа 2025 г.'
	},
	{
		id: 3,
		href: '#',
		typeName: 'Акции',
		imageUrl: cardImages[2],
		cardName: 'Гель PRX-T33',
		cardDate: '13 августа 2025 г.'
	},
	{
		id: 4,
		href: '#',
		typeName: 'Акции',
		imageUrl: cardImages[3],
		cardName: 'ЛИПОЛИТИКИ. ТРИАДА. РАБОТАЕТ! 100%',
		cardDate: '13 августа 2025 г.'
	},
	{
		id: 5,
		href: '#',
		typeName: 'Акции',
		imageUrl: cardImages[4],
		cardName: 'Борьба с возрастными изменениями.',
		cardDate: '21 августа 2025 г.'
	},
	{
		id: 6,
		href: '#',
		typeName: 'Акции',
		imageUrl: cardImages[5],
		cardName: 'Что такое нитевой лифтинг?',
		cardDate: '18 августа 2025 г.'
	}
];

const displayedNews = computed(() => {
	let filtered = props.typeFilter
		? newsList.filter(item => item.typeName === props.typeFilter)
		: newsList;
		
	return props.limit > 0 ? filtered.slice(0, props.limit) : filtered;
});
</script>
