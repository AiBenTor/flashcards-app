import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    watch: false,
    environment: 'jsdom',
    alias: [ { find: '@', replacement: '/src' } ]
  }
})
