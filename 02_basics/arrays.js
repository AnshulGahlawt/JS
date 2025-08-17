const arr = [1,2,3,4,5]
// console.log(typeof arr);

//slice and splice.  splice manipulates original array but slice does not 

const marvel_heros = ["Ironman","thor","hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// array inside an array when we pushed dc_heros inside marvel_heros. Push does not return a new array

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// concat return a new array

// const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);
// kaanch ka glass gira diya spread ho jaata hai;


const another_arr= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arry = another_arr.flat(Infinity);
// console.log(real_another_arry);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Hitesh"})); // interesting case... output is empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
