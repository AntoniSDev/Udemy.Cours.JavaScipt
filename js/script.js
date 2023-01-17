/*

booleans


var x = 5;
var y = 12;

console.log(true && true)   et et
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)   ou ou
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)

*/



















/*CONDITIONS*/
/*
if(Condition1)
{
    console.log("execute ce code")
}


else
{
    console.log('alors execute ce code là!')
}

else if(condition2)
{
    console.log("lacondition1 est false mais la 2 l'est")
}

*/

/*
var speed = 30

if(speed<80)
{
    if(speed<50)
    {
        console.log('accelere un peu');
    }
    else
    {
        console.log('tu roules à la bonne vitesse');
    }
}


else if(speed<100)
{
    console.log("ralentis un peu");
}

else
{
    console.log("tu roules trop vite");
}
*/









/*syntaxe du switch

switch(variable)
{
    case 1:
        break;
    case 2:
        break;

    default:

}

*/

/*
var favotitecolor = "red" ;

switch(favotitecolor)
    {
        case "blue":
            console.log("wow bleu trop bien")
            break;
        case "red":
            console.log('je veux du rouge')
        break;
        default:
            console.log('je sais pas quelle couleur')
    }
*/


















/* boucles, tantque , alors */
/*

while permet de metre une condition tantque

var number = 0
while(number<3)
{
    console.log(number);
    number++
}
*/

/* do while permet de commencer à faire avant la condition 

var number= 0;
do{
    console.log(number);
    number++;
}
while(number<3)

*/

/* for en plusieurs parties   premiere etape initialiseer la variable, 2eme etape condition, 3eme etape une fois condition verifiée, executer le code et ensuite la partie 3, puis revérifie la condition */

/*
for(var number = 0; number < 5; number++)
{
    console.log(number)
}
*/














/* Fonctions */
/*
function name(parametres)
{
    code à executer
    return Result;
}
*/
/* déclarer une fonction */

function multiply(number1,number2)
{
    return number1*number2
}

/* execution de la function */


var a = 5;
var b = 6;

var result = multiply(a,b);

console.log(result);















