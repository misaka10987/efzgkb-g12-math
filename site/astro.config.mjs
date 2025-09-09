// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import path from 'path'
import UnoCSS from 'unocss/astro'
import { base } from './src/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://misaka10987.github.io',
  base,
  trailingSlash: 'always',
  image: {
    service: passthroughImageService(),
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [UnoCSS()],
})
