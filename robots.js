// robots.js – mesmo diretório
export const onRequest = () =>
  new Response(
    `User-agent: *
Allow: /
Sitemap: https://pimentelservicos.app.br/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );