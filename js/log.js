
/*
// log smth with this:
logmsg = "hihi";
s = document.createElement('script');
s.src = "https://yaofanfish.github.io/js/log.js";
document.head.appendChild(s);
*/

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = (err) => reject(err);
        globalThis.d65dc56f = script;
        document.head.appendChild(script);
    });
}

function loadInit() {
    return loadScript('https://yaofanfish.github.io/init.js')
        .catch(() => loadScript('/init.js'));
}

async function log(msg) {
    let r = await sb.from("logs").insert([{data: msg}]);
    return r;
}

(async () => {
    try {
        console.log(1);
        await loadInit();
        console.log(2);
        globalThis.r = await log(logmsg);
        console.log(3);
    } catch (ede4e61f) {
        console.log(-1);
    }
})();

console.log(0);
