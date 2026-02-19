<template>
    <div class="container !mt-12 !px-3.75">
		<h2 class="section__title !mb-12">Лицензия</h2>
		<div class="grid grid-cols-3 gap-4">
            <a 
                v-for="(img, index) in images" 
                :key="index" 
                :href="img.src" 
                data-fancybox="gallery" 
                :data-caption="img.caption"
            >
                <img 
                    :src="img.src" 
                    :alt="img.caption" 
                    class="w-full cursor-pointer rounded hover:scale-105 transition-transform"
                />
            </a>
        </div>
		<div class="grid grid-cols-2 gap-4 !mt-6">
            <a 
                v-for="(img, index) in imagesSan" 
                :key="index" 
                :href="img.src" 
                data-fancybox="gallery" 
                :data-caption="img.caption"
            >
                <img 
                    :src="img.src" 
                    :alt="img.caption" 
                    class="w-full cursor-pointer rounded hover:scale-105 transition-transform"
                />
            </a>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import * as Fancyapps from "@fancyapps/ui";
const Fancybox = Fancyapps.Fancybox;
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import license1 from '../../assets/img/License/license1.jpg?url';
import license2 from '../../assets/img/License/license2.jpg?url';
import license3 from '../../assets/img/License/license3.jpg?url';
import license4 from '../../assets/img/License/license4.jpg?url';
import license5 from '../../assets/img/License/license5.jpg?url';

const images = [
    { src: license1, caption: 'Лицензия' },
    { src: license2, caption: 'Лицензия' },
    { src: license3, caption: 'Лицензия' },
];

const imagesSan = [
    { src: license4, caption: 'Санитарно-эпидеммилогическое заключение' },
    { src: license5, caption: 'Санитарно-эпидеммилогическое заключение' },

];

onMounted(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
        Toolbar: true,
        Thumbs: true,
        infinite: false,
    });
});
</script>


