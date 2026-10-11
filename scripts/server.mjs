import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const port = Number(process.env.PORT || 5173);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const target = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const path = resolve(root, target);
    const allowed = path === resolve(root, 'index.html') || ['src', 'public'].some(folder => path.startsWith(resolve(root, folder) + sep));
    if (!allowed || !path.startsWith(root + sep)) { res.writeHead(404).end('Not found'); return; }
    const data = await readFile(path);
    res.writeHead(200, { 'Content-Type': `${types[extname(path)] || 'application/octet-stream'}${['.html','.css','.js','.mjs','.json'].includes(extname(path)) ? '; charset=utf-8' : ''}`, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'" });
    res.end(data);
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Ferðaheimur: http://127.0.0.1:${port}\nAðeins á þessari tölvu. Ctrl+C til að stöðva.`));
server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} er í notkun. Prófaðu annað PORT.` : error.message); process.exitCode = 1; });
