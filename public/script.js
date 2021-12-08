var attempt=10;
var ran=Math.floor(Math.random() * 100)+1 ;


window.onload  = function(){
    document.getElementById("no").innerHTML = attempt;
    document.querySelector("#one").hidden = false;
    document.querySelector("#two").hidden = true;
    document.querySelector("#three").hidden = true;
}

function compare(){
    attempt=attempt-1;
    document.getElementById("no").innerHTML = attempt;
    var uans=document.getElementById("number").value;
    // document.getElementById("msg").innerHTML=uans;
    if(attempt<0)
    {
        document.querySelector("#one").hidden = true;
        document.querySelector("#two").hidden = true;
        document.querySelector("#three").hidden = false;
        document.querySelector("#msg").hidden = true;
        document.querySelector("#at").hidden = true;
    }
    console.log(msg);
    if(uans<ran){
        document.getElementById("msg").innerHTML="the guessed number is small 😐";
    }
    if(uans>ran){
        document.getElementById("msg").innerHTML="the guessed number is large 😐";
    }
    if(uans==ran){
        document.querySelector("#one").hidden = true;
        document.querySelector("#two").hidden = false;
        document.querySelector("#three").hidden = true;
        document.querySelector("#msg").hidden = true;
        document.querySelector("#at").hidden = true;
    }
}