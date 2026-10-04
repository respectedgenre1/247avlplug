export default defineConfig({
  site: 'https://247avlplug.com',
  output: 'static',  // changed from 'server' to 'static'
  adapter: cloudflare(),
  integrations: [sitemap()],
});
