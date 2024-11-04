/*2 TYPES OF CONVERSION  
(1) IMPLICIT TYPE CONVERSION (TYPE COERCION): 
->AUTOMATICALLY DONE DURING CODE EXECUTION CONVERSION OF ONE DATA TYPE TO ANOTHER.*/
 
let nmbr = 12;
let str = "12" ; 
console.log(nmbr + str);  // 1212


/* LOOSE EQUALITY "=="    /VS/    STRICT EQUALITY"==="  
#NOTE: WHEN USING "==" DOUBLE EQUALS LOSSELY EQUALITY IT PERFORMS
-> IMPLICT TYPE COERCION CONVERSION IN JAVASCRIPT.

 (2) EXPLICIT TYPE CONVERSION (TYPE CASTING) : DONE MANUALLY  */

//  STRING CONVERSION..

/* let value = true ;
alert(typeof value);

value = String(value);
alert(typeof value);
*/

/*TYPE CONVERSION..YOU CAN CONVERT NUMBER TO  STRING BY USING.. String()
and   .toString method*/

let convert = 123 ;
let converting = String(convert);
console.log(converting);
console.log(typeof converting)

//

let num = 100;
let strFromNum = String(num);
console.log(strFromNum); // Output: "100"
console.log(typeof strFromNum); // Output: "string"

// .toString() ...coverting number to string

let toStringIS = 500; 
let converted = toStringIS.toString();
console.log(converted);
console.log(typeof converted);

//Numeric Conversion: MATHMATICAL NUMBER FUNCTIONS EXPRESSION 
//AUTOMATICALLY CONVERTED TO NUMBER..

console.log("6" / "3");

// Number()  method to convert string to number..

let numberIs = "123";
let numbrToStr = Number(numberIs);
console.log(typeof numbrToStr);
console.log(numbrToStr);

// 
let conversion  = "suman";
 let  weHave  = Number(conversion);
alert(typeof weHave);
alert(weHave);

//

alert(Number(true));
alert(Number(false));