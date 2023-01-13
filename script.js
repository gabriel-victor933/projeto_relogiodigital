let hora = document.getElementById("hora");
let min = document.getElementById("min");
let seg = document.getElementById("seg");

console.log(seg);

setInterval(atualizaRelogio, 1000)

atualizaRelogio()

function atualizaRelogio() {

    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    hora.innerHTML = `${Math.floor(h / 10) % 3}${Math.floor(h % 10)}`
    min.innerHTML = `${Math.floor(m / 10) % 6}${Math.floor(m % 10)}`
    seg.innerHTML = `${Math.floor(s / 10) % 6}${Math.floor(s % 10)}`

}