import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import path from 'path';
import { createSvgIconsPlugin } from '@sjtu-nic/vite-plugins/svg-icons';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/jemchujina/',
    build: {
        format: 'file'
    },
    compressHTML: false,
    integrations: [
        vue({
            appEntrypoint: '/src/scripts/vue-init.js'
        }),
    ],
    vite: {
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), './src/assets/svg')],
                inject: 'body-last',
                symbolId: '[name]',
            }),
            tailwindcss()
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "/src/assets/scss/main.scss";`,
                },
            },
        },
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => {
                        const name = assetInfo.name || '';
                        if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(name)) {
                            return 'assets/img/[name][extname]';
                        }
                        if (/\.(woff|woff2|eot|ttf|otf)$/i.test(name)) {
                            return 'assets/fonts/[name][extname]';
                        }
                        return 'assets/[name]-[hash][extname]';
                    },
                },
            },
        },
    },
});