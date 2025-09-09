// @ts-check
import { defineConfig } from 'astro/config'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import path from 'path'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://misaka10987.github.io',
  base: '/site-efzgkb-g12-math',
  trailingSlash: 'always',
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
