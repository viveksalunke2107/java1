class calce {
    constructor (a,b) {
        this.a=a;
        this.b=b;
    }
    add() {
        return this.a+this.b;
    }

    sub() {
        return this.a-this.b;
    }

    mul() {
        return this.a*this.b;
    }

    mod() {
        return this.a%this.b;
    }

    div() {
        return this.a/this.b;
    }


}

function Calculate (){
    var x = Number(document.getElementById("v1").value);
    var y = Number(document.getElementById("v2").value);
    var choice = document.getElementById("optr").value;

    let obj = new calce(x,y);
    switch(choice){
        case '+':{
            document.getElementById("ans").innerHTML=obj.add();
            break;
        }

        case '-':{
            document.getElementById("ans").innerHTML=obj.sub();
            break;
        }

        case '*':{
            document.getElementById("ans").innerHTML=obj.mul();
            break;
        }

        case '%':{
            document.getElementById("ans").innerHTML=obj.mod();
            break;
        }

        case '/':{
            document.getElementById("ans").innerHTML=obj.div();
            break;
        }
    }
}