
if(navigator.serviceWorker) {
    navigator.serviceWorker.register("./sw.js")
    .then(res => {
        console.log("SW registered");
    }).catch(err=>{
        console.log("Error registering service workier", err);
    }) // it gives us a promise
}