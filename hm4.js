//1

// function arrayFill(x , lenght) {
//     let arr = [];
//     for (let i = 0; i < lenght; i++) {
//     arr.push(x)
// }
//     return arr
// }
// console.log(arrayFill('x',5));
//2
// function isNumberInRange() {
//     let number = prompt()
//     if (number > 0 && number < 10) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// };
// isNumberInRange();
//3
// let number = prompt('number')
// isEven(number)
// function isEven(even){
//  return even % 2 == 0 ;
// }
// console.log(isEven(number))
//4
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (isEven(i)) {
//      newArr.push(i);
// }
// }

// console.log(newArr);
//5
// let inPut = prompt('your num')
// task5Func(inPut)
// let inPut2 = prompt('your **')
// task5Func(inPut2)
// function task5Func(inPut,inPut2) {
//     return inPut ** inPut2
// }
// console.log(task5Func(inPut,inPut2));
//6
let number = prompt('number')
muFun(number)
let a  = number
function muFun (a){
let a;
if(a>16)console.log(muFun('Youre welcome'));
if(a<16)console.log(muFun('Youre not'));
else if (a >= 0 && a < 16);
else if (age === undefined ||  age < 0 || isNaN(a))


return muFun (3);


}
//7
let strign = '';
let result = [];

let arr = strign.split('');
for (let i = 0; i < arr.length; i++) {
  res.push(ucfirst(arr[i]));
}

let newStr = res.join('');

console.log(result);
console.log(newStr);

function ucfirst(word) {
  return word[0].toUpperCase() + word.substr(1);
}




let WorkString = 'var_text_hello';
 function first(strign) {
let firstLetter = strign.substr(0,1);
return firstLetter + strign.substr(1);
}
function sampl(usrString) {
    let workArray = usrString.split('_');
    for (let i = 0; i < workArray.length; i++) {
    workArray[i] = first(workArray[i]);
}
    console.log(workArray.join(''));
}

console.log( WorkString  );
sampl(WorkString);



function inArray(value,arr) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] == value) {
return true;
}
}
return false;
}
let mas = [44,5,24,,45,,25,32,,35,2];

console.log(inArray(7,mas));