var clickOperator=document.querySelectorAll(".operator");
var place=document.querySelector(".place");
var index='';
clickOperator.addEventlistener('click',(e)=>{
    // index=place.innerHTML;
    if(e=='%'){
        place.innerHTML='7'
    }
})
