let reAssign = "suman"
    reAssign = "thapa";
    reAssign = ('suman') + ("thapa")
  console.log(reAssign);

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