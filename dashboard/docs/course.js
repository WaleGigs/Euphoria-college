// import {jsPDF} from jspdf;

// var doc = new jsPDF();

var page = document.querySelector(".overlay");
var pageContent = document.querySelector("#content");
var toggleSwitch = document.querySelector(".darkbtn");
var title = document.querySelector("#courseName");
var description = document.querySelector("#courseDescription");
var code = document.querySelector("#courseCode");
const remove = document.querySelector('.js-close')

var courses = [];

var tbody = document.getElementById('tbodyy');
var pageBody = document.getElementById('pageBody');

var type
var index

// window.onload = () => {
//     alert('Note: All data clears on reload');
// }


toggleSwitch.addEventListener('click', () => {
    // // console.log(document.styleSheets.item(0).href.replace('style.css', 'dark.css'));
    // document.styleSheets.item(0).href.replace('style.css', 'dark.css')
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'dark.css')
    } else {
        theme.setAttribute('href', 'style.css')
    }
})

function displayCourses() {
    // tbody.innerHTML="";
    var htmlCode = "";
    var bodyCode =""

    for (let i = 0; i < courses.length; i++) {
        htmlCode+= `<tr> 
        <td> ${courses[i].nameOfCourse} </td> 
        <td> ${courses[i].descriptionOfCourse} </td> 
        <td> ${courses[i].codeOfCourse} </td>
        <td><i class="fas fa-edit" onclick=edit(${i})></i></td>
        <td><i class="fas fa-minus-circle" onclick=del(${i})></i></td> 
        </tr>`; 
        bodyCode+= `<tr> 
        <td> ${courses[i].nameOfCourse} </td> 
        <td> ${courses[i].descriptionOfCourse} </td> 
        <td> ${courses[i].codeOfCourse} </td> 
        </tr>`; 
    }
    tbody.innerHTML = htmlCode;
    pageBody.innerHTML = bodyCode;
    console.log('hi');
}
function removeAlert() {
    alertt.classList.remove("alerting")
}

function display() {
    if (title.value !== null && description.value !== null && code.value !== null && type !== 'edit') {
        var course = {nameOfCourse: title.value, descriptionOfCourse: description.value, codeOfCourse: code.value};
        courses.push(course);
        displayCourses();
    }
    else if (type =='edit') {
        const newObj = {nameOfCourse: title.value, descriptionOfCourse: description.value, codeOfCourse: code.value};
        courses.splice(index, 1, newObj);
        displayCourses();
        var alertt = document.getElementById('alertt');
        alertt.innerHTML="Course Edited"
    }
    title.value="";
    description.value="";
    code.value="";
    var alertt = document.getElementById('alertt');
    alertt.classList.add("alerting");
    window.setTimeout(removeAlert,3000);
}

function edit(theIndex) {
        let i = theIndex;
        title.value = courses[i].nameOfCourse;
        description.value = courses[i].descriptionOfCourse;
        code.value = courses[i].codeOfCourse; 
    type = 'edit';
    index = i;
}

function del(theIndex) {
    let i = theIndex;
    courses.splice(i,1);
    displayCourses();
    var alertt = document.getElementById('alertt');
    alertt.innerHTML="Course Deleted"
    alertt.classList.add("alerting");
    window.setTimeout(removeAlert,3000);
}

function clearAll() {
    // console.log(courses.values);
    courses = [];
    displayCourses()
}
function preview() {
    page.classList.add('show');
}
remove.addEventListener('click', () =>{
    page.classList.remove('show')
})
// function download() {
//     console.log(courses);
// }
function download() {
    var doc = new jsPDF();  //create jsPDF object
     doc.fromHTML(pageContent), // page element which you want to print as PDF
    //  
     doc.save("courses.pdf"); // save file name as courses.pdf
    //  console.log('heuu')
   }