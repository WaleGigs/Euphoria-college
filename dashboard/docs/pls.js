let mad = []
    let pin1 = document.getElementById("input1")
    let pin2 = document.getElementById("input2")
    let pin3 = document.getElementById("input3")
    let content = document.getElementById("co")
    add()
   
    function save() {
    
       
        let data = {
        name: pin1.value, 
        price: pin2.value,
        description: pin3.value,

    }
    mad.push(data)
    localStorage.setItem("info", JSON.stringify(mad)) 
    clear()
    add()
    }
    function clear() {
        content.innerHTML = ""
    }
    function add() {
        let ref = localStorage.getItem("info")
        
        let coref = JSON.parse(ref)
        if (coref != null){
            are = coref
        }
        for (let index = 0; index < coref.length; index++) {
            let element = coref[index]
            content.innerHTML +=  `<div class="hwfr">
                    <div class="fit">
                <img src="${element.name}">
                <h4>${element.price}</h4>
                <p>$ ${element.description}</p> </div>    </div>`     
        }
       
        
    }
    function del(event, index){
      mad.shift(index, 1)
        clear()
        console.log(mad);
    }