/*2 TYPES OF CONVERSION  
(1) IMPLICIT TYPE CONVERSION (TYPE COERCION): 
->AUTOMATICALLY DONE DURING CODE EXECUTION CONVERSION OF ONE DATA TYPE TO ANOTHER.*/

//Nullish coalescing (logical operator)   null ?? "string"    undefined ?? 123
// UNICODE (codepoint)(UTF-7 ASCII,UTF-8,UTF-16) object method to convert into string UTF-16 encoding in js for "string" and emojis 
// charAt()  at()     codePointAt()  vs charCodeAt()    
//  String.fromCodePoint()  vs    String.fromCharCode()  this helps to convert unicode characters to string and emojis.
// What is surrogate(proxy,substitut) pairs in unicode:  Surrogate pairs in unicode encoding:> some emojis , ancient scripts needed more than 16-bits characters to represent so these characters use 2 16-bits code points for encoding called surrogate pairs

//String: is a sequence of characters..    .length property of string is different than the array length.    length property returns the number of size of an objects like array and strings...  in strings invisible white spaces  and emojis lengths will be count differently than array.    string is used for textual data and is immutable imlicitly cannot change or modify ... if want to change we have to assign new value of string.

// Array : array is the collection of same data, items or elements :  array.length returns the number of elements it does not count white spaces.  array is an object and it is mutable.        Sparse(scatterd,holes,missing)  vs Dense array (regular normal array)

//  Turncating(removing,shortening)  Array :  removing the elements of array or modify the length of an array 
 
// typeof  unary operator

// Precedence and Associativity of js operators  (BODMAS(MATH) =  PEMDAS(JAVASCRIPT))
//P(PARENETHESES) E(EXPONENTION)  M(MULTIPLICATION) D(DIVISON)  A(ADDITION)  
//S(SUBTRACTION)
// Logic Gates (boolean Algebra) (Logical OR-gate, AND-GATE ,NOT-GATE)
//LOGICAL js operators (logical or ||  , logical AND && , logical not !)
//JS ARITHMETIC OPERTAORS :> CPU (ALU: ARITHMETIC AND LOGIC UNITS)

/* 2024 NOVEMBER # MOST IMPORTANT JAVASCRIPT FUNDAMENTALS TOPICS ..
THE JAVASCRIPT DEVELOPER MUST KNOW TO START A CARRIER AS A WEB DEVELOPER 
 HERE WE HAVE COVERED...

 (1): JS VARIABLES .. VARIABLES DECLARATIONS AND INITILIZATIONS
 (2): RESERVED KEYWORDS (LET,CONST,VAR) USED TO DECLARE VARIABLES
 (3): DIFFERENCES BETWEEN LET,VAR,CONST 
 (4): ASSIGNMENT VS MUTATION 
 (5): PRIMITIVE (VALUES)  VS NON-PRIMITIVE (REFERNCE VALUES)
 (6): VALUES VS CODES
 (7): JS STATEMENTS VS EXPRESSION WHY IT IS IMPORTANT
 (8): INTERACTIONS OF JS VALUE WITH CODES
 (9):  PRIMITIVE (IMMUTABLE) VS NON-PRIMITIVE (MUTABLE)
(10): DATA TYPES IN JS
(11): OPERATORS AND OPERAND IN JS
(12): DIFFERNT TYPES OF OPRETORS (AIRTHMETIC,LOGICAL,COMPARISON)
(13): JS VALUES ARE : 1. NUMBERS  2. STRINGS  3. OBJECTS
(14): COMMA OPERATORS(,) HOW IT WORKS IN JS 
(15):  Q.HOW JS PRINTS CODE FROM  LEFT TO RIGHT  OR RIGHT TO LEFT  ?
(16): JS STATEMENTS ARE: CONTROL FLOW (IF,ELSE) , LOOPS(FOR,WHILE), 
       VARIABLES DECLARATIONS, CURLY BRACES AND FUNCTION CALL()
(17): TYPE CONVERSION  VS  TYPE CORCEION  VS  TYPE CASTING
(18): OPERTOR PRECEDENCE VS ASSOCIATIVITY 
      #ASOCIATIVITY : 1) "LEFT-ORDER ASSOCIATIVITY"  2) "RIGHT-ORDER ASSOCITAVITY"    
(19): BODMAS = PEDMAS JAVASCRIPT RULES
      #NOTE: JS DIVISION/MULTIPLICATION HAS EQUAL PRECEDENCE SAME AS WITH ADD/SUB GOES.
             */

/*#NOTE:  STATIC TYPING   /VS/   DYNAMIC TYPING  

The code you write converted into some other form that computer knows how to run.
This process is called COMPILATION and the period of time this happen is called 
"compile time".

-> AFTER compilation is over the program is launched and the period its running
is called "RUNTIME".

IN STATIC Typed language : VALUE WILL BE CHECKED IN COMPILE TIME.
IN DYNAMIC Typed language: VALUE WILL BE CHECKED IN RUNTIME.        

  LOOSELY CHECKED :  1 == "1"      // TRUE
                     true == 1     //true

  STRICT  CHECKED :  1 === "1"    //FALSE
                     true === 1   //false     */


//  WEAK   /VS/  DYNAMIC  TYPING
/*
DYNAMIC TYPING: IN DYNAMICALY TYPED LANGUAGE THE TYPE OF VARIABLES IS DETERMINED
AT A RUNTIME AND YOU CAN CHANGE THE TYPE OF VARIABLES DURING THE PROGRAM EXECUTION.
THIS MEANS YOU DONT HAVE TO SPECIFY THE VARIABLES TYPE WHEN YOU DECLARE IT.*/

let dynamicTyping = 123;
console.log(typeof dynamicTyping);    // variable type: "number"

dynamicTyping = "string";
console.log(typeof dynamicTyping);      // variable type:"string"

dynamicTyping = true;
console.log(typeof dynamicTyping);       // variable type: "boolean"



/* Here in the code above variables hold different types of variables at different 
point in time without any variables type declarations   */


/* Weakly typed: IN WEAKLY TYPED IT WILL ALLOWS YOU TO PERFORM operations ON 
VARIABLES OF  differnt data types and will be done TYPE COERCION IMPLICITLLY
WHENEVER REQUIERD AND LEADS UNEXPECTED RESULTS AND TO BUGS IN CODE.    */


// String operator "+" to concatenate two string data types

/*comma operator for multiple expression in a single line. prints left to right and
prints the last operand of right sides..  */

//Nullish coalescing logical operator : syntax  null ?? "string"     undefined ?? 12 
t      
let str = "2";
let number =  str + 2; 
console.log(number);     // output : 22

let anotherResult = str * number;
console.log(anotherResult);     // output : 44

console.log(5+5);

console.log(5+"5");

console.log([1,2,3,{name:"suman"},"suman thapa magar" , , , ,15000].length);

console.log([].length);

let string = "suman thapa";
console.log(string[8]);
string[0] = "T";
console.log(string);

let array = [1,2,3,,,,,4];
console.log(array[7]);
console.log(array.length);
console.log(array[1]="suman");
console.log(array);

for(let i = 0 ; i<array.length;i++){
console.log("suman");
i++;
i++;
}

// ACCESSING STRING IS S SEQUENCE OF IMMUTABLE CHARACTERS WITH INDICES OF LENGTH PROPERTIES.

let stringIs = "my name is suman";
console.log(stringIs);
console.log(stringIs.length);
console.log(stringIs[8]);
stringIs += ", i am a full stack developer";
console.log(stringIs);
console.log(stringIs.length);
stringIs = "thapa enginner from nepal";
console.log(stringIs.length);


let sparse = [1,,,,,,,{age:2000000000},23455];
console.log(sparse.length);

//concat() method in string

let java = "react";
let  add = java.concat("javascript");
console.log(add,add.length);

/* sparse= scattered elements,empty slots is sparse array which has holes and undefined and Dense 
array is like a regular array */

let sparseArray = [];
sparseArray[2]="suman";
sparseArray[4] = 12242;
sparseArray[7] = {name:'thapa_kto',age:30};
console.log(sparseArray,sparseArray.length);

let sp_arse = [];
sp_arse [20] ={};
sp_arse [30] = {};
sp_arse [100] = {};
sp_arse [19] = {};

console.log(sp_arse,sp_arse.length);

let emoji = ["😁","🙄"];
console.log(emoji,emoji.length);

// emoji length for string;

let stringEmoji = "🍕";
console.log(stringEmoji,stringEmoji.length);


let donut = "🍩";
console.log(donut,donut.length);

let donoutArray = ["🍩"]
console.log(donoutArray,donoutArray.length);

//sparse(scattered elemnts = undefined);

let scattered = [];
scattered[1]= {};
scattered[78]= {};
scattered[12]= {name:"suman",age:29};
console.log(scattered,scattered.length);


let string = "     " ;
console.log(string[3],string.length);
string[2] = "t";
console.log(string,string.length);
console.log(string);


// string primitive is immutable ..

let immutable = "suman thapa magar";
console.log(immutable,immutable[3],immutable.length);
immutable[2] = "app";
console.log(immutable,immutable[2],immutable.length);
immutable = "suman thapa_FullSTACK_DEVELOPER";
console.log(immutable,immutable[15],immutable.length);


// Arrary:- is the list of elements collection of same elements

let elements = Object.freeze(["suman",1,2,4545,"🙄",{course:"javascript"},[1,2,"🐕"]]);
console.log(elements,elements[0,3],elements.length);
elements[0] = "nepal";
elements [5] = "💪";
elements [7] = "🤸";
console.log(elements,elements[0],elements.length)


/*string.length property in emojis -> unicode code point :> emojis can be made of multiple characters
implicitly in js unicode code point so emojis length will be counted differently in string.length than
string.array ..because string will counts each characters and invisible spaces also as a length..
ARRAY counts only elements length it doesnot counts invisible spaces */

let astronout = "👨‍🚀";
console.log(astronout,astronout[0],astronout.length);

// strings with emojis

let stringsEmoji = "👨‍🚀😁🙄";
console.log(stringsEmoji,stringsEmoji[0],stringsEmoji.length); // length in string- 9

// emojis length in array treats differently in array
let arrayEmoji = ["👨‍🚀😁🙄"];
console.log(arrayEmoji[0],arrayEmoji.length);   // length in array- 1

let emojis = "😛🌍";
console.log(emojis,emojis[0],emojis.length)

//strings in invisible spaces..

let spaces = "    abc123  ";
console.log(spaces,spaces[3],spaces.length);

//strings with special characters..

let special = "@!*&%^";
console.log(special,special[2],special.length)



// .length is a built in properties of objects like array and string in js

let modifyArray  = [12,13,"suman","hello"];
console.log(modifyArray,modifyArray[3],modifyArray.length);
modifyArray.length =  500; 
console.log(modifyArray,modifyArray[100],modifyArray.length);

// length in function in js is unusual ..

function bio(name,age,country,profession){
return name+age;
};

console.log(bio.length)  // length = 4 because func. has 4 parameters


// what is "Turncate Array in javascript"  ?

let turncate  = [1,2,3,4,500];
console.log(turncate,turncate.length);
let ab  = turncate.length 
console.log(ab);
turncate.length = 7;
console.log(turncate,ab);

//codePointAt in js utf-16 string

console.log("suman".codePointAt(0));


let date = String(new Date());
console.log(date,typeof date);

// str.charCodeAt (UTF-16)  vs  String.codePointAt (unicode)

let char = "ok 👍";
console.log(char.length);
console.log(char.charCodeAt(3),char[3]);
console.log(char.codePointAt(3));

let object = "Hello world!";
console.log(object,object.length,object[3]);
console.log(object.charAt(3))
console.log(object.at(3));
console.log(object.charCodeAt(3));
console.log(object.codePointAt(3));


let unicode  = "@# 😁";
console.log(unicode.at(1));
console.log(unicode.charCodeAt(1));
console.log(unicode.length);

// string.fromCharCode;

console.log(String.fromCharCode(12094,100));

console.log(String.fromCodePoint(0x1F600)); 

console.log(String.fromCharCode(00133,0x1F5012))


let date  = String(new Date());
console.log(date,typeof date);

let normalDate  = new Date();
console.log(normalDate,typeof normalDate);  

// string length and array length will be different becz string will count each characters as a length even blank invisible spaces and special characters.

let array  = [1,2,3,4];
console.log(typeof array,array,array.length,array[1]);

// type conversion(explicit type casting); string length will be different

let arrayToString  = String([1,2,3,4]);
console.log(typeof arrayToString,arrayToString,arrayToString.length,arrayToString[1]);

// toSting() javascript object method ..cannot convert the original string

let convert = 12012;
console.log(convert.toString(),typeof convert);
let modify = convert.toString();
console.log(modify,typeof modify);

//toString() js object method and it is not standalone function;

console.log(true.toString());

// Number() in js has some default behaviour
let assign = "123";
console.log(typeof assign , assign);
assign = Number("12dr3");
console.log(typeof assign , assign);
assign = Number(true)
console.log(typeof assign , assign);






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



//#NOTE: PRIMITIVE "DATA TYPE" TYPES LIKE "NUMBERS"  AND "STRINGS" ->IMMUTABLE


// Expression and operators in j.s 

//variables in javascripts

//Statements vs Expression in js

// Data Types in Javascript

// Values and refrences in javascript

// Scopes(Global/function(local)/Block scoped) / scope chain / Lexical environment /closure

//Conditional statements and loops in javascript

// Javascript Interpreted/single Threaded synchronous language

//Asynchronous in Javascript:- Callback>CallbackHell>promise>AsyncAwait

// Strings - Arrays - Objects - Functions



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