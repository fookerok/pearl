<template>
    <div class="container !mt-12">
        <h2 class="section__title !mb-12">Услуги</h2>
        <section class="flex flex-col">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 !mb-12">
                <a
                    v-for="service in services"
                    :key="service.link"
                    :href="baseUrl + service.link + '.html'"
                    class="type-service"
                >
                    {{ service.title }}
                </a>
            </div>
        </section>
        <BtnLink class="flex justify-center" href="#">Записаться на прием</BtnLink>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            baseUrl: import.meta.env.BASE_URL,
            services: [
                { title: 'Аппаратная косметология', link: 'services/hardware' },
                { title: 'Возрастные изменения кожи', link: 'services/skin' },
                { title: 'Инъекционная косметология', link: 'services/injectable' },
                { title: 'Нитевой лифтинг Aptos', link: 'services/lifting-aptos' },
                { title: 'Подарочный сертификат', link: 'services/certificate' },
                { title: 'Процедуры препаратами Favori', link: 'services/favori' },
                { title: 'Ферменотерапия', link: 'services/enzyme' },
                { title: 'Экзосомы', link: 'services/exosomes' },
                { title: 'Эстетическая косметология', link: 'services/aesthetic' }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
.type-service{
	padding: 25px;
	background-color: $primary;
	color: white;
	text-align: center;
	font-size: 1.25rem;
	&:hover{
		background-color: darken($primary, 10%);
		transition: background-color .2s ease;
	}
}
</style>