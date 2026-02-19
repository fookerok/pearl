<template>
	<div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Фотогалерея</h2>
		<section>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<figure 
					v-for="(img, index) in images" 
					:key="index"
					class="overflow-hidden transition duration-300"
				>
					<a 
						:href="img.src" 
						data-fancybox="gallery" 
						:data-caption="img.caption"
						class="block overflow-hidden rounded-xl shadow-lg"
					>
						<img 
							:src="img.src" 
							:alt="img.caption" 
							class="w-full h-72 object-cover transition-transform duration-500"
						/>
					</a>

					<figcaption class="p-4">
						<p class="text-center font-semibold text-gray-800">
							{{ img.caption }}
						</p>
					</figcaption>
				</figure>
			</div>
		</section>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as Fancyapps from "@fancyapps/ui";
const Fancybox = Fancyapps.Fancybox;
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import photo1 from '../../assets/img/cardsMenu/1-card-menu.webp?url';
import photo2 from '../../assets/img/cardsMenu/2-card-menu.webp?url';
import photo3 from '../../assets/img/cardsMenu/3-card-menu.webp?url';
import photo4 from '../../assets/img/cardsMenu/4-card-menu.webp?url';

const images = [
	{src: photo1, caption: 'Фото 1'},
	{src: photo2, caption: 'Фото 2'},
	{src: photo3, caption: 'Фото 3'},
	{src: photo4, caption: 'Фото 4'},
]

onMounted(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
        Toolbar: true,
        Thumbs: true,
        infinite: false,
    });
});
</script>
