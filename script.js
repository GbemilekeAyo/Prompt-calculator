

function myFunction() {
    var x,y,z,oper;
    x=prompt("Type first number");
    y=prompt("Type second number");
    oper=prompt("Type an operator");



    if(oper=="+"){
        z=Number(x)+Number(y);
    }
    
    if(oper=="-"){
        z=Number(x)-Number(y)
    }
    if(oper=="/"){
        z=Number(x)/Number(y)
    }
    if(oper=="*"){
        z=Number(x)*Number(y)
    }


    else if(!oper){
        z="Error"
    }
    else if(!x){
        z="Error"
    }
    else if(!y){
        z="Error"
    }
     

alert (z);
myFunction();

    
