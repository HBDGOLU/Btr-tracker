const C='btr-v1',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
const M=['Aaj ka plan wait kar raha hai 📚 Ek session start karo!','Chhota MCQ round? 10 min, abhi! 🔥','Kal se better banna hai 💪 App kholo aur shuru karo!','NEET PG door nahi 🎯 Aaj ka target poora karo!'];
self.addEventListener('periodicsync',e=>{if(e.tag=='btr-remind')e.waitUntil(self.registration.showNotification('BTR Study 📚',{body:M[Math.floor(Math.random()*M.length)],icon:'icon-192.png',tag:'btr'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():clients.openWindow('./')))});
