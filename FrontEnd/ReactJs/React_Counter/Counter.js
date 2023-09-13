var a =0;



function reset(){

    a = 0 ;
    document.getElementById("show").innerHTML=0;

}
function min(){

    a--;
 document.getElementById("show").innerHTML=a;
}
function max(){
    
   
    a++;
 document.getElementById("show").innerHTML=a;

}
function initilize(){
    a=document.getElementById("inputt").value;
    a = parseInt(a)
    console.log(a)
    document.getElementById("show").innerHTML=a;
}