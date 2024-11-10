//     Variables :   DECLARATIONS  /VS/   RE-ASSIGN  /VS/  UPDATION     

/*
  Q: what is RE- DECLARATION ?
re-declaration means decalring the varaibae with same name within the same scope
is called re-declaration and it is possible by only "var"*/
   
var reDeclare = "re-declare variables";
var reDeclare = "re-declare variables again";

/*  Q: What is RE- ASSIGNMENT ?
This refers to chainging the value of variable  after it has been declared
"let" and "const" allows re-assignment/updation.
*/
var re_assinging = "re-assignment";
    re_assinging = "again";

let reassingNow = "let reassign";
    reassingNow = true;

/* Q: What is UPDATION  ?
Refers to UPDATION === MODIFIED of values/content in objects and arrays.Here we
can use "CONSTANT" too*/

const updateValue = {name:"javascript", price:8000};
      updateValue.name = ["nodejs","sql"];
      console.log(updateValue);

let arrayUpdated  = [12,true,"reactjs"];
      arrayUpdated.push({courses:'phyton'});
console.log(arrayUpdated);


let reAssign = "suman"
    reAssign = "thapa";
    reAssign = ('suman') + ("thapa")
  console.log(reAssign);


  /* NOTE: "CONST" KEYWORD VALUE INITILAZION/ASSIGN AFTER THE VARIABLE DECLARATION
   IS COMPULSORY BUT IN CASE OF "LET" AND "VAR" VALUE INTILIZATION AFTER VARIABLE 
   DECLARATION IS OPTIONAL */

   let intilization;
   console.log(intilization);    // output: undefined

   var intiliaeVar;
   console.log(intiliaeVar);     //undefined
 
   const intilization_const;
   console.log(intilization_const)    // error: variable must intialized after declare
 

// declaration 

let declare ;   // this line is variable(identifer/label) declaration
  declare = 12; // this line is intializing or assinging value

// Reassigning 
let reassign = 12;
    reassign = "string";
    reassign = undefined;
    reassign = null ;
    reassign = true;
    reassign = [1,22,34,5];
    reassign = {name:'suman',age:30};
    reassign = function(){console.log('hello world')};

//updation 

 let number = 12;
     number = "reassigning";    // let re-assigning here;
 
 var string = "string";
 var string = 12;       // here var variable "string"  re-declare 
     string = "now 12 change to string data types";    // re-assinging value.

const array  = ["suman",12]   //const cannot re-declare , re-assign but can updation
   array.push('thapa');
  console.log(array);


// WHY LET,CONST ARE BLOCK-SCOPED AND VAR ARE FUNCTION SCOPED: CHECK DOWN BELOW

function scope(){

   if(true === true ){
      var  varVar = 12;
      let letLet = "isString";
      const constConst = true; 
   }
   console.log(varVar);      // VAR CAN ACCESS FUNCTION SCOPED, INSIDE FUNCTION
    console.log(constConst);  //REFERNCE ERROR: CANNOT ACCESS LET IS BLOCK-SCOPED
   console.log(letLet);
};

scope();

//NOTE: VAR IS FUNCTION SCOPED SO IT CAN BE ACESSED FROM ANYWHERE INSIDE FUNCTION

//NOTE: LET AND CONST CANNOT ACCESS ANYWHERE FROM FUNCTION IF LET AND CONST ARE 
//NESTED INSIDE CURLY BRACES SEPRATELY INSIDE FUNCTION LIKE ABOVE.



// SO MOSTLY LET AND CONST IS USED INSIDE IF() STATEMENT AND LOOPS -> BLOCK SCOPED

if(true){
   let value = "let is block scoped";
   console.log(value);
};

// IN LOOP:

for(let i = 10 ; i<14; ++i){
   console.log("i am block scoped");
}



/*NOTE: "var" is global/function scoped and can be re-declare 
        "let" and "const" bocked-scoped can be access from anywhere within block{} */
        {
         var x = 12;
         console.log(x);          // 12
         var x = "string"   
         console.log(x)           // output : string  "var is global scope"
         let y = true; 
         console.log(y);          // true  
         const z = undefined;
         console.log(z);          //undefined
         {
          console.log(z);           //undefined
          console.log(x);           //string "var   x  is global"
          let y = "i am a string";
          console.log(y);           // "i am a string"    let is block scoped
          var x = false;
          console.log(x);           //false
         }
      }
      
      
      //  NESTED - BLOCK SCOPED   "LET" & "CONST"
      
         if(true){
      
            let y = 100;
            const z = "string value const";
            {
               {
               y = "reassinging let valuE"
               console.log(z);              //output:  "string value const"           
               console.log(y);              //     "reassinging let valuE"
              };
                console.log(y);            //    "reassinging let valuE"
                console.log(z);
            };                             //  "string value const";
         };
      
      
      //   Here :   let value = true;   is global scoped
      
      
         let value = true;  
        console.log(value);   // true
      
         if(value){
            let value = "now value is";
            console.log(value);           // now value is
         };
         console.log(value);    // true
      
      
      // Here code is correct because "let"  inside { }  block scope
          var sameVariable = " global";
         {
          let sameVariable = "blocked scope now";
          console.log(sameVariable);
         }
      
      
      // Here even "var" is inside { } block scope "var" is global so let and var have same
        // variable name "letGlobal" so cannot print havins same "identifer"
      /*
         let letGlobal = " chance of error" ;   
      
         {
            var letGlobal = "cannot print";
            console.log(letGlobal);
         };*/
      
      
      //  function-scope: "var"
      
         function scoping(){
      
               var x = 100;
               let y = "inside function ";
               const z = "block scope const inside function";
               console.log(y);
               console.log(z);
               console.log(x);
      
            if(true){
               var  nowIsGlobal = "1000";
               let y = "inside function if statement";
               const z = "block scope const inside function";
               console.log(y);
               console.log(z);
               console.log(x);
            };
          };
      
          scoping();
      
      // "let" and "const"  is only block scoped
      
          let arrow = () =>{
            var x = "boolean";
            if(true){
               let y = "javascript is great";
               const z = "react is great";
               console.log(x);
               console.log(y,z);
               console.log(z);
            };
      
            console.log(y,z);   //cannot access "let" and "const" here
          };
      
          arrow();

 

// primitive imuutable

let num = 12
console.log(num);
num = " change  to string";
console.log(num);
num = true ;
console.log(num);

// NON PRIMITIVE MUTABLE

let objectOf = {
   num:12,
   bollean:false
};
console.log(objectOf);

objectOf.num = "now is string";
console.log(objectOf);

console.log(objectOf);

objectOf.bollean = true;
console.log(objectOf['bollean'])

console.log(objectOf);


// PRIMITIVE: ANCIENT ,EARLY FORM OF HUMAN, OLD AGES , TRADITIONAL 
// NON-PRIMITIVE: MODERN FORM OF HUMAN , DEVELOPED , MORE COMPLEX
//MUTABLE: ARE THOSE WHICH CAN BE MODIFIED AFTER CREATION.
//IMMUTABLE: WHICH CANNOT BE MODIFIED AFTER CREATION.. PRIMITIVE
//TOTAL 8 DATA TYPES PRIMITIVE + OBJECTS(ARRAYS AND FUNCTION) = 9 DATA TYPES

let cannot_modify = "suman";
cannot_modify[1] = "t";
console.log(cannot_modify);  // "suman"




//so primitive value can be replace(reassign) but cannot modified directly

/*#NOTE: PRIMITIVE IS COMPARED BY  VALUES. IF THEY HAVE SAME VALUES IN PRIMITIVE
THEY CAN BE EQUAL */

let primi_Val = "hello world";
let primi_Val2 = "hello world";


console.log(primi_Val === primi_Val2);  //true

//Non primitive is mutable: can modifed after creation directly and compared by reference

let modifyArray = Object.freeze([1,2,3,4]);
modifyArray[2] = 10;
console.log(modifyArray);

//

let nextArray = ['suman',"thapa"];
nextArray[0]="apple";
console.log(nextArray);

// OBJECTS ARE NOT COMPARED BY VALUE:

let arryIs = [2,3,4,5]
let arryIs2 = [2,3,4,5]

console.log(arryIs == arryIs2);  //false

//

let comapre_obj = { name:'suman',age:30};
let comapre_obj2 = { name:'suman',age:30};
console.log(comapre_obj == comapre_obj2);  //false


// NON-PRIMITIVE : OBJECTS (ARRAY)  are compared  by their  references (memory adress):
//IN Non-primitive value: OBJECTS,ARRAYS,FUNCTIONS THEY ARE COMPARED BY THEIR REFERENCES
//THAT MEANS THE MEMORY ADRESS WHERE variable IS STORED. 

//#NOTE: IN THIS CODE refrencesObj and another variable refrencesObj_part2 
//also point to the same refrences means point to same memory adress and so
//NONPRIMITIVE values are comapred by references not values..
let refrencesObj = { course:"javascript", price:8000};
let refrencesObj_part2 = refrencesObj ;
console.log(refrencesObj_part2 === refrencesObj);

//

let func = function (){
   console.log("hi")
};

let func2 = func ;
console.log("function prinitive compare by value" ,func === func2) //true

//

let new_func = function (){
   console.log("hi")
};

let new_func2 = function (){
   console.log("hi")
};

console.log(new_func == new_func2);  //false


function checkScope(){
   let x = "function scope";
   if(1 && 1){

      console.log(x);     //'funxtion scope'
   }
};
checkScope();

// "let is a block scoped not a function scope"

function closure(){
    let x = "closure function"
   return function(){
       console.log(x)
   }
};

let resultOfClosure = closure();
resultOfClosure();

//

function outer(){

   console.log(x);         //ERROR: X IS NOT DEFINED AT parent(OUTER) SCOPE

   return function (){
      let x = "i am a inner function"
   }

};

let outerResult = outer();
outerResult();


//

function show(){
    let x = "i am parent function";
   return function hide(){
    console.log(x);
   };
   hide()
};

let parent  = show();
parent();