$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});





let users = [];
let selected_users = []

function fetchData
(){
    fetch("./db.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            users = data;
            displayUsers()
        })
        .catch(err => {
            console.log(err)
        })
        flocks()
}
fetchData()


function Search(){
    const word = document.getElementById('word');
    selected_users = users.filter((item) => {
        return  String(`${item.name},
        ${item.ID},
        ${item.Score},
        ${item.go},
        ${item.location}`).toLowerCase().indexOf((word.value).toLowerCase()) >= 0;
    }); 
    displaySelectedUsers()
    
   
}

function checkUser(){
    console.log(users)
}

function displayUsers(){
    document.getElementById("show").innerHTML = ""
    users.forEach((user, index) => {
        document.getElementById("show").innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.ID}</td>
                <td>${user.location}</td>
                <td>${user.Score}</td>
               
                
            </tr>
        `
    })
}

function displaySelectedUsers(){
    document.getElementById("show").innerHTML = ""
    selected_users.forEach((user, index) => {
        document.getElementById("show").innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.ID}</td>
                <td>${user.location}</td>
                <td>${user.Score}</td>
               
              
            </tr>
        `
    })
}


function flocks(){
    for(i= 0; i > selected_users.length; i++){
        let item =  selected_users[i]
        document.querySelector("#water").innerHTML=`show ${i} result for ${word.value}`
    }
}
flocks()