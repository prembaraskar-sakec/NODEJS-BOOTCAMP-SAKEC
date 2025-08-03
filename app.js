//DAY 1

/*console.log('Hello World!');
const cowsay = require("cowsay");
console.log(cowsay.say({text:"I'm a moooodule", e: "oO",T: "U"}));
const abc = "Prem";
abc= "c"; - error type : assignment to variable comsnatnt
const a=5;
console.log('The value of a is :'+a);
console.log(`The value of a is: ${a}`);
function greet(name,age){
    let msg=`Hello,${name}! You're Age is ${age}`;
    return msg;
}
const greeting = greet('Prem',19);
console.log(greeting);
let counter = 0;
while (counter<3){
    console.log("Iteration Count :"+counter);
    counter+=1;
}
console.log("Out of while loop");
const fruits=["Apple","Banana","Chikoo"];
for(let i=0;i<fruits.length;i++){
    const fruit=fruits[i];
    console.log(`Fruit at index ${i} is:${fruit}`);
}
let temp=25;
if(temp>30){
console.log("It's Hot day");
}else if(temp>20) {
console.log("It's pleasant day");
}else{
    console.log("It's cold");
}
function calarea(len,wid=1){
    return len*wid;
}
const arec = calarea(10,5);
console.log(`Area of rectangle is ${arec}`);
const asq = calarea(8);
console.log(`Area of square is ${asq}`);
const getSum = function(a,b){ return a+b};
const sum = getSum(15,20);
console.log("Sum is",sum);
const mul = (x,y) => x*y;
console.log("Multiplication is",mul(5,6));
let sum=0;
for(let i=1;i<1000;i++){
    if(i%3==0 || i%5==0){
        sum+=i;
    }                                       
}
console.log("Sum of such nos. is",sum);
let a = 0, b = 1, sum = 0;
let c;
while (true) {
    c = a + b;
    console.log(c);
    if (c >= 4000000) break;
    if (c % 2 == 0) {
        sum += c;
    }
    a = b;
    b = c;
}
console.log("Sum of even Fibonacci numbers under 4 million is:", sum);
function largestPrimeFactor(n) {
  let factor = 2;
  while (factor * factor <= n) {
    if (n % factor == 0) {
      n /= factor;
    } else {
      factor++;
    }
  }
  return n;
}
const number = 600851475143;
console.log(largestPrimeFactor(number));
function facto(num) {
    let fac = 1;
    for (let i = num; i > 1; i--) {
        fac *= i;
    }
    console.log("Factorial is:", fac);
    let sum = 0;
    let temp = fac;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    console.log("Factorial digits sum:", sum);
}
facto(100);
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
function getPermutations(str) {
    if (str.length <= 1) return [str];
    let perms = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaining = str.slice(0, i) + str.slice(i + 1);
        for (let perm of getPermutations(remaining)) {
            perms.push(char + perm);
        }
    }
    return perms;
}
function largestPrimePandigital(n) {
    if (n < 1 || n > 9) {
        console.log("n must be between 1 and 9");
        return null;
    }
    let digits = '';
    for (let i = n; i >= 1; i--) {
        digits += i.toString();
    }
    let permutations = getPermutations(digits).map(Number).sort((a, b) => b - a);
    for (let num of permutations) {
        if (isPrime(num)) {
            console.log(`Largest ${n}-digit pandigital prime is: ${num}`);
            return num;
        }
    }
    console.log(`No prime pandigital number found for n = ${n}`);
    return null;
}
largestPrimePandigital(7);

//DAY 2

const myObj ={
    "name":"Prem",
    "age":19,
    "isStudent":true,
    "hobbies":["badminton","coding"],
    "address":{
        "city":"Mumbai",
        "Zipcode":"400012",
    }
}
console.log(`Name:${myObj.name}`);
console.log(`1st Hobby:${myObj.hobbies[0]}`);
console.log(`Zipcode:${myObj.address.Zipcode}`);
const num=[];
let sum=0;
for(let i=1;i<=100;i++){
    num[i]=i*3;
    if(i%5==0){
    console.log(num[i]);
    sum +=i;
    }
}
console.log("Sum is:"+sum);
const a = [];
for (let i = 1; i <= 100; i++) a.push(i);
const result = a
  .map(x => x * 3)         
  .filter(x => x % 5 === 0)
  .reduce((sum, x) => sum + x, 0); 
console.log(result);
const a = [3, 4, -5, -6, 7];
const sum = a.reduce((total, x) => {
  if (x > 0) {
    return total + x;
  } else {
    return total;
  }
}, 0);
console.log(sum); */
const users = [
  { name: 'Prem', age: 25 },
  { name: 'Ranjit', age: 30 },
  { name: 'Yash', age: 25 }
];
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const avg = totalAge / users.length;
console.log(avg);





