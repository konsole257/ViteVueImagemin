import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngQuant from 'imagemin-pngquant'
import imageminGifSicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo'
import imageminWebp from 'imagemin-webp'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/ViteVueImagemin/',

	build: {
		// outDir: './dist',
		// assetsDir: './assets',

		rollupOptions: {
			output: {
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',

				assetFileNames: assetInfo => {
					let extType = assetInfo.name.split('.')[1];
					if (/png|jpe?g|svg|webp|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'images';
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},
			},
		}
	},

	plugins: [
		vue(),

		imagemin(['src/assets/images/origin/*'], {
			destination: 'src/assets/images/',
			plugins: [
				// imageminMozjpeg(),
				// imageminPngQuant(),
				imageminGifSicle({optimizationLevel: 2}),
				imageminSvgo(),
				imageminWebp()
			]
		}),

		imagemin(['public/images/origin/*'], {
			destination: 'public/images',
			plugins: [
				// imageminMozjpeg(),
				// imageminPngQuant(),
				imageminGifSicle({optimizationLevel: 2}),
				imageminSvgo(),
				imageminWebp()
			]
		}),
	],
})
