import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { createSvgIconsPlugin } from '@sjtu-nic/vite-plugins/svg-icons';
import path from 'path';


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: '[name]'
    }),
  ],
    css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/assets/scss/main.scss";`
      }
    }
  }
})
