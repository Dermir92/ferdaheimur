// Run while the local server is running. No external requests.
import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:' + (process.env.PORT || '5173');
for (const path of ['/', '/src/app.js', '/src/styles.css', '/src/data/survey-samples.json', '/src/data/adapters/survey.js', '/src/data/repository.js', '/src/data/media.js', '/src/domain/format.js', '/src/domain/search.js', '/src/ui/trip-card.js', '/src/ui/icons.js', '/public/favicon.svg', '/public/images/tenerife.png', '/public/images/prague.png', '/public/images/budapest.png', '/public/images/algarve.png']) {
  const res = await fetch(base + path, {signal:AbortSignal.timeout(5000)});
  assert.equal(res.status,200,path);
  assert.ok((await res.arrayBuffer()).byteLength>0,path);
  assert.equal(res.headers.get('x-content-type-options'),'nosniff');
}
for (const path of ['/README.md','/docs/ferdagogn-konnun-gagnasynishorn.json','/src/%2e%2e%2fREADME.md','/src/%2e%2e%2f.git/config','/public/%2e%2e%2fdocs/ferdagogn-konnun.md']) {
  assert.equal((await fetch(base + path,{signal:AbortSignal.timeout(5000)})).status,404,path);
}
console.log('16 staðbundnar síður/skrár svara rétt; 5 aðgangspróf standast.');
