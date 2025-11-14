export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    // redireciona qualquer acesso à raiz
    if (pathname === '/' || pathname === '') {
      return Response.redirect('https://dominioreal.com.br', 308);
    }

    // 404 para tudo o resto
    return new Response('404 – não encontrado', { status: 404 });
  }
};