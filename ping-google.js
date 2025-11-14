// ping-google.js – Cloudflare Pages Functions/cron/ping-google.js
export async function onRequest() {
  const key = "SUA_API_KEY"; // Google Indexing API JSON key
  const endpoint =
    "https://indexing.googleapis.com/v3/urlNotifications:publish";

  const body = {
    url: "https://pimentelservicos.app.br/desentupidora_pinhais.html",
    type: "URL_UPDATED"
  };

  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify(body)
  });

  return new Response("ping enviado", { status: 200 });
}