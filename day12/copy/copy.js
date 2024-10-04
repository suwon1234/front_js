
const animals={
  cat : "야옹이",
  dog : "멍멍이",
  cow : "소",
  tiger : "호랑이"
}

const animals2 = animals;
animals2.camel="낙둥이";

const animals3 = {...animals,bird : "둘기"}

// Object.assign(target, source);

const animals4 = Object.assign({},animals);
animals4.otter = "수달이";

console.log(animals,animals4)
