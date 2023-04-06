
// bro.addEventListener("click",function (){
//     bro.style.display="none"
//     show.style.display="block"
// })
function dev(){
    const bro = document.getElementById("bro")
const show = document.getElementById("show")
    bro.style.display="none"
    show.style.display="block"
}
window.setInterval(()=>{
    const bro = document.getElementById("bro")
    const raw = document.getElementById("raw")
        bro.style.display="none"
        raw.style.display="block"
},3000)