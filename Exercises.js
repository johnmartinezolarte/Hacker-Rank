//Week 1
//Plus Minus
/* let arr=[1,1,0,-1,-1];
function plusMinus(arr) {
    const sizeArr=arr.length;
    let positives=0,
    negatives=0,
    zeros=0;
    arr.forEach(num=>{
        if(num<0){
            negatives++;
        }else if(num>0){
            positives++;
        }else{
            zeros++;
        }
    });
    const ratioPositive=(positives/sizeArr).toFixed(6);
    const ratioNegative=(negatives/sizeArr).toFixed(6);
    const ratioZero=(zeros/sizeArr).toFixed(6);
    console.log(ratioPositive+'\n'+ratioNegative+'\n'+ratioZero);
}
plusMinus(arr); */


//Mini-Max Sum
/* let arr=[1,3,5,7,9]; */
/* function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    const sum=arr.reduce((acc,cur)=>acc+cur);
    console.log(`${sum-arr[arr.length-1]} ${sum-arr[0]}`);
}
miniMaxSum(arr); */
/* function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    const minSum=arr.slice(0,arr.length-1).reduce((acc,cur)=>acc+cur);
    const maxSum=arr.slice(1).reduce((acc,cur)=>acc+cur);
    console.log(`${minSum} ${maxSum}`);
}
miniMaxSum(arr); */


//Time Conversion
/* let s='12:01:00PM';
function timeConversion(s) {
  let time;
  if(s.endsWith('AM')){
    time=s.replace('AM','');
    if(time.startsWith('12')){
      return time.replace('12','00');
    }
    return time;
  }else{
    time=s.replace('PM','').split(':');
    if(time[0]!=12){
      time[0]=+time[0]+12;
    }
    return time.join(':');
  }
}
timeConversion(s); */


//Sparse Arrays
/* let strings=['ab','ab','abc'];
let queries=['ab','abc','bc']; */
/* function matchingStrings(strings, queries) {
  let results=[];
  for(let i=0;i<queries.length;i++){
    let sum=0;
    for(let j=0;j<strings.length;j++){
      if(queries[i]===strings[j]) sum++
    }
    results[i]=sum;
  }
  console.log(results);
}
matchingStrings(strings, queries); */
/* function matchingStrings(strings, queries) {
    return queries.map(querie=>{
      return strings.filter(string=>querie===string).length;
    })
  }
matchingStrings(strings, queries); */


//Lonely Integer
/* let a=[1,2,3,4,3,2,1]; */
/* function lonelyinteger(a) {
  if(a.length%2!==0){
    let unique;
    for(let i=0;i<a.length;i++){
      let sum=0;
      for(let j=0;j<a.length;j++){
        if(a[i]===a[j]) sum++;
      }
      if(sum===1)unique=a[i];
    }
    return unique;
  }else{
    return 'n is not an odd number';
  }
}
lonelyinteger(a); */
/* function lonelyinteger(a) {
  let unique;
  for(let element of a){
    let repeatArray=a.filter(number=>number==element);
    if(repeatArray.length==1){
      unique=repeatArray[0];
      break;
    } 
  }
  return unique;
}
lonelyinteger(a); */


//Flipping bits
/* let n=9; */
/* function flippingBits(n) {
  let nBinary=n.toString(2).padStart(32,'0').split('');
  nBinary.forEach((ele,ite)=>{
    if(ele==='0'){
      nBinary[ite]='1';
    }else{
      nBinary[ite]='0';
    }
  });
 let binary=nBinary.join('');
  return parseInt(binary,2);
}
flippingBits(n); */
/* function flippingBits(n) {
  return (Math.pow(2,32)-n-1);
}
flippingBits(n);  */


//Diagonal Difference
/* const arr=[[1,2,3],[4,5,6],[9,8,9]];
function diagonalDifference(arr) {
  let leftRight=0, rightLeft=0;
  for(let i=0, j=arr.length-1; i<arr.length; i++, j--){
    leftRight+=arr[i][i];
    rightLeft+=arr[i][j];
  }
  return Math.abs(leftRight-rightLeft);
}
diagonalDifference(arr); */


//Counting Sort 1
/* const arr=[63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33];
function countingSort(arr) {
  let count=new Array(arr.length).fill(0);
  for(let ind of arr){
    count[ind]+=1;
  }
  return count;
}
countingSort(arr); */


//Pangrams
/* const s='The quick brown fox jumps over the lazy dog';
function pangrams(s) {
  const alphabet='abcdefghijklmnopqrstuvwxyz'.split('');
  let test = true;
  for(let letter of alphabet){
    test=s.toLowerCase().includes(letter);
    if(!test){
      break;
    }
  }
  return test ? 'pangram' : 'not pangram';
}
pangrams(s); */


//Permuting Two Arrays
/* const A=[0,1];
const B=[0,2];
const k=1;
function twoArrays(k, A, B) {
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  let test=true;
  for(let i=0;i<A.length;i++){
    let sum=A[i]+B[i];
    if(sum<k){
      test=false;
      break;
    }
  }
  return test ? 'YES' : 'NO';
}
twoArrays(k, A, B); */


//Subarray Division 1
/* const s=[2,2,1,3,2];
const d=4;
const m=2;
function birthday(s, d, m) {
  let numberWays=0;
  s.forEach((ele,ind)=>{
    let arrayTest=s.slice(ind,ind+m);
    let sumArrayTest=arrayTest.reduce((x,y)=>x+y);
    if(arrayTest.length===m && sumArrayTest===d) numberWays++;
  });
  return numberWays;
}
birthday(s, d, m); */


//XOR Strings 2
/* let s='10101';
let t='00101'; */
/* function xorStrings(s,t){
  let outPut='';
  for(let i=0;i<s.length;i++){
    outPut= outPut.padEnd(i+1, s[i]^t[i]);
  }
  return outPut;
}
xorStrings(s,t); */
/* function xorStrings(s,t){
  let outPut='';
  for(let i=0;i<s.length;i++){
    if(s[i]===t[i]){
      outPut+='0';
    }else{
      outPut+='1';
    }
  }
  return outPut;
}
xorStrings(s,t); */


//Mock Test
/* let arr=[0,1,2,4,6,5,3];
function findMedian(arr) {
  arr.sort((a,b)=>a-b);
  if(arr.length%2!==0){
    let indexMedian=Math.floor(arr.length/2);
    return arr[indexMedian];
  }else{
    return 'n is not odd';
  }
}
findMedian(arr); */
/* let matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
function flippingMatrix(matrix){
  n=matrix.length/2;
  m=matrix.length-1;
  let sum=0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      sum+=Math.max(matrix[i][j],matrix[i][m-j],matrix[m-i][j],matrix[m-i][m-j]);
    }
  }
  return sum;
}
flippingMatrix(matrix); */




//Week 2
//Sales by Match
/* const n=7;
const ar=[1,2,1,2,1,3,2];
function sockMerchant(n, ar) {
  const uniqueNumbers=[...new Set(ar)];
  let pairs=0;
  for(let number of uniqueNumbers){
    let arrayPairs=ar.filter(value=>value===number);
    pairs+=Math.floor(arrayPairs.length/2);
  }
  return pairs;
}
sockMerchant(n, ar); */


//Drawing Book
/* const n=5;
const p=4; */
/* function pageCount(n, p) {
  let pages=[...Array(n+1).keys()];
  pages.shift();
  let iteLeftRight=0, iteRightLeft=0;
  let flipLeft, flipRight;
  for(let page of pages){
    if(page!==p){
      iteLeftRight++;
    }else{
      flipLeft=Math.ceil(iteLeftRight/2);
      break;
    }
  }
  pages.reverse()
  for(let page of pages){
    if(page!==p){
      iteRightLeft++;
    }else{
      flipRight=n%2===0?Math.ceil(iteRightLeft/2):Math.floor(iteRightLeft/2);
      break;
    }
  }
  return Math.min(flipLeft,flipRight);
}
pageCount(n, p); */
/* function pageCount(n, p) {
  let halfBook=n/2;
  let flip;
  if(p<=halfBook){
    flip=Math.ceil((p-1)/2);
  }else{
    flip=n%2===0?Math.ceil((n-p)/2):Math.floor((n-p)/2);
  }
return flip;
}
pageCount(n, p); */


//Tower Breakers
/* const n=2;
const m=6;
function towerBreakers(n, m) {
  if(m===1){
    return 2;
  }else{
    return n%2===0?2:1;
  }
}
towerBreakers(n, m); */


//Caesar Cipher
/* let s="www.abc.xy";
let k=87;
function caesarCipher(s, k) {
  const alphabet='abcdefghijklmnopqrstuvwxyz';
  while(k>alphabet.length){
    k-=alphabet.length;
  }
  const alphabetRotated=alphabet.substring(k)+alphabet.substring(0,k);
  let encryptedText='';
  for(let i=0;i<s.length;i++){
    let ind=alphabet.indexOf(s[i]);
    let indTest=alphabet.indexOf(s[i].toLowerCase());
    if(ind==-1 && indTest==-1){
      encryptedText+=s[i];
      continue;
    }
    encryptedText += ind==-1 ? alphabetRotated[indTest].toUpperCase() : alphabetRotated[ind];
  }
  return encryptedText;
}
caesarCipher(s, k); */


//Max Min
/* const arr=[1,4,7,2];
const k=2;
function maxMin(k, arr) {
  arr.sort((a,b)=>a-b);
  let min=Math.max(...arr); //Initializing Variables 
  for(let i=0;i<arr.length;i++){
    let test=arr[i+k-1]-arr[i];
    if(test<min){
      min=test;
    }
  }
  return min;
}
maxMin(k, arr); */


//Dynamic Array
/* const n=2;
const queries=[[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]];
function dynamicArray(n, queries) {
  let arr=[];
  for(let i=0; i<n;i++){
    arr.push([]);
  }
  let answersArray=[];
  let lastAnswer=0;
  for(let i=0;i<queries.length;i++){
    let idx;
    if(queries[i][0]===1){
      idx=(queries[i][1]^lastAnswer)%n;
      arr[idx].push(queries[i][2]);
    }else{
      idx=(queries[i][1]^lastAnswer)%n;
      lastAnswer=arr[idx][queries[i][2]%arr[idx].length];
      answersArray.push(lastAnswer);
    }
  }
  return answersArray;
}
dynamicArray(n, queries); */


//Grid Challenge
/* const grid=['ebacd','fghij','olmkn','trpqs','xywuv'];
function gridChallenge(grid) {
  let n=grid[0].length;
  let orderedGrid=[];
  for(let i=0; i<grid.length; i++){
    orderedGrid[i]=grid[i].split('').sort().join('');
  }
  for(let i=0; i<n; i++){
    for(let j=0; j<orderedGrid.length-1; j++){
      if(orderedGrid[j][i].charCodeAt()<=orderedGrid[j+1][i].charCodeAt()){
        continue;
      }else{
        return 'NO';
      }
    }
  }
  return 'YES';
}
gridChallenge(grid); */