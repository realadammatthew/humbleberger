import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        mission: '/mission.html',
        statementOfFaith: '/statement-of-faith.html',
        antiSemitism: '/anti-semitism.html',
        countingTheCost: '/counting-the-cost.html',
        privacyPolicy: '/privacy-policy.html',
        termsOfUse: '/terms-of-use.html',
        copyright: '/copyright.html'
      }
    }
  }
})