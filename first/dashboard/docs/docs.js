var themes = [
    'cerulean',
    'cosmo',
    'cyborg',
    'darkly',
    'flatly',
    'journal',
    'litera',
    'lumen',
    'lux',
    'materia',
    'minty',
    'pulse',
    'sandstone',
    'simplex',
    'sketchy',
    'slate',
    'solar',
    'spacelab',
    'superhero',
    'united',
    'yeti'
];

$(document).ready(function () {
    $('[data-class]').click(function () {
        updateNavbarClass($(this).attr('data-class'));
    });

    updateNavbarClass('fixed-left');

    themes.forEach(function (theme) {
        $('#theme_select').append($('<option>', {
            value: theme,
            text: theme.charAt(0).toUpperCase() + theme.slice(1),
            selected: theme === 'materia'
        }));
    });
});

function updateNavbarClass(className) {
    $('nav')
        .removeClass(function (index, css) {
            return (css.match(/(^|\s)fixed-\S+/g) || []).join(' ');
        })
        .addClass(className);

    $('[data-class]').removeClass('active').parent('li').removeClass('active');
    $('[data-class="' + className + '"]').addClass('active').parent('li').addClass('active');

    fixBodyMargin(className);
}

function fixBodyMargin(className) {
    if (/fixed-(left|right)/.test(className)) {
        $('body').removeAttr('style');
        if (className === 'fixed-right') {
            $('body').css('marginLeft', 0);
        } else {
            $('body').css('marginRight', 0);
        }
    } else {
        $('body').css({
            "margin-right": 0,
            "margin-left": 0,
            "padding-top": '90px'
        });
    }
}

let timeout = null;
function showDate(){
    const dateInput = document.getElementById('date')
    let date = new Date();
    dateInput.innerHTML=date.toDateString()
}
timeout = setInterval(showDate, 0)


function selectTheme(theme) {
    $('#theme_link').attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/' + theme + '/bootstrap.min.css');
}
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

// show.addEventListener("click","product")
function pro(){
    const hide = document.getElementById("hide");
    const bf = document.getElementById("bf");
    const table = document.getElementById("tables")
    const fai = document.getElementById("fai");
    const wed =   document.getElementById("wed");
    document.getElementById("calc").style.display="none"
    hide.style.display="none"
    table.style.display="none"
    wed.style.display="none"
    bf.style.display="block";
    fai.style.display="flex";
    // fai.style.backgroundColor="white";
    // fai.style.gridTemplateColumns=" repeat(auto-fit, minmax(260px, auto))";
}
pro();
function product() {

    const hide = document.getElementById("hide");
    const bf = document.getElementById("bf");
const fai = document.getElementById("fai");
const wed =   document.getElementById("wed");
const table = document.getElementById("tables")
document.getElementById("calc").style.display="none"
    hide.style.display="block"
    fai.style.display="none"
     bf.style.display="block";
    table.style.display="none"
    wed.style.display="none"
    hide.children[0].style.display="block"
    hide.children[1].style.display="block"
    hide.children[2].style.display="block"
    hide.children[3].style.display="block"
    hide.children[4].style.display="block"
    hide.style.height="fit-content"
    bf.style.backgroundColor="whiteSmoke"

}
product()
function prod(){
     document.getElementById("tables").style.display="block";
    const hide = document.getElementById("hide");
    document.getElementById("wed").style.display="none"
    const wed =   document.getElementById("wed");
    document.getElementById("calc").style.display="none"
const fai = document.getElementById("fai");
hide.style.display="none"
fai.style.display="none"
hide.children[0].style.display="none"
    hide.children[1].style.display="none"
    hide.children[2].style.display="none"
    hide.children[3].style.display="none"
    wed.style.display="none"
    table.style.display="block"
    // table.children[0].style.display="block"
    // table.children[1].style.display="block"

}
prod()
function clap(){
    document.getElementById("calc").style.display="block"
    document.getElementById("wed").style.display="none"
    const hide = document.getElementById("hide");
const table = document.getElementById("tables");
const wed =   document.getElementById("wed");
const fai = document.getElementById("fai");
hide.style.display="none"
fai.style.display="none"
table.style.display="none"
hide.children[0].style.display="none"
    hide.children[1].style.display="none"
    hide.children[2].style.display="none"
    hide.children[3].style.display="none"
    wed.style.display="none"
calc.style.backgroundColor="blue"
calc.style.display="block"
}
clap()

function mop(){
   
 const wed =   document.getElementById("wed");
    const hide = document.getElementById("hide");
    const table = document.getElementById("tables")
    const fai = document.getElementById("fai");
    wed.style.display="block"
    hide.style.display="none"
    fai.style.display="none"
    table.style.display="none"
    document.getElementById("calc").style.display="none"
    hide.children[0].style.display="none"
        hide.children[1].style.display="none"
        hide.children[2].style.display="none"
        hide.children[3].style.display="none"
}
mop()


// show()
// function show(){
// 	const bro = document.getElementById("water");
// 	const word = document.getElementById("word");
// 	bro.value+= word.innerHTML
	
// }
// function Search(){
//     const all_users = ["samuel Heshwan", 'samson samuel', 'kami', 'inmate', 'king']
//     let selectedUsers = all_users.filter(function(item) {
//         console.log(item.indexOf("samuel"))
//         return item.indexOf("samuel") >= 0;
//     })

//     console.log(selectedUsers)

// }