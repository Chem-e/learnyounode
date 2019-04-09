/* solution 1 */
//  let sum=0;
// for (let i=2; i< process.argv.length ; i++){
// sum += Number(process.argv[i]);
// }
// console.log(sum);

/* solution 2*/
let numbers=process.argv.slice(2);

let sum = numbers.reduce((total,i)=>{
   total+= parseInt(i);
   return total;
},0);
console.log(sum);
