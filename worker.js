// worker.js – coloque no Cloudflare Pages Functions/_worker.js
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);

    // Redirecionamento 308 permanente — transfere 100 % da autoridade
    const target = `https://pimentelservicos.app.br/desentupidora_pinhais.html${url.pathname}${url.search}`;
    return Response.redirect(target, 308);
  }
};