const burger = document.querySelector('#burger');
const burgerLine = document.querySelectorAll('#burger .line');
const menu = document.querySelector('.navigation .right');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

var drop = document.getElementsByClassName('dropdown');
var link = document.getElementsByClassName('faculties')
var i 


for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
//         var present = drop[i+1].classList.contains('show');
//         if (present == true) {
//             drop[1+1].classList.remove('show')
// //             alert('hi')
//         }
    for (var j=0; j < drop.length; j++) {
        if(j!==i) drop[j].classList.remove("show");
    }
    drop[i].classList.toggle('show');
    });
}

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
    for (let i = 0; i < burgerLine.length; i++) {
        burgerLine[i].classList.toggle('white');
    }
    line2.classList.toggle('disappear');
    line1.classList.toggle('rot1');
    line3.classList.toggle('rot2');
})

