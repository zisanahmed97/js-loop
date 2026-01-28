//give me the number from 1 to 50 who is divisible by 5

// for(let i = 1; i <=50; i++){
//     if(i%5 == 0){
//         console.log(i);
//     }
// }

//give me the number from 1 to 30 who is divisible by 3 or 5

// for(let i=1; i<=50 ; i++){
//     if(i%3==0 || i%5==0){
//         console.log(i);
//     }
// }

//give me the number from 1 to 30 who is divisible by 3 and 5

// for(let i=1; i<=50 ; i++){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//     }
// }


let total =0;

for(let i=1; i<=50 ; i++){
    if(i%3==0 || i%5==0){
        console.log(i);
        total = total +i;
    }
}

console.log("total:", total);