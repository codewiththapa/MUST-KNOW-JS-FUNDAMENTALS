// 2024 NOVEMBER # MOST IMPORTANT JAVASCRIPT FUNDAMENTALS TOPICS ..
// THE JAVASCRIPT DEVELOPER MUST KNOW TO START A CARRIER AS A WEB DEVELOPER 
//  HERE WE HAVE COVERED...

//  (1): JS VARIABLES .. VARIABLES DECLARATIONS AND INITILIZATIONS
//  (2): RESERVED KEYWORDS (LET,CONST,VAR) USED TO DECLARE VARIABLES
//  (3): DIFFERENCES BETWEEN LET,VAR,CONST 
//  (4): ASSIGNMENT VS MUTATION 
//  (5): PRIMITIVE (VALUES)  VS NON-PRIMITIVE (REFERNCE VALUES)
//  (6): VALUES VS CODES
//  (7): JS STATEMENTS VS EXPRESSION WHY IT IS IMPORTANT
//  (8): INTERACTIONS OF JS VALUE WITH CODES
//  (9):  PRIMITIVE (IMMUTABLE) VS NON-PRIMITIVE (MUTABLE)
// (10): DATA TYPES IN JS
// (11): OPERATORS AND OPERAND IN JS
// (12): DIFFERNT TYPES OF OPRETORS (AIRTHMETIC,LOGICAL,COMPARISON)
// (13): JS VALUES ARE : 1. NUMBERS  2. STRINGS  3. OBJECTS
// (14): COMMA OPERATORS(,) HOW IT WORKS IN JS 
// (15):  Q.HOW JS PRINTS CODE FROM  LEFT TO RIGHT  OR RIGHT TO LEFT  ?
// (16): JS STATEMENTS ARE: CONTROL FLOW (IF,ELSE) , LOOPS(FOR,WHILE), 
//        VARIABLES DECLARATIONS, CURLY BRACES AND FUNCTION CALL()
// (17): TYPE CONVERSION  VS  TYPE CORCEION  VS  TYPE CASTING




const str = ' Hello my dear friend.I am Mr. Suman';
console.log(`${str} total length is : ${str.length}`);

// let x = 2;
// x = x+2;
// console.log(x);

let y = 1;
y += 2;
console.log(y);

// string 

let myString = 'alpha';
myString += 'bet';
console.log(myString);


/* Js expression  vs statements : Expressions = produces value:

  These are all expression:
  // 1 -> produce 1
  //'hello' -> produce result 'hello'
  //5 * 10  -> produce result 50
  // isHappy ? '😁' : '🙄'  -> result 'true' or 'false'
  // [1,2,3].pop() -> 3

How many expressions are here:  (5+2+3)+(5*12)   = 7 expression


Statements : JS program is the sequence of statements.
each statement is an instructions for computer  to do something.

let hi = //  expression slots  // ;

let hi = 1;
let hi ="string";
let hi = isHappy ? "🙄" : "😁"
let hi = [1,2,3].pop()        


// while('hello'){


// }

// To check out whether it is expression or statements?

console.log(2+3);

/* console.log(for(let i = 0 ; i < 5 ; i = i+1){
   console.log(i);
})
      Here this is a syntax error because  for loop is a statement in js  */
/*
if(let variables = true ){   here it will be invalid because conditional statements need boolean expression inside parentheses
   console.log('hi there')
}
*/

function loop (){

// function is a first class citizen: can be assigin in variables, pass as a args.

console.log(
   
   (()=>{
   return 2+10})
   ()

   );   

//function as a expression iife

console.log(
   
   (function declare(){
   return(100+434);
}())

   )*/


//function is an expression itself
 console.log(

 (function  (){
   return (true ,'or', false)
 })()

//  );


// // comma operators and operand

let operator = (5+2)*(4+2);
console.log(operator);

// comma seprator operators prints from left to right..

console.log(2,3,4,5,5);
//
console.log((12,13,4,5,6));

console.log('suman',"suman","suman")

//

console.log(('suman',"thapa",123))
//

console.log(['suman',"thapa",123])

// //

console.log({name:'suman',name:"thapa", name:123})

//

console.log({name:['suman',"thapa", 123]})

//

console.log({name:'suman', secondname:"thapa", num:123});

console.log("suman" + "thapa")
console.log(("suman","thapa"))
//
console.log((12+13+14+'suman'))

//

function  is () {
   return (('suman' ,'thapa'))
};
console.log(is())

//

function  is2 () {
   console.log(('suman' ,'thapa'))
};
is2 ()

// in array comma operator

function  is3 () {
   return ['suman' ,'thapa']
};
console.log(is3())

// Array , objects , functions are expressions in js which produce values
// statements set of instructions which performs actions but will not return value
// Values and codes(statements/instructions) in javascripts

// let x = 2; 
// x = (x++ , x);
// console.log(x);

// x =(2,3);
// console.log(x);

let x = 1;

x = (x++, x);

console.log(x);
// Expected output: 2

x = (2, 3);

console.log(x);

//

let c; 
for ( c= 10; c <13; c++) {
    console.log(c); 
}

//
let loop2 = 12
for(let loop2 = 0 ; loop2 < 4 ; loop2 ++){
   console.log(loop2);
}
console.log(loop2);

//
 let value;
if(value === false){
   'use strict'
   console.log('hi there')
}else{
   console.log('falsey')
};

//
 let ab = 1 ;
 let bc = 1;

 if(ab && bc){
   console.log('logical and')
 }

// //

let xy ; 
for (let xy = 1;
   xy<4; 
   xy++) console.log(xy)
//

   alert ( 2+
      3+
      10)

//

alert('hi dear');
[1,2].forEach(alert)

alert('hi dear')
[1,2].forEach(alert)

We can also declare multiple variable in one line..
 "use strict"
let name = "suman" ; country = "nepal"; age=30;
console.log(name,country,age);

let user = "thapa" , color = "black" , designation = "enginner";
console.log(user);

let num = 12 
   , str = "thapa"
   , boolean = true 
   console.log(num,str,boolean);

//copying data from one variable to another

let data1 = "02867102"
 console.log(data2 = data1);
 data2 = "new value is 19951709"
 console.log(data1)
console.log(data2);


//
num = 12;
alert(num);

// 

const COLOR_RED = "#FOO"
const COLOR_GREEN = "#0F0"
console.log(COLOR_RED);

/* Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”). */

let admin;
let name = "jhon"
admin = name
alert(admin)

// WhaT IS VALUE IN JAVASCRIPT? VALUE IS THE FUNDAMENTAL CONCEPTS IN JS..

//VALUES ARE "STRINGS" AND NUMBERS(1223) IN JS AND ALSO OBJECTS AND FUNCTIONS ARE VALUES.
// VALUES = DATA TYPES = DATA = EXPRESSIONS = OUTPUT IN JS
//Variables Declarations and initilazions in javascript 

//THERE ARE A LOT WHICH ARE NOT VALUES : PIECE OF CODE -> IF STATEMENT , LOOPS, 
//VARIABLES DECLARATION ARE NOT VALUES
/* THERE IS A MISCONCEPTION THAT VALUES BUT ITS NOT , VALUES ARE IN SEPARATE Space
but we NEED TO UNDERSTAND VALUES INTERACTS WITH OUR CODE.

#NOTE: IN JS VALUES(EXPRESSION OR DATA TYPES) INTERACTS WITH CODES(STATEMENTS)
#NOTE: IN JS COMMA,VARIABLES DECLARATIONS,CURLY BRACES{} ARE CODE = STATEMENTS

#NOTE: LIST OF INSTRUCTION = PROGRAM = CODE = STATEMENT   IN JS 

#NOTE: IN JS DATA TYPES = VALUES=PRIMITIVE,NONPRIMITVE DONOT EXIST INSIDE CODE
THEY EXIST IN SEPARATE SPACE

// UNDEFINED : unintentionally missing values
// NULL : intentionally missing values

/* #NOTE : IN JAVASCRIPT ->EXPRESSIONS ARE QUESTIONS THAT JAVASCRIPT CAN ANSWER
 E.G: IF WE QUESTION EXPRESSION " 2+2 " JS WILL ANSWER WITH VALUE 4  CONSOLE.LOG(4+4)

#NOTE: EXPRESSION ALWAYS RESULTS IN A SINGLE VALUE ..
E.G:  ASK J.S QUESTION "EXPRESSION" 2+2 IT WILL RESULTS TO A SINGLE VALUE "4"  */

// "ASSIGNMENT" AND "MUTATION" IN JS "CONST" KEYWORDS

/* Here, this is known as variable assignment 

const hi = 12;
hi = 1234;
console.log(hi);
*/

//  "  mutation(can change) "

const mute = {
   name : 'suman thapa'
}

console.log(mute.name = "magar_kto");  //name : properties changed

console.log(mute["name"]);    // changed
console.log(mute);            //object data types is mutable

/*let mute ={
   age :30;
}
console.log(mute)*/

// "Variables"  names as "labels" in javascript

let fruits = [ 'apple' , 'cheery' , 'banana'];   // here fruits is a label
   fruits = 12
   fruits = " i am a number"
   fruits = null


const books = [ 'java' , 'react' , 'nodejs'];   // here books is a label
   books = 12
   books = " i am a number"
   books = null


//#NOTE: PRIMITIVE "DATA TYPE" TYPES LIKE "NUMBERS"  AND "STRINGS" ->IMMUTABLE

   let numberIs = 12
    console.log(numberIs);   // value unchanged
   numberIs = 90 ;
   console.log(numberIs);

   let stringsIs = "immutable";
     console.log(stringsIs);    // string unchanged
      stringsIs = "immutable changed"
      console.log(stringsIs);


// ARRAY IS ALSO MUTABLE (CHANGE ABLE) DATA TYPE

  const mutable = Object.freeze([1,2,4,5,6]);
  mutable.push('string inserted');
  console.log(mutable);