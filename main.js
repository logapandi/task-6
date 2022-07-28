// if else ....
var val = 20;
if (val > 40){
    console.log("value is greateterthan 50");
}else{
    console.log("value is not greaterthan 50");//value is not greaterthan 40
}
//end......

// if else  using Array.....

var val = ["logu","vijay","alphonse"];
if (!val){
    console.log("given array is empty")
}else{
    console.log(val[2])//alphonse
}

//array is empty ....

var val =[];
if(!val.lenght){
    console.log("give array is empty");//given array is empty
}else{
    console.log(val[2])
}
//......
var val =[];
if(!val.lenght){
    console.log("given array is empty");//given array is empty
}else if (val[0] === "logu" ){
    console.log("haiii logu")
}else{
    console.log([1]);
}
//......
var val = ["logu","vijay","alphonse"];//0-logu , 1-vijay , 2- alphonse
if(!val.lenght){
    console.log("given array is empty")
} if (val[0] === "logu"){ // 0-logu
    console.log("hai logu"); // hai logu
}else{
    console.log(val[1]); 
}
//end.....
//nested if.....
var myName = "logu";
if (myName[0] === "l"){
    if (myName.length < 3){
        console.log(" name validation okay")
    }else{
        console.log("name validation failed")//name validation failed
    }
}else{
    console.log("name validation failed")
}
//end...

//switch conditions//////

//addition////

var operator = "+";
var num1 = 20;
var num2 = 30;
var result;

switch (operator){
case "+":
    result = num1 + num2//20+30 = 50
    break;
    case "-":
        result = num1 - num2//20-30
        break;
        case "*":
            result = num1 * num2//20*30
            break;
            case "/":
                result = num1 / num2//20/30 
                break;
                default:
                    result ="operator not defined" ;
}   
console.log(result)
//subtraction ///////////////
var operator = "-";
var num1 = 20;
var num2 = 30;
var result;

switch (operator){
case "+":
    result = num1 + num2//20+30
    break;
    case "-":
        result = num1 - num2//20-30 = -10
        break;
        case "*":
            result = num1 * num2//20*30 
            break;
            case "/":
                result = num1 / num2//20/30 
                break;
                default:
                    result ="operator not defined" ;
}   
console.log(result)
//////multiplication///////////////
var operator = "*";
var num1 = 20;
var num2 = 30;
var result;

switch (operator){
case "+":
    result = num1 + num2//20+30
    break;
    case "-":
        result = num1 - num2//20-30
        break;
        case "*":
            result = num1 * num2//20*30 = 600
            break;
            case "/":
                result = num1 / num2//20/30 
                break;
                default:
                    result ="operator not defined" ;
}   
console.log(result)
////////////division////////////////
var operator = "/";
var num1 = 20;
var num2 = 30;
var result;

switch (operator){
case "+":
    result = num1 + num2//20+30
    break;
    case "-":
        result = num1 - num2//20-30
        break;
        case "*":
            result = num1 * num2//20*30
            break;
            case "/":
                result = num1 / num2//20/30 = 0.66666666
                break;
                default:
                    result ="operator not defined" ;
}   
console.log(result)

/looping//////
//..................for ..............///////

var a = 20;
for(var i=0 ; i<=a ; i++) {
    console.log(i) //   0 t0 20 ....
}

          for loop using array...............///

var Name = ["logu","vijay","alphonse"]

for(var i=0 ; i<Name.length; i++){
    console.log(Name[i])  /// .....logu , vijay , alphonse///////////
}

//////...........while................///////////

var Name = ["logu", "vijay","alphonse"]

var i=0;
while(i<Name.length){
    console.log(Name[i])
    i++; ///.......logu vijay alphonse......//////
}

//do while ............///////////////

var Name = ["logu","vijay","alphonse"]
var i=0;
do{
    console.log(Name[i])
    i++;
}
    while(i< Name.length)///////......logu vijay alphonse.....////