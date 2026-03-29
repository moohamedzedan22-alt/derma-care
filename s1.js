// let age = 13;
// let name = 'mohamed';
// let school='al-azhar';
// console.log('my age is',age+1 ,'my name is',name ,'my scoohl is ' , school);

// let x=50
// let y=60
// console.log(x)
// console.log(x+y)
// console.log(y-x)
// console.log(y*x)

// v1 = 50
// v2 = 60
// console.log(v1)
// console.log(v1+v2)
// console.log(v2-v1)

// let m = 75 > 50 ;
// let e = 50 < 75 ;

// console.log(m && e)
// console.log(e >m || m<e)
// console.log(! e || m)
// let age = 20 <50
// console.log(age-10  && age>10)
// console.log(age <10 || 10>age)
// console.log(!age <10 || 10>age)

// for (let i = 0 ; i<=5 ;i++)  {
//     console.log(i)
// }

// let day = 'sunday'
// switch (day) {
//     case 'sun day':
//         console.log('day of the work')
//         break;
//     case 'monday':
//         console.log('this tird day')
//         break;
//     case 'friday':
//         console.log('play')
//       default:
//         console.log('go to study')
// }
 
// let english =84.99999
// if (english>=85) {
//     console.log('exllanet')

// } else if (english>=70){
//     console.log('very good')

// }else if (english>=50){
//     console.log('good')

// } else {
//     console.log('falied')
// }

// function area(w,l){
//      return w*l
// }
// console.log(area(5,9))
// function p(s){
//     return 4*s
// }
// console.log(p(4))
// let a=(w,l)=> (w+l) /2 
// console.log(a(5000,20000))
// let e=(num)=>(num%2===1?'odd':'even')
// console.log(e(16))


// for (let i= 1; i<= 100; i++) {
//   if (i%3===0 && i%5===0) {
//     console.log("fizzbuzz");
//   } else if (i%3===0) {
//     console.log("fizz");
//   } else if (i%5===0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }



// const names =['mohamed ' ,'ali','ebrahim']
// names.pop()
// console.log(names)


// const names =['mohamed ' ,'ali','ebrahim']
// for( m=0 ;m <names.length;m++){
//   console.log(names[m])
// }

// const names =['mohamed ' ,'ali','ebrahim']
// names.forEach((index,name)=>{
//   console.log(`names......of : ${index}  =>  :  ${name}`)
// }
// )


// let names =[1,2,3,4,5,6]

// let varibale=names.map(num=>num +1)
//   console.log(varibale)

// let varibale=names.filter(num=>num%2===0)
//   console.log(varibale)

// let varibale=names.reduce((total,num)=>total*num,1)
//   console.log(varibale)
// const ages = [12, 18, 22, 14, 30, 16];

// const adults = ages.filter(age => age >= 18);

// console.log(adults);
// const prices = [5, 10, 15, 20];

// const total = prices.reduce((sum, price) => sum + price, 0);

// console.log(total);


// const numbers = [3, 7, 10, 15, 21];

// const mohamed = numbers.map(num => num * 2);

// console.log(mohamed);


// const kk=document.getElementById('title')
// console.log(kk)

// const ll =document.getElementById('color')
// console.log(ll)

// ll.addEventListener('click',()=>{
//     kk.style.color=
//       kk.style.color=== 'red'?'blue':'red';
//        kk.style.backgroundColor=
//         kk.style.backgroundColor=== 'yellow'?'green':'yellow';

// })
















const change= document.getElementById("title")
console.log(change)

const text=document.getElementById("pp")
console.log(text)

const mode =document.getElementById
("dark")

mode.addEventListener("click",()=>{
document.body.style.color =
document.body.style.color === "black" ? "white" : "black"
document.body.style.backgroundColor = 
document.body.style.backgroundColor === "white" ? "black" : "white"


})

text.addEventListener("click" , ()=>{
  change.innerText="i change this"
})




















const title = document.getElementById("title");
title.textContent = "New Title";
title.style.color = "blue";


