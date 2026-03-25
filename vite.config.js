import { constants } from 'node:buffer'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/',
    build: {
        outDir: 'docs',
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                portfolio: resolve(import.meta.dirname, 'portfolio.html'),
                contacts: resolve(import.meta.dirname, 'contacts.html'),
                services: resolve(import.meta.dirname, 'services.html')
            },
        },
    },
})