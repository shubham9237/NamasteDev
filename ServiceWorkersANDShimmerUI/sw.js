const CACHE_NAME = "serviceWorkersDemo/v"
const CACHE_NAME2 = "serviceWorkersDemo/v2"
const CACHE_NAME3 = "serviceWorkersDemo/v3"


self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache=>{
            cache.addAll([
                "./index.html",
                "./style.css",
                "./demo.jpg",
                "./script.js"
            ])
        })
    )
})

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(cacheKeys => {
            return Promise.all(
                cacheKeys.map(key=>{
                    if(key != CACHE_NAME){
                        return caches.delete(key);
                    }
                })
            )
        })
    )
})

self.addEventListener("fetch", e => {
    // offline experience
    // whenever file is requested, check cache and return from cache
    // if not available fetch from network
    // cant make network then see offline page dynasaur

    // Never use above method use below one

    // 1. fetch from network, update my cache, cache as a fallback


    e.respondWith(
        fetch(e.request).then(res => {
            const cloneData = res.clone();
            // update my cache here
            caches.open(CACHE_NAME).then(cache=>{
                cache.put(e.request, cloneData)
            })
            return res;
        }).catch(err=>{
            // you can handle the offline page here
            return caches.match(e.request).then(res=>res)
        })
    )
})
