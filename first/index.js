const num = document.getElementById("num");
const rum = document.getElementById("rum");
const tum = document.getElementById("tum");
const pum = document.getElementById("pum");
    let a =3;
    let r =500;
    let t =600;
    let p =430;
    window.onload = function () {
      let interval  =  setInterval(() => {

         a++;
         r++;
         t++;
         p++;
        num.innerHTML = a
        rum.innerHTML = r
        tum.innerHTML = t
        pum.innerHTML = p
        if (a === 100, r === 8600, t === 980, p === 900) {
         clearInterval(interval);
         console.log("interval cleared");
        }
     },1000)
    }
    

//     const topA = document.querySelector('.top-arrow');
    
// var ScrollY = window.scrollY;
// window.onscroll = function(e) {
//     if(ScrollY < window.scrollY){
//         topA.style.display = 'flex';
//     } else {        
//         topA.style.display = 'none';
//     }        
// }
 