
//no1
let arr1=[3,7,34,90,12];
let lastElement=arr1[arr1.length-1];
console.log(lastElement);


let arr2=[true,"green","where",12,56];
let lastElement1=arr2[arr2.length-1];
console.log(lastElement1);

//no2
let stringmyPets=["Cow","Bird","Snake","Dog"];
console.log(stringmyPets.join());

//no3
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);


//no4
let arr=["apple","mango","apple","orange","mango","mango"];
function removeDuplicates (arr) {
    return arr.filter((items, index) => arr.indexOf(items) ===index);
}
console.log(removeDuplicates(arr));

let duplicates = arr.filter((items, index) => arr.indexOf(items) !== index);
console.log({duplicates});


//no6
let word="sevink";
let sortword=(string)=>{
    return string.split("").sort().join("")
}
console.log(sortword("sevink"))









