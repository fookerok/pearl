<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		<div v-for="item in specialists" :key="item.id" class="rounded-xl specialist__item grid grid-rows-[1fr_auto] gap-2.5 h-full">
			<div class="card__img w-full h-100 overflow-hidden rounded-xl">
				<img 
					:src="item.imageUrl" 
					:alt="item.cardName"
					class="w-full h-full object-cover"
				>
			</div>
			<div class="!p-3">
				<div class="card__type">{{item.typeName}}</div>
				<div class="card__name">{{ item.cardName }}</div>
				<btnLink class="cursor-pointer card__link flex items-center gap-2.5 !mt-2">
					Подробнее
				</btnLink>
			</div>
		</div>
	</div>
</template>

<script setup>
const photos = Object.values(import.meta.glob('../../assets/img/specialists/*.jpg', { eager: true, query: '?url' })).map(m => m.default);

const specialists = [
    {
        id: 1,
        imageUrl: photos[1],
        typeName: 'Главный врач',
        cardName: 'Морщинская Елена Александровна',
    },
    {
        id: 2,
        imageUrl: photos[2],
        typeName: 'Врач косметолог-дерматовенеролог',
        cardName: 'Васильева Ирина Игоревна',
    },
    {
        id: 3,
        imageUrl: photos[3],
        typeName: 'Врач косметолог-дерматовенеролог',
        cardName: 'Чижова Александра Николаевна',
    },
    {
        id: 4,
        imageUrl: photos[4],
        typeName: 'Косметолог',
        cardName: 'Пирогова Наталия Сергеевна',
    },
    {
        id: 5,
        imageUrl: photos[5],
        typeName: 'Администратор центра',
        cardName: 'Якушина Валерия Евгеньевна',
    },
    {
        id: 6,
        imageUrl: photos[6],
        typeName: 'Администратор центра',
        cardName: 'Королева Любовь Викторовна',
    },
];
</script>

<style lang="scss" scoped>
.specialist__item{
    background-color: var(--color-gray-50);
}

.card__name{
	font-weight: 600;
	font-size: 1.1875rem;
	line-height: 1.3;
	color: black;
}
.card__link {
	color: $primary;
	font-weight: 500;

	.svg-link {
		color: $primary;
	}

	&:hover {
		transition: color 0.2s ease;
		color: darken($primary, 10%);
		.svg-link {
			transition: color 0.2s ease;
			color: darken($primary, 10%);
		}
	}
}

.btn-link{
	padding: 13px !important;
}
</style>