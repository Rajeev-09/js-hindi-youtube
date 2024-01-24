const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);


console.log(Array.isArray("Rajeev"))
console.log(Array.from("Rajeev"))
console.log(Array.from({name: "Rajeev"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));









