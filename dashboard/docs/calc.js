 
      const arr=[]
const big= document.getElementById('book')
const content=document.getElementById('cent')
const credit=document.getElementById('credit') 
 const ca1=document.getElementById('cat') 
 const ca2=document.getElementById('bat') 
 const exe=document.getElementById('exam')
 const fed = document.getElementById("fade")
 const wale = document.querySelector("#wale")
 const  ken = document.querySelector("#ken")


//  let result;
//  let lock;
function save(){

 let data={
   course:big.value,
   CAT1:ca1.value,
   CAT2:ca2.value,
   Exam:exe.value,
   CREDIT:credit.value ,
   Total:Number( `${ca1.value}`) + Number( `${ca2.value}`) + Number( `${exe.value}`),
   Grade:function(){
   
    if(this.Total >=70){
     
      return "A"
    }else if(this.Total<70 && this.Total >= 60 ){
      return"B"
    }
    else if(this.Total<60 && this.Total >=50 ){
      return "C"
    }

    else if(this.Total <50 && this.Total >= 40 ){
      return "D"
    }

    else if(this.Total <40 && this.Total >=30 ){
      return "E"
    }

    else if(this.Total<=30 ){
      return"F"
       }
       content.innerHTML += ""
   },



   GradePoint:function(){
    if(this.Total >=70){
      return 5 * this.CREDIT
    }else if(this.Total>=60 && this.Total < 70 ){
     return 4 * this.CREDIT
    }
    else if(this.Total>=50 && this.Total < 60 ){
    return 3 * this.CREDIT
    }

    else if(this.Total >=40 && this.Total < 50 ){
    return 2 * this.CREDIT
    }

    else if(this.Total >=30 && this.Total < 40 ){
     return 1 * this.CREDIT
    }

    else if(this.Total<=30 ){
        return 0 
       }

       
   },
 }
 
 
  


 arr.push(data)
  content.innerHTML=""
 
 
 add()
 clr()
}

function clr(){
    credit.value=""
    ca1.value=""
    ca2.value=""
    exe.value="" 
    
}

function add(){
  let king = 0
let mind = 0

 for(let i = 0; i < arr.length; i++) {
    let item=arr[i]
    king+= parseInt( `${item.CREDIT}`);
    wale.innerHTML = king;
    mind+= parseInt( `${item.GradePoint()}`);
  ken.innerHTML = mind;
    
   
    fed.innerHTML= "GPA:" + parseInt( `${item.GradePoint()}`) / parseInt( `${item.CREDIT}`).toFixed(2);
    content.innerHTML+=`
    <tr class="text-white">
    <th scope="row">${i + 1}</th>
    <td>${item.course}</td>
    <td>${item.CAT1}</td>
    <td>${item.CAT2}</td>
    <td>${item.Exam}</td>
    <td>${item.Total} </td>
    <td>${item.Grade()} </td>
    <td>${item.CREDIT}</td>
    <td>${item.GradePoint()} </td>
    
    </tr>
    `
    
 }  
 
}
