/*
//functions

function calculateAge(yearOfBirth){
    return 2020-yearOfBirth;
}
var a = calculateAge(1998);
console.log(a);

//function expressions and statements

var a = function(year){
    return 2020- year;
}
var s = a(1998);
console.log(s);


var a = function(name,job){
    switch(job){
        case('teacher'):
            return name+" is a "+"teacher";
        case('doctor'):
            return name+ " is a "+"doctor";
        default:
            return name+ " is a "+ "something else";
    }
};
console.log(a('mike','teacher'));

//arrays

var a =[1,2,3,4];
console.log(a);
console.log(a.length);
console.log(a[1]);
a.push(5);
console.log(a);
a.unshift(0);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
console.log(a.indexOf(3));

//new Array() syntax
var a = new Array(1,'abc',[1,2],4);
console.log(a);


//coding challenge

function calculator(bill){
    var tip;
    if(bill<50){
        tip = .2*bill;
    }
    else if(bill>=50 && bill<=200)
        {
            tip = .15*bill;
        }
    else{
        tip = .1*bill;
    }
   return tip; 
};
bill = [124,48,268];
var tip_arr= [calculator(bill[0]), calculator(bill[1]), calculator(bill[2])];
var final_arr = [bill[0]+tip_arr[0], bill[1]+tip_arr[1], bill[2]+tip_arr[2]];
console.log(tip_arr);
console.log(final_arr);


//....
a = [1,2,3];
b = 'xyz';
console.log(a+b);
console.log(a + " "+b);


//objects and its properties

var mike = {
    name:'Mike',
    hobbies:['writing','reading', 'playing guitar'],
    birthOfYear:1998,
    calculate: function(){
    this.age = 2020-this.birthOfYear;
}
};
console.log(mike); //accessing the values of array.
console.log(mike.name);
console.log(mike['birthOfYear']);
console.log(mike.hobbies);


mike['birthOfYear']= 1995; //mutate the values of array.
console.log(mike.birthOfYear);

var age =mike.calculate();
console.log(age);

console.log(mike);
            

//new Object() syntax;

var nike = new Object();
nike.name = 'nike';
nike.hobbies = ['tarvelling','listening music'];

console.log(nike);


//coding challenge
var john = {
    name : 'John',
    mass : 60,
    height : 1.75,
    calcBMI :  function()
    {
    this.bmi = this.height/(this.mass*this.mass);
    return this.bmi; 
}
};
var mark = {
    name : 'Mark',
    mass : 80,
    height: 1.85,
    calcBMI : function()
    {
        this.bmi = this.height/(this.mass*this.mass);
        return this.bmi;
    }
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if(john.calcBMI()>mark.calcBMI())
{
    console.log("john");
    
}
else if(mark.calcBMI()>john.calcBMI()) {
    console.log("mark");
}
else{
    console.log("they have same bmi");
}

*/

//coding challenge
/*
var john = {
    bill : [124,48,268,180,42],
    calctip : function()
    {  
       this.tip =[];
        this.final =[];
       for( var i = 0;i<this.bill.length;i++)
           {
               if(this.bill[i]<50){
                  this.tip[i] = .2*this.bill[i];
                  this.final[i]=this.bill[i]+this.tip[i];
               }
               else if(this.bill[i]>=50 && this.bill[i]<=200){
                  this.tip[i] = .15*this.bill[i];
                  this.final[i]=this.bill[i]+this.tip[i];
               }
               else{
                   this.tip[i] = .1*this.bill[i];
                   this.final[i]=this.bill[i]+this.tip[i];
               }
}   
        return  [this.tip,this.final];
    }
}


console.log(john);
console.log(john.calctip());

console.log(john.tip);
console.log(john.bill);


var mark = {
    bill : [375, 110, 45],
    calctip : function()
    {  
       this.tip =[];
        this.final =[];
       for( var i = 0;i<this.bill.length;i++)
           {
               if(this.bill[i]<100){
                  this.tip[i] = .2*this.bill[i];
                  this.final[i]=this.bill[i]+this.tip[i];
               }
               else if(this.bill[i]>=100 && this.bill[i]<=300){
                  this.tip[i] = .1*this.bill[i];
                  this.final[i]=this.bill[i]+this.tip[i];
               }
               else{
                   this.tip[i] = .25*this.bill[i];
                   this.final[i]=this.bill[i]+this.tip[i];
               }
}   
        return  [this.tip,this.final];
    }
}


console.log(john);
console.log(john.calctip());
console.log(mark.tip);
console.log(mark.bill);


function avg(tip)
{   var sum = 0;
    for(var i = 0;i < tip.length;i++)
        {
            sum += tip[i];
        }
var avg = sum/tip.length;
 return avg;
}

console.log(avg(john.tip));
//console.log(avg(mark.tip));

*/
/*

//hoisting
//function(case):
abc(3023);
function abc(year){
    console.log(2020);
}




function abc(year)
{
    console.log(2020);
}
abc(3546);

 //only possible in function delaration not in function expression and statements.
a(4545);
var a = function(year)
{
    console.log("hello");


//variable(case):

console.log(a);  //undefined
var a = 4;


var a = 6;
console.log(a);
*/


//this keyword

var john = {
    name:"John",
    year:1998,
    calcAge:function()
    {
    this.age = 2020-this.year;
    return this.age;
    
}
}

var mark ={
    name:"Mark",
    year:1997
}

console.log(john);
console.log(mark);
 console.log(john.calcAge());

mark.calcAge = john.calcAge;

console.log(mark.calcAge());
