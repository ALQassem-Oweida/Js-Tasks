/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
*/

//Ex#1
function tellFortune(NumOfChildren, partnerName, locationx, jobTitle) {
    console.log(
      "You will be a " +
        jobTitle +
        " in " +
        locationx +
        ", and married to " +
        partnerName +
        " with " +
        NumOfChildren +
        " kids."
    )
  }
  tellFortune(4, "Some One", "Amman", "Civil Engineer");

  /*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
*/

//Ex#2
function calculateDogAge(puppyAge) {
    return (
      (xdog = puppyAge * 7),
      console.log("Your doggie is " + xdog + " years old in dog years!")
    );
  }
  calculateDogAge(2);
  
  /*
  3
  Write a function named calculateSupply that:
  takes 2 arguments: age, amount per day.
  calculates the amount consumed for rest of the life (based on a constant max age 100).
  outputs the result to the screen like so:
  "You will need NN to last you until the ripe old age of X"
  */
  
  //Ex#3
  function calculateSupply(Age, amount_per_day) {
    return (
      (x = 100),
      (NN = (x - Age) * 365 * amount_per_day),
      console.log(
        "You will need " + NN + " to last you until the ripe old age of " + x
      )
    );
  }
  calculateSupply(30, 3);
  
  /*
  4
  Write a function called greet that:
  takes 1 argument: name.
  and it will return hello + name
  */
  
  //Ex#4
  function greet(fName) {
    console.log("Hello  " + fName);
  }
  greet("Hassan");


  //Ex#5
// what is the error:
function double(cat) {
    return 2 * x;
    }
    
    function double(N7) {
     return 2 * N7;
     }
    
     function double(x) {
     return 2 * x;
     }

     //Ex#6
// fix these functions:
function double1(x) {
    return 2 * x
  }double1(1)
  
  function double2(x) {
    return 2 * x
  }double2(2)
  
  function double3(x) {
    return 2 * x
  }double3(3)

  //Ex#7
// Write a function called cube that:
// accept 1 parameter and calculate the cube of this number

function cube(a) {
    return (c = a * a * a), console.log("cube = " + c);
  }
  cube(3);
  
  //Ex#8
  
  // Write a function called multiply that:
  // accept 2 parameters and calculate the multiply of these 2 numbers
  
  function multiply(N1, N2) {
    return (multi = N1 * N2), console.log("The result is : " + multi)
  }
  multiply(3, 4);
  
  //Ex#9
  // Write a function called canIGetADrivingLicense that:
  // accept 1 parameter represent the age
  // and if the age greater than or equal to 20 return "yes you can"
  // otherwise return "please come back after X years to get one"
  
  function canIGetADrivingLicense(age) {
    if (age >= 20) {
      console.log("yes you can");
    } else {
      return (
        (x = 20 - age),
        console.log("please come back after " + x + " years to get one")
      );
    }
  }
  canIGetADrivingLicense(12);

  //Ex#10
// Write a function called sameLength
// that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.
// **hint: how we can know string length   Ex: : "tree".length   => 4

function sameLength(st1,st2){
  if (st1.length==st2.length) {
console.log(true)
  }else{
    console.log(false)
  }
}
sameLength("car1123","car")

//Ex#11

// Write a function called largerNubmer
// that accept two numbers as arguments,
// and return the first larger numbers

function largerNubmer(num1,num2){
    if(num1 > num2){
        console.log(num1+" : is the larger Num")}
    else{
        console.log(num2+" : is the larger Num")
    }
 }largerNubmer(6,3)

 //Ex#12
// Write a function called smallerNubmer
// that accept three numbers as arguments,
// and return the first smaller number

function smallerNubmer(snum1,snum2,snum3){
console.log(Math.min(snum1,snum2,snum3)+" : is the smaller Num")
}smallerNubmer(20,3,1)

/*************** if  ******************/
function smallerNubmer2(snum1,snum2,snum3){
if(snum1<snum2 && snum1<snum3){console.log(snum1+" : is the smaller Num2") }
else if (snum2<snum1 && snum2<snum3){
  console.log(snum2+" : is the smaller Num2") 
}else{
  console.log(snum3+" : is the smaller Num2") 
}
}smallerNubmer2(20,3,1)

 //Ex#13
// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

function shorterString(s1,s2,s3,s4,s5){
         len= Math.min(s1.length,s2.length,s3.length,s4.length,s5.length)
          if(len==s1.length){console.log(s1)}
          else if(len==s2.length){console.log(s2+" : is the shorter string")}
          else if(len==s3.length){console.log(s3+" : is the shorter string")}
          else if(len==s4.length){console.log(s4+" : is the shorter string")}
          else if(len==s5.length){console.log(s5+" : is the shorter string")}  
        }shorterString("air","school","car","by","github")


 //Ex#14
// Write a function called longerString
// that accept four string as an arguments,
// and return the first longer string

function longerString(s1,s2,s3,s4,s5){
    len= Math.max(s1.length,s2.length,s3.length,s4.length,s5.length)
     if(len==s1.length){console.log(s1)}
     else if(len==s2.length){console.log(s2+" : is the longer string")}
     else if(len==s3.length){console.log(s3+" : is the longer string")}
     else if(len==s4.length){console.log(s4+" : is the longer string")}
     else if(len==s5.length){console.log(s5+" : is the longer string")}  
   }longerString("air","school","car","by","github")


 //Ex#15
// Write a function called isEven
// that accept 1 argument as a number,
// and return true if this number is even
// and false if this number is odd

function isEven(num){
    if((num%2)==0){
console.log(true)
    }else{
        console.log(false)
    }
}isEven(57)




 //Ex#16
// Write a function called isOdd
// that accept 1 argument as a number,
// and return true if this number is Odd
// and false if this number is Even

function isOdd(num){
    if((num%2)!==0){
console.log(true)
    }else{
        console.log(false)
    }
}isOdd(57)



 //Ex#17
// Write a function called positive
// that accept 1 argument as a number,
// and return the positive version of the number passed

function positive(num){
    if(num<0){
        console.log(-1*num)
            }else{
                console.log(num)
            }}
            positive(-5)


 //Ex#18
// Write a function called fullName
// that accept two parameters, firstName and lastName,
// and returns the firstName and lastName concatenated
// together with a space in between.

function fullName(firstName,lastName)  {
    console.log(firstName+" "+lastName)
   };
   fullName("Adam","McCallen");

 //Ex#19
// Write a function called average
// that takes five numbers as inputs
// and returns the average of those numbers.

function average(Number1,Number2,Number3,Number4,Number5)  {
    return aver=(Number1+Number2+Number3+Number4+Number5)/5,
       console.log("The Average is : " +aver)
       };
       average(1,2,3,4,5);

       

// Write a function called randomNumber
// that didnt takes any parameter
// and returns a random number between 0-1
// ** hint: you can seacrh using MDN

function randomNumber()  {
    console.log("Just a Random Number: " + Math.random()) };
   randomNumber()


 //Ex#21
// Write a function called randomBetweenNumbers
// that takes 2 parameters
// and returns a random number between them
// ** hint: you can seacrh using MDN

function randomNumber2(min,max)  {
    console.log("Just a Random Number between "+max+" and "+min +" : " +(Math.random() * (max - min + 1))) };
   randomNumber2(1,8)



 //Ex#22
//  Write a function called scoreInUniversty
// that takes 1 parameters
// and returns the alpabet in the unevirsty
   

function scoreInUniversity(x) {
     if (x >= 95 && x <= 100)     {console.log("youre grade is: A")} 
     else if(x >= 85 && x <= 94)  {console.log("youre grade is: B")} 
     else if ( x>= 70 && x <= 84) {console.log("youre grade is: C")} 
     else if (x >= 50 && x <= 69) {console.log("youre grade is: D")} 
     else if (x >= 0 && x <= 49)  {console.log("youre grade is: F")} 
     }
     scoreInUniversity(99)


            /************************  Switch    *********************************/

            function scoreInUniversity2(x2) {
              switch (true) {
                case x2 >= 95 && x2 <= 100  : console.log("youre grade is: A") ;
                break ;
                case x2 >= 85 && x2 <= 94 : console.log("youre grade is: A") ; 
                break ;
                case x2 >= 70 && x2 <= 84 : console.log("youre grade is: C"); 
                break ;
                case x2 >= 50 && x2 <= 69 :console.log("youre grade is: D") ;  
                break ;
                case x2 >= 0  && x2 <= 49 :  console.log("youre grade is: F" );
                break ;
                default:
                  console.log("are you sure you enterd the right nimber??!") 
              }
            }
              scoreInUniversity2(59)


      





 //Ex#23
// Write a function called counter
// that will returns a number bigger
// than the one that returnd before
// and start from 0

count=0
function counter(){
  return count=count+1
}
console.log(counter())
console.log(counter())
console.log(counter())

 
//Ex#24
// Write a function called resetCounter
// that will reset the previuos function
// and return the number before reset and
// a string say that the counter reset


function resetCounter(){
    count=0;
    console.log (" the counter is reset");

  }
  resetCounter();
  
  console.log(counter());
  console.log(counter());
  console.log(counter());
  





