import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://cruizviquez.github.io',
  base: '/svit.group',
  integrations: [react()],
});