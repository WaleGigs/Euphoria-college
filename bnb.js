function donateopen(){

    let loading = document.getElementById("modal-loading");
    loading.style.display = "block";

}

function openidmodalone(){

    let modalclass = document.getElementsByClassName("cryptomodal")[0]
    let crypto_type = document.getElementsByClassName("crypto_type")
    let first = document.getElementById("idfirst")
    let second = document.getElementById("idsecond")

    if (modalclass.style.display === "none"){
        modalclass.style.display = "block";
    }else if (modalclass.style.display === "block"){
        modalclass.style.display = "none"
    }

}

function openidmodal(){
    
    let idmodal = document.getElementById("idmodal")
    let idclass = document.getElementsByClassName("idmodal")[0]
    let idinput = document.getElementById("identitybox")
    let first = document.getElementById("idfirst")
    let second = document.getElementById("idsecond")

    let loading = document.getElementById("modal-loading");
    loading.style.display = "block"

    if (idclass.style.display === "none"){
        idclass.style.display = "block";
    }else if (idclass.style.display === "block"){
        idclass.style.display = "none"
    }

    if(idinput.value === "Individuals"){
        first.style.backgroundColor = "#dfe4e9";
        second.style.backgroundColor = "#fff";
    }else if(idinput.value === "Company"){
        second.style.backgroundColor = "#dfe4e9";
        first.style.backgroundColor = "#fff";
    }

}

function openmodalthree(){

    let modal = document.getElementsByClassName("nemodal")[0]
    let networktype = document.getElementById("networktype")

    if (modal.style.display === "none"){
        modal.style.display = "block";
    }else if (modal.style.display === "block"){
        modal.style.display = "none"
    }

}

function openidmodaltwo(){
    
    let idmodal = document.getElementById("samodal")
    let samclass = document.getElementsByClassName("samodal")[0]
    let idinput = document.getElementById("Sofbox")
    let first = document.getElementById("firstsof")
    let second = document.getElementById("secondsof")
    let third = document.getElementById("thirdsof")
    let fourth = document.getElementById("fourthsof")
    let fifth = document.getElementById("fifthsof")
    let sixth = document.getElementById("sixthsof")
    let seventh = document.getElementById("seventhsof")

    if (samclass.style.display === "none"){
        samclass.style.display = "block";
    }else if (samclass.style.display === "block"){
        samclass.style.display = "none"
    }
    

    if(idinput.value === "Salary"){
        first.style.backgroundColor = "#dfe4e9";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#fff";     
    }else if(idinput.value === "Dividend"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#dfe4e9";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#fff";
    }else if(idinput.value === "Shares"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#dfe4e9";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#fff";
    }else if(idinput.value === "Real estate"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#dfe4e9";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#fff";
    }else if(idinput.value === "Loan"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#dfe4e9";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#fff";
    }else if(idinput.value === "Lottery Wins"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#dfe4e9";
        seventh.style.backgroundColor = "#fff";
    }else if(idinput.value === "Inheritance"){
        first.style.backgroundColor = "#fff";
        second.style.backgroundColor = "#fff";
        third.style.backgroundColor = "#fff";
        fourth.style.backgroundColor = "#fff";
        fifth.style.backgroundColor = "#fff";
        sixth.style.backgroundColor = "#fff";
        seventh.style.backgroundColor = "#dfe4e9";
    }

}

function idclickedin(){
    let idmodal = document.getElementById("idmodal")
    let idinput = document.getElementById("identitybox")

    idinput.value = "Individuals";
    idmodal.style.display = "none";
}

function idclickedco(){
    let idmodal = document.getElementById("idmodal")
    let idinput = document.getElementById("identitybox")

    idinput.value = "Company";
    idmodal.style.display = "none";  
}



function copytoclipboard(){

    let copyText = document.getElementById("address");
    let copyalert = document.getElementById("copyalert");
    let copyal = document.getElementsByClassName("copyall")

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.innerHTML);

    //iosCopyToClipboard(copyalert)

    // copyal.style.display = "flex";

    // setTimeOut(function() {
    //     $( "#copyalert" ).dialog( "close" )
    // }, 5000);

    $("#copyalert").show();
        setTimeout(function() {
            $(".copyall").fadeOut(1000);
    }, 2000);

}

function iosCopyToClipboard(el) {
    var oldContentEditable = el.contentEditable,
        oldReadOnly = el.readOnly,
        range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
}

$(".rone").bind("click", function(){
    var divs = $(".rone");
    let idmodal = document.getElementById("cryptomodal")
    let crypto_type = document.getElementById("crypto_type")
    let crplogo = document.getElementById("crplogo").src = "img/bnb.svg";
    crypto_type.innerHTML = "BNB";
    idmodal.style.display = "none"; 

    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    cryinput.value = "";
    usdinput.value = "";

    cryptotype(crypto_type.innerHTML);
});
$(".rtwo").bind("click", function(){
    var divs = $(".rtwo");
    let idmodal = document.getElementById("cryptomodal")
    let crypto_type = document.getElementById("crypto_type")
    let crplogo = document.getElementById("crplogo").src = "img/eth.svg";
    crypto_type.innerHTML = "ETH";
    idmodal.style.display = "none"; 

    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    cryinput.value = "";
    usdinput.value = "";

    cryptotype(crypto_type.innerHTML);
});
$(".rthree").bind("click", function(){
    var divs = $(".rthree");
    let idmodal = document.getElementById("cryptomodal")
    let crypto_type = document.getElementById("crypto_type")
    let crplogo = document.getElementById("crplogo").src = "img/btc.svg";
    crypto_type.innerHTML = "BTC";
    idmodal.style.display = "none";

    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    cryinput.value = "";
    usdinput.value = "";
    
    cryptotype(crypto_type.innerHTML);
});


$(".sof").bind("click", function(){
    var divs = $(".sof");
    var curIdx = divs.index($(this));
    // $(".item").addClass("active")
    //txtclick(curIdx,curIdx);
    // alert(curIdx);
    var fff = divs.get(curIdx).innerHTML;
    let idmodal = document.getElementById("samodal")
    let idinput = document.getElementById("Sofbox")
    idinput.value = fff;
    idmodal.style.display = "none"; 
    //alignpastedrawer(fff);
    
});

$(".nof").bind("click", function(){
    var divs = $(".nof");
    var curIdx = divs.index($(this));
    // $(".item").addClass("active")
    //txtclick(curIdx,curIdx);
    // alert(curIdx);
    var fff = divs.get(curIdx).innerHTML;
    let modal = document.getElementById("nemodal")
    let input = document.getElementById("networktype")
    input.innerHTML = fff;
    modal.style.display = "none"; 
    //alignpastedrawer(fff);

    let addresstype = document.getElementById("addresstype");
    

    
    let address = document.getElementById("address");

    if(input.innerHTML === "Binance Chain (BEP2)"){
        let barcode = document.getElementById("barcode").src = "img/bnbbar.png";
        address.innerHTML = "bnb1wmjpf63nks7tm6ejuhrl9sva7uyarhdy8utsj6";
        addresstype.innerHTML = "Send only BNB to this deposit address";
    }else if(input.innerHTML === "Binance Smart Chain (BEP20)"){
        let barcode = document.getElementById("barcode").src = "img/smartbnb.png";
        address.innerHTML = "0xb5E6ECdCA8b5cc6e182D1f500a625D619775ca4d";
        addresstype.innerHTML = "Send only BNB to this deposit address";
    }


    
});

//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  let modal = document.getElementsByClassName("idcomodal")[0];
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.onclick = function(event) {
    let modal = document.getElementsByClassName("idcomodal")[0];
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function cryptotype(crp){
    
    let crypto = crp;
    //alert(crypto);
    return crypto;
}


function calculatecry() {
    let crypto_type = document.getElementById("crypto_type")
    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    let cryptotype = crypto_type.innerHTML;

    if(cryptotype === "BNB"){

        usdinput.value = cryinput.value * 395.55;

    }else if(cryptotype === "ETH"){

        usdinput.value = cryinput.value * 2906.27;

    }else if(cryptotype === "BTC"){

        usdinput.value = cryinput.value * 40963.10;

    }

}

function calculateusd() {
    let crypto_type = document.getElementById("crypto_type")
    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    let cryptotype = crypto_type.innerHTML;

    if(cryptotype === "BNB"){

        cryinput.value = usdinput.value / 395.55;

    }else if(cryptotype === "ETH"){

        cryinput.value = usdinput.value / 2906.27;

    }else if(cryptotype === "BTC"){

        cryinput.value = usdinput.value / 40963.10;

    }
}

function gotosecond(){
    let firstbody = document.getElementById("firstbody")
    let secondbody = document.getElementById("secondbody");

    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    

    if (cryinput.value === "" || usdinput.value === "" ){

        $("#nodoalert").show();
        setTimeout(function() {
            $(".nodoall").fadeOut(1000);
    }, 2000);

    }else if(!(cryinput.value > 0) || !(usdinput.value > 0) ){

        $("#nodoalert").show();
        setTimeout(function() {
            $(".nodoall").fadeOut(1000);
    }, 2000);


    }else{
        let pagetwo = document.getElementById("pagetwo").src = "img/Recon.png";
        firstbody.style.display = "none";
        secondbody.style.display = "block";
    }


}

function goacktofirst(){
    let firstbody = document.getElementById("firstbody")
    let secondbody = document.getElementById("secondbody");
    
    secondbody.style.display = "none";
    firstbody.style.display = "block";
    
    let pagetwo = document.getElementById("pagetwo").src = "img/Rec.png";


}

function goacktosecond(){
    let thirdbody = document.getElementById("thirdbody")
    let secondbody = document.getElementById("secondbody");
    
    thirdbody.style.display = "none";
    secondbody.style.display = "block";
    
    let pagethree = document.getElementById("pagethree").src = "img/Rec.png";


}

function gotothird(){

    let pagethree = document.getElementById("pagethree").src = "img/Recon.png";

    let firstbody = document.getElementById("firstbody")
    let secondbody = document.getElementById("secondbody");
    let thirdbody = document.getElementById("thirdbody");

    let donation_amount = document.getElementById("donation_amount");
    let donation_type = document.getElementById("donation_type");
    let cryptoin = document.getElementById("cryptoin");

    firstbody.style.display = "none";
    secondbody.style.display = "none";
    thirdbody.style.display = "block";

    let cryptotype = crypto_type.innerHTML;

    let bnbnet = document.getElementById("bnbnet");
    let ethnet = document.getElementById("ethnet");
    let btcnet = document.getElementById("btcnet");

    let address = document.getElementById("address");
    let addresstype = document.getElementById("addresstype");

    if(cryptotype === "BNB"){

        bnbnet.style.display = "block"
        ethnet.style.display = "none"
        btcnet.style.display = "none"

        donation_amount.innerHTML = cryptoin.value;
        donation_type.innerHTML = "  " + cryptotype;
        addresstype.innerHTML = "Send only BNB to this deposit address";


    }else if(cryptotype === "ETH"){

        bnbnet.style.display = "none"
        ethnet.style.display = "block"
        btcnet.style.display = "none"

        let barcode = document.getElementById("barcode").src = "img/ethbarcode.png";
        address.innerHTML = "0xb5E6ECdCA8b5cc6e182D1f500a625D619775ca4d";
        addresstype.innerHTML = "Send only ETH to this deposit address";

        donation_amount.innerHTML = cryptoin.value;
        donation_type.innerHTML = "  " + cryptotype;

    }else if(cryptotype === "BTC"){

        bnbnet.style.display = "none"
        ethnet.style.display = "none"
        btcnet.style.display = "block"

        let barcode = document.getElementById("barcode").src = "img/btcbarcode.png";
        address.innerHTML = "bc1qluzjkwfvp5dqpjxnhlz7qxrvhg57r3jxfhv8n9";
        addresstype.innerHTML = "Send only BTC to this deposit address";

        donation_amount.innerHTML = cryptoin.value + " ";
        donation_type.innerHTML = "  " + cryptotype;

    }else{
        addresstype.innerHTML = "Send only BNB to this deposit address";
    }


}


function removemodals(){

    let firstbody = document.getElementById("firstbody");
    let secondbody = document.getElementById("secondbody");
    let thirdbody = document.getElementById("thirdbody")
    let fourthbody = document.getElementById("fourthbody")

    firstbody.style.display = "block";
    thirdbody.style.display = "none";
    secondbody.style.display = "none";
    fourthbody.style.display = "none";

    let modal = document.getElementById("nemodal")
    modal.style.display = "none";

    let idmodal = document.getElementById("samodal")
    idmodal.style.display = "none";

    let pagetwo = document.getElementById("pagetwo").src = "img/Rec.png";
    let pagethree = document.getElementById("pagethree").src = "img/Rec.png";
    let cryinput = document.getElementById("cryptoin")
    let usdinput = document.getElementById("usdin")

    cryinput.value = "";
    usdinput.value = "";

    let idmodalf = document.getElementById("cryptomodal")
    let crypto_type = document.getElementById("crypto_type")
    let crplogo = document.getElementById("crplogo").src = "img/bnb.svg";
    crypto_type.innerHTML = "BNB";
    idmodalf.style.display = "none"; 

}

function confirm(){

    let thirdbody = document.getElementById("thirdbody");
    let fourthbody = document.getElementById("fourthbody");

    let donation_amount = document.getElementById("donation_amount");
    let donation_type = document.getElementById("donation_type");
    let donation_amountb = document.getElementById("donation_amountb");
    let donation_typeb = document.getElementById("donation_typeb");
    let cryptoin = document.getElementById("cryptoin");

    donation_amountb.innerHTML = donation_amount.innerHTML;
    donation_typeb.innerHTML = donation_type.innerHTML;

    thirdbody.style.display = "none";
    fourthbody.style.display = "block";
    

    let loading = document.getElementById("modal-loading");
    loading.style.display = "none"

    

}