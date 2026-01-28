/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let sum = 0;
let i = 81;
while(i <= 131){
    if(i%2 === 1){
        sum = sum + i;
    }
    i++;
}
console.log('sum of all odd numbers:',sum);


let n = 206;
while(n <= 311){
    if(n%2 === 0){
        sum=sum+n;
    }
    n++;
}
console.log('sum of all even numbers:',sum);