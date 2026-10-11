// Spielerzahl eines Minecraft-Servers über öffentliche Status-APIs.
// Zwei Quellen, falls eine ausfällt. Beide cachen etwa eine Minute.
async function fetchMinecraftStatus(host, edition = 'java') {
  const h = encodeURIComponent(host);
  const sources = [
    async () => {
      const d = await getJson(`https://api.mcstatus.io/v2/status/${edition}/${h}`);
      return { online: d.online, players: d.players?.online ?? 0, max: d.players?.max ?? 0 };
    },
    async () => {
      const path = edition === 'bedrock' ? 'bedrock/3' : '3';
      const d = await getJson(`https://api.mcsrvstat.us/${path}/${h}`);
      return { online: d.online, players: d.players?.online ?? 0, max: d.players?.max ?? 0 };
    },
  ];

  async function getJson(url) {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  for (const source of sources) {
    try { return await source(); } catch (e) { console.warn(e); }
  }
  throw new Error('Keine API erreichbar');
}
